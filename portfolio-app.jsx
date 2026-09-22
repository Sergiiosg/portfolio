// Sergio Fagúndez Manso — Portfolio
// Apple design language. One typeface, one accent, interruptible motion.

const { useState, useEffect, useRef, useCallback, useMemo, useLayoutEffect } = React;

const DATA = window.DATA;
const COPY = window.COPY;

const SECTION_IDS = ['inicio', 'perfil', 'trabajo', 'expertise', 'experiencia', 'contacto'];

/* ============================================================
   Icons — one stroke weight throughout (1.6), custom set
   ============================================================ */

const Icon = {
  arrowRight: (p) => (
    <svg className="icon" viewBox="0 0 16 16" fill="none" stroke="currentColor"
         strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  ),
  arrowUp: (p) => (
    <svg className="icon" viewBox="0 0 16 16" fill="none" stroke="currentColor"
         strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
      <path d="M8 13V3M4 7l4-4 4 4" />
    </svg>
  ),
  download: (p) => (
    <svg className="icon" viewBox="0 0 16 16" fill="none" stroke="currentColor"
         strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
      <path d="M8 2v8M4.5 7L8 10.5 11.5 7M2.5 13h11" />
    </svg>
  ),
  close: (p) => (
    <svg className="icon" viewBox="0 0 16 16" fill="none" stroke="currentColor"
         strokeWidth="1.6" strokeLinecap="round" aria-hidden="true" {...p}>
      <path d="M4 4l8 8M12 4l-8 8" />
    </svg>
  ),
  check: (p) => (
    <svg className="icon" viewBox="0 0 16 16" fill="none" stroke="currentColor"
         strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
      <path d="M3 8.5l3.2 3.2L13 5" />
    </svg>
  ),
  alert: (p) => (
    <svg className="icon" viewBox="0 0 16 16" fill="none" stroke="currentColor"
         strokeWidth="1.6" strokeLinecap="round" aria-hidden="true" {...p}>
      <circle cx="8" cy="8" r="6.2" /><path d="M8 5v3.6M8 11h.01" />
    </svg>
  ),
  info: (p) => (
    <svg className="icon" viewBox="0 0 16 16" fill="none" stroke="currentColor"
         strokeWidth="1.6" strokeLinecap="round" aria-hidden="true" {...p}>
      <circle cx="8" cy="8" r="6.2" /><path d="M8 7.4v3.4M8 5h.01" />
    </svg>
  ),
  sun: (p) => (
    <svg className="icon" viewBox="0 0 16 16" fill="none" stroke="currentColor"
         strokeWidth="1.6" strokeLinecap="round" aria-hidden="true" {...p}>
      <circle cx="8" cy="8" r="3" />
      <path d="M8 1v1.5M8 13.5V15M15 8h-1.5M2.5 8H1M12.95 3.05l-1.06 1.06M4.11 11.89l-1.06 1.06M12.95 12.95l-1.06-1.06M4.11 4.11L3.05 3.05" />
    </svg>
  ),
  moon: (p) => (
    <svg className="icon" viewBox="0 0 16 16" fill="none" stroke="currentColor"
         strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
      <path d="M13.5 9.6A5.8 5.8 0 016.4 2.5a5.8 5.8 0 107.1 7.1z" />
    </svg>
  ),
  dot: (p) => (
    <svg className="icon" viewBox="0 0 16 16" fill="none" stroke="currentColor"
         strokeWidth="1.6" aria-hidden="true" {...p}>
      <circle cx="8" cy="8" r="2.4" />
    </svg>
  ),
  mail: (p) => (
    <svg className="icon" viewBox="0 0 16 16" fill="none" stroke="currentColor"
         strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
      <rect x="1.8" y="3.4" width="12.4" height="9.2" rx="1.6" /><path d="M2.4 4.6L8 8.6l5.6-4" />
    </svg>
  )
};

/* ============================================================
   Case visuals — generated SVG, no external images
   ============================================================ */

