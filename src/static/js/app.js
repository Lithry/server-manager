/**
 * Cubi ServerManager - Frontend Application Logic
 */

class ServerManagerApp {
  constructor() {
    this.currentTab = 'overview';
    this.pipelineOffset = 0;
    this.pipelineLimit = 25;
    this.activeView = 'MEDIA_CATALOG';
    this.activeIncidentTab = 'active'; // 'active', 'resolved', 'catalog'
    this.selectedTool = null;
    this.settingsData = null;
    this.manualSlugEdited = false;
    this.editingMappingCol = null;
    this.sampleFieldsCache = [];
    this.existingColsMap = new Map();

    this.init();
  }

  init() {
    this.bindEvents();
    this.loadGitOps();
    this.switchTab('overview');
    
    // Auto-refresh overview every 15 seconds
    setInterval(() => {
      if (this.currentTab === 'overview') {
        this.loadOverview();
      }
    }, 15000);
  }

  bindEvents() {
    // Tab switching
    document.querySelectorAll('.nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        this.switchTab(tab);
      });
    });

    // Mobile sidebar toggle
    const toggleBtn = document.getElementById('btn-toggle-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    const sidebar = document.querySelector('.sidebar');

    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', () => {
        const isExpanded = sidebar.classList.toggle('expanded');
        if (backdrop) {
          if (isExpanded) backdrop.classList.remove('hidden');
          else backdrop.classList.add('hidden');
        }
      });
    }

    if (backdrop && sidebar) {
      backdrop.addEventListener('click', () => {
        sidebar.classList.remove('expanded');
        backdrop.classList.add('hidden');
      });
    }

    // Refresh button
    const refreshBtn = document.getElementById('btn-refresh');
    if (refreshBtn) {
      refreshBtn.addEventListener('click', () => this.refreshCurrentTab());
    }

    // Pipeline filters & pagination
    const stageFilter = document.getElementById('pipeline-filter-stage');
    if (stageFilter) {
      stageFilter.addEventListener('change', () => {
        this.pipelineOffset = 0;
        this.loadPipeline();
      });
    }

    const statusFilter = document.getElementById('pipeline-filter-status');
    if (statusFilter) {
      statusFilter.addEventListener('change', () => {
        this.pipelineOffset = 0;
        this.loadPipeline();
      });
    }

    document.getElementById('btn-pipeline-prev')?.addEventListener('click', () => {
      if (this.pipelineOffset >= this.pipelineLimit) {
        this.pipelineOffset -= this.pipelineLimit;
        this.loadPipeline();
      }
    });

    document.getElementById('btn-pipeline-next')?.addEventListener('click', () => {
      this.pipelineOffset += this.pipelineLimit;
      this.loadPipeline();
    });

    // Modals
    document.getElementById('btn-add-column')?.addEventListener('click', () => {
      document.getElementById('modal-add-column')?.classList.remove('hidden');
    });

    document.getElementById('btn-manage-columns')?.addEventListener('click', () => {
      this.openManageColumnsModal();
    });

    document.getElementById('btn-prune-columns')?.addEventListener('click', () => {
      this.pruneDeprecatedColumns();
    });

    document.getElementById('btn-purge-pipeline')?.addEventListener('click', () => {
      this.purgePipelineDb();
    });

    this.setupColumnSanitizer(document.getElementById('input-col-name'), document.getElementById('btn-submit-add-column'));
    this.setupColumnSanitizer(document.getElementById('input-map-col'), document.getElementById('btn-submit-add-mapping'));

    document.getElementById('btn-submit-add-column')?.addEventListener('click', () => {
      this.submitAddColumn();
    });

    document.getElementById('btn-sample-api')?.addEventListener('click', () => {
      document.getElementById('modal-sample-api')?.classList.remove('hidden');
    });

    document.getElementById('btn-fetch-sample')?.addEventListener('click', () => {
      this.fetchApiSample();
    });

    document.getElementById('btn-create-view')?.addEventListener('click', () => {
      document.getElementById('modal-create-view')?.classList.remove('hidden');
    });

    document.getElementById('btn-submit-create-view')?.addEventListener('click', () => {
      this.submitCreateView();
    });

    // Incidents segmented control & actions
    document.getElementById('seg-incidents-active')?.addEventListener('click', () => {
      this.switchIncidentSubTab('active');
    });
    document.getElementById('seg-incidents-resolved')?.addEventListener('click', () => {
      this.switchIncidentSubTab('resolved');
    });
    document.getElementById('seg-error-catalog')?.addEventListener('click', () => {
      this.switchIncidentSubTab('catalog');
    });

    document.getElementById('btn-add-error-template')?.addEventListener('click', () => {
      this.openErrorTemplateModal();
    });

    document.getElementById('btn-submit-error-template')?.addEventListener('click', () => {
      this.submitErrorTemplate();
    });

    // Custom tools
    document.getElementById('btn-run-active-tool')?.addEventListener('click', () => {
      this.runSelectedTool();
    });

    // Settings Sub-navigation
    document.querySelectorAll('.subnav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const subtab = btn.getAttribute('data-subtab');
        this.switchSettingsSubTab(subtab);
      });
    });

    // Service modal bindings
    document.getElementById('btn-add-service')?.addEventListener('click', () => {
      this.openAddServiceModal();
    });
    const serviceNameEl = document.getElementById('input-service-name');
    const serviceSlugEl = document.getElementById('input-service-id');
    serviceSlugEl?.addEventListener('input', () => {
      this.manualSlugEdited = true;
    });
    serviceNameEl?.addEventListener('input', () => {
      if (!this.manualSlugEdited && !serviceSlugEl?.disabled) {
        serviceSlugEl.value = this.slugify(serviceNameEl.value);
      }
    });
    // Filter discovered attributes in Sample modal
    document.getElementById('sample-filter-input')?.addEventListener('input', (e) => {
      const q = (e.target.value || '').toLowerCase().trim();
      if (!this.sampleFieldsCache) return;
      const filtered = q
        ? this.sampleFieldsCache.filter(f => f.path.toLowerCase().includes(q) || (f.sample && f.sample.toLowerCase().includes(q)))
        : this.sampleFieldsCache;
      this.renderSampleFieldsList(filtered);
    });

    // Auto-detect data type when selecting an existing column
    document.getElementById('input-map-col')?.addEventListener('input', (e) => {
      const colVal = (e.target.value || '').trim().toUpperCase();
      if (this.existingColsMap && this.existingColsMap.has(colVal)) {
        const typeEl = document.getElementById('input-map-type');
        if (typeEl) typeEl.value = this.existingColsMap.get(colVal);
      }
    });
    document.getElementById('chk-service-inherit-poll')?.addEventListener('change', (e) => {
      const customBlock = document.getElementById('service-custom-poll-block');
      if (customBlock) {
        customBlock.classList.toggle('hidden', e.target.checked);
      }
    });
    document.getElementById('btn-discover-service-events')?.addEventListener('click', () => {
      this.discoverServiceEvents();
    });
    document.getElementById('btn-submit-add-service')?.addEventListener('click', () => {
      this.saveServiceFromModal();
    });

    // Stage modal bindings
    document.getElementById('btn-add-stage')?.addEventListener('click', () => {
      this.openAddStageModal();
    });
    document.getElementById('chk-stage-root')?.addEventListener('change', (e) => {
      const predBlock = document.getElementById('stage-predicate-block');
      if (predBlock) {
        if (e.target.checked) predBlock.classList.add('hidden');
        else predBlock.classList.remove('hidden');
      }
    });
    document.getElementById('btn-validate-condition')?.addEventListener('click', () => {
      this.validateConditionSyntax();
    });
    document.getElementById('btn-validate-complete-condition')?.addEventListener('click', () => {
      this.validateCompleteConditionSyntax();
    });
    document.getElementById('btn-submit-add-stage')?.addEventListener('click', () => {
      this.saveStageFromModal();
    });

    // Mapping modal bindings
    document.getElementById('select-mapping-service')?.addEventListener('change', () => {
      this.renderSettingsMappings();
    });
    document.getElementById('btn-add-mapping')?.addEventListener('click', () => {
      this.openAddMappingModal();
    });
    document.getElementById('btn-open-sample-modal')?.addEventListener('click', () => {
      this.openSampleModal();
    });
    document.getElementById('btn-fetch-sample')?.addEventListener('click', () => {
      this.fetchApiSample();
    });
    document.getElementById('btn-test-transformer')?.addEventListener('click', () => {
      this.testTransformerExpr();
    });
    document.getElementById('btn-submit-add-mapping')?.addEventListener('click', () => {
      this.saveMappingFromModal();
    });

    // Notification Trigger modal bindings
    document.getElementById('btn-add-trigger')?.addEventListener('click', () => {
      document.getElementById('modal-add-trigger')?.classList.remove('hidden');
    });
    document.getElementById('btn-submit-add-trigger')?.addEventListener('click', () => {
      this.saveTriggerFromModal();
    });

    // Scheduler restart
    document.getElementById('btn-restart-scheduler')?.addEventListener('click', () => {
      this.restartScheduler();
    });

    // Settings Save & Alert
    document.getElementById('btn-save-settings')?.addEventListener('click', () => {
      this.saveSettings();
    });

    document.getElementById('btn-test-alert')?.addEventListener('click', () => {
      this.testNotification();
    });
  }

  closeModals() {
    document.querySelectorAll('.modal-backdrop').forEach(el => el.classList.add('hidden'));
  }

  switchTab(tabId) {
    this.currentTab = tabId;
    
    // Update navigation active state
    document.querySelectorAll('.nav-item').forEach(btn => {
      if (btn.getAttribute('data-tab') === tabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update panels
    document.querySelectorAll('.tab-panel').forEach(panel => {
      if (panel.id === `tab-${tabId}`) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });

    // Update page title
    const titles = {
      overview: 'System Overview',
      pipeline: 'Universal SERVICES_PIPELINE',
      views: 'View Builder & Projections',
      incidents: 'Incidents & Error Index',
      tools: 'Sandboxed Custom Tools',
      gitops: 'GitOps Telemetry',
      settings: 'System Configuration',
    };
    const titleEl = document.getElementById('page-title');
    if (titleEl) titleEl.innerText = titles[tabId] || 'ServerManager';

    // Auto-collapse sidebar on mobile after choosing a tab
    const sidebar = document.querySelector('.sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (sidebar && sidebar.classList.contains('expanded')) {
      sidebar.classList.remove('expanded');
      if (backdrop) backdrop.classList.add('hidden');
    }

    this.refreshCurrentTab();
  }

  refreshCurrentTab() {
    switch (this.currentTab) {
      case 'overview':
        this.loadOverview();
        break;
      case 'pipeline':
        this.loadPipeline();
        break;
      case 'views':
        this.loadViews();
        break;
      case 'incidents':
        this.loadIncidents();
        break;
      case 'tools':
        this.loadTools();
        break;
      case 'gitops':
        this.loadGitOps();
        break;
      case 'settings':
        this.loadSettings();
        break;
    }
  }

  /* ------------------------------------------------------------------------
     Overview Logic
     ------------------------------------------------------------------------ */
  async loadOverview() {
    try {
      const resp = await fetch('/api/v1/meta/query?target=overview');
      const data = await resp.json();

      document.getElementById('ov-pipeline-count').innerText = data.pipeline_total_items || '0';
      document.getElementById('ov-incident-count').innerText = data.active_incidents || '0';
      document.getElementById('ov-incident-caption').innerText = `${data.critical_incidents || 0} critical anomalies`;
      const servCountEl = document.getElementById('ov-services-count') || document.getElementById('ov-catalog-count');
      if (servCountEl) servCountEl.innerText = data.registered_services !== undefined ? data.registered_services : (data.pipeline_available_media || '0');

      const badge = document.getElementById('nav-incidents-badge');
      if (badge) {
        if (data.active_incidents > 0) {
          badge.innerText = data.active_incidents;
          badge.classList.remove('hidden');
        } else {
          badge.classList.add('hidden');
        }
      }

      // Load active incidents preview
      const incResp = await fetch('/api/v1/incidents?resolved=0&limit=5');
      const incData = await incResp.json();
      const listEl = document.getElementById('ov-incidents-list');

      if (!incData.items || incData.items.length === 0) {
        listEl.innerHTML = '<div class="empty-state">✓ No active incidents. All telemetry nominal.</div>';
      } else {
        listEl.innerHTML = incData.items.map(inc => `
          <div class="stage-item">
            <span class="badge ${inc.SEVERITY === 'CRITICAL' ? 'badge-alert' : 'badge-warning'}">${inc.SEVERITY}</span>
            <span class="stage-name">${this.escapeHtml(inc.INCIDENT_CODE)}: ${this.escapeHtml(inc.DETAILS)}</span>
            <span class="text-muted font-mono" style="font-size: 0.75rem;">${inc.COMPONENT}</span>
          </div>
        `).join('');
      }

      // Dynamically load stages preview in overview
      const stagesContainer = document.getElementById('ov-pipeline-stages');
      if (stagesContainer) {
        const stages = data.stages || [];
        if (stages.length === 0) {
          stagesContainer.innerHTML = '<div class="empty-state" style="padding: 16px;">No pipeline stages configured. Go to <strong>Settings &gt; Stages &amp; Predicates</strong> to define stages.</div>';
        } else {
          stagesContainer.innerHTML = stages.map(st => {
            const servList = (st.service_ids && st.service_ids.length > 0) ? st.service_ids.join(', ') : 'No services';
            return `
              <div class="stage-item">
                <span class="stage-badge font-mono">${this.escapeHtml(st.id)}</span>
                <span class="stage-name">${this.escapeHtml(st.name)} <span class="text-muted" style="font-size: 0.75rem;">(${this.escapeHtml(servList)})</span></span>
                <span class="stage-status ${st.enabled ? 'status-active' : 'text-muted'}">${st.enabled ? 'Active' : 'Disabled'}</span>
              </div>
            `;
          }).join('');
        }
      }
    } catch (e) {
      console.error('Error loading overview:', e);
    }
  }

  updatePipelineStageOptions(stages) {
    const stageSelect = document.getElementById('pipeline-filter-stage');
    if (!stageSelect) return;
    const currentVal = stageSelect.value;
    const optionsHtml = '<option value="">All Stages</option>' + (stages || []).map(s => 
      `<option value="${this.escapeHtml(s.id)}">${this.escapeHtml(s.name)} (${this.escapeHtml(s.id)})</option>`
    ).join('');
    if (stageSelect.innerHTML !== optionsHtml) {
      stageSelect.innerHTML = optionsHtml;
      stageSelect.value = currentVal;
    }
  }

  /* ------------------------------------------------------------------------
     Pipeline Logic
     ------------------------------------------------------------------------ */
  async loadPipeline() {
    try {
      const stageSelect = document.getElementById('pipeline-filter-stage');
      if (stageSelect) {
        if (this.settingsData && this.settingsData.stages) {
          this.updatePipelineStageOptions(this.settingsData.stages);
        } else {
          fetch('/api/v1/settings').then(r => r.json()).then(s => {
            if (s && s.stages) this.updatePipelineStageOptions(s.stages);
          }).catch(() => {});
        }
      }
      const stage = document.getElementById('pipeline-filter-stage')?.value;
      const status = document.getElementById('pipeline-filter-status')?.value;

      let url = `/api/v1/pipeline?limit=${this.pipelineLimit}&offset=${this.pipelineOffset}`;
      if (stage) url += `&stage=${stage}`;
      if (status) url += `&status=${encodeURIComponent(status)}`;

      const resp = await fetch(url);
      const data = await resp.json();

      const headersRow = document.getElementById('pipeline-table-headers');
      const bodyEl = document.getElementById('pipeline-table-body');

      if (!headersRow || !bodyEl) return;

      const columns = data.columns || ['ID', 'PIPELINE_KEY', 'STAGE', 'STATUS', 'LAST_UPDATED'];
      headersRow.innerHTML = columns.map(col => `<th>${col}</th>`).join('');

      if (!data.items || data.items.length === 0) {
        bodyEl.innerHTML = `<tr><td colspan="${columns.length}" class="text-center">No pipeline records found.</td></tr>`;
      } else {
        bodyEl.innerHTML = data.items.map(row => {
          return `<tr>` + columns.map(col => {
            const val = row[col] !== null && row[col] !== undefined ? row[col] : '-';
            if (col === 'STATUS') {
              return `<td><span class="badge badge-info">${this.escapeHtml(String(val))}</span></td>`;
            }
            return `<td>${this.escapeHtml(String(val))}</td>`;
          }).join('') + `</tr>`;
        }).join('');
      }

      // Pagination info
      const total = data.total || 0;
      const start = total === 0 ? 0 : this.pipelineOffset + 1;
      const end = Math.min(this.pipelineOffset + this.pipelineLimit, total);
      document.getElementById('pipeline-pagination-info').innerText = `Showing ${start}-${end} of ${total} records`;

      const prevBtn = document.getElementById('btn-pipeline-prev');
      const nextBtn = document.getElementById('btn-pipeline-next');
      if (prevBtn) prevBtn.disabled = this.pipelineOffset <= 0;
      if (nextBtn) nextBtn.disabled = end >= total;

    } catch (e) {
      console.error('Error loading pipeline:', e);
    }
  }

  setupColumnSanitizer(inputEl, submitBtn) {
    if (!inputEl) return;
    const reserved = ['ID', 'PIPELINE_KEY', 'STAGE', 'STATUS', 'LAST_UPDATED'];
    inputEl.addEventListener('input', () => {
      let val = inputEl.value;
      val = val.toUpperCase().replace(/\s+/g, '_').replace(/[^A-Z0-9_]/g, '');
      inputEl.value = val;

      if (reserved.includes(val)) {
        inputEl.style.borderColor = '#ef4444';
        if (submitBtn) submitBtn.disabled = true;
      } else {
        inputEl.style.borderColor = '';
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  async submitAddColumn() {
    const colNameInput = document.getElementById('input-col-name');
    const colTypeInput = document.getElementById('input-col-type');
    const colName = colNameInput?.value?.trim()?.toUpperCase();
    const colType = colTypeInput?.value || 'TEXT';

    if (!colName) {
      alert('Please enter a column name.');
      return;
    }

    const reserved = ['ID', 'PIPELINE_KEY', 'STAGE', 'STATUS', 'LAST_UPDATED'];
    if (reserved.includes(colName)) {
      alert(`Column name '${colName}' is a reserved system column and cannot be added.`);
      return;
    }

    try {
      const resp = await fetch('/api/v1/pipeline/columns', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ column_name: colName, column_type: colType }),
      });
      const data = await resp.json();
      if (!resp.ok) {
        alert(`Error: ${data.detail || 'Failed to add column'}`);
        return;
      }
      this.closeModals();
      colNameInput.value = '';
      this.loadPipeline();
    } catch (e) {
      alert(`Network error: ${e.message}`);
    }
  }

  async openManageColumnsModal() {
    const modal = document.getElementById('modal-manage-columns');
    if (!modal) return;
    modal.classList.remove('hidden');
    await this.renderManageColumnsList();
  }

  async renderManageColumnsList() {
    const tbody = document.getElementById('manage-columns-body');
    if (!tbody) return;
    tbody.innerHTML = '<tr><td colspan="5" class="text-center text-muted">Loading columns...</td></tr>';

    try {
      const resp = await fetch('/api/v1/pipeline/columns');
      const columns = await resp.json();
      this.currentManageColumns = columns;

      const userCols = columns.filter(c => !c.is_system);

      tbody.innerHTML = columns.map(col => {
        if (col.is_system) {
          return `
            <tr>
              <td class="text-center font-mono text-muted">-</td>
              <td><strong>${this.escapeHtml(col.name)}</strong></td>
              <td><span class="font-mono text-sm">${this.escapeHtml(col.type)}</span></td>
              <td><span class="badge badge-system">Protected System Column</span></td>
              <td style="text-align: right;"><span class="text-muted text-xs">Locked</span></td>
            </tr>
          `;
        }

        const userIdx = userCols.findIndex(u => u.name === col.name);
        const isFirst = userIdx === 0;
        const isLast = userIdx === userCols.length - 1;

        let statusBadge = '';
        if (col.is_deprecated) {
          statusBadge = `<span class="badge badge-deprecated">Deprecated (Unused)</span>`;
        } else {
          statusBadge = `<span class="badge badge-success">Active: ${this.escapeHtml((col.used_by || []).join(', '))}</span>`;
        }

        return `
          <tr>
            <td>
              <div style="display: flex; gap: 4px;">
                <button class="col-reorder-btn" onclick="app.moveColumnOrder('${col.name}', -1)" ${isFirst ? 'disabled' : ''} title="Move Up">&uarr;</button>
                <button class="col-reorder-btn" onclick="app.moveColumnOrder('${col.name}', 1)" ${isLast ? 'disabled' : ''} title="Move Down">&darr;</button>
              </div>
            </td>
            <td><strong class="font-mono">${this.escapeHtml(col.name)}</strong></td>
            <td><span class="font-mono text-sm">${this.escapeHtml(col.type)}</span></td>
            <td>${statusBadge}</td>
            <td style="text-align: right;">
              <button class="btn btn-secondary btn-sm text-alert" onclick="app.deleteColumn('${col.name}')">Delete</button>
            </td>
          </tr>
        `;
      }).join('');
    } catch (e) {
      tbody.innerHTML = `<tr><td colspan="5" class="text-center text-alert">Error loading columns: ${e.message}</td></tr>`;
    }
  }

  async moveColumnOrder(colName, direction) {
    if (!this.currentManageColumns) return;
    const userCols = this.currentManageColumns.filter(c => !c.is_system).map(c => c.name);
    const idx = userCols.indexOf(colName);
    if (idx === -1) return;

    const targetIdx = idx + direction;
    if (targetIdx < 0 || targetIdx >= userCols.length) return;

    const temp = userCols[idx];
    userCols[idx] = userCols[targetIdx];
    userCols[targetIdx] = temp;

    try {
      const resp = await fetch('/api/v1/pipeline/columns/order', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ column_order: userCols })
      });
      if (resp.ok) {
        await this.renderManageColumnsList();
        this.loadPipeline();
      }
    } catch (e) {
      console.error('Error reordering columns:', e);
    }
  }

  async deleteColumn(colName) {
    if (!confirm(`Are you sure you want to permanently delete column '${colName}'?\nAll data in this column will be dropped from the database.`)) {
      return;
    }

    try {
      const resp = await fetch(`/api/v1/pipeline/columns/${encodeURIComponent(colName)}`, {
        method: 'DELETE'
      });
      const data = await resp.json();
      if (!resp.ok) {
        alert(`Error: ${data.detail || data.message || 'Failed to delete column'}`);
        return;
      }
      await this.renderManageColumnsList();
      this.loadPipeline();
    } catch (e) {
      alert(`Network error: ${e.message}`);
    }
  }

  async pruneDeprecatedColumns() {
    if (!confirm('Are you sure you want to prune all deprecated columns?\nAll columns not currently associated with any service mapping will be permanently dropped.')) {
      return;
    }

    try {
      const resp = await fetch('/api/v1/pipeline/columns/prune', {
        method: 'POST'
      });
      const data = await resp.json();
      if (!resp.ok) {
        alert(`Error: ${data.detail || 'Failed to prune columns'}`);
        return;
      }
      alert(`✓ Pruned ${data.count} deprecated column(s): ${(data.pruned_columns || []).join(', ') || 'None found'}`);
      await this.renderManageColumnsList();
      this.loadPipeline();
    } catch (e) {
      alert(`Network error: ${e.message}`);
    }
  }

  async fetchApiSample() {
    const appId = document.getElementById('sample-app-select')?.value || 'sonarr';
    const viewer = document.getElementById('api-sample-result');
    if (viewer) viewer.innerHTML = '<span class="text-muted">Querying application sample schema...</span>';

    try {
      const resp = await fetch('/api/v1/pipeline/sample-api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ app_id: appId, endpoint: '/api/v3/history' }),
      });
      const data = await resp.json();
      if (!resp.ok || !data.success) {
        viewer.innerHTML = `<span class="text-alert">${this.escapeHtml(data.detail || data.error || 'Connection failed')}</span>`;
        return;
      }

      if (data.fields && data.fields.length > 0) {
        viewer.innerHTML = data.fields.map(f => `
          <div style="padding: 4px 0; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between;">
            <span style="color: var(--accent-cyan); font-weight: 500;">${this.escapeHtml(f.path)}</span>
            <span class="text-muted font-mono" style="font-size: 0.75rem;">Sample: ${this.escapeHtml(f.sample || '')}</span>
          </div>
        `).join('');
      } else {
        viewer.innerHTML = '<span class="text-muted">No fields extracted from response.</span>';
      }
    } catch (e) {
      if (viewer) viewer.innerHTML = `<span class="text-alert">${e.message}</span>`;
    }
  }

  /* ------------------------------------------------------------------------
     View Builder Logic
     ------------------------------------------------------------------------ */
  async loadViews() {
    try {
      const resp = await fetch('/api/v1/views');
      const views = await resp.json();

      const tabsContainer = document.getElementById('views-tabs-container');
      if (views.length === 0) {
        if (tabsContainer) tabsContainer.innerHTML = '<span class="text-muted" style="font-size: 0.85rem;">No views configured yet.</span>';
        const titleEl = document.getElementById('active-view-title');
        if (titleEl) titleEl.innerText = 'No Views Configured';
        const subEl = document.getElementById('active-view-subtitle');
        if (subEl) subEl.innerText = 'Click "+ Create Custom View" to define an aggregated projection over SERVICES_PIPELINE.';
        const headersRow = document.getElementById('view-data-headers');
        if (headersRow) headersRow.innerHTML = '';
        const bodyEl = document.getElementById('view-data-body');
        if (bodyEl) bodyEl.innerHTML = '<tr><td class="text-center" style="padding: 24px;">No active views in database. Click "+ Create Custom View" to define a projection.</td></tr>';
        return;
      }

      if (!views.some(v => v.VIEW_NAME === this.activeView)) {
        this.activeView = views[0].VIEW_NAME;
      }

      if (tabsContainer) {
        tabsContainer.innerHTML = views.map(v => `
          <button class="tab-sub-btn ${v.VIEW_NAME === this.activeView ? 'active' : ''}" 
                  onclick="app.selectView('${v.VIEW_NAME}')">
            ${v.VIEW_NAME} ${v.IS_PRESET ? '(Preset)' : ''}
          </button>
        `).join('');
      }

      this.loadActiveViewData();
    } catch (e) {
      console.error('Error loading views:', e);
    }
  }

  selectView(viewName) {
    this.activeView = viewName;
    document.querySelectorAll('.tab-sub-btn').forEach(btn => {
      if (btn.innerText.includes(viewName)) btn.classList.add('active');
      else btn.classList.remove('active');
    });
    this.loadActiveViewData();
  }

  async loadActiveViewData() {
    try {
      const resp = await fetch(`/api/v1/views/${encodeURIComponent(this.activeView)}/data?limit=50`);
      const data = await resp.json();

      document.getElementById('active-view-title').innerText = `${this.activeView}`;
      document.getElementById('active-view-subtitle').innerText = `Dynamic projection (${data.total || 0} rows)`;

      const headersRow = document.getElementById('view-data-headers');
      const bodyEl = document.getElementById('view-data-body');

      const cols = data.columns || [];
      headersRow.innerHTML = cols.map(c => `<th>${c}</th>`).join('');

      if (!data.items || data.items.length === 0) {
        bodyEl.innerHTML = `<tr><td colspan="${cols.length}" class="text-center">No rows returned by view.</td></tr>`;
      } else {
        bodyEl.innerHTML = data.items.map(row => {
          return `<tr>` + cols.map(c => `<td>${this.escapeHtml(String(row[c] !== null && row[c] !== undefined ? row[c] : '-'))}</td>`).join('') + `</tr>`;
        }).join('');
      }

      document.getElementById('view-pagination-info').innerText = `Showing ${data.items ? data.items.length : 0} of ${data.total || 0} rows`;
    } catch (e) {
      console.error('Error loading active view data:', e);
    }
  }

  async submitCreateView() {
    const nameInput = document.getElementById('input-view-name');
    const sqlInput = document.getElementById('input-view-sql');
    const viewName = nameInput?.value?.trim()?.toUpperCase();
    const sql = sqlInput?.value?.trim();

    if (!viewName || !sql) {
      alert('Please fill in both view name and SQL query.');
      return;
    }

    try {
      const resp = await fetch('/api/v1/views', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ view_name: viewName, sql_select: sql }),
      });
      const data = await resp.json();
      if (!resp.ok) {
        alert(`Error creating view: ${data.detail || 'SQL error'}`);
        return;
      }
      this.closeModals();
      nameInput.value = '';
      sqlInput.value = '';
      this.activeView = viewName;
      this.loadViews();
    } catch (e) {
      alert(`Network error: ${e.message}`);
    }
  }

  /* ------------------------------------------------------------------------
     Incidents & Error Index Logic
     ------------------------------------------------------------------------ */
  switchIncidentSubTab(subTab) {
    this.activeIncidentTab = subTab;
    document.querySelectorAll('.seg-btn').forEach(btn => btn.classList.remove('active'));

    const activeBtn = document.getElementById(`seg-incidents-${subTab}`) || document.getElementById('seg-error-catalog');
    if (activeBtn) activeBtn.classList.add('active');

    const incContainer = document.getElementById('incidents-container');
    const catalogContainer = document.getElementById('error-catalog-container');
    const addErrorBtn = document.getElementById('btn-add-error-template');
    const reportIncidentBtn = document.getElementById('btn-report-incident');

    if (subTab === 'catalog') {
      incContainer?.classList.add('hidden');
      catalogContainer?.classList.remove('hidden');
      addErrorBtn?.classList.remove('hidden');
      reportIncidentBtn?.classList.add('hidden');
      this.loadErrorCatalog();
    } else {
      catalogContainer?.classList.add('hidden');
      incContainer?.classList.remove('hidden');
      addErrorBtn?.classList.add('hidden');
      reportIncidentBtn?.classList.remove('hidden');
      this.loadIncidents();
    }
  }

  async loadIncidents() {
    try {
      const isResolved = this.activeIncidentTab === 'resolved' ? 1 : 0;
      const resp = await fetch(`/api/v1/incidents?resolved=${isResolved}&limit=50`);
      const data = await resp.json();

      const bodyEl = document.getElementById('incidents-table-body');
      if (!bodyEl) return;

      if (!data.items || data.items.length === 0) {
        bodyEl.innerHTML = `<tr><td colspan="7" class="text-center">No ${this.activeIncidentTab} incidents found.</td></tr>`;
        return;
      }

      bodyEl.innerHTML = data.items.map(inc => `
        <tr>
          <td><span class="badge ${inc.SEVERITY === 'CRITICAL' ? 'badge-alert' : inc.SEVERITY === 'WARNING' ? 'badge-warning' : 'badge-info'}">${inc.SEVERITY}</span></td>
          <td class="font-mono">${this.escapeHtml(inc.INCIDENT_CODE)}</td>
          <td>${this.escapeHtml(inc.COMPONENT)}</td>
          <td>${this.escapeHtml(inc.DETAILS)}</td>
          <td class="text-muted" style="font-size: 0.8rem;">${this.escapeHtml(inc.REMEDY || inc.ERROR_DESCRIPTION || '-')}</td>
          <td class="text-muted font-mono" style="font-size: 0.75rem;">${inc.CREATED_AT}</td>
          <td>
            ${inc.RESOLVED === 0 ? `
              <button class="btn btn-sm btn-secondary" onclick="app.resolveIncident(${inc.ID})">Resolve</button>
            ` : `<span class="badge badge-success">Resolved</span>`}
          </td>
        </tr>
      `).join('');
    } catch (e) {
      console.error('Error loading incidents:', e);
    }
  }

  async resolveIncident(incidentId) {
    const note = prompt('Optional resolution note:') || '';
    try {
      const resp = await fetch(`/api/v1/incidents/${incidentId}/resolve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resolution_note: note }),
      });
      if (resp.ok) {
        this.loadIncidents();
        this.loadOverview();
      }
    } catch (e) {
      alert(`Error resolving incident: ${e.message}`);
    }
  }

  async loadErrorCatalog() {
    try {
      const resp = await fetch('/api/v1/incidents/catalog/errors');
      const items = await resp.json();
      this.currentErrorCatalog = items;

      const bodyEl = document.getElementById('catalog-table-body');
      if (!bodyEl) return;

      if (!items || items.length === 0) {
        bodyEl.innerHTML = '<tr><td colspan="7" class="text-center text-muted">No error templates registered in catalog.</td></tr>';
        return;
      }

      bodyEl.innerHTML = items.map(err => `
        <tr>
          <td class="font-mono text-accent"><strong>${this.escapeHtml(err.ERROR_CODE)}</strong></td>
          <td><span class="badge badge-info">${this.escapeHtml(err.CATEGORY)}</span></td>
          <td><span class="badge ${err.SEVERITY === 'CRITICAL' ? 'badge-alert' : err.SEVERITY === 'WARNING' ? 'badge-warning' : 'badge-secondary'}">${this.escapeHtml(err.SEVERITY)}</span></td>
          <td>${this.escapeHtml(err.DESCRIPTION)}</td>
          <td class="font-mono text-accent text-sm">${err.TRIGGER_CONDITION ? this.escapeHtml(err.TRIGGER_CONDITION) : '<span class="text-muted">None</span>'}</td>
          <td class="font-mono text-muted" style="font-size: 0.8rem;">${this.escapeHtml(err.REMEDY || '-')}</td>
          <td style="text-align: right;">
            <button class="btn btn-secondary btn-sm" onclick="app.openErrorTemplateModal('${this.escapeHtml(err.ERROR_CODE)}')">Edit</button>
            <button class="btn btn-secondary btn-sm text-alert ml-1" onclick="app.deleteErrorTemplate('${this.escapeHtml(err.ERROR_CODE)}')">Delete</button>
          </td>
        </tr>
      `).join('');
    } catch (e) {
      console.error('Error loading error catalog:', e);
    }
  }

  openErrorTemplateModal(errorCode = null) {
    const modal = document.getElementById('modal-error-template');
    if (!modal) return;
    const titleEl = document.getElementById('modal-error-title');
    const codeEl = document.getElementById('input-error-code');
    const catEl = document.getElementById('input-error-category');
    const sevEl = document.getElementById('input-error-severity');
    const descEl = document.getElementById('input-error-description');
    const trigEl = document.getElementById('input-error-trigger');
    const remEl = document.getElementById('input-error-remedy');

    if (errorCode && this.currentErrorCatalog) {
      const err = this.currentErrorCatalog.find(e => e.ERROR_CODE === errorCode);
      if (err) {
        if (titleEl) titleEl.innerText = `Edit Error Template: ${err.ERROR_CODE}`;
        if (codeEl) { codeEl.value = err.ERROR_CODE; codeEl.disabled = true; }
        if (catEl) catEl.value = err.CATEGORY || '';
        if (sevEl) sevEl.value = err.SEVERITY || 'WARNING';
        if (descEl) descEl.value = err.DESCRIPTION || '';
        if (trigEl) trigEl.value = err.TRIGGER_CONDITION || '';
        if (remEl) remEl.value = err.REMEDY || '';
      }
    } else {
      if (titleEl) titleEl.innerText = 'Add Error Template';
      if (codeEl) { codeEl.value = ''; codeEl.disabled = false; }
      if (catEl) catEl.value = 'GENERAL';
      if (sevEl) sevEl.value = 'WARNING';
      if (descEl) descEl.value = '';
      if (trigEl) trigEl.value = '';
      if (remEl) remEl.value = '';
    }

    modal.classList.remove('hidden');
  }

  async submitErrorTemplate() {
    const codeEl = document.getElementById('input-error-code');
    const catEl = document.getElementById('input-error-category');
    const sevEl = document.getElementById('input-error-severity');
    const descEl = document.getElementById('input-error-description');
    const trigEl = document.getElementById('input-error-trigger');
    const remEl = document.getElementById('input-error-remedy');

    const code = codeEl?.value?.trim()?.toUpperCase();
    const category = catEl?.value?.trim()?.toUpperCase() || 'GENERAL';
    const severity = sevEl?.value || 'WARNING';
    const description = descEl?.value?.trim();
    const triggerCondition = trigEl?.value?.trim() || '';
    const remedy = remEl?.value?.trim() || '';

    if (!code || !description) {
      alert('Error code and description are required.');
      return;
    }

    try {
      const resp = await fetch('/api/v1/incidents/catalog/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          error_code: code,
          category: category,
          severity: severity,
          description: description,
          trigger_condition: triggerCondition,
          remedy: remedy,
        }),
      });

      if (!resp.ok) {
        const err = await resp.json();
        alert(`Error saving template: ${err.detail || 'Request failed'}`);
        return;
      }

      this.closeModals();
      this.loadErrorCatalog();
    } catch (e) {
      alert(`Network error: ${e.message}`);
    }
  }

  async deleteErrorTemplate(errorCode) {
    if (!confirm(`Are you sure you want to remove error template '${errorCode}' from catalog?`)) {
      return;
    }

    try {
      const resp = await fetch(`/api/v1/incidents/catalog/errors/${encodeURIComponent(errorCode)}`, {
        method: 'DELETE',
      });
      if (!resp.ok) {
        const err = await resp.json();
        alert(`Error deleting error template: ${err.detail || 'Request failed'}`);
        return;
      }
      this.loadErrorCatalog();
    } catch (e) {
      alert(`Network error: ${e.message}`);
    }
  }

  async purgePipelineDb() {
    if (!confirm('¿Estás seguro de que deseas purgar la base de datos del pipeline? Esta acción eliminará permanentemente todos los registros.')) {
      return;
    }

    const conf = prompt('Esta acción es irreversible. Para confirmar la eliminación completa de los registros del pipeline, escribe PURGE:');
    if (conf !== 'PURGE') {
      alert('Operación cancelada. El código de confirmación no coincide.');
      return;
    }

    try {
      const resp = await fetch('/api/v1/pipeline/purge', {
        method: 'POST',
      });
      const data = await resp.json();
      if (!resp.ok) {
        alert(`Error al purgar base de datos: ${data.detail || 'Request failed'}`);
        return;
      }
      alert(`Pipeline purgado exitosamente. ${data.deleted_rows || 0} registros eliminados.`);
      this.pipelineOffset = 0;
      this.loadPipeline();
    } catch (e) {
      alert(`Error de red: ${e.message}`);
    }
  }

  /* ------------------------------------------------------------------------
     Custom Tools Logic
     ------------------------------------------------------------------------ */
  async loadTools() {
    try {
      const resp = await fetch('/api/v1/tools');
      const tools = await resp.json();

      const listEl = document.getElementById('custom-tools-list');
      if (!listEl) return;

      if (!tools || tools.length === 0) {
        listEl.innerHTML = '<div class="empty-state">No tools found in /config/custom_tools/</div>';
        return;
      }

      listEl.innerHTML = tools.map(t => `
        <div class="tool-card ${this.selectedTool === t.name ? 'active' : ''}" onclick="app.selectTool('${t.name}', '${this.escapeHtml(t.description)}')">
          <div class="tool-card-name">${this.escapeHtml(t.name)}</div>
          <div class="tool-card-desc">${this.escapeHtml(t.description)}</div>
        </div>
      `).join('');

      if (!this.selectedTool && tools.length > 0) {
        this.selectTool(tools[0].name, tools[0].description);
      }
    } catch (e) {
      console.error('Error loading custom tools:', e);
    }
  }

  selectTool(name, desc) {
    this.selectedTool = name;
    document.getElementById('active-tool-name').innerText = name;
    document.getElementById('active-tool-desc').innerText = desc || '';
    const runBtn = document.getElementById('btn-run-active-tool');
    if (runBtn) runBtn.disabled = false;

    document.querySelectorAll('.tool-card').forEach(c => {
      if (c.querySelector('.tool-card-name')?.innerText === name) c.classList.add('active');
      else c.classList.remove('active');
    });
  }

  async runSelectedTool() {
    if (!this.selectedTool) return;
    const consolePre = document.querySelector('#tool-console-output pre');
    const runBtn = document.getElementById('btn-run-active-tool');
    if (runBtn) runBtn.disabled = true;

    if (consolePre) {
      consolePre.innerText = `[i] Executing ${this.selectedTool}...\n`;
    }

    try {
      const resp = await fetch(`/api/v1/tools/${encodeURIComponent(this.selectedTool)}/run`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ args: [] }),
      });
      const data = await resp.json();

      if (consolePre) {
        let output = `--- Execution Completed (${data.duration_ms}ms) ---\n`;
        output += `Exit Code: ${data.exit_code}\n`;
        if (data.stdout) output += `\n[STDOUT]:\n${data.stdout}\n`;
        if (data.stderr) output += `\n[STDERR]:\n${data.stderr}\n`;
        if (data.error) output += `\n[ERROR]:\n${data.error}\n`;
        consolePre.innerText = output;
      }
    } catch (e) {
      if (consolePre) consolePre.innerText += `\n[x] Network error: ${e.message}`;
    } finally {
      if (runBtn) runBtn.disabled = false;
    }
  }

  /* ------------------------------------------------------------------------
     GitOps Logic
     ------------------------------------------------------------------------ */
  async loadGitOps() {
    try {
      const resp = await fetch('/api/v1/meta/query?target=gitops');
      const data = await resp.json();
      const telemetry = data.telemetry || {};

      const branch = telemetry.branch || 'main';
      const commit = telemetry.short_commit || '--';
      const isClean = telemetry.clean !== false;

      // Update sidebar
      document.getElementById('badge-branch').innerText = branch;
      document.getElementById('badge-commit').innerText = commit;

      // Update overview
      document.getElementById('ov-git-branch').innerText = branch;
      document.getElementById('ov-git-status').innerText = isClean ? 'Tree is clean' : 'Local changes detected';

      // Update GitOps tab
      const branchEl = document.getElementById('gitops-branch');
      const commitEl = document.getElementById('gitops-commit');
      const cleanEl = document.getElementById('gitops-clean');
      const lastCommitEl = document.getElementById('gitops-last-commit');

      if (branchEl) branchEl.innerText = branch;
      if (commitEl) commitEl.innerText = `${commit} (${telemetry.commit || ''})`;
      if (cleanEl) {
        cleanEl.innerText = isClean ? '✓ Clean' : '! Dirty / Uncommitted changes';
        cleanEl.className = isClean ? 'info-value text-success' : 'info-value text-warning';
      }
      if (lastCommitEl) lastCommitEl.innerText = telemetry.last_commit || 'None';

    } catch (e) {
      console.error('Error loading GitOps telemetry:', e);
    }
  }

  /* ------------------------------------------------------------------------
     Settings Logic (DAG Stages, Services, Mappings, Notifications & Engine)
     ------------------------------------------------------------------------ */
  switchSettingsSubTab(subtabId) {
    document.querySelectorAll('.subnav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-subtab') === subtabId);
    });
    document.querySelectorAll('.subtab-panel').forEach(panel => {
      panel.classList.toggle('active', panel.id === `subpanel-${subtabId}`);
    });
    if (subtabId === 'services') this.renderSettingsServices();
    if (subtabId === 'stages') this.renderSettingsStages();
    if (subtabId === 'mappings') this.renderSettingsMappings();
    if (subtabId === 'engine') this.renderEngineOverrides();
  }

  async loadSettings() {
    try {
      const resp = await fetch('/api/v1/settings');
      this.settingsData = await resp.json();

      // Normalize services structure
      if (!this.settingsData.services) {
        this.settingsData.services = this.settingsData.apps || {};
      }
      if (!this.settingsData.stages) {
        this.settingsData.stages = [];
      }
      if (this.settingsData.global_poll_interval_seconds === undefined) {
        this.settingsData.global_poll_interval_seconds = 300;
      }

      this.renderSettingsServices();
      this.renderSettingsStages();
      this.renderSettingsMappings();
      this.renderSettingsNotifications();
      this.renderEngineOverrides();

      const retEl = document.getElementById('input-retention-days');
      if (retEl && this.settingsData.retention_days) {
        retEl.value = this.settingsData.retention_days;
      }

      const globalPollEl = document.getElementById('input-global-poll');
      if (globalPollEl && this.settingsData.global_poll_interval_seconds) {
        globalPollEl.value = this.settingsData.global_poll_interval_seconds;
      }
    } catch (e) {
      console.error('Error loading settings:', e);
    }
  }

  /* --- SERVICES MANAGEMENT --- */
  renderSettingsServices() {
    const container = document.getElementById('settings-services-container');
    if (!container || !this.settingsData) return;

    const services = this.settingsData.services || {};
    const serviceEntries = Object.entries(services);

    if (serviceEntries.length === 0) {
      container.innerHTML = `
        <div class="empty-state" id="services-empty-state">
          <p>No services registered yet. Click <strong>+ Add Service</strong> to register your first service.</p>
        </div>
      `;
      return;
    }

    const globalInterval = this.settingsData.global_poll_interval_seconds || 300;

    container.innerHTML = serviceEntries.map(([sId, cfg]) => {
      const hasOverride = cfg.poll_interval_seconds !== null && cfg.poll_interval_seconds !== undefined && cfg.poll_interval_seconds > 0;
      const pollText = hasOverride
        ? `<span class="badge badge-warning">Custom Override: ${cfg.poll_interval_seconds}s</span>`
        : `<span class="badge badge-secondary">Inherits Global (${globalInterval}s)</span>`;

      return `
        <div class="app-setting-item mb-3 p-3 bg-surface border rounded" data-service-id="${this.escapeHtml(sId)}">
          <div class="app-setting-header d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center gap-2">
              <strong style="font-size: 1.05rem;">${this.escapeHtml(cfg.name)}</strong>
              <span class="badge badge-info font-mono">${this.escapeHtml(sId)}</span>
              ${cfg.enabled ? '<span class="badge badge-success">Active</span>' : '<span class="badge badge-alert">Disabled</span>'}
              ${pollText}
            </div>
            <div class="d-flex align-items-center gap-2">
              <button class="btn btn-secondary btn-sm" onclick="app.openAddServiceModal('${this.escapeHtml(sId)}')">Edit</button>
              <button class="btn btn-secondary btn-sm text-alert" onclick="app.deleteService('${this.escapeHtml(sId)}')">Delete</button>
            </div>
          </div>
          <div class="text-sm text-muted">
            <span>Base URL: <code class="font-mono">${this.escapeHtml(cfg.base_url || 'None')}</code></span>
            ${cfg.api_key ? '<span class="ml-3">| API Key configured</span>' : ''}
            <span class="ml-3">| Field Mappings: <strong>${(cfg.field_mappings || []).length}</strong></span>
            ${cfg.enrichment_endpoints && Object.keys(cfg.enrichment_endpoints).length > 0 ? `<span class="ml-3">| Enrichment: <code>${Object.keys(cfg.enrichment_endpoints).join(', ')}</code></span>` : ''}
          </div>
        </div>
      `;
    }).join('');
  }

  openAddServiceModal(editServiceId = null) {
    const titleEl = document.getElementById('modal-service-title');
    const idEl = document.getElementById('input-service-id');
    const nameEl = document.getElementById('input-service-name');
    const urlEl = document.getElementById('input-service-url');
    const keyEl = document.getElementById('input-service-key');
    const inheritChk = document.getElementById('chk-service-inherit-poll');
    const pollEl = document.getElementById('input-service-poll');
    const enabledChk = document.getElementById('chk-service-enabled');
    const customBlock = document.getElementById('service-custom-poll-block');

    const keyTemplateEl = document.getElementById('input-service-key-template');
    const enrichEl = document.getElementById('input-service-enrichment');
    const pollEndpointEl = document.getElementById('input-service-poll-endpoint');

    if (editServiceId && this.settingsData?.services?.[editServiceId]) {
      const s = this.settingsData.services[editServiceId];
      if (titleEl) titleEl.innerText = `Edit Service: ${s.name}`;
      if (idEl) { idEl.value = editServiceId; idEl.disabled = true; }
      if (nameEl) nameEl.value = s.name || '';
      if (urlEl) urlEl.value = s.base_url || '';
      if (keyEl) keyEl.value = s.api_key || '';
      if (enabledChk) enabledChk.checked = s.enabled !== false;
      if (keyTemplateEl) keyTemplateEl.value = s.pipeline_key_template || '{service}:{id}';
      if (pollEndpointEl) pollEndpointEl.value = s.poll_endpoint || '/api/v3/history?pageSize=50&sortKey=date&sortDirection=descending';
      if (enrichEl) {
        if (s.enrichment_endpoints && typeof s.enrichment_endpoints === 'object' && Object.keys(s.enrichment_endpoints).length > 0) {
          enrichEl.value = Object.entries(s.enrichment_endpoints).map(([k, v]) => `${k}: ${v}`).join('\n');
        } else {
          enrichEl.value = '';
        }
      }

      const hasOverride = s.poll_interval_seconds !== null && s.poll_interval_seconds !== undefined && s.poll_interval_seconds > 0;
      if (inheritChk) inheritChk.checked = !hasOverride;
      if (pollEl) pollEl.value = hasOverride ? s.poll_interval_seconds : (this.settingsData.global_poll_interval_seconds || 300);
      if (customBlock) customBlock.classList.toggle('hidden', !hasOverride);

      this.renderServiceEventCheckboxes(s.allowed_event_types || []);
    } else {
      this.manualSlugEdited = false;
      if (titleEl) titleEl.innerText = 'Register Service';
      if (idEl) { idEl.value = ''; idEl.disabled = false; }
      if (nameEl) nameEl.value = '';
      if (urlEl) urlEl.value = '';
      if (keyEl) keyEl.value = '';
      if (enabledChk) enabledChk.checked = true;
      if (inheritChk) inheritChk.checked = true;
      if (pollEl) pollEl.value = this.settingsData?.global_poll_interval_seconds || 300;
      if (customBlock) customBlock.classList.add('hidden');
      if (keyTemplateEl) keyTemplateEl.value = '{service}:{id}';
      if (pollEndpointEl) pollEndpointEl.value = '/api/v3/history?pageSize=50&sortKey=date&sortDirection=descending';
      if (enrichEl) enrichEl.value = '';

      this.renderServiceEventCheckboxes([]);
    }

    document.getElementById('modal-add-service')?.classList.remove('hidden');
  }

  renderServiceEventCheckboxes(allowedEvents = [], availableEvents = null) {
    const container = document.getElementById('service-events-checkboxes');
    if (!container) return;

    let list = [];
    if (availableEvents && Array.isArray(availableEvents) && availableEvents.length > 0) {
      list = availableEvents;
    } else if (allowedEvents && Array.isArray(allowedEvents) && allowedEvents.length > 0) {
      list = allowedEvents.map(ev => {
        if (typeof ev === 'object' && ev !== null) return ev;
        return { event_type: ev, description: 'Configured event filter', default_active: true };
      });
    }

    if (list.length === 0) {
      container.innerHTML = `
        <div class="text-xs text-muted p-2 border border-surface-subtle rounded bg-surface">
          No event filters configured. All items returned by the ingestion endpoint will be processed. Click <strong>Discover Events from API</strong> if this service publishes distinct event types.
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(ev => {
      const isChecked = allowedEvents && allowedEvents.length > 0
        ? (allowedEvents.includes(ev.event_type) || allowedEvents.some(a => (typeof a === 'object' ? a.event_type : a) === ev.event_type))
        : (ev.default_active !== false);
      return `
        <label class="form-checkbox-label d-flex align-items-center gap-2 mb-2 p-2 bg-surface rounded border cursor-pointer">
          <input type="checkbox" name="service-event-type" value="${this.escapeHtml(ev.event_type)}" ${isChecked ? 'checked' : ''}>
          <div>
            <strong class="font-mono text-sm">${this.escapeHtml(ev.event_type)}</strong>
            <div class="text-xs text-muted">${this.escapeHtml(ev.description || '')}</div>
          </div>
        </label>
      `;
    }).join('');
  }

  async discoverServiceEvents() {
    const idEl = document.getElementById('input-service-id');
    const serviceId = idEl?.value.trim().toLowerCase();
    const container = document.getElementById('service-events-checkboxes');
    if (!serviceId) {
      alert('Please enter a Service ID (slug) first.');
      return;
    }

    if (container) {
      container.innerHTML = '<span class="text-muted text-sm">Querying service API for history events...</span>';
    }

    try {
      const resp = await fetch(`/api/v1/pipeline/services/${serviceId}/events`);
      const data = await resp.json();
      if (!resp.ok || !data.success || !data.event_types || data.event_types.length === 0) {
        if (container) {
          container.innerHTML = `<span class="text-alert text-sm">Could not discover events: ${this.escapeHtml(data.error || 'Endpoint returned no distinct events or service is unreachable')}.</span>`;
          setTimeout(() => {
            const currentSelected = [];
            document.querySelectorAll('input[name="service-event-type"]:checked').forEach(cb => currentSelected.push(cb.value));
            this.renderServiceEventCheckboxes(currentSelected);
          }, 2500);
        }
        return;
      }

      this.renderServiceEventCheckboxes([], data.event_types);
    } catch (e) {
      if (container) {
        container.innerHTML = `<span class="text-alert text-sm">Network error discovering events: ${this.escapeHtml(e.message)}</span>`;
      }
    }
  }

  saveServiceFromModal() {
    const idEl = document.getElementById('input-service-id');
    const nameEl = document.getElementById('input-service-name');
    const urlEl = document.getElementById('input-service-url');
    const keyEl = document.getElementById('input-service-key');
    const inheritChk = document.getElementById('chk-service-inherit-poll');
    const pollEl = document.getElementById('input-service-poll');
    const enabledChk = document.getElementById('chk-service-enabled');
    const keyTemplateEl = document.getElementById('input-service-key-template');
    const enrichEl = document.getElementById('input-service-enrichment');
    const pollEndpointEl = document.getElementById('input-service-poll-endpoint');

    const id = idEl?.value.trim().toLowerCase();
    const name = nameEl?.value.trim();
    if (!id || !name) {
      alert('Service ID (slug) and Display Name are required.');
      return;
    }

    if (!/^[a-z0-9_-]+$/.test(id)) {
      alert('Service ID must contain only lowercase letters, numbers, hyphens, or underscores (e.g. sonarr, radarr, custom_service).');
      return;
    }

    if (!this.settingsData) this.settingsData = { stages: [], services: {}, notification_triggers: [] };
    if (!this.settingsData.services) this.settingsData.services = {};

    const inherit = inheritChk ? inheritChk.checked : true;
    let pollInterval = null;
    if (!inherit) {
      const val = parseInt(pollEl?.value || '300', 10);
      pollInterval = val > 0 ? val : null;
    }

    const checkedEvents = [];
    document.querySelectorAll('input[name="service-event-type"]:checked').forEach(cb => {
      checkedEvents.push(cb.value);
    });

    const rawEnrich = enrichEl?.value.trim() || '';
    const enrichmentEndpoints = {};
    if (rawEnrich) {
      rawEnrich.split('\n').forEach(line => {
        const trimmed = line.trim();
        if (!trimmed) return;
        const colIdx = trimmed.indexOf(':');
        if (colIdx > 0) {
          const alias = trimmed.substring(0, colIdx).trim();
          const ep = trimmed.substring(colIdx + 1).trim();
          if (alias && ep) {
            enrichmentEndpoints[alias] = ep;
          }
        }
      });
    }

    const existing = this.settingsData.services[id] || {};
    this.settingsData.services[id] = {
      name: name,
      enabled: enabledChk ? enabledChk.checked : true,
      base_url: urlEl?.value.trim() || '',
      api_key: keyEl?.value.trim() || '',
      poll_interval_seconds: pollInterval,
      poll_endpoint: pollEndpointEl?.value.trim() || '/api/v3/history?pageSize=50&sortKey=date&sortDirection=descending',
      pipeline_key_template: keyTemplateEl?.value.trim() || '{service}:{id}',
      allowed_event_types: checkedEvents,
      enrichment_endpoints: enrichmentEndpoints,
      field_mappings: existing.field_mappings || [],
    };

    this.renderSettingsServices();
    this.renderSettingsStages();
    this.renderSettingsMappings();
    this.renderEngineOverrides();
    this.closeModals();
  }

  deleteService(serviceId) {
    if (!confirm(`Are you sure you want to delete service '${serviceId}'?`)) return;
    if (!this.settingsData?.services) return;

    delete this.settingsData.services[serviceId];

    // Remove from assigned stage services
    if (this.settingsData.stages) {
      this.settingsData.stages.forEach(st => {
        if (st.service_ids) {
          st.service_ids = st.service_ids.filter(id => id !== serviceId);
        }
      });
    }

    this.renderSettingsServices();
    this.renderSettingsStages();
    this.renderSettingsMappings();
    this.renderEngineOverrides();
  }

  /* --- DAG STAGES MANAGEMENT (M:N SERVICES) --- */
  renderSettingsStages() {
    const container = document.getElementById('settings-stages-container');
    if (!container || !this.settingsData) return;

    const stages = (this.settingsData.stages || []).slice().sort((a, b) => (a.order || 0) - (b.order || 0));

    if (stages.length === 0) {
      container.innerHTML = `
        <div class="empty-state" id="stages-empty-state">
          <p>No execution stages defined yet. Click <strong>+ Add Stage</strong> to create your first pipeline stage.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = stages.map((st, idx) => {
      const isRoot = !st.start_condition || !st.start_condition.trim();
      const cardClass = isRoot ? 'stage-card root-stage' : 'stage-card consumer-stage';
      const badge = isRoot 
        ? '<span class="badge badge-root">Root Producer</span>'
        : '<span class="badge badge-consumer">Consumer Stage</span>';
      const statusBadge = st.enabled 
        ? '<span class="badge badge-success">Active</span>' 
        : '<span class="badge badge-secondary">Disabled</span>';

      const assignedBadges = (st.service_ids && st.service_ids.length > 0)
        ? st.service_ids.map(sid => `<span class="badge badge-service">${this.escapeHtml(sid)}</span>`).join(' ')
        : '<span class="text-muted text-sm">No services assigned</span>';

      return `
        <div class="${cardClass}" data-stage-id="${this.escapeHtml(st.id)}" style="${!st.enabled ? 'opacity: 0.75;' : ''}">
          <div class="stage-card-header">
            <div class="stage-title-wrap">
              <strong style="font-size: 1.1rem;">${this.escapeHtml(st.name)}</strong>
              <span class="font-mono text-muted text-sm">id: ${this.escapeHtml(st.id)}</span>
              ${badge}
              ${statusBadge}
            </div>
            <div class="stage-actions">
              <button class="btn btn-secondary btn-sm ${st.enabled ? 'text-alert' : 'text-success'}" onclick="app.toggleStage('${st.id}')">${st.enabled ? 'Disable' : 'Enable'}</button>
              <button class="btn btn-secondary btn-sm" onclick="app.moveStage('${st.id}', -1)" ${idx === 0 ? 'disabled' : ''} title="Move Up">↑</button>
              <button class="btn btn-secondary btn-sm" onclick="app.moveStage('${st.id}', 1)" ${idx === stages.length - 1 ? 'disabled' : ''} title="Move Down">↓</button>
              <button class="btn btn-secondary btn-sm" onclick="app.openAddStageModal('${st.id}')">Edit</button>
              <button class="btn btn-secondary btn-sm text-alert" onclick="app.deleteStage('${st.id}')">Delete</button>
            </div>
          </div>
          ${st.description ? `<p class="text-sm text-muted mb-2">${this.escapeHtml(st.description)}</p>` : ''}
          <div class="mb-2">
            <span class="text-sm text-muted mr-2">Assigned Services:</span>
            ${assignedBadges}
          </div>
          ${!isRoot ? `
            <div class="stage-predicate-display">
              <strong>start_condition:</strong> ${this.escapeHtml(st.start_condition)}
            </div>
          ` : `
            <div class="text-sm text-success font-mono mt-2">
              ✓ start_condition IS NULL — Autonomously initiates rows in SERVICES_PIPELINE
            </div>
          `}
          ${st.complete_condition ? `
            <div class="stage-predicate-display mt-1 text-xs">
              <strong class="text-muted">complete_condition:</strong> <span class="font-mono text-muted">${this.escapeHtml(st.complete_condition)}</span>
            </div>
          ` : ''}
          <div class="stage-meta-row">
            <span>Grace Period: <strong>${st.grace_period_minutes ?? 10} min</strong></span>
            <span>Watchdog Timeout: <strong>${st.timeout_minutes ?? 30} min</strong></span>
            <span>Sequence Order: <strong>#${st.order || (idx + 1)}</strong></span>
          </div>
        </div>
      `;
    }).join('');
  }

  async toggleStage(stageId) {
    if (!this.settingsData?.stages) return;
    const st = this.settingsData.stages.find(s => s.id === stageId);
    if (!st) return;
    st.enabled = !st.enabled;
    if (st.enabled) {
      st.last_activated_at = new Date().toISOString();
    }
    this.renderSettingsStages();
    await this.saveSettings();
  }

  openAddStageModal(editStageId = null) {
    const titleEl = document.getElementById('modal-stage-title');
    const idEl = document.getElementById('input-stage-id');
    const nameEl = document.getElementById('input-stage-name');
    const descEl = document.getElementById('input-stage-desc');
    const rootChk = document.getElementById('chk-stage-root');
    const condEl = document.getElementById('input-stage-condition');
    const completeCondEl = document.getElementById('input-stage-complete-condition');
    const graceEl = document.getElementById('input-stage-grace');
    const timeoutEl = document.getElementById('input-stage-timeout');
    const predBlock = document.getElementById('stage-predicate-block');
    const testResult = document.getElementById('predicate-test-result');
    const completeTestResult = document.getElementById('complete-predicate-test-result');
    const servicesGrid = document.getElementById('stage-services-checkboxes');
    const enabledChk = document.getElementById('chk-stage-enabled');

    if (testResult) testResult.classList.add('hidden');
    if (completeTestResult) completeTestResult.classList.add('hidden');

    let assigned = [];
    if (editStageId && this.settingsData?.stages) {
      const st = this.settingsData.stages.find(s => s.id === editStageId);
      if (st) {
        if (titleEl) titleEl.innerText = `Edit Stage: ${st.name}`;
        if (idEl) { idEl.value = st.id; idEl.disabled = true; }
        if (nameEl) nameEl.value = st.name || '';
        if (descEl) descEl.value = st.description || '';
        const isRoot = !st.start_condition || !st.start_condition.trim();
        if (rootChk) rootChk.checked = isRoot;
        if (condEl) condEl.value = st.start_condition || '';
        if (completeCondEl) completeCondEl.value = st.complete_condition || '';
        if (predBlock) predBlock.classList.toggle('hidden', isRoot);
        if (graceEl) graceEl.value = st.grace_period_minutes ?? 10;
        if (timeoutEl) timeoutEl.value = st.timeout_minutes ?? 30;
        if (enabledChk) enabledChk.checked = st.enabled !== undefined ? st.enabled : false;
        assigned = st.service_ids || [];
      }
    } else {
      if (titleEl) titleEl.innerText = 'Configure DAG Stage';
      if (idEl) { idEl.value = ''; idEl.disabled = false; }
      if (nameEl) nameEl.value = '';
      if (descEl) descEl.value = '';
      if (rootChk) rootChk.checked = true;
      if (condEl) condEl.value = '';
      if (completeCondEl) completeCondEl.value = '';
      if (predBlock) predBlock.classList.add('hidden');
      if (graceEl) graceEl.value = 10;
      if (timeoutEl) timeoutEl.value = 30;
      if (enabledChk) enabledChk.checked = false; // Default disabled for new stages
    }

    // Populate service checkboxes
    if (servicesGrid) {
      const availableServices = Object.entries(this.settingsData?.services || {});
      if (availableServices.length === 0) {
        servicesGrid.innerHTML = '<span class="text-muted text-sm">No services configured yet. Register a service first.</span>';
      } else {
        servicesGrid.innerHTML = availableServices.map(([sid, scfg]) => {
          const isChecked = assigned.includes(sid);
          return `
            <label class="service-checkbox-item">
              <input type="checkbox" name="stage-assigned-service" value="${this.escapeHtml(sid)}" ${isChecked ? 'checked' : ''}>
              <span>${this.escapeHtml(scfg.name)} (<code>${this.escapeHtml(sid)}</code>)</span>
            </label>
          `;
        }).join('');
      }
    }

    document.getElementById('modal-add-stage')?.classList.remove('hidden');
  }

  async validateConditionSyntax() {
    const condEl = document.getElementById('input-stage-condition');
    const resultEl = document.getElementById('predicate-test-result');
    if (!condEl || !resultEl) return;

    const expr = condEl.value.trim();
    try {
      const resp = await fetch('/api/v1/settings/test-predicate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ expression: expr })
      });
      const data = await resp.json();
      resultEl.classList.remove('hidden');
      if (data.valid) {
        resultEl.className = 'mt-2 text-sm text-success';
        resultEl.innerText = `✓ ${data.message}`;
      } else {
        resultEl.className = 'mt-2 text-sm text-alert';
        resultEl.innerText = `x ${data.message}`;
      }
    } catch (e) {
      resultEl.classList.remove('hidden');
      resultEl.className = 'mt-2 text-sm text-alert';
      resultEl.innerText = `x Network error: ${e.message}`;
    }
  }

  async validateCompleteConditionSyntax() {
    const condEl = document.getElementById('input-stage-complete-condition');
    const resultEl = document.getElementById('complete-predicate-test-result');
    if (!condEl || !resultEl) return;

    const expr = condEl.value.trim();
    try {
      const resp = await fetch('/api/v1/settings/test-predicate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ expression: expr })
      });
      const data = await resp.json();
      resultEl.classList.remove('hidden');
      if (data.valid) {
        resultEl.className = 'mt-2 text-sm text-success';
        resultEl.innerText = `✓ ${data.message}`;
      } else {
        resultEl.className = 'mt-2 text-sm text-alert';
        resultEl.innerText = `x ${data.message}`;
      }
    } catch (e) {
      resultEl.classList.remove('hidden');
      resultEl.className = 'mt-2 text-sm text-alert';
      resultEl.innerText = `x Network error: ${e.message}`;
    }
  }

  async saveStageFromModal() {
    const idEl = document.getElementById('input-stage-id');
    const nameEl = document.getElementById('input-stage-name');
    const descEl = document.getElementById('input-stage-desc');
    const rootChk = document.getElementById('chk-stage-root');
    const condEl = document.getElementById('input-stage-condition');
    const completeCondEl = document.getElementById('input-stage-complete-condition');
    const graceEl = document.getElementById('input-stage-grace');
    const timeoutEl = document.getElementById('input-stage-timeout');
    const enabledChk = document.getElementById('chk-stage-enabled');

    const id = idEl?.value.trim().toLowerCase();
    const name = nameEl?.value.trim();
    if (!id || !name) {
      alert('Stage ID (slug) and Name are required.');
      return;
    }

    if (!/^[a-z0-9_-]+$/.test(id)) {
      alert('Stage ID must consist of lowercase letters, numbers, hyphens or underscores (e.g. ingest, recognition, library).');
      return;
    }

    if (!this.settingsData) this.settingsData = { stages: [], services: {}, notification_triggers: [] };
    if (!this.settingsData.stages) this.settingsData.stages = [];

    const isRoot = rootChk ? rootChk.checked : true;
    const condition = isRoot ? null : (condEl?.value.trim() || null);
    const completeCondition = completeCondEl?.value.trim() || null;
    const enabled = enabledChk ? enabledChk.checked : false;

    // Collect checked assigned services
    const checkedServices = [];
    document.querySelectorAll('input[name="stage-assigned-service"]:checked').forEach(cb => {
      checkedServices.push(cb.value);
    });

    const existingIdx = this.settingsData.stages.findIndex(s => s.id === id);
    const order = existingIdx >= 0 ? this.settingsData.stages[existingIdx].order : (this.settingsData.stages.length + 1);

    let lastActivatedAt = existingIdx >= 0 ? this.settingsData.stages[existingIdx].last_activated_at : null;
    const wasEnabled = existingIdx >= 0 ? !!this.settingsData.stages[existingIdx].enabled : false;
    if (enabled && !wasEnabled) {
      lastActivatedAt = new Date().toISOString();
    }

    const stageObj = {
      id: id,
      name: name,
      description: descEl?.value.trim() || '',
      order: order,
      start_condition: condition,
      complete_condition: completeCondition,
      grace_period_minutes: parseInt(graceEl?.value || '10', 10),
      timeout_minutes: parseInt(timeoutEl?.value || '30', 10),
      service_ids: checkedServices,
      enabled: enabled,
      last_activated_at: lastActivatedAt
    };

    if (existingIdx >= 0) {
      this.settingsData.stages[existingIdx] = stageObj;
    } else {
      this.settingsData.stages.push(stageObj);
    }

    this.renderSettingsStages();
    this.closeModals();
    await this.saveSettings();
  }

  async deleteStage(stageId) {
    if (!confirm(`Are you sure you want to delete stage '${stageId}'?`)) return;
    if (!this.settingsData?.stages) return;

    this.settingsData.stages = this.settingsData.stages.filter(s => s.id !== stageId);
    this.renderSettingsStages();
    await this.saveSettings();
  }

  moveStage(stageId, direction) {
    if (!this.settingsData?.stages) return;
    const stages = this.settingsData.stages.slice().sort((a, b) => (a.order || 0) - (b.order || 0));
    const idx = stages.findIndex(s => s.id === stageId);
    if (idx < 0) return;

    const targetIdx = idx + direction;
    if (targetIdx < 0 || targetIdx >= stages.length) return;

    const tempOrder = stages[idx].order || (idx + 1);
    stages[idx].order = stages[targetIdx].order || (targetIdx + 1);
    stages[targetIdx].order = tempOrder;

    this.settingsData.stages = stages;
    this.renderSettingsStages();
  }

  /* --- FIELD MAPPINGS & TRANSFORMERS --- */
  renderSettingsMappings() {
    const selectEl = document.getElementById('select-mapping-service');
    const container = document.getElementById('settings-mappings-container');
    if (!selectEl || !container || !this.settingsData) return;

    const services = this.settingsData.services || {};
    const serviceKeys = Object.keys(services);

    if (serviceKeys.length === 0) {
      selectEl.innerHTML = '<option value="">-- No services available --</option>';
      container.innerHTML = '<div class="empty-state"><p>No services registered. Register a service first to configure field mappings.</p></div>';
      return;
    }

    const currentVal = selectEl.value;
    selectEl.innerHTML = serviceKeys.map(k => `
      <option value="${k}" ${k === currentVal ? 'selected' : ''}>
        ${this.escapeHtml(services[k].name)} (${k})
      </option>
    `).join('');

    const activeService = selectEl.value || serviceKeys[0];
    const serviceCfg = services[activeService];
    if (!serviceCfg) return;

    const mappings = serviceCfg.field_mappings || [];

    if (mappings.length === 0) {
      container.innerHTML = `
        <div class="empty-state" id="mappings-empty-state">
          <p>No field mappings configured for <strong>${this.escapeHtml(serviceCfg.name)}</strong>. Click <strong>+ Add Mapping</strong> or sample the API.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <table class="mapping-table">
        <thead>
          <tr>
            <th class="drag-handle-cell"></th>
            <th>Source Field</th>
            <th>Target DB Column</th>
            <th>Data Type</th>
            <th>Transformer Predicate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="mapping-table-body">
          ${mappings.map((m, idx) => `
            <tr data-index="${idx}">
              <td class="drag-handle-cell">
                <span class="drag-handle" title="Drag to reorder">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="4" y1="7" x2="20" y2="7"></line>
                    <line x1="4" y1="12" x2="20" y2="12"></line>
                    <line x1="4" y1="17" x2="20" y2="17"></line>
                  </svg>
                </span>
              </td>
              <td class="font-mono">${this.escapeHtml(m.source_field)}</td>
              <td><span class="badge badge-info font-mono">${this.escapeHtml(m.target_column)}</span></td>
              <td><span class="badge badge-secondary">${this.escapeHtml(m.data_type || 'TEXT')}</span></td>
              <td class="font-mono text-sm text-accent">${m.transformer ? this.escapeHtml(m.transformer) : '<span class="text-muted">Direct</span>'}</td>
              <td>
                <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); app.openAddMappingModal('${activeService}', '${this.escapeHtml(m.target_column)}')">Edit</button>
                <button class="btn btn-secondary btn-sm text-alert ml-1" onclick="event.stopPropagation(); app.deleteMapping('${activeService}', '${this.escapeHtml(m.target_column)}')">Delete</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;

    // Attach drag & drop listeners to mapping rows triggered via drag-handle
    let draggedIdx = null;
    const rows = container.querySelectorAll('#mapping-table-body tr');
    rows.forEach(row => {
      const handle = row.querySelector('.drag-handle');
      if (handle) {
        handle.addEventListener('mousedown', () => {
          row.setAttribute('draggable', 'true');
        });
        handle.addEventListener('mouseup', () => {
          row.removeAttribute('draggable');
        });
      }

      row.addEventListener('dragstart', (e) => {
        draggedIdx = parseInt(row.getAttribute('data-index'), 10);
        row.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
      });
      row.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        row.classList.add('drag-over');
      });
      row.addEventListener('dragleave', () => {
        row.classList.remove('drag-over');
      });
      row.addEventListener('drop', (e) => {
        e.preventDefault();
        row.classList.remove('drag-over');
        const targetIdx = parseInt(row.getAttribute('data-index'), 10);
        if (draggedIdx !== null && draggedIdx !== targetIdx) {
          this.reorderMappings(activeService, draggedIdx, targetIdx);
        }
      });
      row.addEventListener('dragend', () => {
        row.removeAttribute('draggable');
        row.classList.remove('dragging');
        rows.forEach(r => r.classList.remove('drag-over'));
      });
    });
  }

  reorderMappings(serviceId, fromIndex, toIndex) {
    const list = this.settingsData?.services?.[serviceId]?.field_mappings;
    if (!list || fromIndex === toIndex) return;
    const [moved] = list.splice(fromIndex, 1);
    list.splice(toIndex, 0, moved);
    this.renderSettingsMappings();
  }

  openAddMappingModal(serviceIdOrCol = null, colToEdit = null) {
    let targetCol = null;
    let serviceId = null;

    if (serviceIdOrCol && colToEdit) {
      serviceId = serviceIdOrCol;
      targetCol = colToEdit;
    } else if (serviceIdOrCol && !colToEdit) {
      if (this.settingsData?.services && this.settingsData.services[serviceIdOrCol]) {
        serviceId = serviceIdOrCol;
      } else {
        targetCol = serviceIdOrCol;
      }
    }

    const selectEl = document.getElementById('select-mapping-service');
    if (serviceId && selectEl) {
      selectEl.value = serviceId;
    }

    const titleEl = document.getElementById('modal-map-title');
    const serviceNameEl = document.getElementById('modal-map-service-name');
    const sourceEl = document.getElementById('input-map-source');
    const colEl = document.getElementById('input-map-col');
    const typeEl = document.getElementById('input-map-type');
    const transEl = document.getElementById('input-map-transformer');
    const sampleEl = document.getElementById('input-map-sample');
    const resultEl = document.getElementById('transformer-test-result');

    const activeService = selectEl?.value;
    if (!activeService) {
      alert('Please register at least one service before adding mappings.');
      return;
    }

    // Populate existing columns datalist across all services
    const existingCols = new Map();
    Object.values(this.settingsData?.services || {}).forEach(srv => {
      (srv.field_mappings || []).forEach(m => {
        if (m.target_column && !existingCols.has(m.target_column)) {
          existingCols.set(m.target_column, m.data_type || 'TEXT');
        }
      });
    });
    this.existingColsMap = existingCols;

    const datalist = document.getElementById('existing-columns-datalist');
    if (datalist) {
      datalist.innerHTML = Array.from(existingCols.entries()).map(([col, type]) => `
        <option value="${this.escapeHtml(col)}">${type ? `(${type})` : ''}</option>
      `).join('');
    }

    const serviceName = this.settingsData?.services?.[activeService]?.name || activeService;
    if (serviceNameEl) serviceNameEl.value = `${serviceName} (${activeService})`;

    const mappings = this.settingsData?.services?.[activeService]?.field_mappings || [];
    if (targetCol) {
      const m = mappings.find(x => x.target_column === targetCol);
      if (titleEl) titleEl.innerText = 'Edit Field Mapping';
      this.editingMappingCol = targetCol;
      if (sourceEl) sourceEl.value = m ? m.source_field : '';
      if (colEl) colEl.value = m ? m.target_column : targetCol;
      if (typeEl) typeEl.value = m ? (m.data_type || 'TEXT') : 'TEXT';
      if (transEl) transEl.value = m ? (m.transformer || '') : '';
    } else {
      if (titleEl) titleEl.innerText = 'Configure Field Mapping & Transformer';
      this.editingMappingCol = null;
      if (sourceEl) sourceEl.value = '';
      if (colEl) colEl.value = '';
      if (typeEl) typeEl.value = 'TEXT';
      if (transEl) transEl.value = '';
    }

    if (sampleEl) sampleEl.value = '';
    if (resultEl) resultEl.classList.add('hidden');

    document.getElementById('modal-add-mapping')?.classList.remove('hidden');
  }

  async testTransformerExpr() {
    const transEl = document.getElementById('input-map-transformer');
    const sampleEl = document.getElementById('input-map-sample');
    const resultEl = document.getElementById('transformer-test-result');
    if (!transEl || !resultEl) return;

    let sampleVal = sampleEl?.value.trim() || '';
    try {
      if (sampleVal.startsWith('[') || sampleVal.startsWith('{')) {
        sampleVal = JSON.parse(sampleVal);
      }
    } catch (_) {
      // keep string
    }

    try {
      const resp = await fetch('/api/v1/settings/test-transformer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          expression: transEl.value.trim(),
          sample_value: sampleVal
        })
      });
      const data = await resp.json();
      resultEl.classList.remove('hidden');
      if (data.valid) {
        resultEl.className = 'mt-2 text-sm text-success';
        resultEl.innerText = `✓ Output: ${JSON.stringify(data.result)} (${data.message})`;
      } else {
        resultEl.className = 'mt-2 text-sm text-alert';
        resultEl.innerText = `x ${data.message}`;
      }
    } catch (e) {
      resultEl.classList.remove('hidden');
      resultEl.className = 'mt-2 text-sm text-alert';
      resultEl.innerText = `x Network error: ${e.message}`;
    }
  }

  saveMappingFromModal() {
    const selectEl = document.getElementById('select-mapping-service');
    const sourceEl = document.getElementById('input-map-source');
    const colEl = document.getElementById('input-map-col');
    const typeEl = document.getElementById('input-map-type');
    const transEl = document.getElementById('input-map-transformer');

    const activeService = selectEl?.value;
    const source = sourceEl?.value.trim();
    let col = colEl?.value.trim().toUpperCase();
    const dataType = typeEl?.value || 'TEXT';
    const transformer = transEl?.value.trim() || null;

    if (!activeService || !source || !col) {
      alert('Source field and Target column are required.');
      return;
    }

    if (!/^[A-Z0-9_]+$/.test(col)) {
      alert('Target column name must consist of uppercase letters, numbers, and underscores (e.g. IS_ANIME, SONARR_TITLE).');
      return;
    }

    const reserved = ['ID', 'PIPELINE_KEY', 'STAGE', 'STATUS', 'LAST_UPDATED'];
    if (reserved.includes(col)) {
      alert(`Target column '${col}' is a reserved system column and cannot be used.`);
      return;
    }

    if (!this.settingsData.services[activeService].field_mappings) {
      this.settingsData.services[activeService].field_mappings = [];
    }

    const list = this.settingsData.services[activeService].field_mappings;
    if (this.editingMappingCol) {
      const idx = list.findIndex(m => m.target_column === this.editingMappingCol);
      const updated = {
        source_field: source,
        target_column: col,
        data_type: dataType,
        transformer: transformer
      };
      if (idx >= 0) {
        list[idx] = updated;
      } else {
        list.push(updated);
      }
    } else {
      this.settingsData.services[activeService].field_mappings = list.filter(m => m.target_column !== col);
      this.settingsData.services[activeService].field_mappings.push({
        source_field: source,
        target_column: col,
        data_type: dataType,
        transformer: transformer
      });
    }

    this.editingMappingCol = null;
    this.renderSettingsMappings();
    this.closeModals();
  }

  deleteMapping(serviceId, colName) {
    if (!confirm(`Delete mapping for column '${colName}'?`)) return;
    if (!this.settingsData?.services?.[serviceId]?.field_mappings) return;

    this.settingsData.services[serviceId].field_mappings = this.settingsData.services[serviceId].field_mappings.filter(m => m.target_column !== colName);
    this.renderSettingsMappings();
  }

  /* --- API SAMPLING --- */
  slugify(text) {
    return (text || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/ñ/g, 'n')
      .replace(/[^a-z0-9_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  updateSampleEndpointSuggestion(serviceId) {
    const input = document.getElementById('sample-endpoint-input');
    if (!input || !serviceId) return;
    const s = serviceId.toLowerCase();
    if (s.includes('sonarr') || s.includes('radarr')) {
      input.value = '/api/v3/history';
    } else if (s.includes('jellyfin')) {
      input.value = '/Items?Recursive=true';
    } else if (s.includes('shoko')) {
      input.value = '/api/v3/File?pageSize=10';
    } else if (s.includes('qbit')) {
      input.value = '/api/v2/torrents/info';
    }
  }

  openSampleModal() {
    const activeService = document.getElementById('select-mapping-service')?.value;
    const services = this.settingsData?.services || {};
    const serviceCfg = services[activeService];

    const badgeEl = document.getElementById('sample-service-badge');
    const idEl = document.getElementById('sample-service-id');
    const filterInput = document.getElementById('sample-filter-input');
    const filterContainer = document.getElementById('sample-filter-container');
    const resultBox = document.getElementById('api-sample-result');
    const endpointInput = document.getElementById('sample-endpoint-input');

    if (badgeEl && serviceCfg) {
      badgeEl.innerText = `${serviceCfg.name} (${activeService})`;
    } else if (badgeEl) {
      badgeEl.innerText = activeService || 'No service';
    }
    if (idEl) idEl.value = activeService || '';

    if (filterInput) filterInput.value = '';
    if (filterContainer) filterContainer.classList.add('hidden');
    if (resultBox) resultBox.innerHTML = '<p class="text-muted">Click \'Fetch Sample\' to inspect JSON schema and keys.</p>';

    this.sampleFieldsCache = [];

    // Contextual endpoints catalog filtered strictly by service
    const SERVICE_ENDPOINTS = {
      sonarr: [
        { endpoint: '/api/v3/history', label: 'History Events' },
        { endpoint: '/api/v3/queue', label: 'Active Queue' },
        { endpoint: '/api/v3/series', label: 'Series List' },
        { endpoint: '/api/v3/episode/{episodeId}', label: 'Episode Detail' },
        { endpoint: '/api/v3/tag', label: 'Tags' },
        { endpoint: '/api/v3/system/status', label: 'System Status' },
      ],
      radarr: [
        { endpoint: '/api/v3/history', label: 'History Events' },
        { endpoint: '/api/v3/queue', label: 'Active Queue' },
        { endpoint: '/api/v3/movie', label: 'Movies List' },
        { endpoint: '/api/v3/movie/{movieId}', label: 'Movie Detail' },
        { endpoint: '/api/v3/tag', label: 'Tags' },
        { endpoint: '/api/v3/system/status', label: 'System Status' },
      ],
      jellyfin: [
        { endpoint: '/Items?Recursive=true', label: 'All Library Items' },
        { endpoint: '/Libraries', label: 'Libraries' },
        { endpoint: '/System/Info', label: 'System Info' },
      ],
      shoko: [
        { endpoint: '/api/v3/File?pageSize=10', label: 'Files List' },
        { endpoint: '/api/v3/File/Search/{query}?includeDataFrom=AniDB,TvDB', label: 'Search Files (Metadata)' },
        { endpoint: '/api/v3/File/PathEndsWith/{path}', label: 'File by Path Suffix' },
        { endpoint: '/api/v3/File/{fileID}?includeDataFrom=AniDB,TvDB', label: 'File Detail (with AniDB & TvDB)' },
        { endpoint: '/api/v3/File/{fileID}/Episode', label: 'File Episode Cross-Ref' },
        { endpoint: '/api/v3/Series?pageSize=10', label: 'Series Catalog' },
        { endpoint: '/api/v3/Series/{seriesId}', label: 'Series Detail' },
        { endpoint: '/api/v3/Series/{seriesId}/AniDB', label: 'Series AniDB Titles' },
        { endpoint: '/api/v3/Group/{groupId}', label: 'Franchise Group' },
        { endpoint: '/api/v3/Init/Status', label: 'System Status' },
      ],
      qbittorrent: [
        { endpoint: '/api/v2/torrents/info', label: 'Active Torrents' },
        { endpoint: '/api/v2/transfer/info', label: 'Transfer Speeds' },
      ],
    };

    const sType = (activeService || '').toLowerCase();
    let matchedType = 'sonarr';
    if (sType.includes('radarr')) matchedType = 'radarr';
    else if (sType.includes('jellyfin')) matchedType = 'jellyfin';
    else if (sType.includes('shoko')) matchedType = 'shoko';
    else if (sType.includes('qbit')) matchedType = 'qbittorrent';
    else if (sType.includes('sonarr')) matchedType = 'sonarr';

    const epList = SERVICE_ENDPOINTS[matchedType] || SERVICE_ENDPOINTS.sonarr;
    const dl = document.getElementById('common-endpoints-list');
    if (dl) {
      dl.innerHTML = epList.map(item => `
        <option value="${item.endpoint}">${item.endpoint} (${item.label})</option>
      `).join('');
    }

    if (endpointInput) {
      endpointInput.value = epList[0].endpoint;
    }

    document.getElementById('modal-sample-api')?.classList.remove('hidden');
  }

  async fetchApiSample() {
    const serviceId = document.getElementById('sample-service-id')?.value || document.getElementById('select-mapping-service')?.value;
    const endpointInput = document.getElementById('sample-endpoint-input');
    const resultBox = document.getElementById('api-sample-result');
    const filterContainer = document.getElementById('sample-filter-container');
    const filterInput = document.getElementById('sample-filter-input');
    if (!resultBox) return;

    const endpoint = endpointInput?.value.trim() || '/api/v3/history';

    if (!serviceId) {
      alert('Please select a service to sample.');
      return;
    }

    resultBox.innerHTML = '<p class="text-muted">Fetching sample payload from service endpoint...</p>';

    try {
      const resp = await fetch('/api/v1/pipeline/sample', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ service_id: serviceId, endpoint: endpoint })
      });
      const data = await resp.json();

      if (!resp.ok || !data.success) {
        resultBox.innerHTML = `
          <div class="alert-box alert-danger">
            <strong>Sample Error:</strong> ${this.escapeHtml(data.error || data.detail || 'Failed to fetch payload')}
          </div>
        `;
        return;
      }

      this.sampleFieldsCache = data.fields || [];
      if (this.sampleFieldsCache.length === 0) {
        resultBox.innerHTML = '<p class="text-warning">Endpoint responded successfully, but returned an empty or unparseable object.</p>';
        return;
      }

      if (filterContainer) filterContainer.classList.remove('hidden');
      if (filterInput) filterInput.value = '';
      const nsInput = document.getElementById('sample-namespace-input');
      if (nsInput) {
        const epLower = endpoint.toLowerCase();
        if (epLower.includes('series')) nsInput.value = 'series';
        else if (epLower.includes('episode')) nsInput.value = 'episode';
        else if (epLower.includes('movie')) nsInput.value = 'movie';
        else if (epLower.includes('tag')) nsInput.value = 'tags';
        else nsInput.value = '';
      }
      this.renderSampleFieldsList(this.sampleFieldsCache, data.total_fields);
    } catch (e) {
      resultBox.innerHTML = `<div class="alert-box alert-danger">Network error: ${this.escapeHtml(e.message)}</div>`;
    }
  }

  renderSampleFieldsList(fields, totalCount = null) {
    const resultBox = document.getElementById('api-sample-result');
    if (!resultBox) return;

    if (fields.length === 0) {
      resultBox.innerHTML = '<p class="text-muted text-sm">No attributes matching search query.</p>';
      return;
    }

    const countLabel = totalCount !== null ? `Discovered ${totalCount} attributes.` : `Showing ${fields.length} attributes.`;

    resultBox.innerHTML = `
      <div class="mb-2 text-sm">
        <strong>${countLabel}</strong> Click any path to use as mapping source:
      </div>
      <div class="fields-list">
        ${fields.map(f => `
          <div class="field-item p-2 mb-1 bg-surface rounded border d-flex justify-content-between align-items-center">
            <div>
              <code class="font-mono text-accent cursor-pointer" onclick="app.useSampleField('${this.escapeHtml(f.path)}')">${this.escapeHtml(f.path)}</code>
              <span class="badge badge-secondary ml-2">${this.escapeHtml(f.type)}</span>
            </div>
            <span class="text-muted text-sm font-mono truncate" style="max-width: 250px;">${this.escapeHtml(f.sample)}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  useSampleField(path) {
    const nsEl = document.getElementById('sample-namespace-input');
    const ns = (nsEl?.value || '').trim();
    const finalPath = ns ? `${ns}.${path}` : path;
    this.closeModals();
    this.openAddMappingModal();
    const sourceEl = document.getElementById('input-map-source');
    if (sourceEl) sourceEl.value = finalPath;
  }

  /* --- ENGINE OVERRIDES & RETENTION --- */
  renderEngineOverrides() {
    const container = document.getElementById('engine-overrides-container');
    const badgeEl = document.getElementById('badge-overrides-count');
    if (!container || !this.settingsData) return;

    const globalInterval = this.settingsData.global_poll_interval_seconds || 300;
    const services = this.settingsData.services || {};
    const overrides = Object.entries(services).filter(([_, cfg]) => 
      cfg.poll_interval_seconds !== null && cfg.poll_interval_seconds !== undefined && cfg.poll_interval_seconds > 0
    );

    if (badgeEl) {
      badgeEl.innerText = `${overrides.length} ${overrides.length === 1 ? 'Override' : 'Overrides'}`;
      badgeEl.className = overrides.length > 0 ? 'badge badge-warning' : 'badge badge-secondary';
    }

    if (overrides.length === 0) {
      container.innerHTML = `
        <div class="empty-state p-3">
          <p class="mb-0 text-sm">All registered services currently inherit the global polling cadence (<strong>${globalInterval}s</strong>).</p>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <table class="overrides-table">
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Service ID</th>
            <th>Custom Interval</th>
            <th>Global Inherited</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${overrides.map(([sid, cfg]) => `
            <tr>
              <td><strong>${this.escapeHtml(cfg.name)}</strong></td>
              <td><span class="font-mono text-muted">${this.escapeHtml(sid)}</span></td>
              <td><span class="badge badge-warning">${cfg.poll_interval_seconds}s</span></td>
              <td><span class="text-muted font-mono">${globalInterval}s</span></td>
              <td>
                <button class="btn btn-secondary btn-sm" onclick="app.resetServiceOverride('${this.escapeHtml(sid)}')">Reset to Global</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }

  resetServiceOverride(serviceId) {
    if (!this.settingsData?.services?.[serviceId]) return;
    this.settingsData.services[serviceId].poll_interval_seconds = null;
    this.renderEngineOverrides();
    this.renderSettingsServices();
  }

  /* --- NOTIFICATION TRIGGERS --- */
  renderSettingsNotifications() {
    const container = document.getElementById('settings-notifications-container');
    if (!container || !this.settingsData) return;

    const triggers = this.settingsData.notification_triggers || [];
    if (triggers.length === 0) {
      container.innerHTML = '<div class="empty-state"><p>No notification triggers configured.</p></div>';
      return;
    }

    container.innerHTML = triggers.map(trig => `
      <div class="app-setting-item mb-3 p-3 bg-surface border rounded">
        <div class="app-setting-header d-flex justify-content-between align-items-center mb-2">
          <div class="d-flex align-items-center gap-2">
            <strong>${this.escapeHtml(trig.id)}</strong>
            <span class="badge badge-info">${this.escapeHtml(trig.event)}</span>
            <span class="badge badge-secondary">${this.escapeHtml(trig.channel)}</span>
          </div>
          <button class="btn btn-secondary btn-sm text-alert" onclick="app.deleteTrigger('${trig.id}')">Delete</button>
        </div>
        <div class="form-grid-2">
          <div class="form-group">
            <label>Target URL</label>
            <input type="text" class="form-input" id="setting-trig-${trig.id}-url" value="${this.escapeHtml(trig.target_url || '')}">
          </div>
          <div class="form-group">
            <label>Topic / Endpoint</label>
            <input type="text" class="form-input" id="setting-trig-${trig.id}-topic" value="${this.escapeHtml(trig.topic || '')}">
          </div>
        </div>
      </div>
    `).join('');
  }

  saveTriggerFromModal() {
    const idEl = document.getElementById('input-trigger-id');
    const evEl = document.getElementById('input-trigger-event');
    const chEl = document.getElementById('input-trigger-channel');
    const urlEl = document.getElementById('input-trigger-url');
    const topEl = document.getElementById('input-trigger-topic');

    const id = idEl?.value.trim();
    if (!id) {
      alert('Trigger ID is required.');
      return;
    }

    if (!this.settingsData.notification_triggers) this.settingsData.notification_triggers = [];
    this.settingsData.notification_triggers = this.settingsData.notification_triggers.filter(t => t.id !== id);

    this.settingsData.notification_triggers.push({
      id: id,
      event: evEl?.value || 'ON_INCIDENT_OPEN',
      enabled: true,
      channel: chEl?.value || 'ntfy',
      target_url: urlEl?.value.trim() || 'http://host.docker.internal:8090',
      topic: topEl?.value.trim() || 'cubi-alerts',
      priority: 'default',
      tags: 'server',
      message_template: '{event}: {details}'
    });

    this.renderSettingsNotifications();
    this.closeModals();
  }

  deleteTrigger(trigId) {
    if (!confirm(`Delete trigger '${trigId}'?`)) return;
    if (!this.settingsData?.notification_triggers) return;
    this.settingsData.notification_triggers = this.settingsData.notification_triggers.filter(t => t.id !== trigId);
    this.renderSettingsNotifications();
  }

  async restartScheduler() {
    try {
      const resp = await fetch('/api/v1/settings/scheduler/restart', { method: 'POST' });
      const data = await resp.json();
      alert(`✓ ${data.message || 'Scheduler restarted successfully'}`);
    } catch (e) {
      alert(`Error restarting scheduler: ${e.message}`);
    }
  }

  /* --- SAVE ALL SETTINGS --- */
  async saveSettings() {
    if (!this.settingsData) return;

    // Collect global retention & polling
    const retEl = document.getElementById('input-retention-days');
    if (retEl) {
      this.settingsData.retention_days = parseInt(retEl.value || '30', 10);
    }

    const globalPollEl = document.getElementById('input-global-poll');
    if (globalPollEl) {
      this.settingsData.global_poll_interval_seconds = parseInt(globalPollEl.value || '300', 10);
    }

    try {
      const resp = await fetch('/api/v1/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.settingsData),
      });
      if (resp.ok) {
        this.settingsData = await resp.json();
        alert('✓ Settings saved successfully, SERVICES_PIPELINE schema migrated, and scheduler refreshed.');
        this.renderSettingsServices();
        this.renderSettingsStages();
        this.renderSettingsMappings();
        this.renderEngineOverrides();
      } else {
        const err = await resp.text();
        alert(`Failed to save settings: ${err}`);
      }
    } catch (e) {
      alert(`Error saving settings: ${e.message}`);
    }
  }

  async testNotification() {
    try {
      const resp = await fetch('/api/v1/settings/test-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: 'ServerManager Test Alert' }),
      });
      const data = await resp.json();
      if (data.success) {
        alert('✓ Notification sent successfully!');
      } else {
        alert(`Notification failed: ${data.error || 'Check target URL / topic'}`);
      }
    } catch (e) {
      alert(`Network error: ${e.message}`);
    }
  }

  escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}

// Global initialization
window.addEventListener('DOMContentLoaded', () => {
  window.app = new ServerManagerApp();
  try {
    window.app = window.app;
    if (typeof globalThis !== 'undefined') globalThis.app = window.app;
  } catch (e) {}
});
