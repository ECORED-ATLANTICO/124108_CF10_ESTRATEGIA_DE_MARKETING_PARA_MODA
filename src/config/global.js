export default {
  global: {
    Name: 'Fundamentos del sistema moda',
    Description:
      'El componente formativo fundamentos del sistema moda aborda los conceptos esenciales de la moda como fenómeno cultural, productivo, comercial y comunicativo. Sus contenidos integran el recorrido histórico de la moda, la estructura del sistema moda, las gamas de mercado, los perfiles de consumidor, las colecciones, los productos y las series de producto, con el fin de reconocer cómo se organizan, clasifican y proyectan las propuestas de moda dentro de la industria contemporánea.',
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
        titulo: 'Moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Recorrido histórico',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Sistema moda',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Gamas de mercado',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Perfiles de consumidor',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Colecciones de moda',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Productos del sistema moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Producto de prendas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Producto de calzado y marroquinería',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Producto de joyería y artesanías',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Series de producto',
            hash: 't_2_4',
          },
        ],
      },

      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Futuro de la moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Imagen de moda',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Vestuario',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Productos desde la publicidad de moda',
            hash: 't_3_3',
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
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
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
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Alta costura',
      significado:
        'Nivel de mercado asociado con productos exclusivos, elaborados a medida, con alto grado de especialización técnica, trabajo artesanal y valor simbólico.',
    },
    {
      termino: '<em>Branding</em>',
      significado:
        'Proceso estratégico mediante el cual una marca construye identidad, reconocimiento, posicionamiento y relación con sus consumidores.',
    },
    {
      termino: 'Colección de moda',
      significado:
        'Conjunto planificado de productos que comparten un concepto, una intención de diseño, un perfil de consumidor y una lógica comercial determinada.',
    },
    {
      termino: 'Consumidor de moda',
      significado:
        'Persona o grupo que adquiere, usa o se relaciona con productos de moda según necesidades, hábitos, preferencias, estilo de vida y criterios de compra.',
    },
    {
      termino: '<em>Drops</em>',
      significado:
        'Lanzamientos de productos en cantidades limitadas y durante periodos cortos, orientados a generar expectativa, exclusividad y respuesta rápida del mercado.',
    },
    {
      termino: 'Gama de mercado',
      significado:
        'Clasificación de los productos de moda según nivel de exclusividad, precio, volumen de producción, posicionamiento de marca y público objetivo.',
    },
    {
      termino: 'Identidad de marca',
      significado:
        'Conjunto de rasgos conceptuales, comunicativos, formales y comerciales que diferencian una marca dentro del sistema moda.',
    },
    {
      termino: 'Imagen de moda',
      significado:
        'Construcción simbólica y comunicativa mediante la cual una marca proyecta estilo, valores, narrativa y posicionamiento ante su público.',
    },
    {
      termino: 'Moda',
      significado:
        'Sistema cultural, productivo y comercial que organiza formas de vestir, tendencias, productos, significados y comportamientos de consumo en un contexto determinado.',
    },
    {
      termino: 'Moda rápida',
      significado:
        'Modelo de producción y comercialización caracterizado por ciclos cortos, alta rotación de productos, precios accesibles y respuesta acelerada a tendencias.',
    },
    {
      termino: '<em>Prêt-à-porter</em>',
      significado:
        'Categoría de moda lista para usar, desarrollada por tallas, con producción seriada y estándares definidos de diseño, calidad y comercialización.',
    },
    {
      termino: 'Producto de moda',
      significado:
        'Bien material asociado al vestir, al complemento personal o al estilo de vida, configurado mediante decisiones de diseño, técnica, función, mercado y comunicación.',
    },
    {
      termino: 'Serie de producto',
      significado:
        'Agrupación estratégica de referencias dentro del portafolio de una marca, organizada según permanencia, rotación, identidad, campaña o función comercial.',
    },
    {
      termino: 'Sistema moda',
      significado:
        'Conjunto articulado de actores, procesos, productos, servicios, conocimientos técnicos y dinámicas culturales relacionados con diseño, producción, comunicación, consumo y mercado.',
    },
    {
      termino: 'Tendencia',
      significado:
        'Dirección de cambio en gustos, estilos, materiales, colores, siluetas o comportamientos de consumo que influye en el desarrollo de productos de moda.',
    },
  ],
  referencias: [
    {
      referencia:
        'Codina, M. (2004). Crear moda, hacer cultura. <em>Ars Brevis</em>, (10), 43–62.',
      link:
        'http://www.raco.cat/index.php/arsbrevis/article/viewFile/87836/142383',
    },
    {
      referencia: 'FashionLab. (2025). <em>Introducción a la moda</em> [PDF].',
      link:
        'https://fashionlab.education/wp-content/uploads/2025/01/Bibliografia-unidad-1-Introduccion-a-la-moda.docx_compressed_compressed-1-1.pdf',
    },
    {
      referencia:
        'Ministerio de Cultura de España. (2012). <em>Moda y diseño.</em>',
      link:
        'https://www.cultura.gob.es/dam/jcr%3Aa04a4e3b-a174-4b30-897a-f1f070e574ba/guialector12.pdf',
    },
    {
      referencia:
        'Niebles Cifuentes, L. (2018). <em>Moda sustentable, moda amigable: Una oportunidad de mercado</em> (Trabajo de grado de pregrado). Pontificia Universidad Javeriana.',
      link:
        'https://apidspace.javeriana.edu.co/server/api/core/bitstreams/b1c77dd1-0803-47cb-bfef-93997fb06ef4/content',
    },
    {
      referencia:
        'Peña, S. (2009). <em>De los textiles a las apariencias: Los tránsitos de la moda en Colombia entre 1970 y 1999.</em> Academia.edu.',
      link:
        'https://www.academia.edu/75326169/Ense%C3%B1ar_y_aprender_moda_y_textil_en_el_siglo_XXI',
    },
    {
      referencia:
        'Zuluaga García, C. P., & Alvira Gómez, L. E. (2018). <em>Moda sostenible: Retos del siglo XXI en la enseñanza aprendizaje.</em> Editorial CUN.',
      link: 'https://repositorio.cun.edu.co/handle/cun/11064',
    },
    {
      referencia:
        'Peña, S. (2009). <em>De los textiles a las apariencias: Los tránsitos de la moda en Colombia entre 1970 y 1999.</em> Academia.edu.',
      link:
        'https://www.academia.edu/75326169/Ense%C3%B1ar_y_aprender_moda_y_textil_en_el_siglo_XXI',
    },
    {
      referencia:
        'Zuluaga García, C. P., & Alvira Gómez, L. E. (2018). <em>Moda sostenible: Retos del siglo XXI en la enseñanza aprendizaje.</em> Editorial CUN.',
      link: 'https://repositorio.cun.edu.co/handle/cun/11064',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del Ecosistema de Recursos Educativos Digitales',
          centro: 'Centro Agroturistico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de la línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