function CaseVisual({ kind }) {
  const common = {
    viewBox: '0 0 400 240',
    preserveAspectRatio: 'xMidYMid slice',
    fill: 'none',
    'aria-hidden': 'true'
  };
  const line = 'currentColor';

  if (kind === 'grid') {
    // Convergence — a dispersed grid consolidating toward one core
    return (
      <svg {...common} style={{ color: 'var(--fg-4)' }}>
        {Array.from({ length: 9 }).map((_, i) => {
          const x = 60 + (i % 3) * 70, y = 50 + Math.floor(i / 3) * 70;
          return <rect key={i} x={x} y={y} width="26" height="26" rx="4" stroke={line} strokeWidth="1.2" opacity={0.35 + (i % 3) * 0.12} />;
        })}
        {Array.from({ length: 9 }).map((_, i) => {
          const x = 73 + (i % 3) * 70, y = 63 + Math.floor(i / 3) * 70;
          return <path key={'l' + i} d={`M${x} ${y} L200 120`} stroke={line} strokeWidth="0.7" opacity="0.28" />;
        })}
        <circle cx="200" cy="120" r="17" stroke="var(--accent)" strokeWidth="1.5" />
        <circle cx="200" cy="120" r="5" fill="var(--accent)" stroke="none" />
      </svg>
    );
  }

  if (kind === 'signal') {
    // OpSec — continuous monitoring, one anomaly flagged
    const pts = [];
    for (let i = 0; i <= 80; i++) {
      const x = i * 5;
      const y = 120 + Math.sin(i * 0.38) * 26 + Math.sin(i * 0.11) * 15 + (i === 52 ? -46 : 0);
      pts.push(`${x},${y.toFixed(1)}`);
    }
    return (
      <svg {...common} style={{ color: 'var(--fg-4)' }}>
        {[60, 120, 180].map((y) => <path key={y} d={`M0 ${y} H400`} stroke={line} strokeWidth="0.8" opacity="0.3" strokeDasharray="3 5" />)}
        <polyline points={pts.join(' ')} stroke={line} strokeWidth="1.4" opacity="0.75" />
        <circle cx="260" cy="74" r="6" stroke="var(--accent)" strokeWidth="1.5" />
        <circle cx="260" cy="74" r="14" stroke="var(--accent)" strokeWidth="0.9" opacity="0.4" />
      </svg>
    );
  }

  if (kind === 'topology') {
    // Atlas — cloud identity topology, RBAC branches
    const nodes = [
      [200, 62], [108, 122], [292, 122], [70, 186], [150, 186], [250, 186], [330, 186]
    ];
    const edges = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6]];
    return (
      <svg {...common} style={{ color: 'var(--fg-4)' }}>
        {edges.map(([a, b], i) => (
          <path key={i} d={`M${nodes[a][0]} ${nodes[a][1]} L${nodes[b][0]} ${nodes[b][1]}`}
                stroke={line} strokeWidth="1" opacity="0.5" />
        ))}
        {nodes.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={i === 0 ? 15 : 10}
                    stroke={i === 0 ? 'var(--accent)' : line}
                    strokeWidth={i === 0 ? 1.5 : 1.1}
                    opacity={i === 0 ? 1 : 0.7} />
            {i === 0 && <circle cx={x} cy={y} r="4.5" fill="var(--accent)" stroke="none" />}
          </g>
        ))}
      </svg>
    );
  }

  if (kind === 'bars') {
    // Insight — KPI bars with a trend line above
    const vals = [38, 62, 47, 83, 71, 96, 58, 88, 74, 108];
    return (
      <svg {...common} style={{ color: 'var(--fg-4)' }}>
        <path d="M30 196 H370" stroke={line} strokeWidth="1" opacity="0.5" />
        {vals.map((v, i) => (
          <rect key={i} x={38 + i * 34} y={196 - v} width="18" height={v} rx="2.5"
                stroke={line} strokeWidth="1.1" opacity={0.3 + i * 0.045} />
        ))}
        <polyline points={vals.map((v, i) => `${47 + i * 34},${196 - v - 14}`).join(' ')}
                  stroke="var(--accent)" strokeWidth="1.4" opacity="0.85" />
        {vals.map((v, i) => (
          <circle key={'d' + i} cx={47 + i * 34} cy={196 - v - 14} r="2" fill="var(--accent)" stroke="none" opacity="0.85" />
        ))}
      </svg>
    );
  }

  // lattice — AI Audit: layered network with one audited path highlighted
  const layers = [[70, 4], [160, 5], [250, 5], [340, 3]];
  const coords = layers.map(([x, count]) =>
    Array.from({ length: count }, (_, i) => [x, 120 + (i - (count - 1) / 2) * 42])
  );
  return (
    <svg {...common} style={{ color: 'var(--fg-4)' }}>
      {coords.slice(0, -1).map((layer, li) =>
        layer.map(([x1, y1], i) =>
          coords[li + 1].map(([x2, y2], j) => (
            <path key={`${li}-${i}-${j}`} d={`M${x1} ${y1} L${x2} ${y2}`}
                  stroke={line} strokeWidth="0.55" opacity="0.26" />
          ))
        )
      )}
      <path d="M70 78 L160 120 L250 78 L340 120" stroke="var(--accent)" strokeWidth="1.5" opacity="0.9" />
      {coords.map((layer, li) =>
        layer.map(([x, y], i) => (
          <circle key={`n${li}-${i}`} cx={x} cy={y} r="6" stroke={line} strokeWidth="1.1"
                  fill="var(--bg-2)" opacity="0.9" />
        ))
      )}
    </svg>
  );
}

