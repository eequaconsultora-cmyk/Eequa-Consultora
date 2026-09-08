import {
  ScenarioItem,
  ServicePillar,
  ApproachStep,
  TeamMember,
  WhyReason,
  MethodologyStep,
  InsightArticle
} from '../types';

export const BRAND_INFO = {
  name: 'Eequa Consultora',
  tagline: 'Consultora especializada en territorios y destinos.',
  valueProposition: 'Acompañamos a organizaciones públicas y privadas a diseñar, gestionar y comunicar proyectos y destinos turísticos, integrando estrategia, marketing y desarrollo organizacional.',
  email: 'eequa.consultora@gmail.com',
  social: {
    linkedin: 'https://www.linkedin.com/company/135106704/admin/dashboard/',
    instagram: 'https://www.instagram.com/eequa.consultora/?hl=es',
  },
  contacts: [
    { name: 'Eliana Francou', phone: '3447 505325', rawPhone: '+5493447505325', role: 'Estrategia, Turismo & Coaching' },
    { name: 'Eugenia Blanco', phone: '3447 438348', rawPhone: '+5493447438348', role: 'Comunicación, Marketing & Políticas Públicas' },
  ],
  targetAudiences: [
    'Organizaciones públicas y ministerios',
    'Municipios y gobiernos locales',
    'Organizaciones y asociaciones privadas',
    'Destinos turísticos y micro-regiones',
    'Complejos y emprendimientos vinculados al turismo y bienestar',
    'Equipos y organizaciones en proceso de ordenamiento o transformación'
  ]
};

export const SCENARIOS: ScenarioItem[] = [
  {
    id: 'inversiones-dispersas',
    problemTitle: 'Se realizan inversiones dispersas sin impacto claro.',
    problemDescription: 'Se destinan recursos económicos, humanos y de tiempo en iniciativas aisladas que no logran consolidar un posicionamiento sostenido ni una mejora real en la experiencia del visitante o en los resultados.',
    impactTag: 'Pérdida de foco y eficiencia en la inversión',
    solutionApproach: 'Construimos una hoja de ruta estratégica que prioriza inversiones con retorno tangible en el desarrollo del destino y la rentabilidad de las organizaciones.',
    deliverables: [
      'Diagnóstico territorial y de capacidades',
      'Matriz de priorización de intervenciones',
      'Plan de inversión con metas e hitos verificables'
    ]
  },
  {
    id: 'marketing-sin-estrategia',
    problemTitle: 'Se hace marketing y difusión sin una estrategia clara.',
    problemDescription: 'Campañas de difusión, folletería y presencia en redes sociales desconectadas de la propuesta de valor real del territorio y sin coherencia con la oferta que efectivamente encuentra el visitante.',
    impactTag: 'Esfuerzo comunicacional desarticulado y sin retorno',
    solutionApproach: 'Alineamos el relato de marca y el marketing territorial con la identidad auténtica del destino y la capacidad efectiva de prestación de servicios.',
    deliverables: [
      'Estrategia de posicionamiento de bienestar',
      'Definición de propuesta de valor diferencial',
      'Plan de comunicación orientado a audiencias clave'
    ]
  },
  {
    id: 'equipos-reorganizacion',
    problemTitle: 'Los equipos de trabajo necesitan reorganización y claridad de roles.',
    problemDescription: 'Estructuras operativas con solapamiento de tareas, falta de claridad en las responsabilidades, sobrecarga en mandos medios o dificultades para coordinar fluidamente entre áreas.',
    impactTag: 'Desgaste interno, fricción y cuellos de botella',
    solutionApproach: 'Acompañamos el rediseño de roles, circuitos de trabajo y facilitamos procesos de coaching para fortalecer el liderazgo y la articulación operativa.',
    deliverables: [
      'Mapeo de procesos y dinámicas de trabajo',
      'Definición de roles y responsabilidades claras',
      'Acompañamiento en gestión del cambio y liderazgo'
    ]
  },
  {
    id: 'falta-enfoque-operativo',
    problemTitle: 'Existe falta de enfoque operativo para llevar los planes a la acción.',
    problemDescription: 'Planes estratégicos que quedan archivados en documentos teóricos porque carecen de un modelo de implementación paso a paso, responsables y métricas de seguimiento.',
    impactTag: 'Planificación teórica sin ejecución real',
    solutionApproach: 'Diseñamos esquemas de asistencia técnica y coordinación directa en territorio para asegurar que las definiciones estratégicas se traduzcan en acciones del día a día.',
    deliverables: [
      'Tableros de seguimiento y metas operativas',
      'Protocolos operativos y estándares de calidad',
      'Acompañamiento técnico directo en terreno'
    ]
  },
  {
    id: 'proyectos-incipientes',
    problemTitle: 'Se impulsan proyectos incipientes sin un rumbo estratégico definido.',
    problemDescription: 'Nuevos complejos, emprendimientos turísticos o iniciativas municipales que inician con entusiasmo pero sin un modelo de negocio, identidad ni validación territorial clara.',
    impactTag: 'Incertidumbre y riesgo en la etapa de despegue',
    solutionApproach: 'Estructuramos el proyecto desde sus cimientos: conceptualización de la experiencia de bienestar, modelo de gestión y proyección de viabilidad territorial.',
    deliverables: [
      'Conceptualización del producto o destino de bienestar',
      'Modelo de gestión y articulación público-privada',
      'Plan maestro de puesta en marcha por fases'
    ]
  }
];

