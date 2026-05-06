// Sergio Fagúndez — Portfolio
// Modern consulting × quiet luxury. Spanish copy, editorial restraint.

const { useState, useEffect, useRef, useCallback, useMemo } = React;

// ---------- Data ----------

const NAV = [
{ id: 'inicio', n: '01', label: 'Inicio' },
{ id: 'perfil', n: '02', label: 'Perfil' },
{ id: 'trabajo', n: '03', label: 'Proyectos' },
{ id: 'expertise', n: '04', label: 'Áreas' },
{ id: 'experiencia', n: '05', label: 'Experiencia' },
{ id: 'contacto', n: '06', label: 'Contacto' }];


const CASES = [
{
  id: 'convergence',
  n: '01',
  image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1600&q=85&auto=format&fit=crop',
  sector: 'Sector Ferrocarriles',
  year: '2024 — 2025',
  title: 'Proyecto Convergence — centralización y resiliencia en infraestructura crítica',
  summary:
  'Centralización de aplicaciones corporativas y despliegue de seguridad en entornos virtualizados para una infraestructura crítica del sector ferroviario.',
  problem:
  'La infraestructura presentaba dispersión de aplicaciones, recursos infrautilizados y una superficie expuesta sin protección homogénea — todo ello en un entorno crítico donde la continuidad de operación es innegociable.',
  context:
  'Sector ferroviario, sistemas heterogéneos en entornos virtualizados, exigencia regulatoria alta (ISO 27001, ENS) y cero margen de tolerancia a interrupciones.',
  approach: [
  'Centralización y gestión de aplicaciones corporativas',
  'Optimización de infraestructura y consolidación de recursos',
  'Despliegue de soluciones antimalware en entornos virtualizados',
  'Diseño de dashboards Power BI para KPIs operativos y de seguridad',
  'Análisis y gestión integral de riesgos sobre el marco ISO 27001 / ENS'],

  outcome: [
  { metric: 'ISO 27001', label: 'Marco normativo desplegado sobre infraestructura ferroviaria crítica' },
  { metric: 'ENS', label: 'Cumplimiento del Esquema Nacional de Seguridad' },
  { metric: 'Power BI', label: 'KPIs operativos y de seguridad en tiempo real' }],

  stack: ['ISO 27001', 'ENS', 'Power BI', 'Antimalware', 'Virtualización']
},
{
  id: 'opsec',
  n: '02',
  image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85&auto=format&fit=crop',
  sector: 'Sector Público',
  year: '2024 — 2025',
  title: 'Proyecto OpSec — analítica avanzada para gestión del riesgo público',
  summary:
  'Analítica de datos en SAS y monitorización continua para soportar decisiones y cumplimiento normativo en una entidad del sector público.',
  problem:
  'La entidad necesitaba transformar datos dispersos en evidencia ejecutable: identificar, evaluar y gestionar riesgos en un entorno regulado por ENS, ISO/IEC 27001 y la directiva NIS2, con reporte continuo a dirección.',
  context:
  'Sector público, exigencia regulatoria múltiple (ENS, ISO 27001, NIS2), datos heterogéneos y necesidad de marcos de control y monitorización continua.',
  approach: [
  'Análisis de datos en SAS para soporte a decisiones y gestión del riesgo',
  'Cumplimiento normativo: ENS, ISO/IEC 27001, NIS Directive (NIS2)',
  'Marcos de control y dashboards de monitorización continua',
  'Identificación, evaluación y gestión de riesgos del SI'],

  outcome: [
  { metric: 'NIS2', label: 'Cumplimiento de la directiva sobre entidad pública' },
  { metric: 'SAS', label: 'Analítica avanzada para gestión continua del riesgo' },
  { metric: 'Riesgos', label: 'Identificación, evaluación y control de riesgos del SI' }],

  stack: ['SAS', 'ISO 27001', 'ENS', 'NIS2', 'Risk Management']
},
{
  id: 'atlas',
  n: '03',
  image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=85&auto=format&fit=crop',
  sector: 'Sector Energético',
  year: '2024 — 2025',
  title: 'Proyecto Atlas — Microsoft Cloud Security Benchmark en Azure productivo',
  summary:
  'Implantación del Microsoft Cloud Security Benchmark, automatización con Terraform y modelo de identidades en Azure para un cliente del sector energético.',
  problem:
  'Una arquitectura cloud productiva sin un benchmark de seguridad consistente, con riesgos de configuración, identidad y gobernanza que comprometían el cumplimiento y la eficiencia.',
  context:
  'Sector energético, infraestructura crítica en Microsoft Azure, requisitos elevados de seguridad, gobernanza y rendimiento en entornos productivos.',
  approach: [
  'Implementación del Microsoft Cloud Security Benchmark en Azure',
  'Gestión de identidades y accesos (IAM) mediante RBAC',
  'Automatización de infraestructura con Terraform',
  'Optimización de arquitectura cloud (seguridad, gobernanza, rendimiento)',
  'Homologación de componentes y plataformas'],

  outcome: [
  { metric: 'MCSB', label: 'Microsoft Cloud Security Benchmark implantado' },
  { metric: 'IaC', label: 'Infraestructura automatizada con Terraform' },
  { metric: 'RBAC', label: 'Modelo de identidades y accesos consolidado' }],

  stack: ['Microsoft Azure', 'MCSB', 'Terraform', 'RBAC', 'IAM']
},
{
  id: 'insight',
  n: '04',
  image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1600&q=85&auto=format&fit=crop',
  sector: 'Sector Automoción',
  year: '2024 — 2025',
  title: 'Proyecto Insight — dashboards de incidencias y KPIs para decisión estratégica',
  summary:
  'Diseño de dashboards Power BI para monitorización de incidencias, KPIs y soporte a decisiones estratégicas en un cliente del sector automoción.',
  problem:
  'La organización generaba grandes volúmenes de datos operativos sin transformarlos en visibilidad ejecutiva. Las decisiones estratégicas se tomaban sin métricas consolidadas ni cadencia clara.',
  context:
  'Sector automoción, datos operativos distribuidos, necesidad de reporte directivo periódico y soporte a la toma de decisiones.',
  approach: [
  'Diseño de dashboards Power BI para incidencias y KPIs',
  'Análisis y visualización de datos para decisiones estratégicas',
  'Modelado de indicadores de seguridad y operación',
  'Integración con fuentes de datos heterogéneas'],

  outcome: [
  { metric: 'KPIs', label: 'Indicadores de incidencias, seguridad y operación' },
  { metric: 'Power BI', label: 'Cuadro de mando para comité directivo' },
  { metric: 'Insights', label: 'Datos heterogéneos convertidos en evidencia accionable' }],

  stack: ['Power BI', 'SQL', 'Data Modeling', 'KPIs']
},
{
  id: 'ai-audit',
  n: '05',
  image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&q=85&auto=format&fit=crop',
  sector: 'Consultoría · IA',
  year: '2025',
  title: 'Proyecto AI Audit — auditoría de sistemas de IA bajo ISO/IEC 42001',
  summary:
  'Auditorías internas y análisis de riesgos sobre sistemas de Inteligencia Artificial conforme al estándar ISO/IEC 42001.',
  problem:
  'La adopción de sistemas de IA avanzaba más rápido que su gobierno. Faltaba un marco de auditoría y gestión de riesgos específico para IA, alineado al ciclo de vida completo del sistema.',
  context:
  'Sector consultoría, sistemas de IA en distintos estados de madurez, exigencia regulatoria emergente y necesidad de un marco verificable y auditable.',
  approach: [
  'Auditorías internas conformes a ISO/IEC 42001',
  'Análisis de riesgos sobre sistemas de Inteligencia Artificial',
  'Aseguramiento del cumplimiento durante todo el ciclo de vida',
  'Mejora continua sobre los hallazgos identificados'],

  outcome: [
  { metric: 'ISO 42001', label: 'Marco de auditoría sobre sistemas de IA implantado' },
  { metric: 'Lifecycle', label: 'Cobertura end-to-end del sistema auditado' },
  { metric: 'Hallazgos', label: 'Mejora continua sobre evidencias verificables' }],

  stack: ['ISO/IEC 42001', 'AI Governance', 'Risk Management', 'Auditoría']
}];