/* ============================================================
   Toasts — Sonner's behaviour: stack, expand on hover, swipe out
   ============================================================ */

const ToastCtx = React.createContext(() => {});

const MAX_VISIBLE = 3;
const TOAST_LIFE = 4000;
const GAP = 12;

function Toaster({ toasts, dismiss }) {
  const [expanded, setExpanded] = useState(false);
  const [heights, setHeights] = useState({});

  const setHeight = useCallback((id, h) => {
    setHeights((prev) => (prev[id] === h ? prev : { ...prev, [id]: h }));
  }, []);

  // Newest first, so index 0 is the front of the stack.
  const ordered = useMemo(() => [...toasts].reverse(), [toasts]);

  return (
    <ol className="toaster"
        tabIndex={-1}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        style={{ height: expanded ? ordered.slice(0, MAX_VISIBLE).reduce((a, t) => a + (heights[t.id] || 56) + GAP, 0) : undefined }}>
      {ordered.map((t, i) => (
        <Toast key={t.id} toast={t} index={i} expanded={expanded}
               heights={heights} ordered={ordered}
               onHeight={setHeight} onDismiss={dismiss} />
      ))}
    </ol>
  );
}

function Toast({ toast, index, expanded, heights, ordered, onHeight, onDismiss }) {
  const ref = useRef(null);
  const timer = useRef(null);
  const drag = useRef(null);
  const [swiping, setSwiping] = useState(false);
  const [offset, setOffset] = useState(0);
  const [removed, setRemoved] = useState(false);

  // Measure so the expanded stack can lay itself out precisely.
  useLayoutEffect(() => {
    if (ref.current) onHeight(toast.id, ref.current.getBoundingClientRect().height);
  }, [toast.id, toast.message, onHeight]);

  const close = useCallback(() => {
    setRemoved(true);
    window.setTimeout(() => onDismiss(toast.id), 240);
  }, [toast.id, onDismiss]);

  // Timer pauses while the stack is expanded (the user is reading it).
  useEffect(() => {
    if (removed || expanded || toast.duration === Infinity) return;
    timer.current = window.setTimeout(close, toast.duration || TOAST_LIFE);
    return () => window.clearTimeout(timer.current);
  }, [removed, expanded, toast.duration, close]);

  const onPointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    drag.current = { x: e.clientX, t: performance.now(), moved: false };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!drag.current) return;
    const dx = e.clientX - drag.current.x;
    // Hysteresis: commit to the gesture only past ~8px.
    if (!drag.current.moved && Math.abs(dx) < 8) return;
    drag.current.moved = true;
    setSwiping(true);
    // Toaster sits right, so rightward is the dismiss direction.
    // Leftward gets rubber-banded rather than hard-stopped.
    setOffset(dx > 0 ? dx : dx * 0.22);
  };

  const onPointerUp = (e) => {
    if (!drag.current) return;
    const dx = e.clientX - drag.current.x;
    const dt = performance.now() - drag.current.t;
    const velocity = Math.abs(dx) / Math.max(dt, 1);
    drag.current = null;
    setSwiping(false);
    // Fast flick dismisses regardless of distance.
    if (dx > 0 && (dx > 88 || velocity > 0.11)) close();
    else setOffset(0);
  };

  // Stack geometry: front card sits flush, cards behind scale down and peek.
  const behind = index;
  let ty, sc, op;
  if (expanded) {
    ty = -ordered.slice(0, index).reduce((a, t) => a + (heights[t.id] || 56) + GAP, 0);
    sc = 1;
    op = index < MAX_VISIBLE ? 1 : 0;
  } else {
    ty = -behind * 15;
    sc = 1 - behind * 0.055;
    op = behind < MAX_VISIBLE ? 1 : 0;
  }

  const style = {
    '--ty': `${ty}px`,
    '--tx': `${offset}px`,
    '--sc': sc,
    '--op': op,
    zIndex: ordered.length - index
  };

  const Glyph = toast.type === 'success' ? Icon.check
              : toast.type === 'error' ? Icon.alert
              : Icon.info;

  return (
    <li ref={ref}
        className="toast"
        data-type={toast.type || 'info'}
        data-swiping={swiping || undefined}
        data-removed={removed || undefined}
        style={style}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}>
      <Glyph className="icon toast__icon" />
      <span className="toast__text">{toast.message}</span>
      <button className="toast__close" onClick={close} aria-label="Cerrar / Close">
        <Icon.close />
      </button>
    </li>
  );
}