export const SERVICES: ServicePillar[] = [
  {
    number: '01',
    id: 'estrategia-gestion',
    title: 'Estrategia y Gestión',
    tagline: '',
    description: 'Transformamos visiones y desafíos en planes de acción. Acompañamos tanto la etapa de formulación como la coordinación en terreno para que los proyectos se concreten con solidez.',
    strategicFocus: 'Orientado a destinos, municipios y organizaciones que precisan un rumbo claro y un método riguroso de implementación.',
    services: [
      {
        title: 'Planificación estratégica de destinos',
        description: ''
      },
      {
        title: 'Diseño de proyectos y programas',
        description: ''
      },
      {
        title: 'Coordinación y asistencia técnica en la implementación',
        description: ''
      }
    ],
    idealFor: ['Municipios turísticos', 'Complejos termales y de bienestar', 'Secretarías y Direcciones de Turismo', 'Entes mixtos de turismo']
  },
  {
    number: '02',
    id: 'desarrollo-organizacional',
    title: 'Desarrollo Organizacional',
    tagline: '',
    description: 'Trabajamos sobre las personas, los procesos y las dinámicas internas. Ayudamos a ordenar estructuras, clarificar roles y construir culturas de trabajo colaborativas y saludables.',
    strategicFocus: 'Orientado a organizaciones con crecimiento acelerado, recambio de autoridades o necesidad de profesionalizar su gestión cotidiana.',
    services: [
      {
        title: 'Formación y desarrollo de habilitaciones organizacionales',
        description: ''
      },
      {
        title: 'Desarrollo de equipos operativos',
        description: ''
      },
      {
        title: 'Facilitación en la gestión del cambio',
        description: ''
      }
    ],
    idealFor: ['Equipos municipales', 'Directorios y gerencias de complejos', 'Asociaciones intermedias', 'Empresas de hospitalidad']
  },
  {
    number: '03',
    id: 'comunicacion-marketing',
    title: 'Comunicación y Marketing Estratégico',
    tagline: '',
    description: 'Abordamos la comunicación como parte indisociable de la estrategia mayor. Diseñamos posicionamientos acordes a la identidad de la empresa o destino, para atraer a las audiencias adecuadas.',
    strategicFocus: 'Orientado a destinos y complejos que necesitan diferenciarse con autenticidad, evitando fórmulas publicitarias genéricas.',
    services: [
      {
        title: 'Posicionamiento estratégico de destinos y marcas',
        description: ''
      },
      {
        title: 'Estrategias integrales de comunicación',
        description: ''
      },
      {
        title: 'Desarrollo y auditoría de marcas',
        description: ''
      }
    ],
    idealFor: ['Destinos emergentes y consolidados', 'Emprendimientos de turismo termal y naturaleza', 'Cámaras de turismo']
  },
  {
    number: '04',
    id: 'capacitacion-formacion',
    title: 'Capacitación y Formación',
    tagline: '',
    description: 'Diseñamos programas de formación a medida para equipos técnicos, prestadores y líderes de gestión, con metodologías participativas y aplicadas a casos reales.',
    strategicFocus: 'Orientado a elevar el estándar de calidad de servicio y asegurar la sostenibilidad técnica a largo plazo.',
    services: [
      {
        title: 'Capacitación a equipos de trabajo',
        description: ''
      },
      {
        title: 'Formación y desarrollo de habilidades organizacionales',
        description: ''
      },
      {
        title: 'Desarrollo de capacidades para la gestión',
        description: ''
      }
    ],
    idealFor: ['Personal de atención al visitante', 'Equipos técnicos municipales', 'Redes de prestadores turísticos locales']
  }
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    id: 'estrategia',
    stepNumber: '01',
    name: 'Estrategia',
    tagline: 'Comprender el rumbo',
    description: 'Analizamos el territorio, sus vocaciones y oportunidades para definir hacia dónde conviene avanzar y qué vale la pena priorizar.',
    keyQuestion: '¿Hacia dónde queremos ir y por qué?'
  },
  {
    id: 'gestion',
    stepNumber: '02',
    name: 'Gestión',
    tagline: 'Planificar la ejecución',
    description: 'Transformamos las definiciones en programas, cronogramas, presupuestos y mecanismos concretos de articulación.',
    keyQuestion: '¿Cómo organizamos los recursos para lograrlo?'
  },
  {
    id: 'organizacion',
    stepNumber: '03',
    name: 'Organización',
    tagline: 'Alinear a las personas',
    description: 'Fortalecemos los equipos, clarificamos roles y desarrollamos las habilidades necesarias para sostener los compromisos asumidos.',
    keyQuestion: '¿Quiénes y con qué capacidades lo llevarán adelante?'
  },
  {
    id: 'comunicacion',
    stepNumber: '04',
    name: 'Comunicación',
    tagline: 'Transmitir la propuesta',
    description: 'Construimos el relato de marca y las acciones de marketing en coherencia estricta con la oferta real y la identidad territorial.',
    keyQuestion: '¿Qué contamos y cómo conectamos con los públicos?'
  },
  {
    id: 'experiencia',
    stepNumber: '05',
    name: 'Experiencia',
    tagline: 'Vivir el bienestar',
    description: 'Cuidamos cada punto de contacto en el territorio para que el visitante viva una experiencia armónica, auténtica y de calidad.',
    keyQuestion: '¿Qué siente y experimenta la persona en el destino?'
  },
  {
    id: 'resultados',
    stepNumber: '06',
    name: 'Resultados',
    tagline: 'Impacto medible',
    description: 'Evaluamos el desarrollo territorial, el fortalecimiento de la organización y la sostenibilidad económica y comunitaria a largo plazo.',
    keyQuestion: '¿Qué cambios reales y duraderos generamos?'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'eliana-francou',
    name: 'Eliana Francou',
    role: 'Estrategia, Gestión Turística & Desarrollo Organizacional',
    photoDriveId: '1oe6uQttakhAhur-ykFAKi4zzXdDEiSmq',
    credentials: [
      'Técnica Superior en Turismo',
      'Coach Organizacional',
      'Formación en Mentor Coach y Coaching Ejecutivo',
      'Ex Directora Municipal de Turismo de Villa Elisa',
      'Más de 10 años como Gerente General de Termas Villa Elisa'
    ],
    bioParagraphs: [
      'Técnica Superior en Turismo y Coach Organizacional, con formación especializada en Mentor Coach y Coaching Ejecutivo.',
      'Cuenta con más de diez años de experiencia como Gerente General del complejo Termas Villa Elisa y posteriormente como Directora Municipal de Turismo de Villa Elisa, liderando procesos clave de posicionamiento de destino, gestión de servicios y desarrollo de equipos.',
      'Como profesional independiente, ha acompañado el desarrollo de complejos y emprendimientos turísticos, integrando la visión estratégica del turismo con herramientas de desarrollo humano y organizacional.'
    ],
    specialties: [
      'Planificación de destinos de bienestar',
      'Gestión de complejos termales',
      'Coaching ejecutivo y de equipos',
      'Articulación público-privada'
    ],
    quote: ''
  },
  {
    id: 'eugenia-blanco',
    name: 'Eugenia Blanco',
    role: 'Comunicación Social, Marketing & Políticas Públicas',
    photoDriveId: '1UJSfGRJjoS2SH3PzT96eNEFAujZf3_SF',
    credentials: [
      'Licenciada en Comunicación Social',
      'Diplomada Superior en Desarrollo Local y Gestión de Políticas Públicas',
      'Especializada en Marketing Estratégico',
      'Titular de agencia de marketing y comunicación',
      'Consultoría en marketing para complejos termales de Entre Ríos'
    ],
    bioParagraphs: [
      'Licenciada en Comunicación Social, Diplomada Superior en Desarrollo Local y Gestión de Políticas Públicas y especializada en Marketing.',
      'Ha coordinado áreas de comunicación en organizaciones públicas y privadas, articulando estrategias institucionales complejas y vinculándolas al desarrollo territorial.',
      'Es titular de una agencia de marketing y comunicación y ha desarrollado consultoría en marketing para complejos termales de Entre Ríos, aportando una mirada analítica que une el relato estratégico con los resultados de gestión.'
    ],
    specialties: [
      'Posicionamiento y marketing territorial',
      'Desarrollo local y políticas públicas',
      'Comunicación estratégica para turismo',
      'Gestión de marcas con propósito'
    ],
    quote: ''
  }
];

