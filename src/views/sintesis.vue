<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/1.png", data-aos="zoom-in")
      .col-lg-8
        p El componente formativo Fundamentos del sistema moda aborda la evolución histórica de la moda y su transformación hasta consolidarse como un sistema integrado por procesos creativos, productivos, comerciales y comunicativos. Asimismo, desarrolla aspectos asociados a los perfiles de consumidor, las decisiones de compra y la construcción de colecciones de moda, entendidas como propuestas estructuradas que responden a necesidades específicas del mercado.
        .bg-color-20.tarjeta.px-5.py-4
          p.mb-0 De igual manera, el componente incorpora la clasificación del sistema moda desde diferentes perspectivas, incluyendo las cadenas de valor, los sectores productivos y los niveles de mercado, permitiendo reconocer la diversidad de actores, procesos y segmentos que intervienen en la industria. También examina las principales categorías de productos del sistema moda, como prendas de vestir, calzado, marroquinería, joyería y artesanías, así como las diferentes series de producto utilizadas para su desarrollo y comercialización.
    
    p.mb-5 Finalmente, se analizan elementos relacionados con la construcción de imagen, el vestuario, la comunicación y la proyección futura de la moda, destacando la manera en que las tendencias, los cambios en el comportamiento del consumidor, la innovación y las transformaciones del mercado influyen en la evolución del sector. En conjunto, estos contenidos proporcionan una visión general e integradora del Sistema Moda, favoreciendo la comprensión de sus componentes, interrelaciones y oportunidades dentro del contexto productivo, cultural y comercial contemporáneo.


    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La figura describe la estructura del componente formativo: fundamentos del sistema moda, organizado en tres ejes temáticos. Moda, que incluye recorrido histórico, sistema moda, gamas de mercado, perfiles de consumidor y colecciones de moda. Productos del sistema moda, que aborda productos de prendas, calzado y marroquinería, joyería y artesanías, y series de producto; y futuro de la moda, que integra imagen de moda, vestuario y productos derivados de la publicidad de moda. El esquema muestra la relación entre los principales temas y subtemas del componente formativo.  ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