const SERVICES = [
{
  n: '01',
  title: 'Gobernanza, riesgos y cumplimiento',
  desc: 'ISO/IEC 27001, ISO 31000, ISO/IEC 42001 y ENS. Marcos de gobernanza, riesgo y cumplimiento como capacidad continua, no como ejercicio puntual.'
},
{
  n: '02',
  title: 'Cloud Security',
  desc: 'Microsoft Azure, Microsoft Cloud Security Benchmark, RBAC, IAM y automatización con Terraform. Arquitectura segura, gobernada y eficiente.'
},
{
  n: '03',
  title: 'Risk Management & Auditoría TI',
  desc: 'Análisis y gestión integral de riesgos en entornos corporativos y críticos. Auditorías ENS, internas y sobre sistemas de IA bajo ISO/IEC 42001.'
},
{
  n: '04',
  title: 'Data & Reporting',
  desc: 'Dashboards Power BI para KPIs de seguridad y riesgo, analítica avanzada en SAS y reporte directivo que reduce el tiempo de decisión.'
}];


const EXPERIENCE = [
{
  period: 'Ago. 2024 — Actualidad',
  company: 'PwC España',
  logo: 'assets/logo-pwc.png',
  logoBg: '#ffffff',
  logoPad: true,
  role: 'Cybersecurity and Privacy Associate · Business Security Solutions',
  location: 'Madrid · Jornada completa',
  impact: [
  'Consultor especializado en gobernanza, riesgos y cumplimiento, junto a Cloud Security, para clientes nacionales e internacionales en sectores estratégicos y críticos.',
  'Participación en proyectos de Ferrocarriles, Sector Público, Energético, Automoción y Consultoría / IA.',
  'Implantación del Microsoft Cloud Security Benchmark en entornos Azure productivos.',
  'Diseño de dashboards Power BI para monitorización de KPIs de seguridad y riesgo, reduciendo el tiempo de análisis y reporte directivo.',
  'Auditorías internas y análisis de riesgos sobre sistemas de IA bajo ISO/IEC 42001.']

},
{
  period: 'Feb. 2024 — May. 2024',
  company: 'Atlas Cloud S.L.',
  logo: 'assets/logo-atlas.png',
  logoBg: '#0f2545',
  role: 'Salesforce Developer · Contrato de prácticas',
  location: 'Segovia · Híbrido',
  impact: [
  'Desarrollo de soluciones a medida en Salesforce (Apex, Salesforce.com) para mejora de procesos de seguimiento y gestión de clientes.',
  'Mejora de la metodología de ventas y fidelización aplicando buenas prácticas de modelado y automatización del CRM.',
  'Diseño y personalización de dashboards y reportes para soportar la toma de decisiones basada en datos.',
  'Integración de Salesforce con otras plataformas para reducir la fragmentación de datos.']

}];


