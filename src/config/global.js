export default {
  global: {
    componenteFormativo: 'Operaciones electrónicas aplicadas en contabilidad',
    descripcionCurso:
      'A través del presente componente formativo el aprendiz reconocerá los diversos procesos y técnicas que abarcan las transacciones del efectivo dentro de una organización, igualmente los procedimientos generales de la gestión del efectivo a través de diversas operaciones financieras contemplando los lineamientos y estándares de la contabilidad a nivel internacional y nacional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-6.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Pagos electrónicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Procedimientos transaccionales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Procedimiento de manejo',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Tarifas',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Recaudo de impuestos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Comercio internacional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Divisas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Características',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Tipos de cambio',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Siglas',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Contabilidad bancaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Contabilidad básica',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Operaciones en caja',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Notas débito y crédito',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Informes',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: '<em>Software</em> de efectivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Procedimientos de registro',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'El cuadre en operaciones contables',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Manual de los procesos en caja',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo: 'Autorizaciones',
            hash: 't_6_4',
          },
        ],
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
      tema: 'Comercio internacional',
      referencia:
        'Econosublime. (2021). <em>El comercio internacional: factores explicativos.</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=a-9OhTOJVEA',
    },
    {
      tema: 'Contabilidad bancaria',
      referencia:
        'Gómez, L., D. R. (s. f.). <em>Introducción a la gestión financiera: el ámbito internacional versus nacional.</em>',
      tipo: 'Documento',
      descarga:
        'https://www.ugr.es/~rgomezl/documentos/publiclibros/Gestion-Financ/GestionFinanciera.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Caja',
      significado:
        'elemento donde se consolidan y se implementan los recursos en efectivo, ya sean cheques, monedas o billetes.',
    },
    {
      termino: 'Contabilidad',
      significado:
        'sistema que enmarca la actividad contable referente a los movimientos en cuanto ingresos, gastos, costos que se generan en el ejercicio del objeto social de una organización.',
    },
    {
      termino: 'Comercio Internacional',
      significado:
        'sistema de intercambio de diversas acciones que realizan los países en la cual se negocian bienes o servicios con el fin de satisfacer las necesidades de cada uno.',
    },
    {
      termino: 'Divisas',
      significado:
        'conversión de una moneda a otra a una tasa específica conocida como tasa de cambio de divisas.',
    },
    {
      termino: 'Entidad financiera',
      significado:
        'organización bancaria que su objeto se basa en la administración de la moneda o todo elemento que esté vinculado con el sector financiero.',
    },
    {
      termino: 'Manual de procesos',
      significado:
        'instrumentos administrativos que fortalece cualquier proceso al cual se haya realizado específicamente, donde se indican las maneras y formas de realizarse alguna actividad determinada.',
    },
    {
      termino: 'Medios de pago',
      significado:
        'diversas herramientas que permiten adquirir algún producto o servicio pueden ser físicos o digitales.',
    },
    {
      termino: '<em>Software</em> contable',
      significado:
        'herramienta de apoyo tecnológico al ejercicio de la contabilidad, que fortalece los procedimientos internos y son requerimiento normativo para algunas empresas.',
    },
    {
      termino: 'Transacciones',
      significado:
        'operaciones generales que se desarrollan en un sistema financiero ya sea bancario o en efectivo.',
    },
    {
      termino: 'Recaudo',
      significado:
        'acción de acopio de recursos donde se recopilan por cierto tiempo hasta que se requieran para cumplir con una obligación específica.',
    },
  ],
  referencias: [
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales DIAN. (s.f.). <em>Gravamen a los movimientos financieros.</em>',
      link:
        'https://www.dian.gov.co/impuestos/personas/Paginas/gravamen_movimientos_financieros.aspx#:~:text=El%20Gravamen%20a%20los%20Movimientos,por%20los%20usuarios%20del%20sistema',
    },
    {
      referencia:
        'Gestiopolis. (2009). <em>Administración del efectivo. Qué es, importancia y función en la empresa.</em>',
      link:
        'https://www.gestiopolis.com/administracion-del-efectivo-y-contabilidad-administrativa/',
    },
    {
      referencia:
        'Marichal, C., y Gambi, C. (2017). <em>Historia bancaria y monetaria de América Latina (siglos XIX y XX): Nuevas perspectivas.</em> Editorial de la Universidad de Cantabria.',
      link: '',
    },
    {
      referencia:
        'Moreno, F., J. A. (2014). Contabilidad básica. 4a. Ed. Patria.',
      link: '',
    },
    {
      referencia:
        'Pardo, L., F. J. (2003). <em>Medios de cobro y pago en el comercio internacional.</em>',
      link:
        'https://www.agapea.com/libros/Medios-de-cobro-y-pago-en-el-comercio-internacional-9788479087685-i.htm',
    },
    {
      referencia:
        'Van Horne, J. C., y Wachowicz, Jr. J. (2002). Fundamentos de administración financiera. Pearson Education.',
      link:
        'https://catedrafinancierags.files.wordpress.com/2014/09/fundamentos-de-administracion-financiera-13-van-horne.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Edinson Castañeda Oviedo',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
