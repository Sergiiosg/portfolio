// Sergio Fagúndez Manso — content & i18n
// Plain JS (no JSX) so it loads without Babel transpilation.

// ---------- Language-neutral data ----------

window.DATA = {
  contact: {
    email: 'sergio.fagundez.m@gmail.com',
    phone: '+34 685 27 22 99',
    linkedin: 'https://www.linkedin.com/in/sergiofagundezmanso/'
  },

  cvPath: 'assets/CV-Sergio-Fagundez-Manso.pdf',

  // Case visuals are generated SVG, keyed by `visual`.
  cases: [
    { id: 'convergence', n: '01', visual: 'grid',     year: '2024 — 2025', stack: ['ISO 27001', 'ENS', 'Power BI', 'Antimalware', 'Virtualization'] },
    { id: 'opsec',       n: '02', visual: 'signal',   year: '2024 — 2025', stack: ['SAS', 'ISO 27001', 'ENS', 'NIS2', 'Risk Management'] },
    { id: 'atlas',       n: '03', visual: 'topology', year: '2024 — 2025', stack: ['Microsoft Azure', 'MCSB', 'Terraform', 'RBAC', 'IAM'] },
    { id: 'insight',     n: '04', visual: 'bars',     year: '2024 — 2025', stack: ['Power BI', 'SQL', 'Data Modeling', 'KPIs'] },
    { id: 'ai-audit',    n: '05', visual: 'lattice',  year: '2025',        stack: ['ISO/IEC 42001', 'AI Governance', 'Risk Management', 'Audit'] }
  ],

  experience: [
    { id: 'kpmg',  logo: 'assets/logo-kpmg.png',  logoBg: '#ffffff', logoPad: true, current: true },
    { id: 'pwc',   logo: 'assets/logo-pwc.png',   logoBg: '#ffffff', logoPad: true },
    { id: 'atlas', logo: 'assets/logo-atlas.png', logoBg: '#0f2545' }
  ],

  education: [
    { id: 'unir', logo: 'assets/logo-unir.png', logoBg: '#0a8bd6' },
    { id: 'uva',  logo: 'assets/logo-uva.png',  logoBg: '#b91458' }
  ],

  // Standards and platforms, shown as a moving band. Language-neutral by nature.
  marquee: [
    'ISO/IEC 27001', 'ENS', 'NIS2', 'GDPR', 'ISO/IEC 42001', 'ISO 31000',
    'Microsoft Azure', 'Cloud Security Benchmark', 'Terraform', 'RBAC',
    'Power BI', 'SAS', 'Risk Management'
  ],

  stackGroups: [
    { id: 'cloud',  items: ['Microsoft Azure', 'Microsoft Cloud Security Benchmark', 'Terraform'] },
    { id: 'frames', items: ['ISO 27001', 'ISO 31000', 'ISO 42001', 'ENS', 'NIS2', 'GDPR'] },
    { id: 'data',   items: ['Power BI', 'SAS', 'SQL'] },
    { id: 'dev',    items: ['Java', 'Python', 'JavaScript', 'MERN Stack', 'Apex (Salesforce)'] },
    { id: 'ways',   items: ['Scrum', 'Agile'] }
  ]
};

// ---------- Copy ----------