const EDUCATION = [
{
  period: 'Sept. 2025 — Oct. 2026',
  institution: 'UNIR',
  logo: 'assets/logo-unir.png',
  logoBg: '#0a8bd6',
  title: 'Máster Universitario en Ciberseguridad',
  detail: 'Cloud Security, Hacking ético, ISO/IEC 27001 y entornos críticos. Alineado a ENS, NIS2 y GDPR.'
},
{
  period: '2020 — 2024',
  institution: 'Universidad de Valladolid',
  logo: 'assets/logo-uva.png',
  logoBg: '#b91458',
  title: 'Grado en Ingeniería Informática',
  detail: 'Escuela de Ingeniería Informática (SG). Ingeniería del software, IA, ciberseguridad, bases de datos, redes y metodologías ágiles.'
}];


const CERTIFICATIONS = [
'MBA online — ThePowerMBA',
'AZ-900 — Microsoft Certified: Azure Fundamentals',
'Esquema Nacional de Seguridad (CCN)',
'Auditorías en el ENS (CCN)',
'Análisis y Gestión de Riesgos de los SSII (CCN)',
'Certificación en IA — ThePowerIA',
'+10 certificaciones Google en GenAI, LLMs y Vertex AI',
'Certified Scrum Master — Scrum Manager'];


const STACK = {
  'Cloud & Security': ['Microsoft Azure', 'Microsoft Cloud Security Benchmark', 'Terraform'],
  'Frameworks': ['ISO 27001', 'ISO 31000', 'ISO 42001', 'ENS', 'NIS2', 'GDPR'],
  'Data': ['Power BI', 'SAS', 'SQL'],
  'Dev': ['Java', 'Python', 'JavaScript', 'MERN Stack', 'Apex (Salesforce)'],
  'Ways of working': ['Scrum', 'Agile']
};

const CONTACT = {
  email: 'sergio.fagundez.m@gmail.com',
  phone: '+34 685 27 22 99',
  linkedin: 'https://www.linkedin.com/in/sergiofagundezmanso/'
};