function useToastStore() {
  const [toasts, setToasts] = useState([]);
  const seq = useRef(0);

  const push = useCallback((message, opts = {}) => {
    const id = ++seq.current;
    setToasts((prev) => [...prev.slice(-5), { id, message, ...opts }]);
    return id;
  }, []);

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { toasts, push, dismiss };
}

/* ============================================================
   Hooks
   ============================================================ */

function useReveal(deps) {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]:not([data-revealed])');
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.setAttribute('data-revealed', '');
          io.unobserve(e.target);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, deps);
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    let frame = null;
    const measure = () => {
      frame = null;
      const probe = window.scrollY + window.innerHeight * 0.32;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= probe) current = id;
      }
      setActive(current);
    };
    const onScroll = () => { if (frame === null) frame = requestAnimationFrame(measure); };
    window.addEventListener('scroll', onScroll, { passive: true });
    measure();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [ids]);
  return active;
}

function useScrolled(threshold = 12) {
  const [past, setPast] = useState(false);
  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return past;
}

function usePersisted(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored === null ? initial : stored;
    } catch { return initial; }
  });
  useEffect(() => {
    try { window.localStorage.setItem(key, value); } catch { /* private mode */ }
  }, [key, value]);
  return [value, setValue];
}

/* ============================================================
   Primitives
   ============================================================ */

function SectionHead({ n, label, reveal = true }) {
  return (
    <div className="section-head" {...(reveal ? { 'data-reveal': '' } : {})}>
      <span className="t-mono">{n}</span>
      <span className="t-mono">{label}</span>
      <span className="section-head__rule" aria-hidden="true" />
    </div>
  );
}