window.COPY = {
  es: {
    htmlLang: 'es',
    meta: {
      title: 'Sergio Fagúndez Manso — Consultor de Ciberseguridad',
      description: 'Consultor senior de ciberseguridad en KPMG. Gobernanza, riesgo y cumplimiento, Cloud Security y auditoría de sistemas de IA.'
    },
    langName: 'ES',
    langSwitch: 'Switch to English',

    nav: [
      { id: 'inicio',      n: '01', label: 'Inicio' },
      { id: 'perfil',      n: '02', label: 'Perfil' },
      { id: 'trabajo',     n: '03', label: 'Proyectos' },
      { id: 'expertise',   n: '04', label: 'Áreas' },
      { id: 'experiencia', n: '05', label: 'Trayectoria' },
      { id: 'contacto',    n: '06', label: 'Contacto' }
    ],

    identity: {
      name: 'Sergio Fagúndez Manso',
      role: 'Consultor Senior de Ciberseguridad',
      company: 'KPMG España',
      location: 'Segovia · España',
      tags: ['Gobernanza, riesgo y cumplimiento', 'Cloud Security', 'Auditoría de IA']
    },

    ui: {
      cv: 'Descargar CV',
      contact: 'Contacto',
      viewProjects: 'Ver proyectos',
      close: 'Cerrar',
      copy: 'Copiar',
      copied: 'Copiado al portapapeles',
      copyFailed: 'No se pudo copiar. Selecciona el texto manualmente.',
      cvStarted: 'Descarga iniciada',
      langChanged: 'Idioma cambiado a español',
      themeLight: 'Tema claro',
      themeDark: 'Tema oscuro',
      theme: 'Tema',
      readCase: 'Leer el caso',
      problem: 'El problema',
      context: 'Contexto',
      approach: 'Enfoque',
      outcome: 'Resultado',
      stackLabel: 'Stack',
      sector: 'Sector',
      period: 'Periodo',
      present: 'Actualidad',
      scrollHint: 'Desplázate',
      backToTop: 'Volver arriba',
      skipToContent: 'Saltar al contenido',
      menu: 'Menú',
      sections: 'Secciones'
    },

    hero: {
      line1: 'Anticipar, medir',
      line2: 'y mitigar el',
      emphasis: 'riesgo',
      line3: 'de los sistemas',
      line4: 'de información.',
      standfirst: 'Consultor senior de ciberseguridad en KPMG. Trabajo en la capa donde la norma se convierte en arquitectura y la arquitectura en evidencia auditable.'
    },

    about: {
      label: 'Perfil',
      heading: 'La seguridad no se audita una vez. Se sostiene.',
      body: [
        'Soy ingeniero informático por la Universidad de Valladolid y consultor senior de ciberseguridad en KPMG España. Antes pasé casi dos años en PwC, en el equipo de Business Security Solutions.',
        'Mi trabajo se mueve entre tres planos: el marco normativo que define qué hay que proteger, la arquitectura cloud que lo implementa y los datos que demuestran que funciona. La mayoría de proyectos falla en la costura entre esos tres.',
        'He trabajado sobre infraestructura ferroviaria crítica, entidades del sector público, arquitectura Azure productiva en energía y gobierno de sistemas de IA bajo ISO/IEC 42001.'
      ],
      stats: [
        { value: '5', label: 'sectores críticos' },
        { value: '6', label: 'marcos normativos' },
        { value: '2024', label: 'en consultoría desde' }
      ]
    },

    position: {
      statement: 'La ciberseguridad no es un destino. Es una capacidad que se construye con quien decide.',
      attribution: 'Posicionamiento'
    },

    work: {
      label: 'Proyectos',
      heading: 'Trabajo seleccionado',
      note: 'Cinco proyectos, cinco sectores. El detalle está limitado por acuerdos de confidencialidad.',
      prev: 'Proyecto anterior',
      next: 'Proyecto siguiente'
    },

    cases: {
      convergence: {
        sector: 'Sector ferroviario',
        title: 'Convergence — centralización y resiliencia en infraestructura crítica',
        summary: 'Centralización de aplicaciones corporativas y despliegue de seguridad en entornos virtualizados para una infraestructura crítica del sector ferroviario.',
        problem: 'La infraestructura presentaba dispersión de aplicaciones, recursos infrautilizados y una superficie expuesta sin protección homogénea, en un entorno donde la continuidad de operación es innegociable.',
        context: 'Sistemas heterogéneos en entornos virtualizados, exigencia regulatoria alta (ISO 27001, ENS) y cero margen de tolerancia a interrupciones.',
        approach: [
          'Centralización y gestión de aplicaciones corporativas',
          'Optimización de infraestructura y consolidación de recursos',
          'Despliegue de soluciones antimalware en entornos virtualizados',
          'Dashboards Power BI para KPIs operativos y de seguridad',
          'Gestión integral de riesgos sobre ISO 27001 y ENS'
        ],
        outcome: [
          { metric: 'ISO 27001', label: 'Marco normativo desplegado sobre infraestructura ferroviaria crítica' },
          { metric: 'ENS', label: 'Cumplimiento del Esquema Nacional de Seguridad' },
          { metric: 'Power BI', label: 'KPIs operativos y de seguridad en tiempo real' }
        ]
      },
      opsec: {
        sector: 'Sector público',
        title: 'OpSec — analítica avanzada para la gestión del riesgo público',
        summary: 'Analítica de datos en SAS y monitorización continua para soportar decisiones y cumplimiento normativo en una entidad del sector público.',
        problem: 'La entidad necesitaba convertir datos dispersos en evidencia ejecutable: identificar, evaluar y gestionar riesgos bajo ENS, ISO/IEC 27001 y NIS2, con reporte continuo a dirección.',
        context: 'Exigencia regulatoria múltiple, datos heterogéneos y necesidad de marcos de control con monitorización continua.',
        approach: [
          'Análisis de datos en SAS para soporte a decisiones',
          'Cumplimiento de ENS, ISO/IEC 27001 y NIS2',
          'Marcos de control y dashboards de monitorización continua',
          'Identificación, evaluación y gestión de riesgos del SI'
        ],
        outcome: [
          { metric: 'NIS2', label: 'Cumplimiento de la directiva sobre entidad pública' },
          { metric: 'SAS', label: 'Analítica avanzada para gestión continua del riesgo' },
          { metric: 'Riesgos', label: 'Identificación, evaluación y control de riesgos del SI' }
        ]
      },
      atlas: {
        sector: 'Sector energético',
        title: 'Atlas — Microsoft Cloud Security Benchmark en Azure productivo',
        summary: 'Implantación del Microsoft Cloud Security Benchmark, automatización con Terraform y modelo de identidades en Azure para un cliente del sector energético.',
        problem: 'Una arquitectura cloud productiva sin benchmark de seguridad consistente, con riesgos de configuración, identidad y gobernanza que comprometían el cumplimiento.',
        context: 'Infraestructura crítica en Microsoft Azure con requisitos elevados de seguridad, gobernanza y rendimiento en producción.',
        approach: [
          'Implementación del Microsoft Cloud Security Benchmark en Azure',
          'Gestión de identidades y accesos mediante RBAC',
          'Automatización de infraestructura con Terraform',
          'Optimización de arquitectura cloud y homologación de componentes'
        ],
        outcome: [
          { metric: 'MCSB', label: 'Microsoft Cloud Security Benchmark implantado' },
          { metric: 'IaC', label: 'Infraestructura automatizada con Terraform' },
          { metric: 'RBAC', label: 'Modelo de identidades y accesos consolidado' }
        ]
      },
      insight: {
        sector: 'Sector automoción',
        title: 'Insight — cuadro de mando de incidencias y KPIs para dirección',
        summary: 'Diseño de dashboards Power BI para monitorización de incidencias, KPIs y soporte a decisiones estratégicas en un cliente del sector automoción.',
        problem: 'La organización generaba grandes volúmenes de datos operativos sin convertirlos en visibilidad ejecutiva. Las decisiones se tomaban sin métricas consolidadas ni cadencia clara.',
        context: 'Datos operativos distribuidos, necesidad de reporte directivo periódico y soporte a la toma de decisiones.',
        approach: [
          'Dashboards Power BI para incidencias y KPIs',
          'Análisis y visualización de datos para decisiones estratégicas',
          'Modelado de indicadores de seguridad y operación',
          'Integración con fuentes de datos heterogéneas'
        ],
        outcome: [
          { metric: 'KPIs', label: 'Indicadores de incidencias, seguridad y operación' },
          { metric: 'Power BI', label: 'Cuadro de mando para comité directivo' },
          { metric: 'Insight', label: 'Datos heterogéneos convertidos en evidencia accionable' }
        ]
      },
      'ai-audit': {
        sector: 'Consultoría · IA',
        title: 'AI Audit — auditoría de sistemas de IA bajo ISO/IEC 42001',
        summary: 'Auditorías internas y análisis de riesgos sobre sistemas de inteligencia artificial conforme al estándar ISO/IEC 42001.',
        problem: 'La adopción de sistemas de IA avanzaba más rápido que su gobierno. Faltaba un marco de auditoría y gestión de riesgos específico, alineado al ciclo de vida completo del sistema.',
        context: 'Sistemas de IA en distintos estados de madurez, exigencia regulatoria emergente y necesidad de un marco verificable.',
        approach: [
          'Auditorías internas conformes a ISO/IEC 42001',
          'Análisis de riesgos sobre sistemas de inteligencia artificial',
          'Aseguramiento del cumplimiento durante todo el ciclo de vida',
          'Mejora continua sobre los hallazgos identificados'
        ],
        outcome: [
          { metric: 'ISO 42001', label: 'Marco de auditoría sobre sistemas de IA implantado' },
          { metric: 'Ciclo de vida', label: 'Cobertura end-to-end del sistema auditado' },
          { metric: 'Hallazgos', label: 'Mejora continua sobre evidencias verificables' }
        ]
      }
    },

    services: {
      label: 'Áreas',
      heading: 'En qué trabajo',
      items: [
        { n: '01', title: 'Gobernanza, riesgo y cumplimiento', desc: 'ISO/IEC 27001, ISO 31000, ISO/IEC 42001 y ENS. Marcos de gobernanza como capacidad continua, no como ejercicio puntual.' },
        { n: '02', title: 'Cloud Security', desc: 'Microsoft Azure, Cloud Security Benchmark, RBAC, IAM y automatización con Terraform. Arquitectura segura, gobernada y eficiente.' },
        { n: '03', title: 'Risk Management y auditoría TI', desc: 'Análisis y gestión de riesgos en entornos corporativos y críticos. Auditorías ENS, internas y sobre sistemas de IA bajo ISO/IEC 42001.' },
        { n: '04', title: 'Datos y reporting', desc: 'Dashboards Power BI para KPIs de seguridad y riesgo, analítica en SAS y reporte directivo que reduce el tiempo de decisión.' }
      ]
    },

    stackLabels: {
      cloud: 'Cloud y seguridad',
      frames: 'Marcos normativos',
      data: 'Datos',
      dev: 'Desarrollo',
      ways: 'Formas de trabajo'
    },

    experience: {
      label: 'Trayectoria',
      heading: 'Experiencia',
      eduHeading: 'Formación',
      certHeading: 'Certificaciones',
      stackHeading: 'Herramientas',
      items: {
        kpmg: {
          period: 'Jun. 2026 — Actualidad',
          company: 'KPMG España',
          role: 'Cybersecurity & Technology Risk Senior Consultant',
          location: 'Madrid · Híbrido',
          impact: [
            'Consultoría senior en riesgo tecnológico y ciberseguridad para clientes de sectores regulados.',
            'Gobernanza, riesgo y cumplimiento sobre marcos ISO 27001, ENS y NIS2.',
            'Evaluación de riesgo tecnológico y diseño de controles en entornos cloud.'
          ]
        },
        pwc: {
          period: 'Ago. 2024 — Jun. 2026',
          company: 'PwC España',
          role: 'Cybersecurity and Privacy Associate · Business Security Solutions',
          location: 'Madrid · Híbrido',
          impact: [
            'Gobernanza, riesgo y cumplimiento junto a Cloud Security para clientes nacionales e internacionales en sectores estratégicos y críticos.',
            'Proyectos en ferrocarriles, sector público, energía, automoción y consultoría de IA.',
            'Implantación del Microsoft Cloud Security Benchmark en entornos Azure productivos.',
            'Dashboards Power BI para KPIs de seguridad y riesgo, reduciendo el tiempo de análisis y reporte directivo.',
            'Auditorías internas y análisis de riesgos sobre sistemas de IA bajo ISO/IEC 42001.'
          ]
        },
        atlas: {
          period: 'Feb. 2024 — May. 2024',
          company: 'Atlas Cloud S.L.',
          role: 'Salesforce Developer · Prácticas',
          location: 'Segovia · Híbrido',
          impact: [
            'Desarrollo de soluciones a medida en Salesforce (Apex) para procesos de seguimiento y gestión de clientes.',
            'Buenas prácticas de modelado y automatización del CRM.',
            'Dashboards y reportes para la toma de decisiones basada en datos.',
            'Integración de Salesforce con otras plataformas para reducir la fragmentación de datos.'
          ]
        }
      },
      education: {
        unir: {
          period: 'Sept. 2025 — Oct. 2026',
          institution: 'UNIR',
          title: 'Máster Universitario en Ciberseguridad',
          detail: 'Cloud Security, hacking ético, ISO/IEC 27001 y entornos críticos. Alineado a ENS, NIS2 y GDPR.'
        },
        uva: {
          period: '2020 — 2024',
          institution: 'Universidad de Valladolid',
          title: 'Grado en Ingeniería Informática',
          detail: 'Escuela de Ingeniería Informática de Segovia. Ingeniería del software, IA, ciberseguridad, bases de datos, redes y metodologías ágiles.'
        }
      },
      certifications: [
        'Programa Superior en Ciberseguridad Industrial — UNIR',
        'AZ-900 — Microsoft Certified: Azure Fundamentals',
        'Esquema Nacional de Seguridad — CCN',
        'Auditorías en el ENS — CCN',
        'Análisis y Gestión de Riesgos de los SSII — CCN',
        'Certified Scrum Master — Scrum Manager',
        'MBA online — ThePowerMBA',
        'Fundamentos teóricos de la Consultoría — Work Academy',
        'Más de 10 certificaciones Google en GenAI, LLMs y Vertex AI'
      ]
    },

    contact: {
      label: 'Contacto',
      heading: 'Hablemos',
      body: 'Disponible para proyectos de gobernanza, riesgo y cumplimiento, Cloud Security y auditoría de sistemas de IA.',
      emailLabel: 'Correo',
      phoneLabel: 'Teléfono',
      linkedinLabel: 'LinkedIn',
      cvLabel: 'Currículum'
    },

    footer: {
      rights: 'Todos los derechos reservados.',
      built: 'Diseñado y construido por Sergio Fagúndez Manso.'
    }
  },

  en: {
    htmlLang: 'en',
    meta: {
      title: 'Sergio Fagúndez Manso — Cybersecurity Consultant',
      description: 'Senior cybersecurity consultant at KPMG. Governance, risk and compliance, cloud security and AI systems auditing.'
    },
    langName: 'EN',
    langSwitch: 'Cambiar a español',

    nav: [
      { id: 'inicio',      n: '01', label: 'Start' },
      { id: 'perfil',      n: '02', label: 'Profile' },
      { id: 'trabajo',     n: '03', label: 'Work' },
      { id: 'expertise',   n: '04', label: 'Practice' },
      { id: 'experiencia', n: '05', label: 'Background' },
      { id: 'contacto',    n: '06', label: 'Contact' }
    ],

    identity: {
      name: 'Sergio Fagúndez Manso',
      role: 'Senior Cybersecurity Consultant',
      company: 'KPMG Spain',
      location: 'Segovia · Spain',
      tags: ['Governance, risk & compliance', 'Cloud security', 'AI auditing']
    },

    ui: {
      cv: 'Download CV',
      contact: 'Contact',
      viewProjects: 'View work',
      close: 'Close',
      copy: 'Copy',
      copied: 'Copied to clipboard',
      copyFailed: 'Copy failed. Select the text manually.',
      cvStarted: 'Download started',
      langChanged: 'Language set to English',
      themeLight: 'Light theme',
      themeDark: 'Dark theme',
      theme: 'Theme',
      readCase: 'Read the case',
      problem: 'The problem',
      context: 'Context',
      approach: 'Approach',
      outcome: 'Outcome',
      stackLabel: 'Stack',
      sector: 'Sector',
      period: 'Period',
      present: 'Now',
      scrollHint: 'Scroll',
      backToTop: 'Back to top',
      skipToContent: 'Skip to content',
      menu: 'Menu',
      sections: 'Sections'
    },

    hero: {
      line1: 'Anticipate, measure',
      line2: 'and mitigate',
      emphasis: 'risk',
      line3: 'across information',
      line4: 'systems.',
      standfirst: 'Senior cybersecurity consultant at KPMG. I work where regulation becomes architecture, and architecture becomes auditable evidence.'
    },

    about: {
      label: 'Profile',
      heading: 'Security is not audited once. It is sustained.',
      body: [
        'I am a computer engineer from the University of Valladolid and a senior cybersecurity consultant at KPMG Spain. Before that I spent nearly two years at PwC, in the Business Security Solutions team.',
        'My work moves across three planes: the regulatory framework that defines what must be protected, the cloud architecture that implements it, and the data that proves it works. Most projects fail in the seams between those three.',
        'I have worked on critical rail infrastructure, public sector bodies, production Azure architecture in energy, and AI system governance under ISO/IEC 42001.'
      ],
      stats: [
        { value: '5', label: 'critical sectors' },
        { value: '6', label: 'regulatory frameworks' },
        { value: '2024', label: 'consulting since' }
      ]
    },

    position: {
      statement: 'Cybersecurity is not a destination. It is a capability, built alongside the people who decide.',
      attribution: 'Position'
    },

    work: {
      label: 'Work',
      heading: 'Selected projects',
      note: 'Five projects, five sectors. Detail is limited by confidentiality agreements.',
      prev: 'Previous project',
      next: 'Next project'
    },

    cases: {
      convergence: {
        sector: 'Rail sector',
        title: 'Convergence — centralisation and resilience in critical infrastructure',
        summary: 'Centralisation of corporate applications and security deployment across virtualised environments for critical rail infrastructure.',
        problem: 'The infrastructure suffered from scattered applications, underused resources and an exposed surface with no consistent protection, in an environment where operational continuity is non-negotiable.',
        context: 'Heterogeneous systems in virtualised environments, high regulatory demand (ISO 27001, ENS) and zero tolerance for downtime.',
        approach: [
          'Centralisation and management of corporate applications',
          'Infrastructure optimisation and resource consolidation',
          'Antimalware deployment across virtualised environments',
          'Power BI dashboards for operational and security KPIs',
          'End-to-end risk management under ISO 27001 and ENS'
        ],
        outcome: [
          { metric: 'ISO 27001', label: 'Framework deployed across critical rail infrastructure' },
          { metric: 'ENS', label: 'Compliance with the Spanish National Security Framework' },
          { metric: 'Power BI', label: 'Operational and security KPIs in real time' }
        ]
      },
      opsec: {
        sector: 'Public sector',
        title: 'OpSec — advanced analytics for public risk management',
        summary: 'SAS data analytics and continuous monitoring to support decisions and regulatory compliance in a public sector body.',
        problem: 'The organisation needed to turn scattered data into actionable evidence: identify, assess and manage risk under ENS, ISO/IEC 27001 and NIS2, with continuous reporting to leadership.',
        context: 'Multiple overlapping regulations, heterogeneous data and a need for control frameworks with continuous monitoring.',
        approach: [
          'SAS data analysis to support decision-making',
          'Compliance with ENS, ISO/IEC 27001 and NIS2',
          'Control frameworks and continuous monitoring dashboards',
          'Identification, assessment and management of IS risk'
        ],
        outcome: [
          { metric: 'NIS2', label: 'Directive compliance across a public sector body' },
          { metric: 'SAS', label: 'Advanced analytics for continuous risk management' },
          { metric: 'Risk', label: 'Identification, assessment and control of IS risk' }
        ]
      },
      atlas: {
        sector: 'Energy sector',
        title: 'Atlas — Microsoft Cloud Security Benchmark on production Azure',
        summary: 'Microsoft Cloud Security Benchmark rollout, Terraform automation and an Azure identity model for an energy sector client.',
        problem: 'A production cloud architecture without a consistent security benchmark, carrying configuration, identity and governance risk that undermined compliance.',
        context: 'Critical infrastructure on Microsoft Azure with high security, governance and performance requirements in production.',
        approach: [
          'Microsoft Cloud Security Benchmark implementation on Azure',
          'Identity and access management through RBAC',
          'Infrastructure automation with Terraform',
          'Cloud architecture optimisation and component approval'
        ],
        outcome: [
          { metric: 'MCSB', label: 'Microsoft Cloud Security Benchmark in place' },
          { metric: 'IaC', label: 'Infrastructure automated with Terraform' },
          { metric: 'RBAC', label: 'Consolidated identity and access model' }
        ]
      },
      insight: {
        sector: 'Automotive sector',
        title: 'Insight — incident and KPI dashboard for leadership',
        summary: 'Power BI dashboards for incident monitoring, KPIs and strategic decision support at an automotive client.',
        problem: 'The organisation generated large volumes of operational data without turning it into executive visibility. Decisions were made without consolidated metrics or a clear cadence.',
        context: 'Distributed operational data, a need for periodic leadership reporting and decision support.',
        approach: [
          'Power BI dashboards for incidents and KPIs',
          'Data analysis and visualisation for strategic decisions',
          'Modelling of security and operational indicators',
          'Integration with heterogeneous data sources'
        ],
        outcome: [
          { metric: 'KPIs', label: 'Incident, security and operational indicators' },
          { metric: 'Power BI', label: 'Dashboard for the leadership committee' },
          { metric: 'Insight', label: 'Heterogeneous data turned into actionable evidence' }
        ]
      },
      'ai-audit': {
        sector: 'Consulting · AI',
        title: 'AI Audit — auditing AI systems under ISO/IEC 42001',
        summary: 'Internal audits and risk analysis of artificial intelligence systems against the ISO/IEC 42001 standard.',
        problem: 'AI adoption was outpacing its governance. There was no audit and risk management framework specific to AI, aligned to the full system lifecycle.',
        context: 'AI systems at varying levels of maturity, emerging regulatory pressure and a need for a verifiable framework.',
        approach: [
          'Internal audits aligned to ISO/IEC 42001',
          'Risk analysis of artificial intelligence systems',
          'Compliance assurance across the full lifecycle',
          'Continuous improvement on identified findings'
        ],
        outcome: [
          { metric: 'ISO 42001', label: 'Audit framework for AI systems in place' },
          { metric: 'Lifecycle', label: 'End-to-end coverage of the audited system' },
          { metric: 'Findings', label: 'Continuous improvement on verifiable evidence' }
        ]
      }
    },

    services: {
      label: 'Practice',
      heading: 'What I work on',
      items: [
        { n: '01', title: 'Governance, risk and compliance', desc: 'ISO/IEC 27001, ISO 31000, ISO/IEC 42001 and ENS. Governance frameworks as a continuous capability, not a one-off exercise.' },
        { n: '02', title: 'Cloud security', desc: 'Microsoft Azure, Cloud Security Benchmark, RBAC, IAM and Terraform automation. Architecture that is secure, governed and efficient.' },
        { n: '03', title: 'Risk management and IT audit', desc: 'Risk analysis and management in corporate and critical environments. ENS, internal and AI system audits under ISO/IEC 42001.' },
        { n: '04', title: 'Data and reporting', desc: 'Power BI dashboards for security and risk KPIs, SAS analytics and leadership reporting that shortens the path to a decision.' }
      ]
    },

    stackLabels: {
      cloud: 'Cloud & security',
      frames: 'Frameworks',
      data: 'Data',
      dev: 'Development',
      ways: 'Ways of working'
    },

    experience: {
      label: 'Background',
      heading: 'Experience',
      eduHeading: 'Education',
      certHeading: 'Certifications',
      stackHeading: 'Tooling',
      items: {
        kpmg: {
          period: 'Jun. 2026 — Present',
          company: 'KPMG Spain',
          role: 'Cybersecurity & Technology Risk Senior Consultant',
          location: 'Madrid · Hybrid',
          impact: [
            'Senior consulting in technology risk and cybersecurity for clients in regulated sectors.',
            'Governance, risk and compliance across ISO 27001, ENS and NIS2 frameworks.',
            'Technology risk assessment and control design in cloud environments.'
          ]
        },
        pwc: {
          period: 'Aug. 2024 — Jun. 2026',
          company: 'PwC Spain',
          role: 'Cybersecurity and Privacy Associate · Business Security Solutions',
          location: 'Madrid · Hybrid',
          impact: [
            'Governance, risk and compliance alongside cloud security for national and international clients in strategic and critical sectors.',
            'Projects across rail, public sector, energy, automotive and AI consulting.',
            'Microsoft Cloud Security Benchmark rollout in production Azure environments.',
            'Power BI dashboards for security and risk KPIs, cutting analysis and leadership reporting time.',
            'Internal audits and risk analysis of AI systems under ISO/IEC 42001.'
          ]
        },
        atlas: {
          period: 'Feb. 2024 — May. 2024',
          company: 'Atlas Cloud S.L.',
          role: 'Salesforce Developer · Internship',
          location: 'Segovia · Hybrid',
          impact: [
            'Custom Salesforce development (Apex) for client tracking and management processes.',
            'CRM modelling and automation best practice.',
            'Dashboards and reports for data-driven decision-making.',
            'Salesforce integration with other platforms to reduce data fragmentation.'
          ]
        }
      },
      education: {
        unir: {
          period: 'Sept. 2025 — Oct. 2026',
          institution: 'UNIR',
          title: 'MSc in Cybersecurity',
          detail: 'Cloud security, ethical hacking, ISO/IEC 27001 and critical environments. Aligned to ENS, NIS2 and GDPR.'
        },
        uva: {
          period: '2020 — 2024',
          institution: 'University of Valladolid',
          title: 'BSc in Computer Engineering',
          detail: 'School of Computer Engineering, Segovia. Software engineering, AI, cybersecurity, databases, networks and agile methodologies.'
        }
      },
      certifications: [
        'Advanced Programme in Industrial Cybersecurity — UNIR',
        'AZ-900 — Microsoft Certified: Azure Fundamentals',
        'Spanish National Security Framework — CCN',
        'ENS Auditing — CCN',
        'IS Risk Analysis and Management — CCN',
        'Certified Scrum Master — Scrum Manager',
        'MBA online — ThePowerMBA',
        'Consulting Fundamentals — Work Academy',
        '10+ Google certifications in GenAI, LLMs and Vertex AI'
      ]
    },

    contact: {
      label: 'Contact',
      heading: 'Get in touch',
      body: 'Available for governance, risk and compliance, cloud security and AI audit engagements.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      linkedinLabel: 'LinkedIn',
      cvLabel: 'Résumé'
    },

    footer: {
      rights: 'All rights reserved.',
      built: 'Designed and built by Sergio Fagúndez Manso.'
    }
  }
};