// ---------- Hooks ----------

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute('data-revealed', '');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const handler = () => {
      const top = window.scrollY || document.documentElement.scrollTop || 0;
      const viewportH = window.innerHeight;
      const probe = top + viewportH * 0.3;
      let current = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const offset = rect.top + top;
        if (offset <= probe) current = id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, [ids]);
  return active;
}

// ---------- UI primitives ----------

function MagneticButton({ children, onClick, variant = 'solid', ...rest }) {
  const ref = useRef(null);
  const [t, setT] = useState({ x: 0, y: 0 });
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    setT({ x: x * 0.25, y: y * 0.35 });
  };
  const reset = () => setT({ x: 0, y: 0 });
  return (
    <button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      onClick={onClick}
      className={`magnetic magnetic--${variant}`}
      style={{ transform: `translate(${t.x}px, ${t.y}px)` }}
      {...rest}>
      
      <span style={{ display: 'inline-block', transform: `translate(${t.x * 0.4}px, ${t.y * 0.4}px)` }}>
        {children}
      </span>
    </button>);

}

function SectionLabel({ n, label }) {
  return (
    <div className="section-label" data-reveal>
      <span className="section-label__n">{n}</span>
      <span className="section-label__line" aria-hidden="true" />
      <span className="section-label__label">{label}</span>
    </div>);

}

// ---------- Sections ----------

function SideRail({ active, onJump }) {
  return (
    <nav className="side-rail" aria-label="Secciones">
      <ul>
        {NAV.map((item) =>
        <li key={item.id}>
            <button
            onClick={() => onJump(item.id)}
            className={'rail-item ' + (active === item.id ? 'is-active' : '')}
            aria-current={active === item.id ? 'true' : undefined}>
            
              <span className="rail-n">{item.n}</span>
              <span className="rail-label">{item.label}</span>
            </button>
          </li>
        )}
      </ul>
    </nav>);

}

function TopBar({ onJump, onContact }) {
  return (
    <header className="topbar">
      <button className="topbar__brand" onClick={() => onJump('inicio')}>
        <span className="brand-mark" aria-hidden="true">SF</span>
        <span className="brand-text">
          <span className="brand-name">Sergio Fagúndez Manso</span>
          <span className="brand-role">Cybersecurity Consultant · PwC</span>
        </span>
      </button>
      <div className="topbar__actions">
        <a className="topbar__cv" href="assets/CV-Sergio-Fagundez-Manso.pdf" download="CV-Sergio-Fagundez-Manso.pdf">
          <span>Descargar CV</span>
          <span aria-hidden="true">↓</span>
        </a>
        <button className="topbar__cta" onClick={onContact}>
          <span>Contacto</span>
          <span className="topbar__dot" aria-hidden="true" />
        </button>
      </div>
    </header>);

}

function Hero({ variant, onJump, onContact }) {
  // Variants:
  // A: Quiet name top-left + huge thesis (default, requested)
  // B: Split — name/title left, intro paragraph right
  // C: Marquee scrolling thesis
  if (variant === 'split') return <HeroSplit onJump={onJump} onContact={onContact} />;
  if (variant === 'marquee') return <HeroMarquee onJump={onJump} onContact={onContact} />;
  return <HeroQuiet onJump={onJump} onContact={onContact} />;
}

function HeroQuiet({ onJump, onContact }) {
  return (
    <section id="inicio" className="hero hero--quiet">
      <div className="hero__meta">
        <div className="hero__name">Sergio Fagúndez Manso</div>
        <div className="hero__role">Cybersecurity Consultant · PwC España</div>
      </div>
      <div className="hero__location">
        <span>Madrid, ES</span>
        <span className="hero__sep" aria-hidden="true">·</span>
        <span>Gobernanza, riesgos y cumplimiento · Cloud Security · IA</span>
      </div>
      <h1 className="hero__thesis" data-reveal>
        <span className="hero__line">Anticipar, medir</span>
        <span className="hero__line">y mitigar el <em>riesgo</em></span>
        <span className="hero__line">de los sistemas</span>
        <span className="hero__line hero__line--muted">de información.</span>
      </h1>
      <div className="hero__foot">
        <div className="hero__cta">
          <MagneticButton onClick={() => onJump('trabajo')} variant="solid">
            Ver proyectos →
          </MagneticButton>
          <MagneticButton onClick={onContact} variant="ghost">
            Contacto
          </MagneticButton>
        </div>
      </div>
    </section>);

}

