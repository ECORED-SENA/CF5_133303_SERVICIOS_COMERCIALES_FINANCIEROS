<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Recaudo de impuestos
    
    .d-flex.flex-wrap.mb-5
      .bloque-texto-c.color-secundario.p-4.col-lg-9.col-xl-10.mx-auto.order-2.order-lg-1(style="background-color: #E5F0E0" data-aos="fade-right")
        i.fas.fa-quote-right
        p Según el #[b artículo 870] del Estatuto Tributario del 1 de enero del año 2002, contempla un impuesto que se denomina Gravamen a los movimientos financieros, se considera como un impuesto indirecto de orden nacional que se aplican a las transacciones financieras realizadas por usuarios del sistema financiero, la administración está encargada por la #[b Dirección de Impuestos y Aduanas Nacionales (DIAN).]
      img.col-lg-3.col-xl-2.mx-auto.mt-lg-auto.mb-lg-0.mb-4.order-1.order-lg-2(src="@/assets/curso/temas/tema2/img-1.png" data-aos="fade-left" style="max-width: 190px")

    p.mb-5(data-aos="fade-right") Tras la crisis del sistema financiero debido al terremoto del eje cafetero, el Gobierno expidió varios decretos que aumentaban la tarifa del 2x1.000, luego al 3x1.000 y terminando el aumento al reconocido impuesto 4x1.000, estableciéndolo como un impuesto nacional de manera permanente.

    .d-flex.flex-wrap.align-items-center.mx-auto.mb-5(style="background-color: #FFECDC; border-top-left-radius: 112px" data-aos="fade-left")
      img.col-xl-5.mb-4.mb-xl-0(src="@/assets/curso/temas/tema2/img-2.png" style="max-width: 505px")
      p.py-xl-4.mb-0.col-lg-6 Consiste en una tarifa que cobra el estado por realizar algunas operaciones financieras como retiros en cajeros automáticos o en caja, retiros de cheques de gerencia, utilización de cuentas de crédito o débito, depósitos electrónicos de diversas entidades bancarias, desembolsos y abonos de cuenta. Todo esto cumpliendo con los topes o límites de UVT indicados para cada caso específico.
        br
        br
        |En este también aplican algunas excepciones que están enmarcadas en los lineamientos de aplicación que se estipulan en la norma.
      img.col-xl-1.d-none.d-xl-flex.mt-auto(src="@/assets/curso/temas/tema2/decorador.svg" style="max-width: 85px")
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