function LangToggle({ lang, onChange, copy }) {
  return (
    <div className="lang" data-lang={lang} role="group" aria-label={copy.ui.menu}>
      <span className="lang__thumb" aria-hidden="true" />
      {['es', 'en'].map((code) => (
        <button key={code}
                className="lang__opt"
                aria-pressed={lang === code}
                onClick={() => onChange(code)}>
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

/* ============================================================
   Chrome
   ============================================================ */

function TopBar({ copy, lang, setLang, theme, toggleTheme, onJump, onCv }) {
  const stuck = useScrolled();
  return (
    <header className="topbar" data-stuck={stuck || undefined}>
      <button className="brand" onClick={() => onJump('inicio')}>
        <span className="brand__mark" aria-hidden="true">SF</span>
        <span className="brand__text">
          <span className="brand__name">{copy.identity.name}</span>
          <span className="brand__role">{copy.identity.role} · {copy.identity.company}</span>
        </span>
      </button>

      <div className="topbar__actions">
        <LangToggle lang={lang} onChange={setLang} copy={copy} />
        <button className="ctrl ctrl--icon"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? copy.ui.themeLight : copy.ui.themeDark}
                title={theme === 'dark' ? copy.ui.themeLight : copy.ui.themeDark}>
          {theme === 'dark' ? <Icon.sun /> : <Icon.moon />}
        </button>
        <button className="ctrl" onClick={onCv}>
          <Icon.download />
          <span className="cv-label">{copy.ui.cv}</span>
        </button>
      </div>
    </header>
  );
}

function Rail({ copy, active, onJump }) {
  return (
    <nav className="rail" aria-label={copy.ui.sections}>
      {copy.nav.map((item) => (
        <button key={item.id}
                className="rail__item"
                aria-current={active === item.id ? 'true' : undefined}
                onClick={() => onJump(item.id)}>
          <span className="rail__label">{item.label}</span>
          <span className="rail__n">{item.n}</span>
          <span className="rail__dot" aria-hidden="true" />
        </button>
      ))}
    </nav>
  );
}

/* ============================================================
   Sections
   ============================================================ */

function Hero({ copy, onJump }) {
  const { hero, identity } = copy;
  return (
    <section id="inicio" className="hero wrap">
      <div className="hero__meta" data-reveal>
        <span className="t-mono">{identity.location}</span>
        <span className="t-mono">{identity.company}</span>
      </div>

      <h1 className="t-display hero__title" data-reveal style={{ '--reveal-delay': '60ms' }}>
        {hero.line1}<br />
        {hero.line2} <em>{hero.emphasis}</em><br />
        {hero.line3}<br />
        {hero.line4}
      </h1>

      <p className="t-lead" data-reveal style={{ '--reveal-delay': '140ms', marginBottom: '40px' }}>
        {hero.standfirst}
      </p>

      <div className="hero__foot" data-reveal style={{ '--reveal-delay': '200ms' }}>
        <div className="hero__actions">
          <button className="ctrl ctrl--solid btn-lg" onClick={() => onJump('trabajo')}>
            {copy.ui.viewProjects}
            <Icon.arrowRight />
          </button>
          <button className="ctrl btn-lg" onClick={() => onJump('contacto')}>
            {copy.ui.contact}
          </button>
        </div>
        <ul className="hero__tags">
          {identity.tags.map((t) => <li key={t} className="tag">{t}</li>)}
        </ul>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span className="scroll-hint__line" />
        <span className="t-mono">{copy.ui.scrollHint}</span>
      </div>
    </section>
  );
}

function About({ copy }) {
  const { about, nav } = copy;
  return (
    <section id="perfil" className="section wrap">
      <SectionHead n={nav[1].n} label={about.label} />
      <div className="about__grid">
        <div>
          <h2 className="t-h2" data-reveal style={{ marginBottom: '26px' }}>{about.heading}</h2>
          <div className="about__body">
            {about.body.map((p, i) => (
              <p key={i} className="t-body" data-reveal style={{ '--reveal-delay': `${i * 60}ms` }}>{p}</p>
            ))}
          </div>
        </div>
        <ul className="stats" data-reveal style={{ '--reveal-delay': '120ms' }}>
          {about.stats.map((s) => (
            <li key={s.label} className="stat">
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Position({ copy }) {
  return (
    <section className="position wrap">
      <p className="position__text" data-reveal>{copy.position.statement}</p>
      <p className="t-mono position__attr" data-reveal style={{ '--reveal-delay': '80ms' }}>
        {copy.position.attribution}
      </p>
    </section>
  );
}

function Work({ copy, onOpen }) {
  const { work, nav, cases } = copy;
  return (
    <section id="trabajo" className="section wrap">
      <SectionHead n={nav[2].n} label={work.label} />
      <div style={{ marginBottom: 'clamp(32px, 4vw, 56px)' }}>
        <h2 className="t-h2" data-reveal style={{ marginBottom: '14px' }}>{work.heading}</h2>
        <p className="t-body" data-reveal style={{ '--reveal-delay': '60ms' }}>{work.note}</p>
      </div>

      <div className="cases">
        {DATA.cases.map((c, i) => {
          const t = cases[c.id];
          return (
            <article key={c.id}
                     className="case"
                     data-reveal
                     style={{ '--reveal-delay': `${Math.min(i, 4) * 55}ms` }}>
              <div className="case__visual"><CaseVisual kind={c.visual} /></div>
              <div className="case__body">
                <div className="case__meta">
                  <span className="t-mono">{c.n}</span>
                  <span className="case__meta-sep" aria-hidden="true" />
                  <span className="t-mono">{t.sector}</span>
                  <span className="case__meta-sep" aria-hidden="true" />
                  <span className="t-mono">{c.year}</span>
                </div>
                <h3 className="t-h3">
                  {/* The trigger stretches over the whole card, so the card is
                      clickable while the heading stays a real heading. */}
                  <button className="case__trigger"
                          onClick={() => onOpen(c.id)}
                          aria-label={`${t.title} — ${copy.ui.readCase}`}>
                    <span className="case__stretch" aria-hidden="true" />
                    {t.title}
                  </button>
                </h3>
                <p className="case__summary">{t.summary}</p>
                <div className="case__foot">
                  <ul className="chips">
                    {c.stack.slice(0, 4).map((s) => <li key={s} className="chip">{s}</li>)}
                  </ul>
                  <span className="case__go" aria-hidden="true"><Icon.arrowRight /></span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function CaseDrawer({ copy, caseId, onClose }) {
  const ref = useRef(null);
  const open = Boolean(caseId);

  // Hold the last case while closing, so the drawer slides out along the
  // same path it came in on instead of vanishing.
  const [shown, setShown] = useState(caseId);
  useEffect(() => {
    if (caseId) { setShown(caseId); return; }
    const id = window.setTimeout(() => setShown(null), 460);
    return () => window.clearTimeout(id);
  }, [caseId]);

  const meta = DATA.cases.find((c) => c.id === shown);
  const t = shown ? copy.cases[shown] : null;

  // Escape closes; focus moves in; background scroll is locked.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const id = window.setTimeout(() => ref.current && ref.current.focus(), 60);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
      window.clearTimeout(id);
    };
  }, [open, onClose]);

  if (!meta || !t) return null;

  return (
    <React.Fragment>
      <div className="scrim" data-open={open || undefined} onClick={onClose} aria-hidden="true" />
      <aside className="drawer"
             data-open={open || undefined}
             aria-hidden={!open || undefined}
             role="dialog"
             aria-modal="true"
             aria-label={t.title}
             tabIndex={-1}
             ref={ref}>
        <div className="drawer__bar">
          <span className="t-mono">{meta.n} · {t.sector}</span>
          <button className="ctrl ctrl--ghost" onClick={onClose}>
            {copy.ui.close}
            <Icon.close />
          </button>
        </div>

        <div className="drawer__inner">
          <div className="drawer__visual"><CaseVisual kind={meta.visual} /></div>

          <h2 className="t-h2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.125rem)' }}>{t.title}</h2>
          <p className="t-lead" style={{ marginTop: '16px' }}>{t.summary}</p>

          <div className="drawer__block">
            <h3 className="t-mono">{copy.ui.problem}</h3>
            <p className="t-body">{t.problem}</p>
          </div>

          <div className="drawer__block">
            <h3 className="t-mono">{copy.ui.context}</h3>
            <p className="t-body">{t.context}</p>
          </div>

          <div className="drawer__block">
            <h3 className="t-mono">{copy.ui.approach}</h3>
            <ul className="list-approach">
              {t.approach.map((a, i) => (
                <li key={i}>
                  <span className="n">{String(i + 1).padStart(2, '0')}</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="drawer__block">
            <h3 className="t-mono">{copy.ui.outcome}</h3>
            <ul className="outcomes">
              {t.outcome.map((o) => (
                <li key={o.metric} className="outcome">
                  <div className="outcome__metric">{o.metric}</div>
                  <div className="outcome__label">{o.label}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="drawer__block">
            <h3 className="t-mono">{copy.ui.stackLabel}</h3>
            <ul className="chips">
              {meta.stack.map((s) => <li key={s} className="chip">{s}</li>)}
            </ul>
          </div>
        </div>
      </aside>
    </React.Fragment>
  );
}

function Services({ copy }) {
  const { services, nav } = copy;
  return (
    <section id="expertise" className="section">
      <div className="wrap">
        <SectionHead n={nav[3].n} label={services.label} />
        <h2 className="t-h2" data-reveal style={{ marginBottom: 'clamp(32px, 4vw, 56px)' }}>
          {services.heading}
        </h2>
      </div>
      <ul className="services">
        {services.items.map((s, i) => (
          <li key={s.n} className="service" data-reveal style={{ '--reveal-delay': `${i * 50}ms` }}>
            <span className="t-mono">{s.n}</span>
            <h3 className="t-h3">{s.title}</h3>
            <p className="service__desc">{s.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function CompanyLogo({ src, bg, pad, name }) {
  const [failed, setFailed] = useState(false);

  // A missing logo falls back to a wordmark. Acronyms (KPMG, PwC, UNIR)
  // read better whole than reduced to initials.
  const first = name.split(/\s+/)[0].replace(/[.,]$/, '');
  const label = /^[A-Z][A-Za-z]{1,4}$/.test(first) || first === first.toUpperCase()
    ? first.slice(0, 4)
    : name.split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();

  return (
    <span className="xp__logo" data-pad={pad || undefined}
          style={{ background: failed ? 'var(--bg-2)' : bg }}>
      {failed
        ? <span className="xp__logo-fallback">{label}</span>
        : <img src={src} alt="" onError={() => setFailed(true)} loading="lazy" />}
    </span>
  );
}

function Experience({ copy }) {
  const { experience, nav, stackLabels } = copy;
  return (
    <section id="experiencia" className="section wrap">
      <SectionHead n={nav[4].n} label={experience.label} />
      <h2 className="t-h2" data-reveal style={{ marginBottom: 'clamp(24px, 3vw, 40px)' }}>
        {experience.heading}
      </h2>

      <div className="xp">
        {DATA.experience.map((e, i) => {
          const t = experience.items[e.id];
          return (
            <article key={e.id} className="xp__item" data-reveal style={{ '--reveal-delay': `${i * 55}ms` }}>
              <div className="xp__aside">
                <CompanyLogo src={e.logo} bg={e.logoBg} pad={e.logoPad} name={t.company} />
                <span className="t-mono">{t.period}</span>
                {e.current && (
                  <span className="xp__now">
                    <span className="xp__now-dot" aria-hidden="true" />
                    {copy.ui.present || 'Now'}
                  </span>
                )}
              </div>
              <div>
                <h3 className="t-h3 xp__role">{t.role}</h3>
                <p className="xp__company">{t.company} · {t.location}</p>
                <ul className="xp__impact">
                  {t.impact.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              </div>
            </article>
          );
        })}
      </div>

      <div className="two-col">
        <div>
          <h3 className="t-mono" data-reveal style={{ marginBottom: '8px' }}>{experience.eduHeading}</h3>
          {DATA.education.map((e) => {
            const t = experience.education[e.id];
            return (
              <div key={e.id} className="edu__item" data-reveal>
                <CompanyLogo src={e.logo} bg={e.logoBg} name={t.institution} />
                <div>
                  <span className="t-mono">{t.period}</span>
                  <div className="edu__title" style={{ marginTop: '6px' }}>{t.title}</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--fg-2)' }}>{t.institution}</div>
                  <p className="edu__detail">{t.detail}</p>
                </div>
              </div>
            );
          })}

          <h3 className="t-mono" data-reveal style={{ marginTop: '40px', marginBottom: '4px' }}>
            {experience.stackHeading}
          </h3>
          <div className="stack-groups">
            {DATA.stackGroups.map((g) => (
              <div key={g.id} data-reveal>
                <div className="t-mono stack-group__label">{stackLabels[g.id]}</div>
                <ul className="chips">
                  {g.items.map((s) => <li key={s} className="chip">{s}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="t-mono" data-reveal style={{ marginBottom: '8px' }}>{experience.certHeading}</h3>
          <ul className="certs">
            {experience.certifications.map((c, i) => (
              <li key={i} className="cert" data-reveal style={{ '--reveal-delay': `${Math.min(i, 6) * 30}ms` }}>
                <Icon.dot style={{ width: 14, height: 14 }} />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact({ copy, onCopy, onCv }) {
  const { contact, nav, footer } = copy;
  const { email, phone, linkedin } = DATA.contact;

  const rows = [
    { label: contact.emailLabel, value: email, action: () => onCopy(email) },
    { label: contact.phoneLabel, value: phone, action: () => onCopy(phone) },
    { label: contact.linkedinLabel, value: 'linkedin.com/in/sergiofagundezmanso', href: linkedin },
    { label: contact.cvLabel, value: copy.ui.cv, action: onCv }
  ];

  return (
    <section id="contacto" className="section wrap">
      <SectionHead n={nav[5].n} label={contact.label} />
      <div className="contact__grid">
        <div>
          <h2 className="t-h2" data-reveal style={{ marginBottom: '20px' }}>{contact.heading}</h2>
          <p className="t-body" data-reveal style={{ '--reveal-delay': '60ms' }}>{contact.body}</p>
        </div>

        <ul className="links" data-reveal style={{ '--reveal-delay': '100ms' }}>
          {rows.map((r) => {
            const inner = (
              <React.Fragment>
                <span className="t-mono">{r.label}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                  <span className="link-row__value">{r.value}</span>
                  <span className="link-row__icon"><Icon.arrowRight /></span>
                </span>
              </React.Fragment>
            );
            return (
              <li key={r.label}>
                {r.href
                  ? <a className="link-row" href={r.href} target="_blank" rel="noopener noreferrer">{inner}</a>
                  : <button className="link-row" onClick={r.action}>{inner}</button>}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="footer">
        <span className="t-mono">© {new Date().getFullYear()} {copy.identity.name}. {footer.rights}</span>
        <span className="t-mono">{footer.built}</span>
      </div>
    </section>
  );
}

/* ============================================================
   App
   ============================================================ */

function App() {
  const [lang, setLang] = usePersisted('sf.lang', (navigator.language || 'es').startsWith('en') ? 'en' : 'es');
  const [theme, setTheme] = usePersisted('sf.theme', '');
  const [openCase, setOpenCase] = useState(null);
  const { toasts, push, dismiss } = useToastStore();

  const copy = COPY[lang] || COPY.es;
  const active = useActiveSection(SECTION_IDS);
  const scrolled = useScrolled(600);
  useReveal([lang]);

  // Theme: follow the system unless the visitor has chosen otherwise.
  const systemDark = useMemo(
    () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches, []
  );
  const resolvedTheme = theme || (systemDark ? 'dark' : 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolvedTheme);
  }, [resolvedTheme]);

  useEffect(() => {
    document.documentElement.lang = copy.htmlLang;
    document.title = copy.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', copy.meta.description);
  }, [copy]);

  const jump = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const changeLang = useCallback((code) => {
    if (code === lang) return;
    setLang(code);
    push(COPY[code].ui.langChanged, { type: 'success' });
  }, [lang, setLang, push]);

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }, [resolvedTheme, setTheme]);

  const copyText = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      push(copy.ui.copied, { type: 'success' });
    } catch {
      push(copy.ui.copyFailed, { type: 'error' });
    }
  }, [copy, push]);

  const downloadCv = useCallback(() => {
    const a = document.createElement('a');
    a.href = DATA.cvPath;
    a.download = 'CV-Sergio-Fagundez-Manso.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
    push(copy.ui.cvStarted, { type: 'success' });
  }, [copy, push]);

  return (
    <ToastCtx.Provider value={push}>
      <a className="skip-link" href="#perfil">{copy.ui.skipToContent}</a>

      <TopBar copy={copy} lang={lang} setLang={changeLang}
              theme={resolvedTheme} toggleTheme={toggleTheme}
              onJump={jump} onCv={downloadCv} />

      <Rail copy={copy} active={active} onJump={jump} />

      <main className="shell">
        <Hero copy={copy} onJump={jump} />
        <About copy={copy} />
        <Position copy={copy} />
        <Work copy={copy} onOpen={setOpenCase} />
        <Services copy={copy} />
        <Experience copy={copy} />
        <Contact copy={copy} onCopy={copyText} onCv={downloadCv} />
      </main>

      <CaseDrawer copy={copy} caseId={openCase} onClose={() => setOpenCase(null)} />

      <button className="to-top"
              data-show={scrolled || undefined}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label={copy.ui.backToTop}>
        <Icon.arrowUp />
      </button>

      <Toaster toasts={toasts} dismiss={dismiss} />
    </ToastCtx.Provider>
  );
}

window.PortfolioApp = App;
