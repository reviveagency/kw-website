// kw-shell.jsx — Reusable screen chrome.
// KWStatusBar (battery/signal), KWTopBar (mono title + icons),
// KWPageHeader (eyebrow + huge title), KWTabBar (bottom nav),
// KWChromeScreen (full screen w/ status + topbar + content + tabbar).

function KWStatusBar({ time = '9:41' }) {
  return (
    <div className="kw-statusbar">
      <span>{time}</span>
      <div className="kw-statusbar-icons">
        {/* signal */}
        <svg width="18" height="11" viewBox="0 0 18 11">
          <rect x="0" y="7" width="3" height="4" fill="#fff"/>
          <rect x="5" y="5" width="3" height="6" fill="#fff"/>
          <rect x="10" y="2" width="3" height="9" fill="#fff"/>
          <rect x="15" y="0" width="3" height="11" fill="#fff" opacity="0.4"/>
        </svg>
        {/* wifi */}
        <svg width="16" height="11" viewBox="0 0 16 11">
          <path d="M8 3a8.5 8.5 0 016.5 3l-1.2 1.2A6.8 6.8 0 008 4.5a6.8 6.8 0 00-5.3 2.7L1.5 6A8.5 8.5 0 018 3z" fill="#fff"/>
          <path d="M8 6a5.5 5.5 0 014.2 2l-1.2 1.2A3.8 3.8 0 008 7.5a3.8 3.8 0 00-3 1.7L3.8 8A5.5 5.5 0 018 6z" fill="#fff"/>
          <circle cx="8" cy="10" r="1.2" fill="#fff"/>
        </svg>
        {/* battery */}
        <svg width="26" height="12" viewBox="0 0 26 12">
          <rect x="0.5" y="0.5" width="22" height="11" rx="2.5" fill="none" stroke="#fff" strokeOpacity="0.45"/>
          <rect x="2" y="2" width="19" height="8" rx="1" fill="#fff"/>
          <rect x="24" y="4" width="2" height="4" rx="0.5" fill="#fff" fillOpacity="0.45"/>
        </svg>
      </div>
    </div>
  );
}

function KWTopBar({ title, leading, trailing, onBack }) {
  return (
    <div className="kw-topbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, minWidth: 36 }}>
        {onBack ? (
          <div className="kw-topbar-icon" onClick={onBack}>
            <IconArrowL size={20} />
          </div>
        ) : leading || <div style={{ width: 36 }} />}
      </div>
      <div className="kw-topbar-title">{title}</div>
      <div style={{ display: 'flex', gap: 4, minWidth: 36, justifyContent: 'flex-end' }}>
        {trailing || <div style={{ width: 36 }} />}
      </div>
    </div>
  );
}

function KWPageHeader({ eyebrow, title, sub }) {
  return (
    <div className="kw-page-header">
      {eyebrow && <div className="kw-page-eyebrow">{eyebrow}</div>}
      <h1 className="kw-page-title">{title}</h1>
      {sub && <p className="kw-page-sub">{sub}</p>}
    </div>
  );
}

function KWTabBar({ active, onChange }) {
  const tabs = [
    { id: 'home',   label: 'STATUS',   Icon: IconHome },
    { id: 'data',   label: 'DATA',     Icon: IconChart },
    { id: 'alerts', label: 'ALERTS',   Icon: IconBell, badge: 2 },
    { id: 'me',     label: 'ACCOUNT',  Icon: IconUser },
  ];
  return (
    <div className="kw-tabbar">
      {tabs.map(({ id, label, Icon: I, badge }) => (
        <div key={id} className={'kw-tab ' + (active === id ? 'active' : '')} onClick={() => onChange(id)}>
          <div style={{ position: 'relative' }}>
            <I size={20} />
            {badge && (
              <span style={{
                position: 'absolute', top: -3, right: -8,
                minWidth: 14, height: 14, padding: '0 4px',
                background: '#0F62FE', color: '#fff',
                font: '500 9px/14px "DM Mono", monospace',
                textAlign: 'center', borderRadius: 7,
              }}>{badge}</span>
            )}
          </div>
          <span className="kw-tab-label">{label}</span>
        </div>
      ))}
    </div>
  );
}

// Bezel — subtle rounded phone frame around screen content.
// Using IOSDevice would impose its own status bar/title; we want full control.
function KWBezel({ children, width = 390, height = 844 }) {
  return (
    <div style={{
      width, height, borderRadius: 54, overflow: 'hidden',
      background: '#000',
      boxShadow: '0 0 0 11px #0a0a0a, 0 0 0 12px rgba(255,255,255,0.06), 0 60px 120px rgba(0,0,0,0.6), 0 20px 40px rgba(0,0,0,0.4)',
      position: 'relative',
      flexShrink: 0,
    }}>
      {/* dynamic island */}
      <div style={{
        position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)',
        width: 122, height: 35, borderRadius: 22, background: '#000', zIndex: 100,
      }} />
      {/* home indicator */}
      <div style={{
        position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)',
        width: 134, height: 5, borderRadius: 3, background: 'rgba(255,255,255,0.55)',
        zIndex: 100, pointerEvents: 'none',
      }} />
      <div className="kw-app" style={{ width: '100%', height: '100%' }}>
        {children}
      </div>
    </div>
  );
}

Object.assign(window, { KWStatusBar, KWTopBar, KWPageHeader, KWTabBar, KWBezel });
