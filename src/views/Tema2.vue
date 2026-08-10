<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Productos del sistema moda
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-9
        p En el sistema moda, el producto constituye el resultado material, técnico, simbólico y comercial de un proceso de diseño, desarrollo y producción. Su configuración integra decisiones relacionadas con usuario, función, materiales, procesos constructivos, acabados, precio, canal de distribución, identidad de marca y contexto de uso. Por ello, un producto de moda no corresponde únicamente a un objeto destinado al vestir o al complemento corporal; también participa en dinámicas culturales, productivas, económicas y comunicativas.
        .bg-color-4.tarjeta.px-5.py-4
          p.mb-0 La noción de producto de moda abarca prendas de vestir, calzado, artículos de marroquinería, joyería, accesorios, productos artesanales y bienes textiles vinculados con el cuerpo, el estilo de vida o el entorno cotidiano. Cada categoría responde a exigencias técnicas específicas, ya que los materiales, la ergonomía, los sistemas de unión, la durabilidad, los acabados y la relación con el usuario varían según la función del producto.
    
    p.mb-5 En la formación relacionada con moda, reconocer las características de cada tipo de producto favorece una lectura más precisa del sector. La prenda requiere dominio de textiles, patronaje, corte y confección; el calzado y la marroquinería exigen conocimiento de hormas, estructuras, cueros, sintéticos, refuerzos y herrajes; la joyería y las artesanías integran técnicas manuales, materiales específicos, identidad cultural y valor simbólico.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      .col-lg-8
        .bg-fondo-slider-2.tarjeta.p-2.p-md-5
          SlyderA(tipo="b").bg-color-white.p-4.tarjeta
            .row.justify-content-center.align-items-center.p-2.p-lg-4
              .col-xl.mb-3.mb-xl-0
                h4 Funcional
                p Responde al uso, la movilidad, la protección, el ajuste, la comodidad y la resistencia.
                p.mb-0 <b>Ejemplo de aplicación</b>: una chaqueta impermeable requiere materiales repelentes al agua, cierres seguros y costuras protegidas.
              .col-md-auto
                figure
                  img(src="@/assets/curso/tema2/3.png")
            .row.justify-content-center.align-items-center.p-3.p-lg-4
              .col-xl.mb-3.mb-xl-0
                h4 Técnica
                p Integra materiales, procesos productivos, medidas, sistemas de unión, acabados y control de calidad.
                p.mb-0 <b>Ejemplo de aplicación</b>: un bolso estructurado requiere refuerzos internos, costuras resistentes y herrajes adecuados al peso.
              .col-md-auto
                figure
                  img(src="@/assets/curso/tema2/4.png")
            .row.justify-content-center.align-items-center.p-3.p-lg-4
              .col-xl.mb-3.mb-xl-0
                h4 Simbólica
                p Comunica identidad, estilo, pertenencia cultural, tradición, tendencia o posicionamiento de marca.
                p.mb-0 <b>Ejemplo de aplicación</b>: una pieza artesanal puede expresar saberes territoriales, técnicas heredadas y valor cultural.
              .col-md-auto
                figure
                  img(src="@/assets/curso/tema2/5.png")
            .row.justify-content-center.align-items-center.p-3.p-lg-4
              .col-xl.mb-3.mb-xl-0
                h4 Comercial
                p Considera precio, mercado objetivo, canal de venta, empaque, comunicación y experiencia de compra.
                p.mb-0 <b>Ejemplo de aplicación</b>: una línea de calzado urbano puede organizarse según tallaje, rango de precios y tipo de consumidor.
              .col-md-auto
                figure
                  img(src="@/assets/curso/tema2/6.png")
    
    p.mb-5 Las categorías de producto en el sistema moda corresponden a los diferentes grupos de bienes que integran la oferta del sector, como prendas de vestir, calzado, marroquinería, joyería, accesorios y artesanías. Su clasificación facilita la organización, el desarrollo y la comercialización de productos, permitiendo identificar sus características, funciones y oportunidades dentro de los distintos segmentos del mercado. 

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Categorías de producto en el sistema moda

    .row.mb-5.align-items-center.justify-content-center
      .col-md-8.col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")
      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-11")
          div(titulo="Prendas de vestir")
            p.ms-md-5 Productos textiles destinados a cubrir, proteger, adaptar o complementar el cuerpo según ocasión de uso.
            p.ms-md-5.mb-0 <b>Procesos técnicos asociados</b>: diseño, patronaje, corte, confección, ensamble, acabados, tallaje y control de calidad.
          div(titulo="Calzado")
            p.ms-md-5 Productos destinados a proteger y soportar el pie durante diferentes actividades cotidianas, especializadas.
            p.ms-md-5.mb-0 <b>Procesos técnicos asociados</b>: diseño de horma, corte de piezas, armado, montado, pegado, costura, suelada y acabado.
          div(titulo="Marroquinería")
            p.ms-md-5 Artículos elaborados en cuero, sintéticos, textiles técnicos u otros materiales flexibles o semirrígidos.
            p.ms-md-5.mb-0 <b>Procesos técnicos asociados</b>: corte, refuerzo, armado, costura, colocación de herrajes, acabados de borde y control estructural.
          div(titulo="Joyería")
            p.ms-md-5 Piezas ornamentales o funcionales elaboradas con metales, piedras, polímeros, fibras u otros materiales.
            p.ms-md-5.mb-0 <b>Procesos técnicos asociados</b>: diseño, fundición, ensamble, engaste, pulido, soldadura, modelado o técnicas mixtas.
          div(titulo="Artesanías de moda")
            p.ms-md-5 Productos desarrollados mediante técnicas manuales, saberes locales o procesos culturales aplicados al vestir y sus complementos.
            p.ms-md-5.mb-0 <b>Procesos técnicos asociados</b>: tejeduría, bordado, cestería, talla, tinturado, ensamble manual, tejido y acabados artesanales.
    
    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Producto de prendas
    
    img(src="@/assets/curso/tema2/8.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text La prenda de vestir es uno de los productos centrales del sistema moda. Su desarrollo parte de la relación entre cuerpo, uso, material, forma, estructura y contexto. Una prenda puede cumplir funciones de protección, identificación, uniformidad, expresión personal, desempeño laboral, adaptación climática o participación en códigos sociales específicos. Desde el punto de vista técnico, el producto de prenda requiere la articulación de diseño, patronaje, escalado, selección textil, corte, confección, acabados y control de calidad. 

    .bg-color-3.tarjeta.p-3.mb-5
      p.mb-0 Cada decisión incide en el ajuste, la caída, la resistencia, la comodidad, la durabilidad y la presentación final. En procesos industriales, esta información queda registrada en fichas técnicas, tablas de medidas, rutas operacionales, consumos de materiales y especificaciones de confección. Entre los tipos de prendas tenemos:
    
    .row.justify-content-center.mb-3
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/9.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Prendas superiores
            p Cubren la parte superior del cuerpo y pueden responder a usos casuales, formales, laborales o deportivos.
            p.mb-0 <b>Requerimientos técnicos frecuentes</b>: control de sisa, escote, hombro, manga, largo, cierre, pinzas, costuras y proporción de ajuste.

      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/10.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Prendas inferiores
            p Cubren la parte inferior del cuerpo y requieren correspondencia entre movilidad, contorno y largo. 
            p.mb-0 <b>Requerimientos técnicos frecuentes</b>: manejo de tiro, cintura, cadera, entrepierna, bota, pretina, bolsillos y sistemas de cierre.

      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/11.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Prendas exteriores
            p Funcionan como capas de protección, abrigo o complemento sobre otras prendas.
            p.mb-0m <b>Requerimientos técnicos frecuentes</b>: selección de materiales resistentes, forros, entretelas, cierres, bolsillos, refuerzos y acabados.
    
    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/12.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Prendas interiores
            p Mantienen contacto directo con el cuerpo y requieren mayor precisión en confort, ajuste y material.
            p.mb-0 <b>Requerimientos técnicos frecuentes</b>: uso de textiles suaves, elásticos, costuras planas, control de tallaje y acabados no abrasivos.

      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/13.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Prendas deportivas
            p Responden a exigencias de movimiento, transpirabilidad, resistencia y desempeño.
            p.mb-0 <b>Requerimientos técnicos frecuentes</b>: materiales técnicos, costuras reforzadas, elasticidad, ergonomía, secado rápido y control de fricción.

      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/14.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Prendas laborales
            p Atienden condiciones de uso asociadas a actividades productivas, institucionales o de seguridad.
            p.mb-0m <b>Requerimientos técnicos frecuentes</b>: resistencia, funcionalidad, identificación, bolsillos, refuerzos, normativas aplicables y durabilidad.
    
    .bg-color-9.tarjeta.p-3.mb-5
      p.mb-0 <b>Nota</b>: en el producto de prendas, la coherencia entre material y uso resulta determinante, dado que un textil con baja elasticidad no responde igual que un tejido de punto, un material liviano no ofrece el mismo comportamiento que una tela rígida y una prenda de uso laboral requiere criterios distintos a una prenda de ocasión social.
    
    .tarjeta.bg-color-12.p-4.mb-5
      .row.justify-content-around.align-items-center
        .col-md-auto
          img.d-none.d-md-block(src="@/assets/curso/tema2/15.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Categoría de prendas - tipologías - bitácora de formas.
              p.mb-0 Para fortalecer la comprensión del tema, se invita a ir al siguiente recurso audiovisual, donde se identifican las características, componentes, composición, categorización y detalles de las prendas de vestir.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=MPaIS2YaAXM" target="_blank")
                span Enlace web
                i.fas.fa-file-download
      
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Producto de calzado y marroquinería
    
    img(src="@/assets/curso/tema2/16.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text El calzado y la marroquinería ocupan un lugar especializado dentro del sistema moda debido a sus exigencias estructurales, ergonómicas y materiales. Aunque ambos sectores pueden compartir insumos como cuero, sintéticos, textiles técnicos, adhesivos, hilos de alta resistencia y herrajes, cada producto responde a funciones y procesos constructivos particulares. El calzado se relaciona directamente con la protección, soporte y movilidad del pie, su desarrollo involucra horma, suela, capellada, forro, plantilla, contrafuerte, tacón, sistema de ajuste y acabados. La marroquinería, por su parte, comprende productos como bolsos, cinturones, billeteras, maletines, morrales, estuches y accesorios estructurados, cuyo desempeño depende de la resistencia del material, la capacidad de carga, los refuerzos, los sistemas de cierre y la calidad del ensamble.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Tipologías de calzado y marroquinería

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in")
      .col-lg-8
        .bg-fondo-slider-2.tarjeta.p-2.p-md-5
          SlyderA(tipo="b").bg-color-white.p-2.p-md-4.tarjeta
            .row.justify-content-center.align-items-center.p-3.p-lg-4
              .col-xl.mb-3.mb-xl-0
                h4 Calzado casual
                p Horma, capellada, forro, plantilla, suela, sistema de cierre y acabado.
                p.mb-0 <b>Criterios técnicos de calidad</b>: comodidad, estabilidad, flexibilidad, resistencia de uniones, ajuste y durabilidad.
              .col-md-auto
                figure
                  img(src="@/assets/curso/tema2/18.png")
            .row.justify-content-center.align-items-center.p-3.p-lg-4
              .col-xl.mb-3.mb-xl-0
                h4 Calzado formal
                p Capellada estructurada, suela, tacón, forro, plantilla y acabados de superficie.
                p.mb-0 <b>Criterios técnicos de calidad</b>: precisión de armado, simetría de piezas, resistencia, presentación del material y confort.
              .col-md-auto
                figure
                  img(src="@/assets/curso/tema2/19.png")
            .row.justify-content-center.align-items-center.p-3.p-lg-4
              .col-xl.mb-3.mb-xl-0
                h4 Calzado deportivo
                p Suela técnica, amortiguación, capellada flexible, refuerzos y materiales transpirables.
                p.mb-0 <b>Criterios técnicos de calidad</b>: desempeño, absorción de impacto, agarre, ligereza, ergonomía y resistencia al uso.
              .col-md-auto
                figure
                  img(src="@/assets/curso/tema2/20.png")
            .row.justify-content-center.align-items-center.p-3.p-lg-4
              .col-xl.mb-3.mb-xl-0
                h4 Bolso
                p Cuerpo principal, forro, asas, correas, herrajes, cierres, refuerzos y compartimentos.
                p.mb-0 <b>Criterios técnicos de calidad</b>: capacidad, resistencia al peso, firmeza estructural, acabado de bordes y seguridad de cierres.
              .col-md-auto
                figure
                  img(src="@/assets/curso/tema2/21.png")
            .row.justify-content-center.align-items-center.p-3.p-lg-4
              .col-xl.mb-3.mb-xl-0
                h4 Cinturón
                p Tira principal, hebilla, pasador, perforaciones, costuras o remaches.
                p.mb-0 <b>Criterios técnicos de calidad</b>: resistencia a la tensión, estabilidad dimensional, acabado de canto y firmeza del herraje.
              .col-md-auto
                figure
                  img(src="@/assets/curso/tema2/22.png")
            .row.justify-content-center.align-items-center.p-3.p-lg-4
              .col-xl.mb-3.mb-xl-0
                h4 Billetera o accesorio pequeño
                p Compartimentos, dobleces, costuras, refuerzos, broches o cremalleras.
                p.mb-0 <b>Criterios técnicos de calidad</b>: precisión de ensamble, funcionalidad interna, resistencia al uso continuo y acabados limpios.
              .col-md-auto
                figure
                  img(src="@/assets/curso/tema2/23.png")
    
    .bg-color-12.tarjeta.mb-5.p-4
      .row.align-items-center
        .col-lg-auto.mb-lg-0.order-lg-2
          img.d-none.d-lg-flex(src="@/assets/curso/tema2/24.png").mx-auto
        .col-lg.order-lg-1
          h5 Diferencia técnica entre calzado y marroquinería
          p.mb-0 El calzado se diseña en relación directa con el pie, el desplazamiento, la pisada y la ergonomía. La marroquinería se orienta hacia contención, transporte, organización o complemento de objetos personales. Ambos productos requieren control de materiales y acabados, pero el calzado incorpora exigencias de soporte corporal, mientras la marroquinería prioriza estructura, capacidad, resistencia y funcionalidad del objeto.
    
    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Producto de joyería y artesanías
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/25.png", data-aos="zoom-in")
      .col-lg-8
        P La joyería y las artesanías relacionadas con moda integran valor técnico, cultural y simbólico. Estos productos pueden funcionar como complementos del vestir, piezas de identidad, objetos ornamentales, productos de autor, artículos patrimoniales o expresiones de saberes territoriales. Su desarrollo vincula materiales, técnicas de elaboración, acabados, proporción, resistencia, portabilidad y coherencia con el usuario o la colección.
        p.mb-0(data-aos="fade-right") La joyería comprende piezas como anillos, collares, aretes, pulseras, broches, dijes y accesorios corporales elaborados en metales, piedras, resinas, polímeros, fibras, cerámica, vidrio u otros materiales. Las artesanías de moda incluyen productos desarrollados mediante técnicas como tejido, bordado, cestería, macramé, talla, tinturado, trenzado, ensamble manual o intervención de superficies textiles.
    
    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Tipologías de accesorios y artesanías
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr.bg-color-10
                th Categoría
                th Materiales frecuentes
                th Procesos asociados
                th Valor dentro del sistema moda
            tbody
              tr.bg-color-white
                td.text-bold Joyería metálica
                td Plata, oro, acero, bronce, latón u otras aleaciones
                td Fundición, soldadura, laminado, pulido, engaste, calado y acabado
                td Aporta valor ornamental, simbólico, comercial y de identidad de marca.
              tr.bg-color-sintesis
                td.text-bold Bisutería
                td Aleaciones no preciosas, acrílicos, resinas, cuentas, vidrio, polímeros y textiles
                td Ensamble, alambrado, pegado, tejido, montaje y acabado superficial
                td Amplía la oferta de accesorios con mayor diversidad de materiales y precios.
              tr.bg-color-white
                td.text-bold Artesanía textil
                td Fibras naturales, hilos, lanas, algodón, fique, palma, tintes y textiles
                td Tejido, bordado, anudado, trenzado, tinturado y aplicación manual
                td Relaciona moda, tradición, territorio, oficio y diferenciación cultural.
              tr.bg-color-sintesis
                td.text-bold Accesorio artesanal
                td Madera, cuero, fibras vegetales, semillas, cerámica, metal o materiales mixtos
                td Talla, ensamble, perforado, tejido, pulido, teñido y acabado manual
                td Integra saberes locales con productos complementarios del vestir.
              tr.bg-color-white
                td.text-bold Producto de autor
                td Materiales convencionales o alternativos según intención creativa
                td Técnicas mixtas, experimentación material, intervención y producción limitada
                td Fortalece identidad creativa, singularidad y valor conceptual.

    .bg-color-2.tarjeta.p-4.mb-5
      p.mb-0 En esta categoría, la trazabilidad cultural y productiva adquiere especial relevancia. El origen del material, la técnica empleada, la comunidad productora, el tiempo de elaboración y el sentido simbólico de la pieza aportan valor al producto. Por ello, la joyería y las artesanías no solo complementan una colección, también pueden convertirse en ejes de identidad, diferenciación y reconocimiento cultural dentro del sistema moda.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Relación entre productos del sistema moda y decisiones de desarrollo
      
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Relación entre producto y decisión de desarrollo
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr.bg-color-10
                th Producto
                th Pregunta técnica orientadora
                th Decisiones que orienta
            tbody
              tr.bg-color-white
                td.text-bold Prendas
                td ¿Qué uso, cuerpo, material y proceso de confección requiere el producto?
                td Patronaje, tallaje, textil, costuras, acabados, ruta operacional y control de calidad
              tr.bg-color-sintesis
                td.text-bold Calzado
                td ¿Qué soporte, movilidad, horma y estructura requiere el usuario?
                td Capellada, suela, plantilla, sistema de ajuste, materiales y resistencia
              tr.bg-color-white
                td.text-bold Marroquinería
                td ¿Qué capacidad, forma, carga y funcionalidad necesita el artículo?
                td Refuerzos, herrajes, compartimentos, cierres, costuras y acabados de borde
              tr.bg-color-sintesis
                td.text-bold Joyería
                td ¿Qué material, técnica, proporción y contacto corporal tendrá la pieza?
                td Peso, cierre, resistencia, acabado, ergonomía y compatibilidad del material
              tr.bg-color-white
                td.text-bold Artesanías
                td ¿Qué técnica, territorio, material y valor cultural configura el producto?
                td Proceso manual, origen del insumo, relato productivo, acabados y coherencia con la colección

    .bg-color-4.tarjeta.p-4.mb-5
      p.mb-0 La diversidad de productos del sistema moda evidencia la amplitud técnica y cultural del sector. Prendas, calzado, marroquinería, joyería y artesanías comparten relación con el vestir, aunque cada categoría exige conocimientos, materiales, procesos y criterios de calidad específicos para su desarrollo.
    
    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Series de producto
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/26.png", data-aos="zoom-in")
      .col-lg-8
        p Una serie de productos de moda corresponde a un conjunto organizado de referencias que comparte una finalidad dentro del portafolio de marca. Su definición considera variables como tiempo de permanencia, volumen de producción, precio, disponibilidad, narrativa comercial, ocasión de uso, comportamiento del consumidor y capacidad de generar reconocimiento. Bajo este enfoque, la serie no depende exclusivamente del tipo de producto, sino del papel que cumple dentro de la estrategia de diseño, producción, comunicación y venta.
        p.mb-0(data-aos="fade-right") En la planeación de moda, las series permiten ordenar el portafolio y asignar funciones diferenciadas a los productos. Algunas referencias sostienen las ventas constantes de la marca; otras activan novedad, expectativa y deseo de compra en periodos cortos; ciertas líneas refuerzan la identidad visual y conceptual de la empresa; y algunas se desarrollan para responder a campañas, colaboraciones, temporadas o eventos comerciales.
    
    .bg-color-12.tarjeta.mb-5.p-4
      .row.align-items-center
        .col-lg-auto.mb-lg-0.order-lg-2
          img.d-none.d-lg-flex(src="@/assets/curso/tema2/27.png").mx-auto
        .col-lg.order-lg-1
          h5 Sentido estratégico de las series de moda
          p.mb-0 Las series de productos de moda permiten organizar la oferta de una marca según su función dentro del mercado. No clasifican los productos por ser camisa, bolso, calzado o accesorio, sino por la manera en que participan en la estrategia comercial y comunicativa: permanencia, novedad, identidad, campaña, edición limitada, reposición o activación de consumo.
    
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Criterios de series de producto
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr.bg-color-10
                th Criterio estratégico
                th Pregunta orientadora
                th Incidencia en la marca
            tbody
              tr.bg-color-white
                td.text-bold Permanencia
                td ¿El producto hace parte estable del portafolio?
                td Define continuidad, reposición, tallajes, inventario y abastecimiento.
              tr.bg-color-sintesis
                td.text-bold Rotación
                td ¿El producto cambia con frecuencia o permanece varias temporadas?
                td Orienta volúmenes, tiempos de producción y calendario comercial.
              tr.bg-color-white
                td.text-bold Identidad
                td ¿El producto expresa los códigos centrales de la marca?
                td Refuerza reconocimiento, diferenciación y coherencia de estilo.
              tr.bg-color-sintesis
                td.text-bold Novedad
                td ¿El producto activa interés por lanzamiento o exclusividad?
                td Favorece expectativa, comunicación digital y respuesta rápida del mercado.
              tr.bg-color-white
                td.text-bold Campaña
                td ¿El producto acompaña una acción comercial o comunicativa específica?
                td Relaciona diseño, narrativa, temporada, promoción y experiencia de compra.
              tr.bg-color-sintesis
                td.text-bold Rentabilidad
                td ¿El producto sostiene ingresos constantes o funciona como pieza de posicionamiento?
                td Ayuda a equilibrar productos de alto margen, productos de volumen y productos de imagen.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Series largas
    
    img(src="@/assets/curso/tema2/28.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text Las series largas corresponden a productos de moda que permanecen disponibles durante periodos extendidos dentro del portafolio de una marca. Suelen estar asociadas con referencias de alta aceptación, demanda constante, funcionalidad comprobada y reposición periódica. En este tipo de serie, la marca prioriza estabilidad, control de calidad, disponibilidad de tallas o variantes, eficiencia productiva y continuidad comercial.
    
    .bg-color-3.tarjeta.p-4.mb-5
      p.mb-0 Estos productos cumplen una función estructural dentro del negocio, debido a que sostienen ventas recurrentes y permiten consolidar la relación con consumidores que buscan confianza, permanencia y reconocimiento. La estrategia de serie larga favorece la planificación de inventario, la negociación con proveedores, la estandarización de procesos y el control de costos.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Características de las series largas
    
    .row.mb-5.align-items-center.justify-content-center
      .col-md-8.col-lg-4.col-xl-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/29.png", data-aos="zoom-in")
      .col-lg-8.col-xl-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-11")
          div(titulo="Temporalidad")
            p.ms-md-5 Permanencia extendida en el portafolio.
            p.ms-md-5 <b>Aplicación en productos de moda</b>: productos disponibles durante varias temporadas o de manera continua.
          div(titulo="Producción")
            p.ms-md-5 Volúmenes medios o altos, con reposición programada.
            p.ms-md-5 <b>Aplicación en productos de moda</b>: fabricación por lotes repetidos según comportamiento de ventas.
          div(titulo="Función comercial")
            p.ms-md-5 Sostenimiento de ventas estables.
            p.ms-md-5 <b>Aplicación en productos de moda</b>: referencias que generan ingresos constantes para la marca.
          div(titulo="Diseño")
            p.ms-md-5 Estética estable, baja dependencia de tendencias pasajeras.
            p.ms-md-5 <b>Aplicación en productos de moda</b>: productos funcionales, versátiles o asociados con identidad permanente.
          div(titulo="Control técnico")
            p.ms-md-5 Estandarización de medidas, materiales y acabados.
            p.ms-md-5 <b>Aplicación en productos de moda</b>: fichas técnicas consolidadas y procesos productivos repetibles.
    
    p.mb-5 Las series largas fortalecen la base comercial de la marca. Su valor no se encuentra en la novedad inmediata, sino en la capacidad de mantenerse vigentes, responder a necesidades frecuentes y conservar estándares técnicos constantes.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Series cortas o <em>drops</em>
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/30.png", data-aos="zoom-in")
      .col-lg-8
        p Las series cortas, también denominadas <em>drops</em> en algunos contextos comerciales, agrupan productos lanzados en cantidades limitadas y durante periodos breves. Su propósito se relaciona con la generación de expectativa, exclusividad, urgencia de compra, diferenciación y actualización rápida del portafolio. Este tipo de serie resulta frecuente en marcas que trabajan con lanzamientos digitales, colaboraciones, cápsulas creativas o estrategias de comunicación centradas en comunidad.
        .bg-color-4.tarjeta.p-4
          p.mb-0 A diferencia de las series largas, las series cortas no buscan permanencia prolongada. Su lógica responde a disponibilidad limitada, narrativa específica y circulación rápida. Por esta razón, requieren una coordinación precisa entre diseño, producción, comunicación y venta, ya que el impacto comercial depende del momento de lanzamiento, la claridad del mensaje y la capacidad de activar interés en el consumidor. Entre las más importantes características de las series cortas, tenemos:
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Características de las series cortas

    .row.mb-5.align-items-center.justify-content-center
      .col-md-8.col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/31.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-11")
          div(titulo="Temporalidad")
            p.ms-md-5 Disponibilidad limitada y circulación breve.
            p.ms-md-5 <b>Aplicación en productos de moda</b>: lanzamientos por fecha específica, campaña digital o evento de marca.
          div(titulo="Producción")
            p.ms-md-5 Cantidades reducidas o controladas.
            p.ms-md-5 <b>Aplicación en productos de moda</b>: series numeradas, cápsulas limitadas o productos exclusivos.
          div(titulo="Función comercial")
            p.ms-md-5 Activación de novedad y deseo de compra.
            p.ms-md-5 <b>Aplicación en productos de moda</b>: productos que buscan atraer atención y movilizar consumo inmediato.
          div(titulo="Diseño")
            p.ms-md-5 Mayor libertad creativa o relación con una narrativa puntual.
            p.ms-md-5 <b>Aplicación en productos de moda</b>: productos vinculados a conceptos, colaboraciones, fechas o tendencias emergentes.
          div(titulo="Comunicación")
            p.ms-md-5 Alta dependencia de expectativa previa y difusión estratégica.
            p.ms-md-5 <b>Aplicación en productos de moda</b>: anuncios, conteos regresivos, redes sociales, listas de espera o preventas.
    
    p.mb-5 Las series cortas permiten dinamizar el portafolio sin comprometer la estructura permanente de la marca. Su efectividad depende de la coherencia entre concepto, cantidad, canal de venta, tiempo de lanzamiento y percepción de exclusividad.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Series de marca

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/32.png", data-aos="zoom-in")
      .col-lg-8
        p Las series de marca reúnen productos que expresan de manera directa los códigos centrales de identidad de una empresa de moda. Pueden mantenerse a lo largo del tiempo o actualizarse por temporada, pero conservan elementos reconocibles como siluetas, materiales, acabados, colores, símbolos, técnicas, proporciones, patrones gráficos, mensajes o detalles constructivos asociados con la marca.
        .bg-color-4.tarjeta.p-4
          p.mb-0 Su función principal no se limita a vender productos, ya que también contribuye a construir reconocimiento, diferenciación y posicionamiento. En este tipo de serie, los productos actúan como portadores de identidad: permiten que el consumidor relacione una propuesta con un universo estético, un estilo de vida, una promesa de valor o una narrativa particular.
    
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Elementos de la serie de marca
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr.bg-color-10
                th Elemento de identidad
                th Función dentro de la serie de marca
                th Ejemplo de aplicación
            tbody
              tr.bg-color-white
                td.text-bold Código formal
                td Mantiene rasgos reconocibles en la estructura del producto.
                td Siluetas recurrentes, proporciones características o cortes distintivos
              tr.bg-color-sintesis
                td.text-bold Código material
                td Asocia la marca con determinados textiles, cueros, fibras, acabados o superficies.
                td Uso constante de materiales específicos o tratamientos reconocibles
              tr.bg-color-white
                td.text-bold Código cromático
                td Refuerza unidad mediante gamas de color propias o recurrentes.
                td Paletas estables que identifican temporadas o líneas de la marca
              tr.bg-color-sintesis
                td.text-bold Código gráfico
                td Integra signos, patrones, estampados, bordados o recursos de comunicación.
                td Monogramas, etiquetas, motivos gráficos o intervenciones textiles
              tr.bg-color-white
                td.text-bold Código narrativo
                td Relaciona el producto con valores, territorio, cultura, oficio o estilo de vida.
                td Productos vinculados con una historia de marca o una postura conceptual

    .bg-color-2.tarjeta.p-4.mb-5
      p.mb-0 Las series de marca cumplen un papel estratégico en la recordación y diferenciación. Su desarrollo requiere coherencia entre producto, comunicación, experiencia de compra y promesa de valor.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Series de campaña
    
    img(src="@/assets/curso/tema2/33.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text Las series de campaña se diseñan para acompañar una acción comercial, comunicativa o institucional específica. Pueden estar asociadas con una temporada, una fecha comercial, un lanzamiento, una colaboración, una causa social, una colección cápsula, una activación de marca o una estrategia promocional. En este caso, los productos funcionan como soporte material de un mensaje previamente definido. Este tipo de serie establece una relación estrecha entre diseño y comunicación. La selección de productos, colores, materiales, empaques, mensajes, fotografías, contenidos digitales y canales de venta responde a una misma intención de campaña. Su duración puede ser breve o media, según el objetivo de la marca y el calendario comercial.
    
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Función de las series de campaña
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr.bg-color-10
                th Tipo de campaña
                th Función de la serie de productos
                th Ejemplo de aplicación
            tbody
              tr.bg-color-white
                td.text-bold Campaña de temporada
                td Presentar productos asociados a un periodo climático o comercial
                td Lanzamientos para vacaciones, regreso a actividades, fin de año o temporada de lluvias
              tr.bg-color-sintesis
                td.text-bold Campaña promocional
                td Impulsar ventas mediante una acción temporal
                td Productos agrupados en ofertas, paquetes, descuentos o beneficios especiales
              tr.bg-color-white
                td.text-bold Campaña colaborativa
                td Integrar la identidad de dos o más actores creativos o comerciales
                td Productos desarrollados entre marca, artista, comunidad, diseñador o institución
              tr.bg-color-sintesis
                td.text-bold Campaña de causa
                td Comunicar una postura social, ambiental o cultural mediante producto
                td Series vinculadas con sostenibilidad, inclusión, comercio local o recuperación de saberes
              tr.bg-color-white
                td.text-bold Campaña de posicionamiento
                td Reforzar valores, estilo o reconocimiento de marca
                td Productos orientados a visibilizar identidad, trayectoria o renovación estratégica
    
    .row.justify-content-center
      .col-lg-10
        .bg-color-2.tarjeta.p-4.mb-5
          p.mb-0 Las series de campaña conectan el producto con una acción comunicativa concreta. Su planeación exige correspondencia entre concepto, producto, calendario, narrativa, medios, canal comercial y experiencia del consumidor.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/34.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-15.tarjeta.p-3.p-lg-5
          .row.align-items-center.justify-content-center
            .col-md-6.col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/35.png", data-aos="zoom-in")
            .col-lg-7
              h2(data-aos="fade-left").mb-4 Pódcast
              p Lo invitamos al siguiente pódcast:
              TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                texto="Del diseño al mercado, comprendiendo los productos del sistema moda."
                tiempo
                :audio="require('../assets/curso/podcast/podcast2.mp3')"
              )

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