export const WHY_EEQUA_POINTS: WhyReason[] = [
  {
    id: 'mirada-estrategica',
    title: 'Mirada Estratégica',
    highlight: 'Comprensión integral antes de la acción',
    description: 'No trabajamos acciones aisladas. Buscamos comprender a fondo las necesidades de la organización o el destino y diseñamos respuestas a medida.',
    contrastStatement: 'Frente a recetas estandarizadas, diseñamos respuestas a la medida de tu realidad territorial.'
  },
  {
    id: 'experiencia-gestion',
    title: 'Experiencia en gestión',
    highlight: 'Vivencia real en dirección de destinos y organizaciones',
    description: 'Combinamos experiencia concreta y vivida en turismo, destinos, termalismo y gestión operativa. Conocemos las complejidades del sector desde adentro.',
    contrastStatement: 'Frente a consultorías teóricas, aportamos vivencia real en administración y dirección de destinos.'
  },
  {
    id: 'desarrollo-organizacional',
    title: 'Foco en las personas',
    highlight: 'Equipos preparados para sostener los cambios',
    description: 'Entendemos que una gran estrategia necesita organizaciones capaces de implementarla. Trabajamos sobre el liderazgo, las habilidades y el clima de trabajo de los equipos.',
    contrastStatement: 'Frente a planes que se quedan en un papel, preparamos a las personas para hacerlos realidad.'
  },
  {
    id: 'comunicacion-proposito',
    title: 'Comunicación con Propósito',
    highlight: 'Marketing integrado a la estrategia global',
    description: 'Trabajamos el posicionamiento y la comunicación construyendo relatos que fortalecen la identidad conectada con la propuesta de valor y del servicio.',
    contrastStatement: 'Frente a publicaciones superficiales, construimos relatos que fortalecen la identidad y el posicionamiento.'
  }
];