function HeroSplit({ onJump, onContact }) {
  return (
    <section id="inicio" className="hero hero--split">
      <div className="hero-split__left">
        <div className="hero__name">Sergio Fagúndez Manso</div>
        <div className="hero__role">Cybersecurity Consultant · PwC</div>
        <div className="hero-split__loc">Madrid · 2026</div>
      </div>
      <div className="hero-split__right">
        <h1 className="hero__thesis hero__thesis--compact" data-reveal>
          Decisiones de seguridad <em>claras</em>, en el lenguaje del negocio.
        </h1>
        <p className="hero-split__sub">
          Asesoría a comités y direcciones generales sobre estrategia de
          ciberseguridad, gestión de riesgo y transformación digital segura.
        </p>
        <div className="hero__cta">
          <MagneticButton onClick={() => onJump('trabajo')}>Ver trabajo →</MagneticButton>
          <MagneticButton onClick={onContact} variant="ghost">Contacto</MagneticButton>
        </div>
      </div>
    </section>);

}

function HeroMarquee({ onJump, onContact }) {
  const phrase = 'Estrategia · Riesgo · Decisiones · Confianza · ';
  return (
    <section id="inicio" className="hero hero--marquee">
      <div className="hero__meta">
        <div className="hero__name">Sergio Fagúndez Manso</div>
        <div className="hero__role">Cybersecurity Consultant · PwC</div>
      </div>
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {Array.from({ length: 6 }).map((_, i) =>
          <span key={i} className="marquee__item">
              {phrase}
            </span>
          )}
        </div>
      </div>
      <div className="hero__foot hero__foot--marquee">
        <p className="hero-marquee__sub">
          Cybersecurity consulting que traduce riesgo técnico en
          decisiones estratégicas. Para organizaciones que necesitan
          avanzar sin renunciar a la confianza.
        </p>
        <div className="hero__cta">
          <MagneticButton onClick={() => onJump('trabajo')}>Ver trabajo →</MagneticButton>
          <MagneticButton onClick={onContact} variant="ghost">Contacto</MagneticButton>
        </div>
      </div>
    </section>);

}

function About() {
  return (
    <section id="perfil" className="section section--about">
      <SectionLabel n="02" label="Perfil" />
      <div className="about">
        <p className="about__lead" data-reveal>
          Trabajo en la frontera entre <em>tecnología</em>, cumplimiento
          normativo y <em>estrategia</em>. Ayudo a organizaciones —públicas
          y privadas— a anticipar, medir y mitigar el riesgo de sus
          sistemas de información.
        </p>
        <div className="about__cols">
          <div className="about__col" data-reveal>
            <div className="about__col-h">Formación</div>
            <p>
              Ingeniero Informático por la Universidad de Valladolid.
              Cursando el Máster en Ciberseguridad por UNIR
              (cloud, hacking ético, ISO 27001 y entornos críticos).
            </p>
          </div>
          <div className="about__col" data-reveal>
            <div className="about__col-h">Especialización</div>
            <p>
              Gobernanza, riesgos y cumplimiento, junto a Cloud Security.
              ISO 27001, ISO 42001, ENS y NIS2 como ejes principales.
            </p>
          </div>
          <div className="about__col" data-reveal>
            <div className="about__col-h">Sectores</div>
            <p>
              Ferrocarriles, sector público, energético, automoción y
              consultoría / IA. Entornos estratégicos y críticos donde
              la confianza no es opcional.
            </p>
          </div>
        </div>
      </div>
    </section>);

}

function CaseCard({ c, onOpen, idx }) {
  return (
    <article
      className="case"
      data-reveal
      style={{ '--reveal-delay': `${idx * 80}ms` }}
      onClick={() => onOpen(c.id)}>
      
      <div className="case__media" aria-hidden="true">
        <div className="case__media-inner">
          {c.image && (
            <img className="case__img" src={c.image} alt="" loading="lazy" />
          )}
          <div className="case__hover-text">
            Leer caso <span>→</span>
          </div>
          <div className="case__placeholder">
            <span>{c.n}</span>
          </div>
        </div>
      </div>
      <div className="case__meta">
        <span>{c.sector}</span>
      </div>
      <h3 className="case__title">{c.title}</h3>
      <p className="case__summary">{c.summary}</p>
      <div className="case__open">
        <span>Leer caso completo</span>
        <span className="case__arrow" aria-hidden="true">→</span>
      </div>
    </article>);

}

