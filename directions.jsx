// Direction variations — three editorial flavors of the portfolio hero+work above-the-fold.
// Used inside DesignCanvas artboards. Each is a self-contained styled snippet.

const VarA_QuietLuxury = () => (
  <div className="vbase v-luxury">
    <div className="v-top">
      <div className="v-mark">SF</div>
      <div className="v-meta">
        <div>Sergio Fagúndez Manso</div>
        <div className="v-muted">Cybersecurity Consultant · PwC</div>
      </div>
      <div className="v-cta-mini">Contacto</div>
    </div>
    <div className="v-eyebrow"><span>Madrid</span><span>·</span><span>2026</span></div>
    <h1 className="v-thesis v-thesis--serif">
      Ayudo a organizaciones a tomar <em>decisiones</em> seguras en un entorno digital cada vez más complejo.
    </h1>
    <div className="v-foot">
      <div className="v-sub">Consultoría estratégica que traduce riesgo técnico en impacto de negocio.</div>
      <div className="v-cta v-cta--solid">Ver trabajo →</div>
    </div>
    <div className="v-rule" />
    <div className="v-worklabel"><span>03</span><span className="v-line" /><span>Trabajo seleccionado</span></div>
    <div className="v-cases">
      <div className="v-case v-case--wide">
        <div className="v-case-img v-case-img--lux"><span>01</span></div>
        <div className="v-case-meta"><span>Industrial</span><span>2024</span></div>
        <div className="v-case-title">Visibilidad y priorización del riesgo cibernético</div>
      </div>
      <div className="v-case">
        <div className="v-case-img v-case-img--lux"><span>02</span></div>
        <div className="v-case-meta"><span>Financiero</span><span>2024</span></div>
        <div className="v-case-title">Estrategia para una transformación cloud</div>
      </div>
      <div className="v-case">
        <div className="v-case-img v-case-img--lux"><span>03</span></div>
        <div className="v-case-meta"><span>Retail</span><span>2023</span></div>
        <div className="v-case-title">Reducción de superficie de ataque</div>
      </div>
    </div>
  </div>
);

const VarB_McKinsey = () => (
  <div className="vbase v-mck">
    <div className="v-top v-top--mck">
      <div className="v-meta">
        <div className="v-mck-name">Sergio Fagúndez Manso</div>
        <div className="v-muted">Cybersecurity Consultant · PwC · Madrid</div>
      </div>
      <div className="v-cta-mini v-cta-mini--mck">Contacto →</div>
    </div>
    <div className="v-mck-band">
      <div className="v-mck-eyebrow">Cyber strategy · Risk · Trusted advisory</div>
      <h1 className="v-thesis v-thesis--mck">
        Decisiones de seguridad claras, en el lenguaje del negocio.
      </h1>
      <div className="v-mck-stats">
        <div><div className="v-stat">−52%</div><div className="v-stat-l">Exposición a amenazas críticas</div></div>
        <div><div className="v-stat">3×</div><div className="v-stat-l">Velocidad de despliegue seguro</div></div>
        <div><div className="v-stat">100%</div><div className="v-stat-l">Cobertura regulatoria</div></div>
      </div>
    </div>
    <div className="v-worklabel"><span>03</span><span className="v-line" /><span>Selected work</span></div>
    <div className="v-cases v-cases--mck">
      <div className="v-case">
        <div className="v-case-img v-case-img--mck"><span>01</span></div>
        <div className="v-case-meta"><span>Industrial · 2024</span></div>
        <div className="v-case-title v-case-title--mck">Visibilidad del riesgo cibernético</div>
      </div>
      <div className="v-case">
        <div className="v-case-img v-case-img--mck"><span>02</span></div>
        <div className="v-case-meta"><span>Financiero · 2024</span></div>
        <div className="v-case-title v-case-title--mck">Seguridad en transformación cloud</div>
      </div>
      <div className="v-case">
        <div className="v-case-img v-case-img--mck"><span>03</span></div>
        <div className="v-case-meta"><span>Retail · 2023</span></div>
        <div className="v-case-title v-case-title--mck">Reducción de superficie de ataque</div>
      </div>
    </div>
  </div>
);

const VarC_Marquee = () => (
  <div className="vbase v-marquee">
    <div className="v-top">
      <div className="v-mark">SF</div>
      <div className="v-meta">
        <div>Sergio Fagúndez Manso</div>
        <div className="v-muted">Cybersecurity Consultant · PwC</div>
      </div>
      <div className="v-cta-mini">Contacto</div>
    </div>
    <div className="v-mq-band">
      <div className="v-mq-track">
        <span>Estrategia · Riesgo · Decisiones · Confianza · </span>
        <span>Estrategia · Riesgo · Decisiones · Confianza · </span>
      </div>
    </div>
    <div className="v-foot v-foot--mq">
      <div className="v-sub">Cybersecurity consulting que traduce riesgo técnico en decisiones estratégicas.</div>
      <div className="v-cta v-cta--solid">Ver trabajo →</div>
    </div>
    <div className="v-worklabel"><span>03</span><span className="v-line" /><span>Trabajo</span></div>
    <div className="v-cases">
      <div className="v-case v-case--wide">
        <div className="v-case-img v-case-img--mq"><span>01</span></div>
        <div className="v-case-meta"><span>Industrial</span><span>2024</span></div>
        <div className="v-case-title">Visibilidad y priorización del riesgo</div>
      </div>
      <div className="v-case">
        <div className="v-case-img v-case-img--mq"><span>02</span></div>
        <div className="v-case-meta"><span>Financiero</span><span>2024</span></div>
        <div className="v-case-title">Transformación cloud segura</div>
      </div>
      <div className="v-case">
        <div className="v-case-img v-case-img--mq"><span>03</span></div>
        <div className="v-case-meta"><span>Retail</span><span>2023</span></div>
        <div className="v-case-title">Hardening y cumplimiento</div>
      </div>
    </div>
  </div>
);

function DirectionsCanvas() {
  return (
    <window.DesignCanvas>
      <window.DCSection
        id="hero-directions"
        title="Tres direcciones"
        subtitle="Misma estructura, distinta personalidad. Cada artboard muestra hero + bloque de trabajo seleccionado."
      >
        <window.DCArtboard id="a-luxury" label="A · Quiet luxury (recomendada)" width={1280} height={1500}>
          <VarA_QuietLuxury />
        </window.DCArtboard>
        <window.DCArtboard id="b-mck" label="B · Modern consulting" width={1280} height={1500}>
          <VarB_McKinsey />
        </window.DCArtboard>
        <window.DCArtboard id="c-marquee" label="C · Editorial marquee" width={1280} height={1500}>
          <VarC_Marquee />
        </window.DCArtboard>
      </window.DCSection>

      <window.DCSection
        id="prototype"
        title="Prototipo expandido"
        subtitle="Versión completa, navegable. Tweaks: tipo, densidad, tema y variante de hero."
      >
        <window.DCArtboard id="full" label="Prototipo · scrolleable e interactivo" width={1440} height={900}>
          <iframe
            src="Portfolio.html"
            style={{ width: '1440px', height: '900px', border: 0, background: '#FAFAF7' }}
            title="Portfolio prototype"
          />
        </window.DCArtboard>
      </window.DCSection>
    </window.DesignCanvas>
  );
}

window.DirectionsCanvas = DirectionsCanvas;