export const METHODOLOGY_FRAMEWORK: MethodologyStep[] = [
  {
    phase: 'Fase 01',
    title: 'Contexto',
    description: 'Inmersión en la realidad del destino u organización: historia, recursos territoriales, entorno competitivo y actores involucrados.',
    outcome: 'Mapa de situación claro y comprensión compartida del punto de partida.'
  },
  {
    phase: 'Fase 02',
    title: 'Desafío',
    description: 'Identificación precisa de los nudos críticos: ¿falta de orden interno, debilidad de posicionamiento, desarticulación público-privada o falta de método?',
    outcome: 'Definición concisa del problema prioritario a resolver.'
  },
  {
    phase: 'Fase 03',
    title: 'Enfoque',
    description: 'Diseño de la estrategia integrando los cuatro pilares: visión territorial, modelo de gestión, capacidades de equipo y relato comunicacional.',
    outcome: 'Estrategia integral con hoja de ruta y prioridades secuenciadas.'
  },
  {
    phase: 'Fase 04',
    title: 'Intervención',
    description: 'Acompañamiento en territorio, facilitación de dinámicas de equipo, estructuración de programas y puesta en marcha de acciones clave.',
    outcome: 'Implementación ordenada y transferencia activa de capacidades.'
  },
  {
    phase: 'Fase 05',
    title: 'Resultados y Aprendizajes',
    description: 'Evaluación de los avances, consolidación de procesos y establecimiento de indicadores para asegurar autonomía y mejora continua.',
    outcome: 'Capacidades instaladas en la organización y beneficios tangibles para el destino.'
  }
];

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    id: '1',
    slug: 'turismo-bienestar-estrategia-territorial',
    category: 'Turismo de bienestar',
    title: 'Turismo de bienestar: más allá del spa, una estrategia para el desarrollo territorial',
    readTime: '4 min de lectura',
    date: '2025',
    summary: 'Cómo concebir el bienestar no como un servicio cosmético individual, sino como un eje articulador de la identidad, la naturaleza y la hospitalidad de un destino.',
    keyTakeaway: 'El bienestar como política de destino diversifica la estacionalidad y eleva el valor percibido del territorio.',
    contentMarkdown: `El turismo de bienestar suele reducirse erróneamente a tratamientos estéticos o circuitos de spa. Sin embargo, cuando se planifica con mirada estratégica, se convierte en un motor profundo de desarrollo territorial.

Un destino de bienestar auténtico articula sus recursos naturales (aguas termales, ríos, bosques, microclimas), su gastronomía de cercanía, sus espacios de tranquilidad y la calidez de su comunidad receptora.

### Tres claves para estructurar un destino de bienestar:

1. **Autenticidad del recurso:** Poner en valor la singularidad del paisaje y las tradiciones locales sin forzar conceptos artificiales.
2. **Coherencia en la prestación:** Que la promesa de tranquilidad y armonía se cumpla desde el primer contacto en el centro de informes hasta el check-out del complejo.
3. **Articulación de prestadores:** La experiencia de bienestar trasciende las puertas de un complejo; requiere una red de servicios alineados en calidad y trato humano.`
  },
  {
    id: '2',
    slug: 'articulacion-publico-privada-destinos',
    category: 'Gestión de destinos',
    title: 'Articulación público-privada: el desafío de pasar de la reunión al proyecto concreto',
    readTime: '5 min de lectura',
    date: '2025',
    summary: 'Las claves para que los espacios de concertación turística generen acuerdos operativos y no se agoten en diagnósticos reiterados.',
    keyTakeaway: 'La gobernanza turística requiere metas intermedias visibles y roles de ejecución definidos.',
    contentMarkdown: `Uno de los escenarios más comunes en los destinos turísticos es la existencia de mesas de diálogo que, tras meses de debate, no logran plasmarse en acciones visibles.

La articulación público-privada no falla por falta de voluntad, sino por ausencia de un método de gestión que ordene los intereses diversos hacia metas compartidas.

### Cómo transformar el diálogo en resultados:

- **Definir proyectos con principio y fin:** Evitar agendas difusas; concentrar la energía en 2 o 3 iniciativas prioritarias por semestre.
- **Clarificar responsabilidades:** Establecer con exactitud qué aporta el sector público (normativa, infraestructura, promoción) y qué asume el sector privado (inversión, calidad de servicio, datos de demanda).
- **Medir y comunicar avances:** Visibilizar los pequeños logros afianza la confianza mutua y sostiene el compromiso colectivo.`
  },
  {
    id: '3',
    slug: 'equipos-turismo-desarrollo-organizacional',
    category: 'Desarrollo organizacional',
    title: 'Equipos sobrecargados y estrategias sin rumbo: la importancia de ordenar la gestión interna',
    readTime: '4 min de lectura',
    date: '2025',
    summary: 'Por qué los planes de crecimiento fracasan cuando no se revisan las dinámicas cotidianas, los canales de comunicación y la claridad en los roles.',
    keyTakeaway: 'Una organización saludable es la condición indispensable para que una estrategia turística sea sostenible en el tiempo.',
    contentMarkdown: `Es frecuente observar complejos y áreas de turismo con un enorme potencial donde los equipos operan al límite de su capacidad debido a la improvisación y a la superposición de tareas.

El desarrollo organizacional no es un lujo corporativo; es la herramienta que permite a los equipos trabajar con previsibilidad, reducir el estrés operativo y brindar una atención con verdadera calidez humana.

### Pasos esenciales para ordenar la estructura:

1. **Mapear las tareas reales vs. las funciones asignadas:** Identificar cuellos de botella y duplicidades que desgastan a las personas.
2. **Fortalecer a los mandos medios:** Brindar herramientas de delegación, feedback y resolución constructiva de diferencias.
3. **Establecer protocolos simples:** Procedimientos claros que otorguen autonomía al personal operativo frente a situaciones imprevistas.`
  },
  {
    id: '4',
    slug: 'marketing-turistico-identidad-versus-plantillas',
    category: 'Marketing y comunicación',
    title: 'Marketing de destinos: por qué la identidad territorial supera siempre a las fórmulas genéricas',
    readTime: '3 min de lectura',
    date: '2025',
    summary: 'Cómo construir un relato comunicacional que conecte con el viajero contemporáneo desde la verdad del lugar y no desde slogans impersonales.',
    keyTakeaway: 'El mejor marketing turístico es aquel que refleja fielmente la experiencia que el visitante encontrará en el destino.',
    contentMarkdown: `El viajero actual busca autenticidad, descanso genuino y conexión con el entorno. Los destinos que recurren a frases trilladas terminan compitiendo únicamente por precio o cercanía geográfica.

La comunicación estratégica para el turismo de bienestar parte de identificar qué hace único al lugar: sus historias, sus silencios, su patrimonio termal y la forma en que su gente cuida al visitante.

### Pilares del relato de bienestar:

- **Honestidad perceptual:** No prometer lo que la infraestructura o los servicios no pueden garantizar.
- **Narrativa visual cuidada:** Priorizar imágenes de territorio real, texturas naturales y personas en actividades auténticas.
- **Consistencia multicanal:** Que el tono de voz sea el mismo en las redes sociales, en la cartelería física y en la atención telefónica.`
  }
];