function Work({ onOpen }) {
  return (
    <section id="trabajo" className="section section--work">
      <SectionLabel n="03" label="Proyectos" />
      <div className="work__intro" data-reveal>
        <h2 className="work__h">
          Cinco proyectos. Cinco sectores críticos.
        </h2>
      </div>
      <div className="cases">
        {CASES.map((c, i) =>
        <CaseCard key={c.id} c={c} onOpen={onOpen} idx={i} />
        )}
      </div>
    </section>);

}

function Expertise() {
  return (
    <section id="expertise" className="section section--expertise">
      <SectionLabel n="04" label="Áreas" />
      <div className="exp__intro" data-reveal>
        <h2 className="exp__h">Cuatro áreas. Una misma intención.</h2>
      </div>
      <ul className="exp-list">
        {SERVICES.map((s, i) =>
        <li key={s.n} className="exp-row" data-reveal style={{ '--reveal-delay': `${i * 60}ms` }}>
            <div className="exp-row__n">{s.n}</div>
            <div className="exp-row__title">{s.title}</div>
            <div className="exp-row__desc">{s.desc}</div>
          </li>
        )}
      </ul>
    </section>);

}

function Testimonial() {
  return (
    <section className="section section--quote">
      <figure className="pull-quote" data-reveal>
        <blockquote>
          <span className="pull-quote__mark" aria-hidden="true">“</span>
          La ciberseguridad no es un destino, es una capacidad continua.
          Mi trabajo es construirla con quien decide.
        </blockquote>
        <figcaption>
          <span>Sergio Fagúndez Manso</span>
          <span className="pull-quote__sep" aria-hidden="true">·</span>
          <span>Cybersecurity Consultant</span>
        </figcaption>
      </figure>
    </section>);

}

function Experience() {
  return (
    <section id="experiencia" className="section section--exp">
      <SectionLabel n="05" label="Experiencia" />
      <ol className="timeline">
        {EXPERIENCE.map((e, i) =>
        <li className="tl-row" key={i} data-reveal>
            <div className="tl-period"><span>{e.period}</span></div>
            <div className="tl-body">
              <div className="tl-company">
                {e.logo && (
                  <span className={`tl-logo-inline${e.logoPad ? ' tl-logo-inline--pad' : ''}`} style={{ background: e.logoBg || 'transparent' }}>
                    <img src={e.logo} alt={`${e.company} logo`} />
                  </span>
                )}
                <span>{e.company}</span>
              </div>
              <div className="tl-role">{e.role}</div>
              {e.location && <div className="tl-loc">{e.location}</div>}
              <ul className="tl-impact">
                {e.impact.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
            </div>
          </li>
        )}
      </ol>

      <div className="edu-block">
        <div className="edu-head" data-reveal>
          <span className="edu-eyebrow">Formación</span>
          <h3 className="edu-h">Ingeniería, ciberseguridad y dirección.</h3>
        </div>
        <ol className="timeline timeline--edu">
          {EDUCATION.map((e, i) =>
          <li className="tl-row" key={i} data-reveal>
              <div className="tl-period"><span>{e.period}</span></div>
              <div className="tl-body">
                <div className="tl-company">
                  {e.logo && (
                    <span className={`tl-logo-inline${e.logoPad ? ' tl-logo-inline--pad' : ''}`} style={{ background: e.logoBg || 'transparent' }}>
                      <img src={e.logo} alt={`${e.institution} logo`} />
                    </span>
                  )}
                  <span style={{ whiteSpace: 'pre-line' }}>{e.institution}</span>
                </div>
                <div className="tl-role">{e.title}</div>
                <p className="tl-detail">{e.detail}</p>
              </div>
            </li>
          )}
        </ol>
      </div>

      <div className="certs-block" data-reveal>
        <div className="certs-head">
          <span className="edu-eyebrow">Certificaciones & cursos</span>
          <h3 className="edu-h">Formación continua.</h3>
        </div>
        <ul className="certs-list">
          {CERTIFICATIONS.map((c, i) =>
          <li key={i} className="cert-item">
              <span className="cert-n">{String(i + 1).padStart(2, '0')}</span>
              <span className="cert-label">{c}</span>
            </li>
          )}
        </ul>
      </div>

      <div className="stack-block" data-reveal>
        <div className="certs-head">
          <span className="edu-eyebrow">Stack & herramientas</span>
          <h3 className="edu-h">Lo que uso para entregar.</h3>
        </div>
        <dl className="stack-grid">
          {Object.entries(STACK).map(([group, items]) =>
          <div className="stack-row" key={group}>
              <dt>{group}</dt>
              <dd>
                {items.map((it, i) =>
              <span key={i} className="stack-tag">{it}</span>
              )}
              </dd>
            </div>
          )}
        </dl>
      </div>
    </section>);

}

function Contact({ onContact }) {
  const [toast, setToast] = useState(null);
  const copy = useCallback((value, label) => {
    const fire = () => {
      setToast(label);
      window.clearTimeout(copy._t);
      copy._t = window.setTimeout(() => setToast(null), 1800);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).then(fire).catch(() => {
        // Fallback
        const ta = document.createElement('textarea');
        ta.value = value; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); } catch (e) {}
        document.body.removeChild(ta);
        fire();
      });
    } else {
      fire();
    }
  }, []);
  return (
    <section id="contacto" className="section section--contact">
      <SectionLabel n="06" label="Contacto" />
      <div className="contact" data-reveal>
        <h2 className="contact__h">
          ¿Tienes una decisión <em>importante</em> por delante?
        </h2>
        <div className="contact__cta">
          <span className="magnetic magnetic--static" aria-hidden="true">
            <span>Contáctame →</span>
          </span>
          <a className="contact__link" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <button
            type="button"
            className="contact__email-plain contact__copy"
            onClick={() => copy(CONTACT.email, 'Correo copiado')}
            aria-label={`Copiar correo ${CONTACT.email}`}>
            {CONTACT.email}
          </button>
          <button
            type="button"
            className="contact__link contact__copy"
            onClick={() => copy(CONTACT.phone, 'Teléfono copiado')}
            aria-label={`Copiar teléfono ${CONTACT.phone}`}>
            {CONTACT.phone}
          </button>
        </div>
      </div>
      <div className={`copy-toast${toast ? ' is-on' : ''}`} aria-live="polite">
        <span>{toast || ''}</span>
      </div>
      <footer className="footer">
        <div>© 2026 Sergio Fagúndez Manso</div>
        <div>Madrid · Cybersecurity Consultant</div>
      </footer>
    </section>);

}

