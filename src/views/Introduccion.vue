<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-color-1.tarjeta.mb-5.p-4
      .row.align-items-center
        .col-lg-auto.mb-lg-0.order-lg-2
          img.d-none.d-lg-flex(src="@/assets/curso/intro/1.png").mx-auto
        .col-lg.order-lg-1
          p.mb-0 El presente componente formativo desarrolla los fundamentos necesarios para interpretar la moda como una industria organizada por actores, procesos, productos y dinámicas de consumo. Para ello, se abordan el concepto de moda, su recorrido histórico general y su desarrollo en Colombia, la clasificación del sistema moda, las gamas de mercado, los perfiles de consumidor, la estructura de las colecciones y las categorías de producto que conforman este sector. Esta organización temática favorece una lectura integral de la moda desde sus dimensiones culturales, técnicas y comerciales.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/2.png", data-aos="zoom-in")
      .col-lg-9
        p A lo largo del componente, el aprendiz reconoce la relación entre diseño, producto y mercado, identificando cómo una propuesta de moda se configura a partir de conceptos, materiales, consumidores, colecciones, series de producto y estrategias de comunicación. Asimismo, se analiza la manera en que las marcas organizan su portafolio mediante productos de continuidad, lanzamientos limitados, series identitarias y campañas comerciales, lo que permite comprender el papel estratégico del producto dentro del sistema moda.
        .bg-color-4.tarjeta.px-5.py-4
          p.mb-0 El desarrollo de estos contenidos aporta bases conceptuales para clasificar productos del sistema moda, interpretar sus niveles de mercado y reconocer la función de las colecciones en la proyección de vestuario. De esta forma, el componente ofrece una aproximación inicial al análisis de la industria de la moda, orientada a fortalecer la comprensión del producto, el consumidor y la marca como elementos articulados en los procesos de diseño y <em>marketing</em>.

</template>

<script>
export default {
  name: 'Introduccion',
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
