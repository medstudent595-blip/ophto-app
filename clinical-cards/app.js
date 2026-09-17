const state = {
  currentView: 'homeView',
  previousViews: [],
  favorites: JSON.parse(localStorage.getItem('ophtalmo-favorites') || '[]'),
  recent: JSON.parse(localStorage.getItem('ophtalmo-recent') || '[]'),
  theme: localStorage.getItem('ophtalmo-theme') || 'light'
};

const SECTION_META = [
  ['practical', '⚡', 'En pratique', ''],
  ['severity', '!', 'Signes de gravité', 'danger-section'],
  ['diagnosis', '⌕', 'Diagnostic', ''],
  ['workup', '◫', 'Bilan', ''],
  ['classification', '▦', 'Classification', 'purple-section'],
  ['decision', '⇢', 'Conduite à tenir', 'warning-section'],
  ['treatment', '✚', 'Traitement', 'success-section'],
  ['followup', '◉', 'Surveillance', ''],
  ['pitfalls', '⚠', 'Pièges / erreurs', 'danger-section']
];

function qs(id) { return document.getElementById(id); }
function escapeHtml(str='') { return str.replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function applyTheme() { document.documentElement.dataset.theme = state.theme; qs('themeToggle').textContent = state.theme === 'dark' ? '☀' : '☾'; }
function showView(viewId, push = true) { if (push && state.currentView !== viewId) state.previousViews.push(state.currentView); document.querySelectorAll('.view').forEach(v => v.classList.remove('active')); qs(viewId).classList.add('active'); state.currentView = viewId; document.querySelectorAll('.nav-item').forEach(btn => btn.classList.toggle('active', btn.dataset.nav === viewId)); window.scrollTo({ top: 0, behavior: 'instant' }); }
function goBack() { showView(state.previousViews.pop() || 'homeView', false); }
function pathologyCountForCategory(id) { return OPHTALMO_DATA.sheets.filter(s => s.category === id).length; }

function renderHome() {
  qs('pathologyCount').textContent = `${OPHTALMO_DATA.sheets.length} fiche${OPHTALMO_DATA.sheets.length > 1 ? 's' : ''}`;
  qs('categoryGrid').innerHTML = OPHTALMO_DATA.categories.map(cat => `<button class="category-card" data-category="${cat.id}"><span class="category-icon">${cat.icon}</span><strong>${escapeHtml(cat.name)}</strong><small>${pathologyCountForCategory(cat.id)} fiche${pathologyCountForCategory(cat.id) > 1 ? 's' : ''}</small></button>`).join('');
  const pinned = OPHTALMO_DATA.sheets.filter(s => s.pinned);
  qs('pinnedCards').innerHTML = pinned.length ? pinned.map(sheetCard).join('') : emptyState('Aucune fiche épinglée.');
}
function sheetCard(s) { const cat = OPHTALMO_DATA.categories.find(c => c.id === s.category); return `<button class="list-card" data-sheet="${s.id}"><span class="quick-icon">${cat?.icon || '•'}</span><span class="grow"><strong>${escapeHtml(s.title)}</strong><small>${escapeHtml(s.summary || '')}</small></span><span class="badge">${escapeHtml(cat?.name || '')}</span></button>`; }
function emptyState(text) { return `<div class="empty-state">${escapeHtml(text)}</div>`; }
function openCategory(id) { const cat = OPHTALMO_DATA.categories.find(c => c.id === id); if (!cat) return; qs('categoryTitle').textContent = cat.name; const sheets = OPHTALMO_DATA.sheets.filter(s => s.category === id); qs('categoryList').innerHTML = sheets.length ? sheets.map(sheetCard).join('') : emptyState('Aucune fiche intégrée pour le moment.'); showView('categoryView'); }
function openSheet(id) { const sheet = OPHTALMO_DATA.sheets.find(s => s.id === id); if (!sheet) return; addRecent(id); const cat = OPHTALMO_DATA.categories.find(c => c.id === sheet.category); const fav = state.favorites.includes(id); qs('sheetContent').innerHTML = `<div class="sheet-hero"><div class="sheet-topline"><div><p class="eyebrow">${escapeHtml(cat?.name || 'Fiche clinique')}</p><h2>${escapeHtml(sheet.title)}</h2><p class="muted">${escapeHtml(sheet.summary || '')}</p></div><div class="sheet-actions"><button class="favorite-btn ${fav ? 'on' : ''}" data-favorite="${sheet.id}" aria-label="Favori">★</button></div></div><div class="source-note"><strong>Source :</strong> ${escapeHtml(sheet.source || 'Non renseignée')}</div></div>${SECTION_META.map(([key, icon, title, cls]) => sectionBlock(key, icon, title, cls, sheet.sections?.[key])).join('')}`; showView('sheetView'); }
function sectionBlock(key, icon, title, cls, data) { let body = '<div class="placeholder">Section non renseignée.</div>'; if (Array.isArray(data) && data.length) body = `<ul>${data.map(x => `<li>${escapeHtml(x)}</li>`).join('')}</ul>`; else if (typeof data === 'string' && data.trim()) body = `<p>${escapeHtml(data)}</p>`; return `<details class="section-card ${cls}" ${key === 'practical' ? 'open' : ''}><summary><span class="section-icon">${icon}</span>${escapeHtml(title)}</summary><div class="section-content">${body}</div></details>`; }
function addRecent(id) { state.recent = [id, ...state.recent.filter(x => x !== id)].slice(0, 12); localStorage.setItem('ophtalmo-recent', JSON.stringify(state.recent)); renderRecents(); }
function toggleFavorite(id) { state.favorites = state.favorites.includes(id) ? state.favorites.filter(x => x !== id) : [id, ...state.favorites]; localStorage.setItem('ophtalmo-favorites', JSON.stringify(state.favorites)); renderFavorites(); renderHome(); const btn = document.querySelector(`[data-favorite="${id}"]`); if (btn) btn.classList.toggle('on', state.favorites.includes(id)); }
function renderFavorites() { const sheets = state.favorites.map(id => OPHTALMO_DATA.sheets.find(s => s.id === id)).filter(Boolean); qs('favoritesList').innerHTML = sheets.length ? sheets.map(sheetCard).join('') : emptyState('Aucun favori pour le moment.'); }
function renderRecents() { const sheets = state.recent.map(id => OPHTALMO_DATA.sheets.find(s => s.id === id)).filter(Boolean); qs('recentList').innerHTML = sheets.length ? sheets.map(sheetCard).join('') : emptyState('Aucune fiche récemment consultée.'); }
function renderEmergency() { const sheets = OPHTALMO_DATA.sheets.filter(s => s.emergency); qs('emergencyList').innerHTML = sheets.length ? sheets.map(sheetCard).join('') : emptyState('Aucune fiche d’urgence intégrée. Cette zone reste volontairement vide jusqu’à validation des sources.'); }
function renderTools() { qs('toolsList').innerHTML = OPHTALMO_DATA.tools.map(t => `<div class="list-card" role="group"><span class="quick-icon">⌁</span><span class="grow"><strong>${escapeHtml(t.title)}</strong><small>${escapeHtml(t.subtitle)}</small></span><span class="badge">À remplir</span></div>`).join(''); }
function handleSearch(value) { const box = qs('searchResults'); const q = value.trim().toLowerCase(); if (!q) { box.classList.add('hidden'); box.innerHTML = ''; return; } const sheets = OPHTALMO_DATA.sheets.filter(s => { const cat = OPHTALMO_DATA.categories.find(c => c.id === s.category)?.name || ''; return [s.title, s.summary, cat, ...(s.tags || [])].join(' ').toLowerCase().includes(q); }); const tools = OPHTALMO_DATA.tools.filter(t => `${t.title} ${t.subtitle}`.toLowerCase().includes(q)); const parts = []; if (sheets.length) parts.push(...sheets.map(sheetCard)); if (tools.length) parts.push(...tools.map(t => `<div class="list-card"><span class="quick-icon">⌁</span><span class="grow"><strong>${escapeHtml(t.title)}</strong><small>${escapeHtml(t.subtitle)}</small></span><span class="badge">Outil</span></div>`)); box.innerHTML = parts.length ? parts.join('') : emptyState('Aucun résultat.'); box.classList.remove('hidden'); }

document.addEventListener('click', e => { const categoryBtn = e.target.closest('[data-category]'); if (categoryBtn) return openCategory(categoryBtn.dataset.category); const sheetBtn = e.target.closest('[data-sheet]'); if (sheetBtn) { qs('searchResults').classList.add('hidden'); return openSheet(sheetBtn.dataset.sheet); } const favoriteBtn = e.target.closest('[data-favorite]'); if (favoriteBtn) return toggleFavorite(favoriteBtn.dataset.favorite); const quick = e.target.closest('[data-view]'); if (quick) return showView(quick.dataset.view); const nav = e.target.closest('[data-nav]'); if (nav) return showView(nav.dataset.nav); if (e.target.closest('[data-back]')) return goBack(); });
qs('searchInput').addEventListener('input', e => handleSearch(e.target.value));
qs('themeToggle').addEventListener('click', () => { state.theme = state.theme === 'dark' ? 'light' : 'dark'; localStorage.setItem('ophtalmo-theme', state.theme); applyTheme(); });
document.addEventListener('click', e => { if (!e.target.closest('.search-wrap') && !e.target.closest('#searchResults')) qs('searchResults').classList.add('hidden'); });
if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(() => {});
applyTheme(); renderHome(); renderFavorites(); renderRecents(); renderEmergency(); renderTools();