// ---------- Case detail overlay ----------

function CaseDetail({ caseId, onClose }) {
  const c = CASES.find((x) => x.id === caseId);
  useEffect(() => {
    if (!c) return;
    const onKey = (e) => {if (e.key === 'Escape') onClose();};
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [c, onClose]);
  if (!c) return null;

  return (
    <div className="detail" role="dialog" aria-modal="true" aria-labelledby="detail-title">
      <div className="detail__backdrop" onClick={onClose} />
      <div className="detail__panel">
        <div className="detail__bar">
          <div className="detail__bread">
            <span>Trabajo</span>
            <span aria-hidden="true">/</span>
            <span>{c.sector}</span>
          </div>
          <button className="detail__close" onClick={onClose} aria-label="Cerrar">
            <span>Cerrar</span>
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <article className="detail__content">
          <div className="detail__eyebrow">
            <span>{c.n}</span>
            <span aria-hidden="true">·</span>
            <span>{c.sector}</span>
          </div>
          <h2 id="detail-title" className="detail__title">{c.title}</h2>

          <div className="detail__hero" aria-hidden="true">
            {c.image ? (
              <img className="detail__hero-img" src={c.image} alt="" />
            ) : (
              <div className="detail__hero-inner">
                <span>{c.n} · Caso de estudio</span>
              </div>
            )}
          </div>

          <div className="detail__grid">
            <div className="detail__col-label">Problema</div>
            <div className="detail__col-body"><p>{c.problem}</p></div>

            <div className="detail__col-label">Contexto</div>
            <div className="detail__col-body"><p>{c.context}</p></div>

            <div className="detail__col-label">Enfoque estratégico</div>
            <div className="detail__col-body">
              <ol className="detail__list">
                {c.approach.map((a, i) =>
                <li key={i}><span className="detail__list-n">{String(i + 1).padStart(2, '0')}</span>{a}</li>
                )}
              </ol>
            </div>

            <div className="detail__col-label">Impacto</div>
            <div className="detail__col-body">
              <div className="detail__metrics">
                {c.outcome.map((o, i) =>
                <div className="metric" key={i}>
                    <div className="metric__value">{o.metric}</div>
                    <div className="metric__label">{o.label}</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <figure className="detail__quote">
            <div className="detail__stack">
              <div className="detail__stack-h">Stack & frameworks</div>
              <div className="detail__stack-tags">
                {(c.stack || []).map((s, i) =>
                <span key={i} className="stack-tag">{s}</span>
                )}
              </div>
            </div>
          </figure>

          <div className="detail__nav">
            <button className="detail__navlink" onClick={onClose}>
              ← Volver al trabajo
            </button>
            <button
              className="detail__navlink"
              onClick={() => {
                const idx = CASES.findIndex((x) => x.id === c.id);
                const next = CASES[(idx + 1) % CASES.length];
                document.querySelector('.detail__content').scrollTop = 0;
                onClose();
                setTimeout(() => {
                  // open next via custom event
                  window.dispatchEvent(new CustomEvent('open-case', { detail: next.id }));
                }, 50);
              }}>
              
              Siguiente caso →
            </button>
          </div>
        </article>
      </div>
    </div>);

}

// ---------- Tweaks defaults ----------

const TWEAK_DEFAULS = /*EDITMODE-BEGIN*/{
  "typePair": "modern",
  "density": "airy",
  "theme": "light",
  "heroVariant": "quiet"
} /*EDITMODE-END*/;

// ---------- App ----------

function App() {
  const tw = window.useTweaks ? window.useTweaks(TWEAK_DEFAULS) : null;
  const t = tw ? tw[0] : TWEAK_DEFAULS;
  const setTweak = tw ? tw[1] : () => {};

  const [openCase, setOpenCase] = useState(null);
  const active = useActiveSection(NAV.map((n) => n.id));
  useScrollReveal();

  // Apply tweaks to root
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.type = t.typePair;
    root.dataset.density = t.density;
    root.dataset.theme = t.theme;
  }, [t.typePair, t.density, t.theme]);

  useEffect(() => {
    const handler = (e) => setOpenCase(e.detail);
    window.addEventListener('open-case', handler);
    return () => window.removeEventListener('open-case', handler);
  }, []);

  const jump = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handleContact = useCallback(() => {
    jump('contacto');
  }, [jump]);

  return (
    <div className="page" data-scroller>
      <TopBar onJump={jump} onContact={handleContact} />
      <SideRail active={active} onJump={jump} />

      <main className="main">
        <Hero variant={t.heroVariant} onJump={jump} onContact={handleContact} />
        <About />
        <Work onOpen={setOpenCase} />
        <Expertise />
        <Testimonial />
        <Experience />
        <Contact onContact={handleContact} />
      </main>

      {openCase && <CaseDetail caseId={openCase} onClose={() => setOpenCase(null)} />}

      {window.TweaksPanel &&
      <window.TweaksPanel title="Tweaks">
          <window.TweakSection title="Tipografía">
            <window.TweakRadio
            label="Pareja tipográfica"
            value={t.typePair}
            onChange={(v) => setTweak('typePair', v)}
            options={[
            { value: 'modern', label: 'Sans' },
            { value: 'editorial', label: 'Serif' }]
            } />
          
          </window.TweakSection>
          <window.TweakSection title="Composición">
            <window.TweakRadio
            label="Densidad"
            value={t.density}
            onChange={(v) => setTweak('density', v)}
            options={[
            { value: 'airy', label: 'Airy' },
            { value: 'compact', label: 'Compact' }]
            } />
          
            <window.TweakRadio
            label="Tema"
            value={t.theme}
            onChange={(v) => setTweak('theme', v)}
            options={[
            { value: 'light', label: 'Light' },
            { value: 'dark', label: 'Dark' }]
            } />
          
          </window.TweakSection>
          <window.TweakSection title="Hero">
            <window.TweakSelect
            label="Variante"
            value={t.heroVariant}
            onChange={(v) => setTweak('heroVariant', v)}
            options={[
            { value: 'quiet', label: 'Quiet (nombre arriba, tesis grande)' },
            { value: 'split', label: 'Split (nombre / intro)' },
            { value: 'marquee', label: 'Marquee (titular en movimiento)' }]
            } />
          
          </window.TweakSection>
        </window.TweaksPanel>
      }
    </div>);

}

window.PortfolioApp = App;