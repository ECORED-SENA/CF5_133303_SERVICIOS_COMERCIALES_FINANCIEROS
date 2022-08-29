<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Divisas

    p.mb-5 El cambio de divisas (Forex o FX) es la conversión de una moneda a otra a una tasa específica conocida como tasa de cambio de divisas. Las tasas de conversión de casi todas las monedas flotan constantemente, ya que están impulsadas por las fuerzas del mercado de la oferta y la demanda.
    .mb-5.p-4.py-xl-5(style="background-color: #E5F0E0")
      .d-flex.flex-wrap.col-xl-10.mx-auto
        img.col-xl-4.m-auto.mb-4.mb-xl-0(src="@/assets/curso/temas/tema4/img-1.png" style="max-width: 300px")
        p.mb-0.col-xl-8.ps-xl-4 Los factores económicos incluyen las políticas económicas de un gobierno, las balanzas comerciales, la inflación y las perspectivas de crecimiento económico.
          br
          br
          |Las condiciones políticas también ejercen un impacto significativo en el tipo de cambio, ya que eventos como la inestabilidad política y los conflictos sociales pueden afectar negativamente la fortaleza de una moneda.
          br
          br
          |El mercado de divisas es descentralizado y extrabursátil donde se realizan todas las operaciones de cambio de divisas. Es el mercado más grande (en términos de volumen de negociación) y el más líquido del mundo.
    
    p.mb-5 Los centros comerciales más destacados del mercado de divisas están ubicados en los principales centros financieros de todo el mundo, incluidos Nueva York, Londres, Frankfurt, Tokio, Hong Kong y Sydney. Por esta razón, las transacciones de divisas se realizan las 24 horas, los cinco días de la semana (excepto los fines de semana).
      br
      br
      |El siguiente video permitirá conocer un poco más acerca de la temática de divisas.
    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_4_1 4.1 Características 

    p.mb-5 La mayoría de las transacciones de divisas no se realiza con el propósito de intercambiar divisas (como lo haría en un cambio de divisas mientras viaja), sino para especular sobre futuros movimientos de precios, como lo haría con el comercio de acciones. 
      br
      br
      |Al igual que los comerciantes de acciones, los comerciantes de divisas intentan comprar divisas cuyos valores creen que aumentarán en relación con otras divisas o deshacerse de divisas cuyo poder adquisitivo anticipan que disminuirá.
    
    p.col-xl-10.p-3.mx-auto.text-center(style="background-color: #F3F7DB") Hay tres formas diferentes de operar con divisas, que se adaptarán a los comerciantes con diferentes objetivos, a saber:

    .d-flex.flex-wrap.align-items-stretch.mb-5
      .col-lg-6.col-xl-4.p-2.mx-auto(style="margin-top: 8rem" data-aos="fade-right")
        .tarjeta.p-4.p-lg-5.position-relative.h-100(style="background-color: #C2E8B0")
          img(src='@/assets/curso/temas/tema4/img-2.svg' style="max-width: 258px;").banner-principal-decorativo-tj
          .d-block(style="margin-top: 6rem")
            h4.mb-4 Mercado al contado
            p Este es el principal mercado de divisas donde se intercambian esos pares de divisas y los tipos de cambio se determinan en tiempo real, en función de la oferta y la demanda.

      .col-lg-6.col-xl-4.p-2.mx-auto(style="margin-top: 8rem" data-aos="fade")
        .tarjeta.p-4.p-lg-5.position-relative.h-100(style="background-color: #FEC08A")
          img(src='@/assets/curso/temas/tema4/img-3.svg' style="max-width: 258px;").banner-principal-decorativo-tj
          .d-block(style="margin-top: 6rem")
            h4.mb-4 Mercado a plazos
            p En lugar de ejecutar una operación ahora, los operadores de Forex, también pueden celebrar un contrato vinculante (privado) con otro operador y fijar un tipo de cambio para una cantidad acordada de moneda en una fecha futura.

      .col-lg-6.col-xl-4.p-2.mx-auto(style="margin-top: 8rem" data-aos="fade-left")
        .tarjeta.p-4.p-lg-5.position-relative.h-100(style="background-color: #FEE89F")
          img(src='@/assets/curso/temas/tema4/img-4.svg' style="max-width: 258px;").banner-principal-decorativo-tj
          .d-block(style="margin-top: 6rem")
            h4.mb-4 Mercado de futuros
            p De manera similar, los comerciantes pueden optar por un contrato estandarizado para comprar o vender una cantidad predeterminada de una divisa a un tipo de cambio específico en una fecha futura. Esto se hace en una bolsa en lugar de en forma privada, como el mercado a plazo.

    h3.mb-5(data-aos="fade-right") #[span.py-3(style="background-color: #FD963D") Rie]sgos de operar en Forex
    p.mb-5 Debido a que el comercio de divisas requiere apalancamiento y los comerciantes usan margen, existen riesgos adicionales para el comercio de divisas que otros tipos de activos. Los precios de las divisas fluctúan constantemente, pero en cantidades muy pequeñas, lo que significa que los operadores deben ejecutar operaciones grandes (usando apalancamiento) para ganar dinero.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.col-xl-10.mx-auto.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-5.jpg')})`}"
        data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Este apalancamiento es excelente si un comerciante hace una apuesta ganadora, porque puede aumentar las ganancias. Sin embargo, también puede magnificar las pérdidas, incluso superando la cantidad inicial prestada. Además, si el valor de una moneda cae demasiado, los usuarios de apalancamiento se exponen a llamadas de margen, lo que puede obligarlos a vender sus valores comprados con fondos prestados con pérdidas. Aparte de las posibles pérdidas, los costos de transacción también pueden sumar y posiblemente afectar lo que fue una operación rentable.

    p.mb-5 Además de todo eso, debe tener en cuenta que aquellos que comercian con divisas extranjeras son pequeños peces que nadan en un estanque de comerciantes profesionales y calificados y la Comisión de Bolsa y Valores advierte sobre posibles fraudes o información que podría ser confusa para los nuevos comerciantes.
      br
      br
      |Quizá sea bueno que el comercio de divisas no sea tan común entre los inversores individuales. De hecho, el comercio minorista (también conocido como el comercio por parte de no profesionales) representa solo el 5,5% de todo el mercado global, según muestran las cifras de DailyForex, y algunos de los principales corredores en línea ni siquiera ofrecen el comercio de divisas. Además, de los pocos comerciantes minoristas que participan en el comercio de divisas, la mayoría lucha por obtener ganancias con Forex. 

    .d-flex.flex-wrap.mb-5.w-100
      img.col-xl-2.mt-auto.d-none.d-xl-flex(src='@/assets/curso/temas/tema4/img-6.svg' style="max-width: 190px;")
      .col-12.col-xl-8.px-xl-3
        .d-flex.justify-content-between.align-items-center(style="background: linear-gradient(0deg, #FFF, #FFECDC;")
          img.mb-2(src='@/assets/curso/temas/tema4/decorador.svg' style="transform: rotate(180deg); max-width: 49px;")
          p.text-center.mb-0 Pero, ¿por qué el comercio de divisas es importante para los consumidores promedio?
          img.mb-2(src='@/assets/curso/temas/tema4/decorador.svg' style="max-width: 49px;")
        .d-flex.flex-wrap(style="background-color: #F6F6F6")
          .col-md-6.d-flex.flex-wrap
            p.p-3.w-100.text-center.mb-0.fw-bold(style="background-color: #B0C710; max-height: 56px") Beneficio 1
            p.d-flex.p-4.p-xl-5.mb-0 Si bien el inversionista promedio probablemente no debería incursionar en el mercado de divisas, lo que sucede allí afecta a todos. La actividad en tiempo real en el mercado al contado afectará la cantidad que pagamos por las exportaciones junto con cuánto cuesta viajar al extranjero.
          .col-md-6.d-flex.flex-wrap
            p.p-3.w-100.text-center.mb-0.fw-bold(style="background-color: #B0C710; max-height: 56px") Beneficio 2
            p.d-flex.h-auto.p-4.p-xl-5.mb-0(style="border-left: 2px solid #AFAFAF") Si el valor del dólar estadounidense se fortalece en relación con el euro, por ejemplo, será más barato viajar al extranjero (los dólares estadounidenses pueden comprar más euros) y comprar bienes importados (desde automóviles hasta ropa). Por otro lado, cuando el dólar se debilite, será más costoso viajar al exterior e importar bienes (pero las empresas que exportan bienes al exterior se beneficiarán).
      img.col-xl-2.mt-auto.d-none.d-xl-flex(src='@/assets/curso/temas/tema4/img-7.svg' style="max-width: 190px;")

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_4_2 4.2 Tipos de cambio

    p.mb-5 Cada mercado tiene su propio idioma. Las siguientes, son palabras que se deben conocer antes de participar en el comercio de divisas.

    .d-flex.flex-wrap.mb-5.col-xl-10.mx-auto.px-4
      .w-100.d-flex.align-items-center.py-3(style="border-top: 2px solid #529D2E; border-bottom: 2px solid #529D2E;")
        img(src='@/assets/curso/temas/tema4/t-1.svg' style="max-width: 71px; margin-left: -35px")
        p.ps-4.mb-0 #[b Par de divisas.] Todas las operaciones de Forex implican un par de divisas. Además de las grandes, también existen operaciones menos comunes (como las exóticas, que son monedas de países en desarrollo).

      .w-100.d-flex.align-items-center.py-3(style="border-bottom: 2px solid #529D2E;")
        img(src='@/assets/curso/temas/tema4/t-2.svg' style="max-width: 71px; margin-left: -35px")
        p.ps-4.mb-0 #[b Diferencial entre oferta y demanda.] Al igual que con otros activos (como las acciones), los tipos de cambio están determinados por la cantidad máxima que los compradores están dispuestos a pagar por una moneda (la oferta) y la cantidad mínima que los vendedores requieren para vender (la demanda). La diferencia entre estas dos cantidades y el valor en el que finalmente se ejecutarán las operaciones, es el diferencial de oferta y demanda.
      
      .w-100.d-flex.align-items-center.py-3(style="border-bottom: 2px solid #529D2E;")
        img(src='@/assets/curso/temas/tema4/t-3.svg' style="max-width: 71px; margin-left: -35px")
        p.ps-4.mb-0 #[b Lote.] Forex se negocia por lo que se conoce como mucho, o una unidad de moneda estandarizada. El tamaño de lote típico es de 100 000 unidades monetarias, aunque también hay lotes micro (1000) y mini (10.000) disponibles para operar.
      
      .w-100.d-flex.align-items-center.py-3(style="border-bottom: 2px solid #529D2E;")
        img(src='@/assets/curso/temas/tema4/t-4.svg' style="max-width: 71px; margin-left: -35px")
        p.ps-4.mb-0 #[b Aprovechar.] Debido a esos grandes tamaños de lote, es posible que algunos comerciantes no estén dispuestos a invertir tanto dinero para ejecutar una operación. El apalancamiento, otro término para pedir dinero prestado, permite a los comerciantes participar en el mercado de divisas sin la cantidad de dinero que se requiere de otro modo.
      
      .w-100.d-flex.align-items-center.py-3(style="border-bottom: 2px solid #529D2E;")
        img(src='@/assets/curso/temas/tema4/t-5.svg' style="max-width: 71px; margin-left: -35px")
        p.ps-4.mb-0 #[b Margen.] Sin embargo, operar con apalancamiento no es gratis. Los comerciantes deben depositar algo de dinero por adelantado como depósito, o lo que se conoce como margen.

    p.mb-5 Lo que mueve el mercado Forex, como cualquier otro mercado, los precios de las divisas se establecen por la oferta y la demanda de vendedores y compradores. Sin embargo, hay otras fuerzas macro en juego en este mercado. La demanda de monedas particulares también puede verse influenciada por las tasas de interés, la política del banco central, el ritmo de crecimiento económico y el entorno político del país en cuestión.

    .col-xl-10.d-flex.flex-wrap.align-items-center.mx-auto.mb-5(style="background-color: #FFECDC; border-top-right-radius: 47px")
      p.mb-0.col-lg-9.col-xl-10.p-4.order-2.order-lg-1 El mercado de divisas está abierto las 24 horas del día, los cinco días de la semana (lunes-viernes), lo que brinda a los operadores de este mercado la oportunidad de reaccionar ante noticias que podrían no afectar el mercado de valores hasta mucho más tarde. Debido a que gran parte del comercio de divisas se centra en la especulación o la cobertura, es importante que los operadores estén al tanto de la dinámica que podría causar fuertes picos en las divisas.
      img.col-lg-3.col-xl-2.order-1.order-lg-2.mx-auto(src="@/assets/curso/temas/tema4/img-8.svg" style="max-width: 190px")

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_4_3 4.3 Siglas

    p.mb-5 Actualmente hay 180 monedas diferentes reconocidas en todo el mundo, por lo que identificarlas en función de sus abreviaturas de tres letras es importante al realizar operaciones comerciales a nivel internacional, especialmente para las empresas que aceptan pagos en monedas locales.
      br
      br
      |Todas las monedas se presentan como siglas de tres letras. Las dos primeras letras se refieren al nombre del país, mientras que la tercera letra se refiere a la moneda. Por ejemplo, la abreviatura de la moneda estadounidense es USD, es decir, dólar estadounidense

    .bloque-texto-c.color-secundario.p-4.col-lg-10.col-xl-8.mx-auto.order-2.order-lg-1.mb-5(style="background-color: #E5F0E0")
      i.fas.fa-quote-right
      p.mb-0 Tenga en cuenta que algunos países aceptarán varias monedas, especialmente en el mundo en desarrollo. En Georgia, por ejemplo, la moneda es el lari georgiano o GEL, pero el comercio se puede realizar en dólares estadounidenses #[b (USD)] y ocasionalmente en euros #[b (EUR).]

    p.mb-5 El USD es en realidad la moneda de reserva mundial, por lo que a menudo se usa como moneda predeterminada en el caso de que una moneda local sea débil o inestable. A continuación, se muestra la divisa utilizada actualmente por algunos países. 

    .col-xl-10.mx-auto
      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
        h5 Tabla 1
        span Monedas países.
      
      .tabla-b.color-acento-contenido.mb-5
        .tabla-b__header.d-flex(style="background-color: #B0C710")
          h4.col-4.text-center.mb-0 Niveles del lenguaje
          h4.col-4.text-center.mb-0 Niveles del lenguaje
          h4.col-4.text-center.mb-0 Niveles del lenguaje
        table
          tr.text-center
            th Alemania
            th Euro
            th EUR
          tr.text-center
            th Brasil
            th Real brasileño
            th BRL
          tr.text-center
            th Canadá
            th Dólar canadiense
            th CAD
          tr.text-center
            th Colombia
            th Peso colombiano
            th COP
          tr.text-center
            th Chile
            th Peso chileno
            th CLP
          tr.text-center
            th Ecuador
            th Dólar americano
            th USD
          tr.text-center
            th EE. UU.
            th Dólar americano
            th USD
          tr.text-center
            th Francia
            th Euro
            th EUR
          tr.text-center
            th España
            th Euro
            th EUR
          tr.text-center
            th Italia
            th Euro
            th EUR
          tr.text-center
            th Japón
            th Yen
            th JPY
          tr.text-center
            th México
            th Peso mexicano
            th MXN
          tr.text-center
            th Perú
            th Nuevo sol peruano
            th PEN
          tr.text-center
            th Reino Unido
            th Libra esterlina
            th GBP
          tr.text-center
            th Rusia
            th Rublo ruso
            th RUB
          tr.text-center
            th Venezuela
            th Bolívar fuerte
            th VEF

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

<style lang="sass">
.edit-table
</style>
