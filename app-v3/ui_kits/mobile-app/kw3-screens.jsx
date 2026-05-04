// kw3-screens.jsx — v3: v2 brand grammar + v1 functional surface area.
// Shares app-v2.css. No welcome splash, no marketing copy, no decorative variants.
// Tabs: HOME · DATA · ALERTS · ACCOUNT.

const I3 = ({ children, s = 20, c = 'currentColor', sw = 1.5 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={sw} strokeLinecap="square" strokeLinejoin="miter">{children}</svg>
);
const Ic3 = {
  bell:    (p) => <I3 {...p}><path d="M6 16V11a6 6 0 0112 0v5l2 2H4l2-2zM10 20a2 2 0 004 0"/></I3>,
  light:   (p) => <I3 {...p}><path d="M9 18h6M10 21h4M9 14a5 5 0 116 0c-1 1-1 2-1 3H10c0-1 0-2-1-3z"/></I3>,
  jet:     (p) => <I3 {...p}><path d="M12 3v8M8 11h8M6 14c2 0 2 4 6 4s4-4 6-4M4 18c2 0 3 3 8 3s6-3 8-3"/></I3>,
  heat:    (p) => <I3 {...p}><path d="M9 21V5a3 3 0 016 0v16M3 12h2M19 12h2"/></I3>,
  blower:  (p) => <I3 {...p}><path d="M5 12c2-3 6-3 7 0s-2 5 0 8M14 5c-2 3 1 4 3 4s4-2 4-4M3 6h4"/></I3>,
  power:   (p) => <I3 {...p}><path d="M12 4v8M5.5 9a8 8 0 1013 0"/></I3>,
  pool:    (p) => <I3 {...p}><path d="M3 18c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5M3 14c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5M7 11V4M17 11V4M7 7h10"/></I3>,
  data:    (p) => <I3 {...p}><path d="M3 20h18M5 16l4-6 4 4 5-9"/></I3>,
  alert:   (p) => <I3 {...p}><path d="M12 3l10 18H2L12 3zM12 10v5M12 18v.5"/></I3>,
  me:      (p) => <I3 {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0116 0v1"/></I3>,
  back:    (p) => <I3 {...p}><path d="M15 6l-6 6 6 6"/></I3>,
  chev:    (p) => <I3 {...p}><path d="M9 6l6 6-6 6"/></I3>,
  close:   (p) => <I3 {...p}><path d="M6 6l12 12M18 6L6 18"/></I3>,
  plus:    (p) => <I3 {...p}><path d="M12 5v14M5 12h14"/></I3>,
  drop:    (p) => <I3 {...p}><path d="M12 3l6 9a6 6 0 11-12 0l6-9z"/></I3>,
  edit:    (p) => <I3 {...p}><path d="M14 4l6 6L10 20H4v-6L14 4z"/></I3>,
};

// status bar
function SB3() {
  return (
    <div className="kw2-sb">
      <span>9:41</span>
      <div className="kw2-sb-icons">
        <svg width="18" height="11" viewBox="0 0 18 11"><rect x="0" y="7" width="3" height="4" fill="#fff"/><rect x="5" y="5" width="3" height="6" fill="#fff"/><rect x="10" y="2" width="3" height="9" fill="#fff"/><rect x="15" y="0" width="3" height="11" fill="#fff" opacity="0.4"/></svg>
        <svg width="16" height="11" viewBox="0 0 16 11"><path d="M8 3a8.5 8.5 0 016.5 3l-1.2 1.2A6.8 6.8 0 008 4.5a6.8 6.8 0 00-5.3 2.7L1.5 6A8.5 8.5 0 018 3z" fill="#fff"/><path d="M8 6a5.5 5.5 0 014.2 2l-1.2 1.2A3.8 3.8 0 008 7.5a3.8 3.8 0 00-3 1.7L3.8 8A5.5 5.5 0 018 6z" fill="#fff"/><circle cx="8" cy="10" r="1.2" fill="#fff"/></svg>
        <svg width="26" height="12" viewBox="0 0 26 12"><rect x="0.5" y="0.5" width="22" height="11" rx="2.5" fill="none" stroke="#fff" strokeOpacity="0.45"/><rect x="2" y="2" width="19" height="8" rx="1" fill="#fff"/><rect x="24" y="4" width="2" height="4" rx="0.5" fill="#fff" fillOpacity="0.45"/></svg>
      </div>
    </div>
  );
}

// 4 tabs (collapsed from v2's 5)
function Tabs3({ active, go }) {
  const t = [
    { id: 'home',    label: 'HOME',    I: Ic3.power },
    { id: 'data',    label: 'DATA',    I: Ic3.data },
    { id: 'alerts',  label: 'ALERTS',  I: Ic3.alert },
    { id: 'account', label: 'ACCOUNT', I: Ic3.me },
  ];
  return (
    <div className="kw2-tabs">
      {t.map(({ id, label, I: Icn }) => (
        <div key={id} className={'kw2-tab ' + (active === id ? 'active' : '')} onClick={() => go(id)}>
          <Icn s={18}/>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

function Top3({ title, site, back, go }) {
  return (
    <div className="kw2-top">
      <div className="kw2-top-left">
        {back && <div className="kw2-top-icon" onClick={() => go(back)}><Ic3.back s={20}/></div>}
        <span className="kw2-top-title">{title}</span>
        {site && <span className="kw2-top-site">{site}</span>}
      </div>
      <div className="kw2-top-icon" onClick={() => go && go('alerts')}><Ic3.bell s={18}/><span className="badge"/></div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 00 — WELCOME / CONNECTING (static — no auto-advance, used in showroom)
// ─────────────────────────────────────────────────────────────
function Sc3Welcome({ go, autoAdvance = false }) {
  React.useEffect(() => {
    if (!autoAdvance) return;
    const t = setTimeout(() => go && go('login'), 2200);
    return () => clearTimeout(t);
  }, [autoAdvance]);
  return (
    <div className="kw2-screen">
      <SB3 />
      <div className="kw2-welcome">
        <div />
        <div className="kw2-welcome-logo">
          <img src="ui_kits/mobile-app/KW_WHITE_FULL.png" alt="Kontrolwater" className="kw2-welcome-mark"/>
        </div>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:14 }}>
          <div className="kw2-welcome-pulse">
            <svg viewBox="0 0 240 60" preserveAspectRatio="none">
              <path d="M0 30 H80 Q92 30 92 18 Q92 6 104 6 H136 Q148 6 148 18 Q148 30 160 30 H240" stroke="#0F62FE" strokeWidth="1.5" fill="none" strokeDasharray="4 8">
                <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="1.6s" repeatCount="indefinite"/>
              </path>
            </svg>
          </div>
          <div className="kw2-welcome-foot">CONNECTING TO <b>KW1100</b></div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 01 — SIGN IN  (no welcome splash; opens straight here)
// ─────────────────────────────────────────────────────────────
function Sc3Login({ go }) {
  const [remember, setRemember] = React.useState(true);
  return (
    <div className="kw2-screen">
      <SB3 />
      <div style={{ padding:'40px 18px 20px' }}>
        <img src="ui_kits/mobile-app/KW_WHITE_FULL.png" alt="Kontrolwater" style={{ height:22, width:'auto', display:'block' }}/>
        <div style={{ font:'600 22px var(--font-sans)', letterSpacing:'-0.02em', marginTop:32 }}>Sign in</div>
      </div>
      <div className="kw2-form">
        <div className="kw2-field">
          <span className="kw2-field-label">Email</span>
          <input type="email" placeholder="you@example.com" defaultValue=""/>
        </div>
        <div className="kw2-field">
          <span className="kw2-field-label">Password</span>
          <input type="password" placeholder="••••••••" defaultValue=""/>
        </div>
        <div className="kw2-row" style={{ border:0, padding:'8px 0' }} onClick={() => setRemember(!remember)}>
          <div className={'kw2-sw ' + (remember ? 'on' : '')}/>
          <div className="kw2-row-text"><span className="kw2-row-title" style={{ fontSize:13 }}>Remember me</span></div>
        </div>
      </div>
      <div style={{ flex:1 }}/>
      <button className="kw2-cta" onClick={() => go('home')}>SIGN IN</button>
      <div className="kw2-form-link">FORGOT PASSWORD?</div>
      <div style={{ height:30 }}/>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 02 — HOME  (toggle deck — keeps v2 grammar, slimmer copy)
// ─────────────────────────────────────────────────────────────
function Sc3Home({ go }) {
  const [s, setS] = React.useState({ jet1: false, jet2: false, light1: true, light2: false, heater: true, blower: false });
  const t = (k) => setS({ ...s, [k]: !s[k] });
  return (
    <div className="kw2-screen">
      <SB3 />
      <Top3 title="Kontrolwater" site="C25" go={go}/>
      <div className="kw2-scroll">
        <div className="kw2-strip">
          <div className="kw2-strip-row">
            <span className="kw2-strip-label"><span className="kw2-strip-dot kw2-pulse-dot"/>POOL · 26.4° · HEATING</span>
            <span className="kw2-strip-val">→ 28°</span>
          </div>
          <div className="kw2-strip-row">
            <span className="kw2-strip-label"><span className="kw2-strip-dot muted"/>FILTER · ECO</span>
            <span className="kw2-strip-val">2.4 m³/h</span>
          </div>
        </div>

        <div className="kw2-sec"><span>QUICK ACTIONS</span></div>
        <div className="kw2-tiles">
          {[
            ['light1', 'Light 1',    s.light1, Ic3.light],
            ['light2', 'Light 2',    s.light2, Ic3.light],
            ['jet1',   'Jet 1',      s.jet1,   Ic3.jet],
            ['jet2',   'Jet 2',      s.jet2,   Ic3.jet],
            ['heater', 'Heater',     s.heater, Ic3.heat],
            ['blower', 'Air blower', s.blower, Ic3.blower],
          ].map(([k, name, on, Icn]) => (
            <div key={k} className={'kw2-tile ' + (on ? 'on' : '')} onClick={() => t(k)}>
              <div className="kw2-tile-head">
                <span className="kw2-tile-icon"><Icn s={20}/></span>
                <div className={'kw2-sw ' + (on ? 'on' : '')}/>
              </div>
              <div>
                <div className="kw2-tile-state">{on ? 'ON' : 'OFF'}</div>
                <div className="kw2-tile-name">{name}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="kw2-sec"><span>SHORTCUTS</span></div>
        <div className="kw2-list">
          <div className="kw2-row" onClick={() => go('pool')}>
            <span className="kw2-row-icon"><Ic3.pool/></span>
            <div className="kw2-row-text"><div className="kw2-row-title">Pool</div><div className="kw2-row-sub">CHEM · FILTER · TEMP</div></div>
            <Ic3.chev s={14} c="rgba(255,255,255,0.3)"/>
          </div>
          <div className="kw2-row" onClick={() => go('schedule')}>
            <span className="kw2-row-icon"><Ic3.drop/></span>
            <div className="kw2-row-text"><div className="kw2-row-title">Irrigation schedule</div><div className="kw2-row-sub">ZONE 1 · 2 SLOTS</div></div>
            <Ic3.chev s={14} c="rgba(255,255,255,0.3)"/>
          </div>
        </div>
        <div style={{ height:20 }}/>
      </div>
      <Tabs3 active="home" go={go}/>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 03 — POOL (controls)
// ─────────────────────────────────────────────────────────────
function Sc3Pool({ go }) {
  const [mode, setMode] = React.useState('eco');
  const target = 28; const now = 26.4;
  return (
    <div className="kw2-screen">
      <SB3 />
      <Top3 title="Pool" site="GROUND" back="home" go={go}/>
      <div className="kw2-scroll">
        <div className="kw2-sec"><span>WATER QUALITY</span><span className="act" onClick={() => go('data')}>DATA</span></div>
        <div style={{ margin:'0 18px', border:'1px solid rgba(255,255,255,0.06)', padding:'14px 16px', display:'flex', flexDirection:'column', gap:12 }}>
          <div className="kw2-strip-row" style={{ marginBottom:4 }}>
            <span className="kw2-strip-label"><span className="kw2-strip-dot"/>QUALITY · GOOD</span>
            <span className="kw2-strip-val">98 / 100</span>
          </div>
          <div className="kw2-level"><div className="kw2-level-head"><span className="kw2-level-name">pH</span><span className="kw2-level-val">7.4</span></div><div className="kw2-level-bar" style={{ '--w':'52%' }}/></div>
          <div className="kw2-level"><div className="kw2-level-head"><span className="kw2-level-name">ORP</span><span className="kw2-level-val">720 mV</span></div><div className="kw2-level-bar" style={{ '--w':'70%' }}/></div>
          <div className="kw2-level"><div className="kw2-level-head"><span className="kw2-level-name">Free Cl</span><span className="kw2-level-val">1.2 ppm</span></div><div className="kw2-level-bar" style={{ '--w':'58%' }}/></div>
        </div>

        <div className="kw2-sec"><span>FILTRATION</span></div>
        <div className="kw2-seg">
          {['eco', 'medium', 'boost'].map(m => (
            <div key={m} className={'kw2-seg-item ' + (mode === m ? 'active' : '')} onClick={() => setMode(m)}>{m}</div>
          ))}
        </div>
        <div style={{ margin:'8px 18px 0', font:'400 10px var(--font-mono)', letterSpacing:'0.14em', color:'rgba(255,255,255,0.42)', textTransform:'uppercase' }}>
          {mode === 'eco' ? '6h / day · low rpm' : mode === 'medium' ? '10h / day · 2400 rpm' : '14h / day · 3200 rpm'}
        </div>

        <div className="kw2-sec"><span>TEMPERATURE</span></div>
        <div className="kw2-metric-card">
          <div>
            <div className="kw2-metric-now">{now}<small>°C</small></div>
            <div style={{ font:'400 10px var(--font-mono)', letterSpacing:'0.14em', color:'rgba(255,255,255,0.42)', textTransform:'uppercase', marginTop:6 }}>HEATING</div>
          </div>
          <div className="kw2-metric-target">
            <div className="kw2-metric-target-label">TARGET</div>
            <div className="kw2-metric-target-val">{target}°C</div>
          </div>
        </div>
        <div className="kw2-progress" style={{ marginTop:12 }}><div className="kw2-progress-fill" style={{ width:`${(now/target)*100}%` }}/></div>
        <button className="kw2-cta ghost" onClick={() => go('temp')}>SET TEMPERATURE</button>
        <div style={{ height:20 }}/>
      </div>
      <Tabs3 active="home" go={go}/>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 04 — DATA (full readings grid, drill-in via list)
// ─────────────────────────────────────────────────────────────
function Sc3Data({ go }) {
  const params = [
    ['pH',       '7.4',   'Acidity',          '7.2 – 7.6',  '52%', false],
    ['ORP',      '720',   'Sanitation, mV',   '650 – 750',  '70%', false],
    ['Free Cl',  '1.2',   'ppm',              '1.0 – 2.0',  '58%', false],
    ['Temp',     '26.4',  '°C',               '26 – 30',    '48%', false],
    ['Salt',     '4.1',   'g/L',              '3.5 – 4.5',  '60%', false],
    ['TDS',      '4 200', 'ppm',              '< 5 000',    '84%', false],
    ['Cond',     '7.2',   'mS/cm',            '6 – 8',      '60%', false],
    ['Flow',     '2.4',   'm³/h, intake',     '2 – 4',      '40%', false],
  ];
  return (
    <div className="kw2-screen">
      <SB3 />
      <Top3 title="Readings" site="POOL · GROUND" go={go}/>
      <div className="kw2-scroll">
        <div className="kw2-sec"><span>LIVE · 09:41</span><span className="act">24 H</span></div>
        <div style={{ margin:'0 18px', border:'1px solid rgba(255,255,255,0.06)' }}>
          {params.map(([name, val, unit, range, w, warn], i) => (
            <div key={i} style={{ padding:'12px 14px', borderBottom: i < params.length - 1 ? '1px solid rgba(255,255,255,0.055)' : '0', display:'flex', flexDirection:'column', gap:6 }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
                <div style={{ display:'flex', flexDirection:'column', gap:2 }}>
                  <span style={{ font:'500 11px var(--font-mono)', letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(255,255,255,0.7)' }}>{name}</span>
                  <span style={{ font:'400 10px var(--font-mono)', letterSpacing:'0.06em', color:'rgba(255,255,255,0.32)' }}>{unit}</span>
                </div>
                <div style={{ textAlign:'right', display:'flex', flexDirection:'column', gap:2 }}>
                  <span style={{ font:'500 16px var(--font-mono)', color:'#fff' }}>{val}</span>
                  <span style={{ font:'400 10px var(--font-mono)', letterSpacing:'0.06em', color:'rgba(255,255,255,0.32)' }}>{range}</span>
                </div>
              </div>
              <div className={'kw2-level-bar' + (warn ? ' warn' : '')} style={{ '--w': w }}/>
            </div>
          ))}
        </div>
        <div style={{ height:20 }}/>
      </div>
      <Tabs3 active="data" go={go}/>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 05 — ALERTS (tabular inbox)
// ─────────────────────────────────────────────────────────────
function Sc3Alerts({ go }) {
  const items = [
    ['09:14', 'pH HIGH',          '7.9 ppm · target 7.4',       'open'],
    ['08:02', 'FILTER PRESSURE',  '+18% · backwash recommended', 'open'],
    ['Yest.', 'COVER OPEN > 4h',  'auto-close at 22:00',        'open'],
    ['Mon',   'DOSE COMPLETE',    'pH minus · 240 ml',          'done'],
    ['Sun',   'ORP RECOVERED',    'back to range',               'done'],
    ['Sun',   'PUMP RESTART',     'after firmware update',       'done'],
  ];
  return (
    <div className="kw2-screen">
      <SB3 />
      <Top3 title="Alerts" go={go}/>
      <div className="kw2-scroll">
        <div className="kw2-sec"><span>OPEN · 3</span><span className="act">CLEAR ALL</span></div>
        <div style={{ margin:'0 18px', border:'1px solid rgba(255,255,255,0.06)' }}>
          {items.map(([time, title, sub, state], i) => (
            <div key={i} onClick={() => go('alert')} style={{ padding:'14px 16px', borderBottom: i < items.length - 1 ? '1px solid rgba(255,255,255,0.055)' : '0', display:'flex', alignItems:'center', gap:12, cursor:'pointer' }}>
              <span style={{ width:6, height:6, borderRadius:'50%', flexShrink:0, background: state === 'open' ? '#0F62FE' : 'rgba(255,255,255,0.18)', boxShadow: state === 'open' ? '0 0 6px rgba(15,98,254,0.5)' : 'none' }}/>
              <div style={{ flex:1, minWidth:0, display:'flex', flexDirection:'column', gap:2 }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', gap:8 }}>
                  <span style={{ font:'500 12px var(--font-mono)', letterSpacing:'0.1em', color:'#fff' }}>{title}</span>
                  <span style={{ font:'400 10px var(--font-mono)', letterSpacing:'0.06em', color:'rgba(255,255,255,0.42)', flexShrink:0 }}>{time}</span>
                </div>
                <span style={{ font:'400 11px var(--font-mono)', color:'rgba(255,255,255,0.55)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{sub}</span>
              </div>
              <Ic3.chev s={14} c="rgba(255,255,255,0.3)"/>
            </div>
          ))}
        </div>
        <div style={{ height:20 }}/>
      </div>
      <Tabs3 active="alerts" go={go}/>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 06 — ALERT DETAIL
// ─────────────────────────────────────────────────────────────
function Sc3Alert({ go }) {
  return (
    <div className="kw2-screen">
      <SB3 />
      <Top3 title="Alert" back="alerts" go={go}/>
      <div className="kw2-scroll">
        <div style={{ padding:'12px 18px 24px' }}>
          <div style={{ font:'400 10px var(--font-mono)', letterSpacing:'0.18em', color:'#0F62FE', textTransform:'uppercase' }}>09:14 · TODAY</div>
          <div style={{ font:'600 22px var(--font-sans)', letterSpacing:'-0.015em', marginTop:6 }}>pH high</div>
          <div style={{ font:'400 12px var(--font-mono)', color:'rgba(255,255,255,0.55)', marginTop:6 }}>POOL · GROUND · C25</div>
        </div>

        <div style={{ margin:'0 18px', border:'1px solid rgba(255,255,255,0.06)', padding:'14px 16px', display:'flex', flexDirection:'column', gap:10 }}>
          <div style={{ display:'flex', justifyContent:'space-between' }}>
            <span style={{ font:'400 10px var(--font-mono)', letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(255,255,255,0.42)' }}>READING</span>
            <span style={{ font:'500 13px var(--font-mono)' }}>7.9</span>
          </div>
          <div style={{ display:'flex', justifyContent:'space-between' }}>
            <span style={{ font:'400 10px var(--font-mono)', letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(255,255,255,0.42)' }}>TARGET</span>
            <span style={{ font:'500 13px var(--font-mono)' }}>7.4</span>
          </div>
          <div style={{ display:'flex', justifyContent:'space-between' }}>
            <span style={{ font:'400 10px var(--font-mono)', letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(255,255,255,0.42)' }}>RANGE</span>
            <span style={{ font:'500 13px var(--font-mono)' }}>7.2 – 7.6</span>
          </div>
          <div style={{ display:'flex', justifyContent:'space-between' }}>
            <span style={{ font:'400 10px var(--font-mono)', letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(255,255,255,0.42)' }}>SUGGESTED</span>
            <span style={{ font:'500 13px var(--font-mono)', color:'#0F62FE' }}>pH minus · 180 ml</span>
          </div>
        </div>

        <div className="kw2-sec"><span>RECENT TREND</span></div>
        <div style={{ margin:'0 18px', border:'1px solid rgba(255,255,255,0.06)', padding:'18px 16px' }}>
          <svg viewBox="0 0 320 90" width="100%" height="90" preserveAspectRatio="none">
            <line x1="0" y1="30" x2="320" y2="30" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 4"/>
            <line x1="0" y1="60" x2="320" y2="60" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 4"/>
            <path d="M0 56 L40 54 L80 50 L120 46 L160 40 L200 32 L240 22 L280 16 L320 14" stroke="#0F62FE" strokeWidth="1.5" fill="none"/>
            <circle cx="320" cy="14" r="3" fill="#0F62FE"/>
          </svg>
          <div style={{ display:'flex', justifyContent:'space-between', marginTop:10, font:'400 9px var(--font-mono)', letterSpacing:'0.14em', color:'rgba(255,255,255,0.32)' }}>
            <span>−24H</span><span>−12H</span><span>NOW</span>
          </div>
        </div>

        <button className="kw2-cta" onClick={() => go('alerts')}>RUN DOSE NOW</button>
        <button className="kw2-cta ghost" onClick={() => go('alerts')}>DISMISS</button>
        <div style={{ height:20 }}/>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 07 — HISTORY (activity log)
// ─────────────────────────────────────────────────────────────
function Sc3History({ go }) {
  const days = [
    ['TODAY', [
      ['09:14', 'pH high',           '7.9 → 7.4'],
      ['08:02', 'Filter pressure',    '+18%'],
      ['07:30', 'Filtration started', 'eco · 6h'],
      ['06:00', 'Irrigation Z1',      '15 min'],
    ]],
    ['YESTERDAY', [
      ['22:14', 'Cover closed',       'auto'],
      ['18:10', 'pH minus',           '240 ml'],
      ['07:30', 'Filtration started', 'eco · 6h'],
    ]],
    ['MON 04', [
      ['11:20', 'Firmware update',    'v3.2.1'],
      ['07:30', 'Filtration started', 'eco · 6h'],
    ]],
  ];
  return (
    <div className="kw2-screen">
      <SB3 />
      <Top3 title="History" go={go}/>
      <div className="kw2-scroll">
        {days.map(([day, rows], i) => (
          <React.Fragment key={i}>
            <div className="kw2-sec"><span>{day}</span><span style={{ color:'rgba(255,255,255,0.42)' }}>{rows.length}</span></div>
            <div style={{ margin:'0 18px', border:'1px solid rgba(255,255,255,0.06)' }}>
              {rows.map(([time, title, detail], j) => (
                <div key={j} style={{ padding:'12px 14px', borderBottom: j < rows.length - 1 ? '1px solid rgba(255,255,255,0.055)' : '0', display:'flex', alignItems:'baseline', gap:12 }}>
                  <span style={{ font:'500 11px var(--font-mono)', color:'rgba(255,255,255,0.42)', width:42, flexShrink:0 }}>{time}</span>
                  <span style={{ flex:1, font:'400 13px var(--font-sans)', color:'#fff' }}>{title}</span>
                  <span style={{ font:'400 11px var(--font-mono)', color:'rgba(255,255,255,0.55)' }}>{detail}</span>
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
        <div style={{ height:20 }}/>
      </div>
      <Tabs3 active="data" go={go}/>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 08 — SCHEDULE (irrigation slots)
// ─────────────────────────────────────────────────────────────
function Sc3Schedule({ go }) {
  const [days1, setDays1] = React.useState([1, 3, 5]);
  const [days2, setDays2] = React.useState([2, 4, 6]);
  const [soil, setSoil] = React.useState(true);
  const D = ['M','T','W','T','F','S','S'];
  const toggle = (d, set, st) => set(st.includes(d) ? st.filter(x => x !== d) : [...st, d]);
  return (
    <div className="kw2-screen">
      <SB3 />
      <Top3 title="Schedule" back="home" go={go}/>
      <div className="kw2-scroll" style={{ paddingTop:6 }}>
        <div style={{ textAlign:'center', font:'500 10px var(--font-mono)', letterSpacing:'0.18em', color:'rgba(255,255,255,0.42)', textTransform:'uppercase', padding:'4px 0 16px' }}>
          ZONE 1 · FRONT GARDEN
        </div>
        <div style={{ padding:'0 18px', display:'flex', flexDirection:'column', gap:10 }}>
          <div className="kw2-slot">
            <div className="kw2-slot-head">
              <div className="kw2-slot-time">06:00<small>· 15 MIN</small></div>
              <span className="kw2-slot-x"><Ic3.close s={16}/></span>
            </div>
            <div className="kw2-days">
              {D.map((d, i) => (
                <div key={i} className={'kw2-day ' + (days1.includes(i) ? 'on' : '')} onClick={() => toggle(i, setDays1, days1)}>{d}</div>
              ))}
            </div>
          </div>
          <div className="kw2-slot">
            <div className="kw2-slot-head">
              <div className="kw2-slot-time">19:30<small>· 20 MIN</small></div>
              <span className="kw2-slot-x"><Ic3.close s={16}/></span>
            </div>
            <div className="kw2-days">
              {D.map((d, i) => (
                <div key={i} className={'kw2-day ' + (days2.includes(i) ? 'on' : '')} onClick={() => toggle(i, setDays2, days2)}>{d}</div>
              ))}
            </div>
          </div>
          <div className="kw2-form-link" style={{ textAlign:'left', padding:'10px 0', color:'#0F62FE', display:'flex', alignItems:'center', gap:8 }}>
            <Ic3.plus s={14}/> ADD TIME SLOT
          </div>
          <div className="kw2-row" style={{ border:'1px solid rgba(255,255,255,0.06)' }} onClick={() => setSoil(!soil)}>
            <span className="kw2-row-icon"><Ic3.drop/></span>
            <div className="kw2-row-text"><div className="kw2-row-title">Soil sensor override</div><div className="kw2-row-sub">SKIP IF MOIST</div></div>
            <div className={'kw2-sw ' + (soil ? 'on' : '')}/>
          </div>
        </div>
        <button className="kw2-cta" onClick={() => go('home')}>SAVE SCHEDULE</button>
        <div style={{ height:20 }}/>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 09 — TEMPERATURE DIALOG
// ─────────────────────────────────────────────────────────────
function Sc3Temp({ go }) {
  const [target, setTarget] = React.useState(28);
  const max = 35; const min = 18;
  const C = 2 * Math.PI * 70;
  const pct = (target - min) / (max - min);
  return (
    <div className="kw2-screen">
      <SB3 />
      <Top3 title="Set temperature" back="pool" go={go}/>
      <div className="kw2-scroll" style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', paddingTop:20 }}>
        <div className="kw2-gauge" style={{ width:220, height:220 }}>
          <svg viewBox="0 0 160 160">
            <circle cx="80" cy="80" r="70" className="kw2-gauge-track"/>
            <circle cx="80" cy="80" r="70" className="kw2-gauge-fill" strokeDasharray={`${pct * C} ${C}`}/>
          </svg>
          <div className="kw2-gauge-content">
            <div className="kw2-gauge-now">{target}<small>°C</small></div>
            <div className="kw2-gauge-label">TARGET</div>
          </div>
        </div>
        <div style={{ display:'flex', gap:18, marginTop:32, alignItems:'center' }}>
          <button className="kw2-mini" style={{ width:48, height:48, fontSize:22 }} onClick={() => setTarget(Math.max(min, target-1))}>−</button>
          <span style={{ font:'500 11px var(--font-mono)', letterSpacing:'0.18em', color:'rgba(255,255,255,0.42)', textTransform:'uppercase' }}>STEP · 1°</span>
          <button className="kw2-mini" style={{ width:48, height:48, fontSize:22 }} onClick={() => setTarget(Math.min(max, target+1))}>+</button>
        </div>
        <div style={{ height:32 }}/>
        <button className="kw2-cta" style={{ width:'calc(100% - 36px)' }} onClick={() => go('pool')}>CONFIRM</button>
        <div style={{ height:20 }}/>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 10 — ACCOUNT
// ─────────────────────────────────────────────────────────────
function Sc3Account({ go }) {
  const [site, setSite] = React.useState('C25');
  const [notif, setNotif] = React.useState(true);
  return (
    <div className="kw2-screen">
      <SB3 />
      <Top3 title="Account" go={go}/>
      <div className="kw2-scroll">
        <div className="kw2-sec"><span>SITE</span></div>
        <div className="kw2-sites">
          {['LV48', 'C25', 'Jacob', 'Raj'].map(s => (
            <div key={s} className={'kw2-site-chip ' + (s === site ? 'on' : '')} onClick={() => setSite(s)}>{s}</div>
          ))}
        </div>

        <div className="kw2-sec"><span>PROFILE</span></div>
        <div style={{ display:'flex', gap:16, alignItems:'center', padding:'0 18px' }}>
          <div className="kw2-avatar" style={{ margin:0 }}>
            JS
            <div className="kw2-avatar-edit"><Ic3.edit s={11}/></div>
          </div>
          <div style={{ flex:1, display:'flex', flexDirection:'column', gap:4 }}>
            <div style={{ font:'500 15px var(--font-sans)' }}>John Smith</div>
            <div style={{ font:'400 11px var(--font-mono)', letterSpacing:'0.08em', color:'rgba(255,255,255,0.55)' }}>john@example.com</div>
          </div>
        </div>

        <div className="kw2-sec"><span>PREFERENCES</span></div>
        <div className="kw2-list">
          <div className="kw2-row" onClick={() => setNotif(!notif)}>
            <div className="kw2-row-text"><div className="kw2-row-title">Notifications</div></div>
            <div className={'kw2-sw ' + (notif ? 'on' : '')}/>
          </div>
          <div className="kw2-row">
            <div className="kw2-row-text"><div className="kw2-row-title">Units</div></div>
            <span className="kw2-row-detail">Metric</span>
            <Ic3.chev s={14} c="rgba(255,255,255,0.3)"/>
          </div>
          <div className="kw2-row">
            <div className="kw2-row-text"><div className="kw2-row-title">KW1100 firmware</div><div className="kw2-row-sub">v3.2.1 · UP TO DATE</div></div>
            <Ic3.chev s={14} c="rgba(255,255,255,0.3)"/>
          </div>
        </div>

        <button className="kw2-cta ghost" onClick={() => go('login')}>SIGN OUT</button>
        <div style={{ height:20 }}/>
      </div>
      <Tabs3 active="account" go={go}/>
    </div>
  );
}

Object.assign(window, {
  Sc3Welcome,
  Sc3Login, Sc3Home, Sc3Pool, Sc3Data, Sc3Alerts, Sc3Alert,
  Sc3History, Sc3Schedule, Sc3Temp, Sc3Account,
});
