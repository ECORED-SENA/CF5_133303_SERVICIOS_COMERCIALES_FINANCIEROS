<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 Se debe resaltar que el crecimiento y desarrollo constante trajo la revolución digital al campo económico, social y cultural. Este desarrollo tecnológico cambió los métodos y formas de realizar las tareas en el ámbito de las transacciones y actividades contables a través del uso de medios electrónicos, por lo que la contabilidad electrónica es un nuevo desarrollo en el campo de la contabilidad adoptado en el nivel internacional. 

    .d-flex.flex-wrap.p-4.pt-xl-0.pb-xl-4.ps-xl-5.pe-xl-0.mb-5(style="background-color: #F3F7DB; border-top-right-radius: 83px")
      p.mb-0.col-xl-7.pt-xl-4.ms-auto.order-2.order-xl-1 En consecuencia, los documentos fuente y los registros contables existen en forma digital como reemplazo o alternativa del uso de papel en un sistema de contabilidad electrónica que ayuda a las empresas a mantener sus datos financieros y su #[em software] de contabilidad en un entorno seguro y protegido, permitiendo el acceso en tiempo real a usuarios autorizados independientemente de su ubicación o plataformas informáticas. 
        br
        br
        |Este componente de formación brinda luces sobre el impacto de la contabilidad electrónica en los negocios modernos igualmente el manejo y movimiento de las divisas estableciendo estrategias de pago y negociación que se implementan en el ámbito internacional y que brindan seguridad y protección de los recursos fortaleciendo los objetivos expansivos de la organización.
      img.col-xl-4.order-1.order-xl-2.mx-auto.mx-xl-0.mb-4.mb-xl-0(src="@/assets/curso/temas/img-1.svg" style="max-width: 400px")
    p.mb-5 En el siguiente video se profundiza un poco más sobre las operaciones electrónicas aplicadas en contabilidad, dando inicio a este componente formativo.

    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/U4wB_lCCPUE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
