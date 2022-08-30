<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.texto-blanco 3
      h1 Contabilidad bancaria

    p.mb-5(data-aos="fade-right") Todos los años los bancos deben producir cuentas legales que expongan todo lo que tiene la empresa. El propósito principal de la contabilidad financiera es preparar informes financieros que brinden información sobre el desempeño del banco a partes externas como inversionistas, acreedores, autoridades fiscales y más. La contabilidad gerencial contrasta con la contabilidad financiera en que la contabilidad gerencial es para la toma de decisiones internas y no tiene que seguir ninguna regla emitida por los organismos normativos. La contabilidad financiera, por otro lado, se realiza de acuerdo con las pautas de los Principios de Contabilidad Generalmente Aceptados.
      br
      br
      |Varios de los grupos de usuarios anteriores están fuera del banco, pero, sin embargo, tienen una participación en el negocio. Además, esta no pretende ser una lista exhaustiva de usuarios potenciales, sino los principales y más importantes.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.col-xl-10.mx-auto.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-1.jpg')})`}"
        data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Nadie afirmará que la información contable satisface plenamente las necesidades de los diversos grupos de usuarios identificados. La contabilidad es un tema en desarrollo y aún queda mucho por aprender sobre las necesidades de los usuarios y las formas en que se deben satisfacer estas necesidades. No obstante, la información contenida en los informes contables debe reducir la incertidumbre en la mente de los usuarios sobre la situación financiera y el desempeño del negocio. Debería ayudar a responder preguntas relacionadas con la disponibilidad de efectivo para pagar a los propietarios un rendimiento por su inversión o para pagar préstamos, etc. 

    p.col-xl-10.mx-auto.mb-5(data-aos="fade-right") A menudo, no existe un sustituto cercano para la información contenida en los informes contables y, por lo tanto, los informes generalmente se consideran más útiles que otros. Fuentes de información que están disponibles con respecto a la salud financiera de una empresa.
      br
      br
      |Para proporcionar esta imagen general, el sistema de contabilidad financiera normalmente producirá tres estados financieros principales de manera regular, los principales estados financieros están diseñados para proporcionar una imagen de la posición financiera general y el desempeño del banco, estos son:
    
    .row.mb-5
      .col-lg-6.col-xl-4.mb-4.mb-xl-0.mx-auto(style="max-width: 411px" data-aos="fade-right")
        .tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false" style="background-color: #F3F7DB")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor.d-flex
            .tarjeta-slide__contenido.p-4
              h4 Cuenta de pérdidas y ganancias
              p Cuenta contable que recoge las diferentes partidas de gastos, ingresos, pérdidas y ganancias derivadas de las operaciones realizadas por la empresa.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-2.svg')})`}")
      
      .col-lg-6.col-xl-4.mb-4.mb-xl-0.mx-auto(style="max-width: 411px" data-aos="fade")
        .tarjeta-slide.arriba.color-primario(style="background-color: #F3F7DB")
          .tarjeta-slide__contenedor.d-flex
            .tarjeta-slide__contenido.p-4
              h4 Balance general
              p Es un estado financiero que refleja en un momento determinado la información económica y financiera de una empresa, separadas en tres actos  patrimoniales: activo, pasivo y patrimonio neto.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-3.svg')})`}")
      
      .col-lg-6.col-xl-4.mb-4.mb-xl-0.mx-auto(style="max-width: 411px" data-aos="fade-left")
        .tarjeta-slide.arriba.color-primario(style="background-color: #F3F7DB")
          .tarjeta-slide__contenedor.d-flex
            .tarjeta-slide__contenido.p-4
              h4 Estado de flujo de efectivo
              p Es un estado financiero que refleja en un momento determinado la información económica y financiera de una empresa, separadas en tres actos  patrimoniales: activo, pasivo y patrimonio neto.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-4.svg')})`}")

    p.mb-5(data-aos="fade-right") Las tres declaraciones están interrelacionadas entre sí; el balance refleja la combinación de activos (incluido el efectivo) y derechos (incluido el capital del propietario) del negocio en un momento determinado. Tanto el estado de flujo de efectivo como la cuenta de pérdidas y ganancias explican los cambios durante un período de dos de los elementos del balance, a saber, el efectivo y los derechos del propietario, respectivamente.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_5_1 5.1  Contabilidad básica

    p.mb-5(data-aos="fade-right") Todas las personas y las organizaciones deben de llevar registrada su información financiera y económica, la cual permite contar con un control de sus actividades económicas.

    .bloque-texto-b.color-secundario.p-4.bloque-texto-edit.mb-5(data-aos="fade-left")
      .bloque-texto-b__texto
        .d-flex
          i.fas.fa-quote-left
          p.mb-0 La contabilidad básica es una técnica que produce sistemática y estructuralmente información cuantitativa expresada en unidades monetarias, sobre los eventos económicos identificables y cuantificables que realiza una entidad a través de un proceso de captación de las operaciones que cronológicamente mida, clasifique, registre y resuma con claridad.
        .d-flex
          p.mb-0.ms-auto.fw-bold - Moreno, 2014
          i.fas.fa-quote-right
    p.mb-5(data-aos="fade-right") El registro de la información financiera y económica, empleando la contabilidad, es de gran utilidad para las entidades, debido a que permite analizar e identificar la situación económica, hallando la forma de tomar de decisiones en cuanto al seguimiento y control de la entidad.

    .d-flex.flex-wrap.align-items-center.mx-auto.mb-5(style="background-color: #FFECDC; border-top-right-radius: 112px" data-aos="fade-right")
      img.col-xl-1.d-none.d-xl-flex.mt-auto(src="@/assets/curso/temas/tema2/decorador.svg" style="max-width: 85px")
      .py-xl-4.mb-0.col-lg-6.p-4.order-2.order-xl-1
        p Algunas de las principales características de la contabilidad básica son:
        ul.lista-ul--color.mb-4(data-aos="fade-left")
          li
            .mb-auto.mt-2.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
            | Registro de los movimientos financieros de las organizaciones.
          li
            .mb-auto.mt-2.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
            | Análisis financiero de los estados financieros.
          li
            .mb-auto.mt-2.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
            | Contabilización de partida doble.
        p Los registros contables o libros contables permiten el registro de todas las actividades económicas y financieras de las entidades.
      img.order-1.order-xl-2.col-xl-5.mb-4.mb-xl-0.ms-auto(src="@/assets/curso/temas/tema5/img-5.png" style="max-width: 505px")

    p.mb-5(data-aos="fade-right") Es así como las cuentas T en contabilidad representan el registro de los movimientos contables, lo cual consta del débito y del haber; en el momento en que se realiza el registro se debe diligenciar el código y nombre de la cuenta.
      br
      br
      |Los registros contables se deben registrar por el sistema de doble partida, el cual busca un equilibrio en los movimientos contables, de acuerdo con las cuentas estas disminuyen o aumentan en él debe o haber; en él debe se registran todos los ingresos y el haber todas las salidas.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_5_2 5.2  Operaciones en caja
    
    p.mb-5(data-aos="fade-right") En una organización, los directores financieros, los gerentes comerciales y los tesoreros suelen ser los principales responsables de las estrategias generales de administración de efectivo, el análisis de estabilidad y otras responsabilidades relacionadas con el efectivo. Las empresas y los particulares ofrecen una amplia gama de servicios disponibles en el mercado financiero para ayudar con todo tipo de gestión de efectivo. Los bancos suelen ser un proveedor principal de servicios financieros. También hay muchas soluciones diferentes de gestión de efectivo para empresas y personas que buscan obtener el mejor rendimiento de los activos en efectivo o el uso más eficiente del efectivo.

    .d-flex.flex-wrap.edit-bg(data-aos="fade-left")
      img.mb-5.position-relative(src="@/assets/curso/temas/tema5/img-6.jpg" style="z-index: 1")
      .d-flex.flex-wrap.position-relative(style="z-index: 1")
        .col-xl-6
          p Por tanto, es de importancia establecer controles internos para manejar el efectivo y los cheques que se reciben, la implementación de controles internos para garantizar que una organización alcance los objetivos de la manera más eficaz y eficiente posible.
            br
            br
            |Una transacción en efectivo implica el intercambio de efectivo por un activo. Debido a que el intercambio es inmediato, el vendedor no asume ningún riesgo crediticio de que el comprador no pague, como sería el caso si se le concediera un crédito al comprador. Las transacciones en efectivo son más comunes para transacciones minoristas más pequeñas.
        .col-xl-6
          p Las transacciones en efectivo difieren sustancialmente de las transacciones de crédito, en las que hay un retraso en el pago integrado en una transacción, mientras que este es un riesgo siempre presente cuando se utilizan transacciones de crédito en su lugar.
            br
            br
            |Como se ha mencionado antes, las transacciones en efectivo pueden estar orientadas al consumidor o al negocio, contrasta con otros modos de pago, como las transacciones de crédito en un negocio que involucra efectos por cobrar. Del mismo modo, no existe el riesgo de que surja una deuda incobrable a partir de una transacción en efectivo.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_5_3 5.3  Notas débito y crédito 

    p.mb-5(data-aos="fade-right") Es posible que se conozca bien el término factura o factura o lista de materiales. Una factura se utiliza para mantener un registro de las ventas. Entonces, qué pasa cuando hay un cambio en el valor de esas facturas. ¿Se editarán esas facturas? No tiene sentido hacerlo, pues ya se generó la factura y se registraron esas transacciones en el diario.
      br
      br
      |La única salida es hacer entradas adicionales que indiquen un cambio en el valor de la factura original y proporcionar un documento para una prueba más del valor real de la venta realizada. Estos documentos se denominan notas de crédito y débito; se invita a conocer sus características a continuación:

    .d-flex.flex-wrap.mb-5.w-100
      .card-left.p-4.p-xl-5(data-aos="fade-right")
        img.mb-5.mx-auto(src='@/assets/curso/temas/tema5/img-7.svg' style="max-width: 180px;")
        h2.text-center.mb-5 Nota crédito
        p.mb-4.px-lg-5.mx-xl-5 Es un documento emitido por el vendedor para indicar una devolución total o parcial de los fondos. Puede surgir en caso de suministro incorrecto o dañado de bienes, cancelación de una compra o error en la factura. 
          br
          br
          |Este documento también puede ser utilizado por el cliente o comprador contra un pedido futuro.
        .col-sm-auto.d-flex.justify-content-center
          a.boton.color-acento-botones(@click="modal1 = true")
            span.pe-3 Descargar
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20">
              <g id="Grupo_156603" data-name="Grupo 156603" transform="translate(-518 -4522)">
                <rect id="Rectángulo_44067" data-name="Rectángulo 44067" width="16" height="20" rx="2" transform="translate(518 4522)" fill="#12263f"/>
                <path id="Trazado_216548" data-name="Trazado 216548" d="M2.521,6.9A9.044,9.044,0,0,0,4.1,8.48L1.838,10.746a1.119,1.119,0,0,1-1.583,0h0a1.119,1.119,0,0,1,0-1.583ZM6.635-.072A4.438,4.438,0,1,1,2.2,4.366,4.441,4.441,0,0,1,6.635-.072Zm0,1.526A2.912,2.912,0,1,0,9.547,4.366,2.913,2.913,0,0,0,6.635,1.454Z" transform="translate(520.072 4526.072)" fill="#ffd150" fill-rule="evenodd"/>
              </g>
            </svg>
            
      .card-right.p-4.p-xl-5(data-aos="fade-left")
        img.mb-5.mx-auto(src='@/assets/curso/temas/tema5/img-8.svg' style="max-width: 180px;")
        h2.text-center.mb-5 Nota dsébito
        p.mb-4.px-lg-5.mx-xl-5 Es un documento que se emite de un comprador a un vendedor que indica una solicitud de devolución de fondos como resultado de bienes o servicios incorrectos o dañados o la cancelación de la compra. 
          br
          br
          |Una nota de débito se emite antes de que el proveedor pueda emitir una nota de crédito y actúa como una solicitud formal del comprador para emitir una nota de crédito.
        .col-sm-auto.d-flex.justify-content-center
          a.boton.color-acento-botones(@click="modal2 = true")
            span.pe-3 Descargar
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20">
              <g id="Grupo_156603" data-name="Grupo 156603" transform="translate(-518 -4522)">
                <rect id="Rectángulo_44067" data-name="Rectángulo 44067" width="16" height="20" rx="2" transform="translate(518 4522)" fill="#12263f"/>
                <path id="Trazado_216548" data-name="Trazado 216548" d="M2.521,6.9A9.044,9.044,0,0,0,4.1,8.48L1.838,10.746a1.119,1.119,0,0,1-1.583,0h0a1.119,1.119,0,0,1,0-1.583ZM6.635-.072A4.438,4.438,0,1,1,2.2,4.366,4.441,4.441,0,0,1,6.635-.072Zm0,1.526A2.912,2.912,0,1,0,9.547,4.366,2.913,2.913,0,0,0,6.635,1.454Z" transform="translate(520.072 4526.072)" fill="#ffd150" fill-rule="evenodd"/>
              </g>
            </svg>
    p.text-center.mb-5 Detalles a incluir en una nota de débito y una nota de crédito
    .d-flex.flex-wrap.mb-5
      img.mb-4.col-xl-4.mx-auto(src='@/assets/curso/temas/tema5/img-11.svg' data-aos="fade-right" style="max-width: 400px")
      img.mb-4.col-xl-4.mx-auto(src='@/assets/curso/temas/tema5/img-12.svg' data-aos="fade" style="max-width: 400px")
      img.mb-4.col-xl-4.mx-auto(src='@/assets/curso/temas/tema5/img-13.svg' data-aos="fade-left" style="max-width: 400px")

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_5_4 5.4  Informes

    p.mb-5(data-aos="fade-right") Los estados financieros son los informes que reflejan la realidad contable de las empresas y muestran su estructura económica y financiera, también son llamados cuentas anuales; en estos informes se evidencian las actividades económicas realizadas, durante un margen de tiempo. En los estados financieros se deben tener en cuenta los siguientes procesos.

    ImagenInfografica.color-acento-botones.mb-5.col-xl-10.mx-auto(data-aos="fade-left")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema5/img-15.svg')

      .p-4(x="26.5%" y="35%" tooltip="1. Pagos más rápidos y precisos" style="background-color: #FEE89F" numero="+")
        p.mb-0 Refleja los ingresos y costos de la empresa y detalla si en el periodo hubo beneficios o pérdidas.
      .p-4(x="73.7%" y="35%" tooltip="1. Pagos más rápidos y precisos" style="background-color: #FEE89F" numero="+")
        p.mb-0 Refleja la variación de entradas y salidas de dinero en un periodo determinado; se detalla la evolución del patrimonio.
      .p-4(x="14.5%" y="83%" tooltip="1. Pagos más rápidos y precisos" style="background-color: #FEE89F" numero="+")
        ul.lista-ul--color.mb-4(data-aos="fade-left")
          li
            .mb-auto.mt-2.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
            | Bienes, dinero y derechos (activos).
          li
            .mb-auto.mt-2.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
            | Obligaciones (pasivos).
          li
            .mb-auto.mt-2.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
            | Capital y reservas (patrimonio).
      .p-4(x="86%" y="83%" tooltip="1. Pagos más rápidos y precisos" style="background-color: #FEE89F" numero="+")
        p.mb-0 Refleja las fuentes y usos del efectivo en la empresa.
      
    p(data-aos="fade-right") El estado de situación financiera de acuerdo con la Norma Internacional de Contabilidad (NIC) o el balance general, refleja los bienes, dineros y derechos de la empresa, los cuales son denominados activos y se dividen en activos no corrientes y activos corrientes.
      br
      br
      |En cuanto a las obligaciones en el estado de situación financiera, se denomina pasivo y también se dividen en pasivos no corrientes y pasivos corrientes; por su parte el capital y las reservas de la empresa se denomina patrimonio. 
    .d-flex.flex-wrap.px-5.py-5(style="margin-left: -3rem; margin-right: -3rem; min-width: calc(100% + 6rem); background: linear-gradient(180deg, rgba(255,255,255,1) 0%, #FFECDC 20%, #FFECDC 80%, rgba(255,255,255,1) 100%)")
      img.mb-4.col-xl-4.mx-auto(src='@/assets/curso/temas/tema5/img-14.png' style="max-width: 505px" data-aos="fade-right")
      p.col-xl-8.ps-xl-4(data-aos="fade-left") Dentro de las organizaciones es indispensable tener presente la estructura de costos, por lo cual se encuentra la contabilidad de costos, que se encarga de informar los costos de productos o servicios.
        br
        br
        |En la estructura de costos se identifican los costos directos e indirectos, los costos directos son los que directamente están relacionados con el producto o servicio, mientras que los costos indirectos, se encuentran relacionados con el producto o servicio, pero no pueden asignarse equitativamente a cada uno, como por ejemplo suministro de servicios públicos.
        br
        br
        |Mientras que los costos directos, se conocen también como costos variables y dependen de las unidades de productos o servicios, y los costos indirectos se conocen como costos fijos.

    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        img.col-xl-5.mx-auto(src='@/assets/curso/temas/tema5/img-9.png' style="max-width: 505px")
        .col-xl-7
          p.fw-bold Algunas razones comunes para la emisión de notas de crédito
          ul.lista-ul--color.mb-4(data-aos="fade-left")
            li
              .mb-auto.mt-2.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
              | Si usted es el proveedor y ha suministrado bienes de calidad insatisfactoria al comprador y el comprador desea devolverlos, puede emitir una nota de crédito para ajustes contra la factura ya emitida.
            li
              .mb-auto.mt-2.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
              | Correcciones en facturas ya emitidas.
            li
              .mb-auto.mt-2.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
              | Corrección de tasas de descuento.
            li
              .mb-auto.mt-2.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
              | Cancelación de cualquier pago pendiente contra facturas.
    ModalA(:abrir-modal.sync="modal2")
      .row.align-items-center
        img.col-xl-5.mx-auto(src='@/assets/curso/temas/tema5/img-10.png' style="max-width: 505px")
        .col-xl-7
          p.fw-bold Algunas razones comunes para la emisión de notas de crédito
          ul.lista-ul--color.mb-4(data-aos="fade-left")
            li
              .mb-auto.mt-2.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
              | Mercancías dañadas o defectuosas recibidas.
            li
              .mb-auto.mt-2.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
              | El comprador ha sobrefacturado la factura.
            li
              .mb-auto.mt-2.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
              | Importe de factura incorrecto.







