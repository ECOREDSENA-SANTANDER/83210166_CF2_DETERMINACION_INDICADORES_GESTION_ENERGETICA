export default {
  global: {
    Name:
      'Indicadores clave para la gestión energética según normativa y diagnóstico',
    Description:
      'Los fundamentos de la gestión energética y la norma ISO 50001 constituyen la base para diagnosticar las variables críticas de consumo dentro de una organización. A partir de este análisis, se desarrolla el diseño y la formulación de indicadores de gestión energética, en coherencia con la normativa aplicable. Asimismo, se examinan los diferentes tipos de indicadores, las metodologías para su cálculo e implementación, y su papel en el seguimiento y la mejora continua del desempeño energético.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Identificación y clasificación de Indicadores de Gestión Energética (IDEs).',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Clasificación de tipos de indicadores de eficiencia energética según su aplicación.',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Establecimiento de Líneas Base Energéticas (LBE) y variables de seguimiento.',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Metodologías para el cálculo de la LBE.',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Cálculo e interpretación de Indicadores de Desempeño Energético.',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estrategias de optimización de costos e impacto energético.',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Requisitos de la norma ISO 50001 para la gestión energética y los IDEs.',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo:
          'Desarrollo de informes técnicos sobre el rendimiento energético y la optimización.',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Identificación y tipos de Indicadores de Desempeño Energético (IDEs)',
      referencia:
        'Fornieles, F. (2017, 28 de agosto). Qué son los INDICADORES de DESEMPEÑO ENERGÉTICO.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=viuap_gcFn0&ab_channel=FrancescFornieles',
    },
    {
      tema:
        'Establecimiento de Líneas Base Energéticas (LBE) y variables de seguimiento',
      referencia:
        'IEREC Ingeniería en Eficiencia Energética. (2021, 05 de enero). Línea base energética bajo la norma (ISO 50001) eficiencia energética.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=CS5HenQhLtU&ab_channel=IERECIngenier%C3%ADaenEficienciaEnerg%C3%A9tica',
    },
    {
      tema: 'Cálculo e interpretación de Indicadores de Desempeño Energético',
      referencia:
        'Sede Vallenar UDA. (2021, 13 de mayo). Video Cálculo Línea Base Consumo Energético.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=M6eZkijypBo',
    },
    {
      tema: 'Estrategias de optimización de costos e impacto energético',
      referencia:
        'Fundación YPF. (2020, 19 de febrero). Eficiencia Energética, Reducir el consumo.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=10nlm87UULs&ab_channel=Fundaci%C3%B3nYPF',
    },
    {
      tema:
        'Requisitos de la norma ISO 50001 para la gestión energética y los IDEs',
      referencia:
        'ISO Sistemas de Gestión. (2024, 15 de julio). Requisitos Legales para la Gestión de Energía ISO 5000.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=X0bVnH9GyWs&ab_channel=ISOSistemasdeGesti%C3%B3n',
    },
    {
      tema:
        'Desarrollo de informes técnicos sobre el rendimiento energético y la optimización',
      referencia:
        'AgenciaSE. (2015, 6 de agosto). ¿Sabes qué es la Medición y Verificación de proyectos de Eficiencia Energética?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=3O9lDdzv6DQ&ab_channel=AgenciaSE',
    },
  ],
  glosario: [
    {
      termino: 'Ahorro energético',
      significado:
        'reducción del consumo de energía, cuantificada mediante la comparación del consumo actual con el consumo de una Línea Base Energética, ajustada por las variables relevantes.',
    },
    {
      termino: 'Auditoria energética',
      significado:
        'examen y análisis sistemático del uso y consumo de energía de una organización, proceso o sistema, con el fin de identificar y cuantificar los flujos de energía y las oportunidades de mejora de la eficiencia energética.',
    },
    {
      termino: '<em>Benchmarking</em>',
      significado:
        'proceso de comparar el desempeño energético de una organización, proceso o equipo con el de otros similares (internos o externos) para identificar mejores prácticas y áreas de mejora.',
    },
    {
      termino: 'COP (<em>Coefficient of Performance</em>)',
      significado:
        'es una medida de la eficiencia de bombas de calor y sistemas de refrigeración, definida como la relación entre la energía térmica entregada (o extraída) y la energía eléctrica consumida.',
    },
    {
      termino: 'Desempeño energético',
      significado:
        'resultados medibles relacionados con la eficiencia energética, el uso de la energía y el consumo de energía. Es un indicador clave de la eficacia de la gestión energética.',
    },
    {
      termino: 'Eficiencia energética',
      significado:
        'relación entre un resultado o servicio proporcionado y la energía consumida para producirlo. Implica hacer lo mismo o más con menos energía.',
    },
    {
      termino: 'EMP (<em>Energy Management Plan</em>)',
      significado:
        'plan de gestión energética. Documento que describe las acciones específicas, responsabilidades, recursos y plazos para lograr los objetivos y metas energéticas.',
    },
    {
      termino: 'Factor de emisión',
      significado:
        'valor numérico que relaciona la cantidad de una sustancia liberada a la atmósfera (ejemplo, CO₂) con una unidad de actividad (ejemplo, kWh de electricidad, litro de combustible). Permite calcular el impacto ambiental del consumo de energía.',
    },
    {
      termino: 'Gestión energética',
      significado:
        'proceso sistemático y continuo para optimizar el uso y el consumo de energía de una organización, con el fin de mejorar su desempeño energético.',
    },
    {
      termino: 'IDE (Indicador de Desempeño Energético)',
      significado:
        'medida cuantificable del desempeño energético (ejemplo, intensidad energética, consumo específico, eficiencia de equipo, consumo total). Su valor se compara con la LBE para evaluar la mejora.',
    },
    {
      termino: 'Intensidad energética',
      significado:
        'cantidad de energía consumida por unidad de actividad, producción, superficie o volumen (ejemplo, kWh / m², GJ / tonelada de producto, MWh / empleado).',
    },
    {
      termino: 'ISO 50001',
      significado:
        'norma internacional que especifica los requisitos para establecer, implementar, mantener y mejorar un Sistema de Gestión de la Energía (SGEn), con el propósito de permitir que una organización siga un enfoque sistemático para lograr la mejora continua del desempeño energético.',
    },
    {
      termino: 'LBE (Línea Base Energética)',
      significado:
        'punto de referencia cuantitativo del desempeño energético, establecido durante un período de tiempo definido y bajo condiciones específicas, contra el cual se compara el desempeño energético actual y futuro. Es crucial para demostrar la mejora.',
    },
    {
      termino: 'Medida de Ahorro Energético (MAE)',
      significado:
        'acción o conjunto de acciones específicas implementadas con el propósito de reducir el consumo o mejorar la eficiencia de la energía.',
    },
    {
      termino: 'Normalización energética',
      significado:
        'proceso de ajustar los datos de consumo de energía (o los IDEs) para compensar la influencia de variables relevantes (ejemplo, clima, producción, horas de operación) que afectan el consumo, pero que no son controlables directamente. Permite una comparación justa.',
    },
  ],
  referencias: [
    {
      referencia:
        'Banco Mundial. (2015). Nueva edición de Little Green Data Book pinta un panorama inquietante de la contaminación. Banco Mundial.',
      link:
        'https://documents1.worldbank.org/curated/en/939511638965387077/pdf/New-Little-Green-Data-Book-Paints-Striking-Picture-of-Pollution.pdf',
    },
    {
      referencia:
        'Flores Díaz, L., & Jáuregui Nares, I. (2020). Guía de implementación e interpretación de requisitos del estándar ISO 50001:2018. Comisión Nacional para el Uso Eficiente de la Energía (Conuee).',
      link:
        'https://www.conuee.gob.mx/transparencia/boletines/SGEn/manuales/Guia_ISO_50001_2018_paginas_web1.pdf',
    },
    {
      referencia:
        'International Energy Agency (IEA). (2015). Indicadores de eficiencia energética: Bases esenciales para el establecimiento de políticas. OCDE/IEA.',
      link: 'https://biblioteca.olade.org/opac-tmpl/Documentos/cg00333.pdf',
    },
    {
      referencia:
        'Resolución 70/1 de 2015 (Asamblea General de las Naciones Unidas). Por la cual se aprueba la Agenda 2023 para el Desarrollo Sostenible. 25 de septiembre  de 2015.',
      link: 'https://unctad.org/system/files/official-document/ares70d1_es.pdf',
    },
    {
      referencia:
        'NQA. (s. f.). ISO 50001:2018. Guía de implantación del sistema de gestión de la energía. NQA.',
      link:
        'https://www.nqa.com/medialibraries/NQA/NQA-Media-Library/PDFs/Spanish%20QRFs%20and%20PDFs/NQA-ISO-50001-Guia-de-implantacion.pdf',
    },
    {
      referencia:
        'Pinzón, J. D., Corredor, A., Hernández, J. A., & Trujillo, C. L. (2014). Implementación de indicadores energéticos en centros educativos: Caso de estudio edificio Alejandro Suárez Copete, Universidad Distrital Francisco José de Caldas. Revista Escuela de Administración de Negocios, (77), 186–200.',
      link: 'https://www.redalyc.org/articulo.oa?id=20633274013',
    },
    {
      referencia:
        'Unidad de Planeación Minero Energética (UPME). (2018). Guía para la formulación e implementación de planes de gestión eficiente de la energía en entidades públicas, PGEE-EP. UPME.',
      link:
        'https://www1.upme.gov.co/DemandaEnergetica/UPME_Guia_implementacion_PGEE_EE.pdf',
    },
    {
      referencia:
        'Universidad Externado de Colombia. (2025). El informe Brundtland: El origen jurídico del desarrollo sostenible y la participación colombiana. Centro de Investigación en Derecho del Medio Ambiente.',
      link:
        'https://medioambiente.uexternado.edu.co/el-informe-brundtland-el-origen-juridico-del-desarrollo-sostenible-y-la-participacion-colombiana/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gianmarco Serrano Cabarcas',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Johann Sebastián Teran Carvajal',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
