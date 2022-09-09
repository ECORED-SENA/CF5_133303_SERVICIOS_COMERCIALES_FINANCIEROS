<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Pagos electrónicos 
    
    p.mb-5(data-aos="fade-right") Los pagos electrónicos son una forma de realizar transacciones o pagar facturas en línea o a través de un medio electrónico, sin el uso de cheques físicos o efectivo; los métodos más populares de pagos electrónicos incluyen tarjetas de crédito, tarjetas de débito, tarjetas virtuales y ACH (depósito directo, débito directo y cheques electrónicos).
    .col-xl-10.d-flex.flex-wrap.align-items-center.mx-auto.mb-5(style="background-color: #FFECDC; border-top-left-radius: 47px" data-aos="fade-left")
      img.col-lg-3(src="@/assets/curso/temas/tema1/img-1.png" style="max-width: 295px")
      p.mb-0.col-lg-9 Por la existencia de nuevos métodos de pago electrónico, los costos fijos y las tarifas asociadas con los pagos tradicionales, como los cheques, ya no existen, incluidos los gastos de papel, franqueo y mano de obra.

    p.mb-5(data-aos="fade-right") Los beneficios de los pagos electrónicos son muy convenientes, tanto para las empresas como para sus proveedores. Por ello, en el contexto de las cuentas por pagar, los pagos electrónicos son beneficiosos para todos porque reducen los costos, mejoran las relaciones, aumentan la visibilidad y brindan mayor seguridad en comparación con los cheques tradicionales; estas ventajas son:

    AcordionA.col-xl-10.mx-auto.edit-pestanas(tipo="b" data-aos="fade-right")
      .row.item-edit.col-xl-10.mx-auto(titulo="1. Reducción de costos")
        .col-md-6.mb-4.mb-md-0
          p Cuantos más pagos pueda procesar electrónicamente una empresa, menos gastará en papel y franqueo, junto con el tiempo necesario para imprimir, firmar, rellenar y enviar cheques por correo. 
            br
            br
            |De hecho, cambiar a una estrategia holística de pagos electrónicos puede reducir los costos de procesamiento de pagos hasta en 80%.  
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img-2.png')
      .row.item-edit.col-xl-10.mx-auto(titulo="2. Vínculos comerciales")
        .col-md-6.mb-4.mb-md-0
          p Las empresas pueden mejorar las relaciones con los proveedores facilitando pagos más rápidos y seguros que incluyen datos completos de remesas para facilitar la conciliación.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img-3.png')
      .row.item-edit.col-xl-10.mx-auto(titulo="3. Seguridad en operaciones")
        .col-md-6.mb-4.mb-md-0
          p Los pagos electrónicos son intrínsecamente más seguros que los cheques en papel y métodos específicos como las tarjetas virtuales ofrecen una protección aún mayor contra el fraude. 
            br
            br
            |Además, los mejores sistemas de pago electrónico de su clase incluyen funciones y controles adicionales para ayudar a asegurar el proceso de pago.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img-4.png')
      .row.item-edit.col-xl-10.mx-auto(titulo="4. Proyección empresarial")
        .col-md-6.mb-4.mb-md-0
          p Los sistemas de pago electrónico brindan a su empresa una mayor visibilidad de los estados de pago, métricas financieras y registros de auditoría precisos; y, reducen los costos y la probabilidad de errores en la entrada de datos.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img-5.png')
    
    h3.mb-5(data-aos="fade-right") #[span.py-3(style="background-color: #FD963D") Int]egrar medios de pago colombianos

    p.mb-5(data-aos="fade-right") Debido a que cada negocio y proveedor es diferente, es muy poco probable que una organización use solo un método de pago electrónico en sus cuentas por pagar. A medida que una organización crece y sus procesos se vuelven más complejos, se vuelve cada vez más importante que la empresa no solo adopte los pagos electrónicos como una solución, sino que emplee cuentas por pagar integradas como solución. Por ello, es importante conocer los pro y contras de los pagos electrónicos que se muestran a continuación.

    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1  Procedimientos transaccionales
    
    p.mb-5(data-aos="fade-right") Cada vez es más común que una empresa pague a un proveedor con un pago electrónico, en lugar de un cheque o en efectivo. Al hacerlo, una empresa puede emitir pagos a un costo más bajo, de manera más eficiente y con menos errores que con los cheques. 

    .col-xl-10.mx-auto.mb-5(data-aos="fade-left")
      .cajon.color-primario.p-4
        p Los tipos de sistemas de pago electrónico incluyen pagos únicos de cliente a proveedor, pagos recurrentes de cliente a proveedor y pagos automáticos de banco a proveedor. A continuación, se ilustra cada uno.

    .d-flex.flex-wrap.align-items-stretch.mb-5
      .col-lg-6.col-xl-4.p-2.mx-auto(style="margin-top: 8rem" data-aos="fade-right")
        .tarjeta.p-4.p-lg-5.position-relative.h-100(style="background-color: #FEE89F")
          img(src='@/assets/curso/temas/tema1/img-6.svg' style="max-width: 258px;").banner-principal-decorativo-tj
          .d-block(style="margin-top: 6rem")
            h4.mb-4 Un pago único del cliente al proveedor
            p Puede usarlo para comprar un artículo de consumo o pagar una factura. 
              br
              br
              |Es un pago único y no recurrente.

      .col-lg-6.col-xl-4.p-2.mx-auto(style="margin-top: 8rem" data-aos="fade")
        .tarjeta.p-4.p-lg-5.position-relative.h-100(style="background-color: #FEC08A")
          img(src='@/assets/curso/temas/tema1/img-7.svg' style="max-width: 258px;").banner-principal-decorativo-tj
          .d-block(style="margin-top: 6rem")
            h4.mb-4 Un pago recurrente del cliente al proveedor
            p Un pago recurrente de manera constante y regular hasta cumplir por completo la responsabilidad adquirida. Por ejemplo, programar un pago recurrente para pagar su deuda hipotecaria.

      .col-lg-6.col-xl-4.p-2.mx-auto(style="margin-top: 8rem" data-aos="fade-left")
        .tarjeta.p-4.p-lg-5.position-relative.h-100(style="background-color: #C2E8B0")
          img(src='@/assets/curso/temas/tema1/img-8.svg' style="max-width: 258px;").banner-principal-decorativo-tj
          .d-block(style="margin-top: 6rem")
            h4.mb-4 Un pago automático del banco al proveedor
            p Un pago automático de un banco a un proveedor es cuando un banco establece un pago programado recurrente. 
              br
              br
              |Funciona igual que un pago recurrente de proveedor a cliente, excepto que el dinero proviene directamente del banco.

    p.mb-5.text-center Otros tipos populares de transacciones de pago electrónico incluyen:

    .d-flex.flex-wrap.mb-5.w-100
      .card-left.p-4.p-xl-5(data-aos="fade-right")
        img.mb-5.mx-auto(src='@/assets/curso/temas/tema1/img-9.svg' style="max-width: 180px;")
        h2.text-center.mb-5 Cámara de Compensación<br clase="d-none d-lg-flex"> Automatizada (ACH) 
        p.px-lg-5.mx-xl-5.text-center Los pagos ACH transfieren dinero electrónicamente entre cuentas bancarias. Por ejemplo, si desea que el banco de su empresa envíe su pago de $20 por el libro, que ordenó directamente a la cuenta bancaria comercial del proveedor, ese podría ser una transacción ACH.
      .card-right.p-4.p-xl-5(data-aos="fade-left")
        img.mb-5.mx-auto(src='@/assets/curso/temas/tema1/img-10.svg' style="max-width: 180px;")
        h2.text-center.mb-5 Tarjeta de<br clase="d-none d-lg-flex"> crédito virtual
        p.px-lg-5.mx-xl-5.text-center A diferencia de las tarjetas de crédito convencionales que contienen un código de seguridad y una fecha de vencimiento, en las tarjetas de crédito virtuales el número de la tarjeta nunca se ingresa y su funcionamiento es al iniciar sesión en su portal de banca en línea. Este es un método que brinda una capa adicional de seguridad sobre las tarjetas de crédito estándar.

    p.col-xl-10.mx-auto.mb-5(data-aos="fade-right") Los sistemas de pago electrónico funcionan cuando las personas y las tecnologías electrónicas trabajan juntas para mover la información de pago instantáneamente a través de una progresión lógica de pasos, generalmente en solo unos segundos.
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2  Tipos

    p.mb-5(data-aos="fade-right") Los tipos de un sistema de pago electrónico incluyen sistemas de pago de crédito y sistemas de pago en efectivo, se invita a conocer cuáles tipos corresponden a cada sistema así:

    SlyderA.col-xl-10.mx-auto.tarjeta.slide-a-edit.p-3.p-md-4.mb-5(tipo="b" data-aos="fade-right")
      .d-flex.flex-wrap.col-xl-10.mx-auto
        .col-md-7.pe-xl-4
          figure
            img.ms-md-auto(src='@/assets/curso/temas/tema1/img-11.png' style="max-width: 610px")
        .col-md-5.mb-4.mb-md-0
          h4.px-4.py-2.px-xl-5(style="background-color: #FEC08A") Sistemas de pago de crédito
          ul.lista-ul--color.mb-4(data-aos="fade-left")
            li
              .mb-auto.mt-2.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
              | Tarjetas de crédito
          p Las instituciones financieras, como los bancos, otorgan tarjetas de crédito a las personas para que las utilicen en transacciones comerciales y financieras personales. La transacción pasa por el sistema de pago electrónico que verifica la identidad y que tiene el dinero en la cuenta de tarjeta de crédito para pagar. Si es así, el sistema aprueba la compra.
      
      .d-flex.flex-wrap.col-xl-10.mx-auto
        .col-md-7.pe-xl-4
          figure
            img.ms-md-auto(src='@/assets/curso/temas/tema1/img-12.png' style="max-width: 610px")
        .col-md-5.mb-4.mb-md-0
          h4.px-4.py-2.px-xl-5(style="background-color: #FEC08A") Sistemas de pago de crédito
          ul.lista-ul--color.mb-4(data-aos="fade-left")
            li
              .mb-auto.mt-2.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
              | Monederos electrónicos
          p Las billeteras electrónicas almacenan los datos financieros, como la información de la tarjeta de crédito. En esta aplicación, se puede usar el teléfono inteligente para comprar comestibles. El sistema reconoce quién es y que hay dinero en la cuenta de tarjeta de crédito para pagar.
      
      .d-flex.flex-wrap.col-xl-10.mx-auto
        .col-md-7.pe-xl-4
          figure
            img.ms-md-auto(src='@/assets/curso/temas/tema1/img-13.png' style="max-width: 610px")
        .col-md-5.mb-4.mb-md-0
          h4.px-4.py-2.px-xl-5(style="background-color: white") Sistemas de pago en efectivo
          ul.lista-ul--color.mb-4(data-aos="fade-left")
            li
              .mb-auto.mt-2.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
              | Débito directo
          p Es cuando una persona o empresa retira fondos directamente de una cuenta bancaria. La mayoría de nosotros tenemos y usamos tarjetas de débito.
      
      .d-flex.flex-wrap.col-xl-10.mx-auto
        .col-md-7.pe-xl-4
          figure
            img.ms-md-auto(src='@/assets/curso/temas/tema1/img-14.png' style="max-width: 610px")
        .col-md-5.mb-4.mb-md-0
          h4.px-4.py-2.px-xl-5(style="background-color: white") Sistemas de pago en efectivo
          ul.lista-ul--color.mb-4(data-aos="fade-left")
            li
              .mb-auto.mt-2.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
              | Cheque electrónico
          p Es simplemente un cheque en papel que está en formato electrónico. Al igual que un cheque en papel, los pagos se realizan accediendo a la cuenta corriente y los números de ruta de su banco.
      
      .d-flex.flex-wrap.col-xl-10.mx-auto
        .col-md-7.pe-xl-4
          figure
            img.ms-md-auto(src='@/assets/curso/temas/tema1/img-15.png' style="max-width: 610px")
        .col-md-5.mb-4.mb-md-0
          h4.px-4.py-2.px-xl-5(style="background-color: white") Sistemas de pago en efectivo
          ul.lista-ul--color.mb-4(data-aos="fade-left")
            li
              .mb-auto.mt-2.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
              | Efectivo electrónico
          p Es el pago digital que se puede transferir de una cuenta a otra electrónicamente a través de plataformas en línea como PayPal, Apple Pay y Venmo.

    p.mb-5.text-center(data-aos="fade-right") Ahora bien, ¿cuáles son las ventajas de los sistemas de pago electrónico? En la siguiente información, está la respuesta.

    ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-left")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/img-16.svg')

      .p-4(x="50%" y="25%" tooltip="1. Pagos más rápidos y precisos" style="background-color: #FEE89F" numero="+")
        p.mb-0 Las ventajas de los sistemas de pago electrónico se generan, pues presentan para los clientes, pagos más rápidos y precisos, que se realizan llevando a cabo una transacción de pago electrónico completa en segundos (o menos). 
      .p-4(x="21%" y="43%" tooltip="1. Pagos más rápidos y precisos" style="background-color: #FEE89F" numero="+")
        p.mb-0 Otra ventaja son los costos reducidos, ya que los sistemas de pago electrónico, permiten ahorrar dinero al eliminar los costos de cheques en papel, sellos y franqueo. 
      .p-4(x="79%" y="43%" tooltip="1. Pagos más rápidos y precisos" style="background-color: #FEE89F" numero="+")
        p.mb-0 También se podría definir que es un procedimiento más seguro y conveniente y que pagar electrónicamente significa que los clientes no tienen que asumir riesgos en su seguridad, recurriendo a las oficinas corporativas y transportando cantidades significativas de dinero.
      .p-4(x="17.5%" y="77%" tooltip="1. Pagos más rápidos y precisos" style="background-color: #FEE89F" numero="+")
        p.mb-0 Los sistemas de pago electrónico evitan los problemas de búsqueda de  facturas y órdenes de compra, ahora al estar  almacenados digitalmente en la nube, los profesionales financieros pueden  tener mejor acceso a datos e informes, encontrando fácil y rápidamente la información de pago que necesitan, generando mayor rapidez en los procesos. 
      .p-4(x="82.5%" y="77%" tooltip="1. Pagos más rápidos y precisos" style="background-color: #FEE89F" numero="+")
        p.mb-0 Finalmente, cuando una empresa configura un sitio web donde los clientes pueden comprar productos o servicios electrónicamente, esta información  llegará a nuevas audiencias de clientes potenciales y oportunidades de generación de ingresos. 


    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_3 1.3  Procedimiento de manejo

    p.mb-5(data-aos="fade-right") Para que se logre que una transacción electrónica se aplique seguramente y en la cual se refleja una especificación de seguridad y cifrado de código abierto diseñado para proteger las transacciones con tarjeta de crédito en internet, se debe recordar que una transacción electrónica segura no es un sistema de pago, es un conjunto de protocolos y formatos de seguridad que garantiza que el uso de transacciones de pago en línea en internet sea seguro y proporcione un entorno seguro para todas las partes involucradas en la transacción de comercio electrónico, también garantiza la confidencialidad y genera autenticación a través de certificados digitales. 
      br
      br
      |Para realizar el procedimiento como tal, a continuación, se muestra la lista de participantes que están involucrados en el proceso.

    .titulo-quinto.color-acento-contenido
      h4 Herramientas de limpieza de datos

    LineaTiempoB.col-xl-10.mx-auto.p-4.p-xl-5.linea-edit.color-secundario.mb-5(:datos="datosLineaTiempoB" data-aos="fade-left")
    p.col-xl-10.mb-5.mx-auto(data-aos="fade-right") Luego de hablar de transacción electrónica segura, se podría definir como el protocolo utilizado por las compañías de tarjetas de crédito para el comercio electrónico que garantiza la seguridad en las transacciones electrónicas y funciona de la siguiente manera.

    LineaTiempoC.linea-c-edit.col-xl-10.mx-auto.color-acento-contenido.p-4.mb-5(text-small style="background-color: #E1F3D7; border-radius: 10px" data-aos="fade-left")
      .row.col-xl-11.mx-auto(titulo="Paso 1")
        .col-xl-5
          figure
            img(src='@/assets/curso/temas/tema1/img-17.jpg')
        .col-xl-7.mb-4.mb-xl-0
          h4 El cliente abre una cuenta
          p El cliente abre una cuenta de tarjeta de crédito como una tarjeta Mastercard o Visa con un banco; es decir, un emisor que admite transacciones de pago electrónico y el protocolo de transacción electrónica segura.

      .row.col-xl-11.mx-auto(titulo="Paso 2")
        .col-xl-5
          figure
            img(src='@/assets/curso/temas/tema1/img-18.jpg')
        .col-xl-7.mb-4.mb-xl-0
          h4 El cliente recibe un certificado
          p Una vez que se verifica la identidad del cliente (la verificación se puede realizar mediante el uso de un pasaporte, documentos comerciales u otros documentos), recibe un certificado digital que es emitido por la autoridad de la certificación. Este certificado contiene detalles del cliente como nombre, clave pública, fecha de vencimiento, número de certificado, etc.

      .row.col-xl-11.mx-auto(titulo="Paso 3")
        .col-xl-5
          figure
            img(src='@/assets/curso/temas/tema1/img-19.jpg')
        .col-xl-7.mb-4.mb-xl-0
          h4  El comerciante recibe un certificado
          p El comercio que desee aceptar ciertas marcas de tarjetas de crédito deberá tramitar un certificado digital de confiabilidad.

      .row.col-xl-11.mx-auto(titulo="Paso 4")
        .col-xl-5
          figure
            img(src='@/assets/curso/temas/tema1/img-20.jpg')
        .col-xl-7.mb-4.mb-xl-0
          h4  El cliente realiza un pedido
          p Es un proceso de carrito de compras en el que los clientes toman prestado un artículo de la lista disponible, buscan el artículo específico de acuerdo con los requisitos y realizan el pedido. Una vez que el cliente realiza los pedidos, el comerciante, a cambio, envía los detalles del pedido, como una lista de artículos seleccionados, su cantidad y precio, factura total, etc., para mantener un registro del pedido en el sitio del cliente.
      
      .row.col-xl-11.mx-auto(titulo="Paso 5")
        .col-xl-5
          figure
            img(src='@/assets/curso/temas/tema1/img-21.jpg')
        .col-xl-7.mb-4.mb-xl-0
          h4 El comerciante está verificado
          p El comerciante también envía un certificado digital al cliente para asegurar a los clientes que están tratando con un comerciante autorizado o válido.
        
      .row.col-xl-11.mx-auto(titulo="Paso 6")
        .col-xl-5
          figure
            img(src='@/assets/curso/temas/tema1/img-22.jpg')
        .col-xl-7.mb-4.mb-xl-0
          h4 Envían los detalles del pedido y del pago
          p El cliente envía un pedido y detalles de pago al comerciante, con la confirmación de la transacción (pago, datos de la tarjeta de crédito: Mastercard. Visa, etc.), la referencia de artículos que se mencionan en el formulario de pedido.
            br
            br
            |Esta información de pago está en forma encriptada; incluso el comerciante no puede leerlo. El certificado de cliente asegura al comerciante la identidad de este.
        
      .row.col-xl-11.mx-auto(titulo="Paso 7")
        .col-xl-5
          figure
            img(src='@/assets/curso/temas/tema1/img-23.jpg')
        .col-xl-7.mb-4.mb-xl-0
          h4  El comerciante solicita la autorización de pago
          p Una vez que el comerciante obtiene los detalles de pago del cliente, los transfiere a la pasarela de pago a través del adquirente y solicita a la pasarela de pago que autorice los detalles de pago. Este proceso garantiza que la tarjeta de crédito del cliente sea válida y que no se supere el límite de crédito.
        
      .row.col-xl-11.mx-auto(titulo="Paso 8")
        .col-xl-5
          figure
            img(src='@/assets/curso/temas/tema1/img-24.jpg')
        .col-xl-7.mb-4.mb-xl-0
          h4 La pasarela de pago autoriza el pago
          p Usando la información de la tarjeta de crédito recibida del comerciante, la pasarela de pago verifica la tarjeta de crédito del cliente con la ayuda del emisor. Según el resultado de la verificación, autoriza el pago o lo rechaza.
        
      .row.col-xl-11.mx-auto(titulo="Paso 9")
        .col-xl-5
          figure
            img(src='@/assets/curso/temas/tema1/img-25.jpg')
        .col-xl-7.mb-4.mb-xl-0
          h4 El comerciante confirma el pedido
          p Suponiendo que la pasarela de pago autorice el pago, los comerciantes envían la confirmación del pedido al cliente.

      .row.col-xl-11.mx-auto(titulo="Paso 10")
        .col-xl-5
          figure
            img(src='@/assets/curso/temas/tema1/img-26.jpg')
        .col-xl-7.mb-4.mb-xl-0
          h4 El comerciante proporciona bienes y servicios
          p Ahora el comerciante proporciona bienes y servicios de acuerdo con el pedido del cliente.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_4 1.4  Tarifas

    p.mb-5(data-aos="fade-right") Colombia es el tercer país más grande por población en América Latina y una de las economías de más rápido crecimiento en la región. El comercio electrónico creció 30,6% en 2020 debido a las restricciones relacionadas con la Covid-19, lo que aceleró la adopción de compras y pagos en línea en una variedad de segmentos como moda y belleza, electrónica, muebles y electrodomésticos, música digital y videojuegos.
      br
      br
      |La población adulta bancarizada creció 73% en 2020, siendo las tarjetas de crédito y los pagos ACH algunos de los métodos de pago más utilizados en el comercio electrónico, además los métodos de pago en efectivo como Baloto, Efecty y Gana siguen teniendo una importante aceptación entre los compradores. Teniendo en cuenta lo anterior, hay que tener en cuenta lo siguiente:


    .d-flex.flex-wrap.p-4.pt-xl-0.pb-xl-4.ps-xl-5.pe-xl-0.mb-5(style="background-color: #FFECDC; border-top-right-radius: 83px" data-aos="fade-right")
      .col-xl-8.pt-xl-4.ms-auto.order-2.order-xl-1
        h3.mb-5(data-aos="fade-right") #[span.py-3(style="background-color: #FD963D") Los] pros y los contras de los diferentes tipos de pagos electrónicos
        p.mb-0 Las soluciones convencionales, como las tarjetas de crédito y la banca en línea, populares en los países con una estructura financiera desarrollada, aún no han llegado a la mayoría de la población. Los pagos por teléfono móvil, las opciones de prepago y los depósitos bancarios dominan el panorama.
          br
          br
          |La mayoría de estas opciones se basan en el principio de que el cliente puede pagar la factura en efectivo en una tienda minorista o quiosco local. Agregar estas opciones de pago lo ayudará a llegar a una gama más amplia de clientes que, de lo contrario, se quedarían fuera debido a la infraestructura subdesarrollada en su región.
      img.my-auto.col-xl-4.order-1.order-xl-2.mx-auto.mx-xl-0.mb-4.mb-xl-0(src="@/assets/curso/temas/tema1/img-27.png" style="max-width: 400px")


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: 'Titular de la tarjeta',
        texto:
          'Es un titular autorizado de la tarjeta de pago. La tarjeta puede ser una maestra o una visa emitida por un emisor.',
        icono: require('@/assets/curso/temas/tema1/l-6.svg'),
      },
      {
        titulo: 'Comerciante',
        texto:
          'Es cualquier persona u organización que desea vender sus bienes y servicios a los tarjetahabientes. Tenga en cuenta que un comerciante debe tener una relación con el adquirente para aceptar el pago a través de internet.',
        icono: require('@/assets/curso/temas/tema1/l-5.svg'),
      },
      {
        titulo: 'Emisor',
        texto:
          'Organización financiera, como un banco, que emite una tarjeta de pago: una tarjeta maestra o una visa para el usuario o el titular de la tarjeta. El emisor es responsable del pago de la deuda del titular de la tarjeta.',
        icono: require('@/assets/curso/temas/tema1/l-4.svg'),
      },
      {
        titulo: 'Adquiriente',
        texto:
          'Organización financiera con una relación con el comerciante para procesar la autorización de pago con tarjeta y todos los pagos. Un adquirente es parte de este proceso porque el comerciante puede aceptar tarjetas de crédito de más de una marca. También proporciona una transferencia electrónica de fondos a la cuenta del comerciante.',
        icono: require('@/assets/curso/temas/tema1/l-3.svg'),
      },
      {
        titulo: 'Pasarela de pago',
        texto:
          'Es una interfaz entre las transacciones electrónicas seguras y las redes de pago con tarjeta existentes. El comercio intercambia el mensaje de transacción electrónica segura con la pasarela de pago a través de internet, la pasarela de pago se conecta al sistema del adquirente mediante una línea de red dedicada.',
        icono: require('@/assets/curso/temas/tema1/l-2.svg'),
      },
      {
        titulo: 'Autoridad de certificación',
        texto:
          'Es una autoridad de confianza que proporciona certificados de clave pública a los titulares de tarjetas, pasarelas de pago y comerciantes.',
        icono: require('@/assets/curso/temas/tema1/l-1.svg'),
      },
    ],
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
.edit-pestanas
  .acordion__accion__btn--b
    background-color: #FCD03E
    border: none
  .acordion__header
    border-bottom: 1px solid #E8E8E8
    margin-bottom: 0
    padding-bottom: 1rem
  .acordion__activo.tarjeta--blanca
    background-color: #E5F0E0
    .acordion__header
      border: none
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
.linea-edit
  background-color: #FFF9F5
  border-radius: 5px
  .linea-tiempo-b__icon img
    width: 100%
</style>