</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    indicadorTarjetaSlide: true,
    modal1: false,
    modal2: false,
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
.bloque-texto-edit.bloque-texto-b.color-secundario:before
  background-color: #DCEBD5 !important
.edit-bg
  position: relative
  &::after
    content: ''
    position: absolute
    margin-left: -3rem
    z-index: 0
    margin-right: -3rem
    min-width: calc( 100% + 6rem )
    width: 100%
    height: 100%
    background: linear-gradient(180deg, rgba(255,255,255,1) 10%, rgba(229,240,224,1) 30%, rgba(229,240,224,1) 70%, rgba(255,255,255,1) 90%)
.card-left
  border-top-left-radius: 20px
  border-bottom-left-radius: 20px
  background-color: #E5F0E0
  width: 50%
.card-right
  border-top-right-radius: 20px
  border-bottom-right-radius: 20px
  background-color: #FFECDC
  width: 50%
@media (max-width: 991px)
  .card-left
    border-top-right-radius: 20px
    border-top-right-radius: 20px
    border-bottom-left-radius: 0
    width: 100%
  .card-right
    border-top-right-radius: 0
    border-bottom-right-radius: 20px
    border-bottom-left-radius: 20px
    width: 100%
.modal-a
  .modal-a__content
    background-color: #F3F7DB
</style>
