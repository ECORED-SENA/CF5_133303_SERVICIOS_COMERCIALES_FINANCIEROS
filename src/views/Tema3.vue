<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Comercio internacional
    
    img(src="@/assets/curso/temas/tema3/img-1.jpg")
    p.mb-5 Para ser competitivos hoy, los dueños de negocios necesitan pensar globalmente, para vender internacionalmente, es fundamental ofrecer métodos de pago apropiados que sean seguros y tengan condiciones favorables tanto para el comprador (importador) como para el vendedor (exportador). Hay riesgos involucrados en el comercio internacional. Los importadores quieren recibir sus mercancías antes de realizar el pago y los exportadores quieren que se les pague antes de liberar las mercancías, por eso, los métodos de pago confiables son importantes.

    .tarjeta.color-primario.p-3.mb-5.col-xl-10.mx-auto(style="background: linear-gradient(0deg, rgba(229,240,224,1) 0%, rgba(194,232,176,1) 7%, rgba(229,240,224,1) 100%);")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-2
          img(src="@/assets/curso/temas/tema3/img-2.svg" style="max-width: 105px")
        .col
          .row.py-2.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0(style="color: black") El siguiente documento #[b(style="color: black") “Tipos principales de métodos de pago”]
                br
                |le enseñará cinco tipos principales de métodos de pago, lo invito a que lo consulte para que amplíe sus conocimientos en dicha temática.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
</template>

<script>
export default {
  name: 'Tema3',
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
