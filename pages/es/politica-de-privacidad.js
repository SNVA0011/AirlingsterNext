import React, { useEffect } from 'react'
import Head from 'next/head'
import BreadHero from "../../component/es/BreadHero";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from "next/link"
import Footer from '../../component/es/Footer';
import Header from "../../component/es/Navbar";

export default function Terms() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Head>
            <title>Política De Privacidad - Airlingster</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href={'https://www.airlingster.com/es/politica-de-privacidad'} />
            </Head>

            <Header />

            <div className="page-title page-title--small align-left m-0" >
                <div className="container">
                    <div className="page-title__content">
                        <h1 className="page-title__name">Política De Privacidad</h1>
                    </div>
                    <BreadHero linkhtml={<><ul className='breadcrumb bradcum text-white'>
                       <li className="breadcrumb-item" > <Link href="/es/">Casa</Link> </li> 
                       <li className='breadcrumb-item active' aria-current="page">PRIVACIDAD</li> </ul></>} />
                </div>
            </div>



            <div className='about-uspage full-w customizespace-75'>
            <Container>
            <Row>
              <Col xs={12} xl={12} className="about-font-18 uidicslist content-ullist">
                <h2 className="sub-title mt-0">Política de privacidad</h2>
                <p>
                  Airlingster.com y sus empresas relacionadas ("nosotros", "nos" o "nuestro")
                  valoran su confianza y quieren que esté familiarizado con la forma en que
                  recopilamos, usamos y divulgamos información. Esta Política de privacidad
                  describe nuestras prácticas en relación con la información que recopilamos a
                  través de los sitios web o sitios web móviles (los "Sitios web") y nuestros
                  otros servicios en línea, en todos los casos, desde los cuales accede a esta
                  Política de privacidad (colectivamente, incluidos los Sitios web y los
                  servicios"). Al proporcionarnos información personal, usted acepta los
                  términos y condiciones de esta Política de privacidad.
                </p>
                <h2 className="mb-1 mt-5 infoheadbx">INFORMACION PERSONAL</h2>
                <p>
                  Información personal que podemos recopilar "Información personal" es
                  información que lo identifica como individuo o se relaciona con una persona
                  identificable, que incluye, por ejemplo:
                </p>
                <p>
                  Nombre Dirección(es) postal(es) Número de teléfono Dirección de correo
                  electrónico Número de tarjeta de crédito y débito e información relacionada
                  ID de cuenta de redes sociales Número de pasaporte Número asignado por una
                  agencia de transporte, como un número de viajero conocido de la
                  Administración de Seguridad del Transporte Cualquier otra información que
                  proporcione cuando se comunica o reserva viaja con nosotros (p. ej., su
                  dieta y otras preferencias o necesidades), así como información sobre sus
                  reservas (p. ej., puntos de partida y destinos) Si envía cualquier
                  Información personal relacionada con otras personas a nosotros o a nuestros
                  proveedores de servicios en relación con con los Servicios, usted declara
                  que tiene la autoridad para hacerlo y para permitirnos usar la información
                  de acuerdo con esta Política de privacidad.
                </p>
                <h2 className="mb-1 mt-5 infoheadbx">
                  CÓMO PODEMOS RECOPILAR INFORMACIÓN PERSONAL
                </h2>
                <p>
                  Nosotros y nuestros proveedores de servicios podemos recopilar información
                  personal de varias maneras, que incluyen:
                </p>
                <p>
                  A través de los Servicios: podemos recopilar información personal a través
                  de los Servicios, como cuando realiza una reserva o se registra para una
                  promoción.
                </p>
                <p>
                  Fuera de línea: podemos recopilar información personal de usted fuera de
                  línea, como cuando se comunica con el servicio al cliente. De otras fuentes:
                  podemos recibir su información personal de otras fuentes, como bases de
                  datos públicas, socios de marketing conjuntos, plataformas de redes sociales
                  (incluso de personas con las que es amigo o está conectado) y otros
                  terceros, en la medida permitida por ley aplicable. Cómo podemos usar la
                  información personal
                </p>
                <h2 className="mb-1 mt-5 infoheadbx">
                  PODEMOS UTILIZAR INFORMACIÓN PERSONAL
                </h2>
                <p>
                  Para completar y cumplir con su reserva o compra, lo que incluye procesar su
                  pago, comunicarse con usted con respecto a su reserva o compra y brindarle
                  el servicio de atención al cliente relacionado. Utilizamos la información
                  del pasaporte con el fin de reservar viajes.
                </p>
                <p>
                  Para responder a sus consultas y cumplir con sus solicitudes, como enviarle
                  boletines. Para enviarle información administrativa, como información sobre
                  los Servicios y cambios en nuestros términos, condiciones y políticas.
                </p>
                <p>
                  Para enviarle comunicaciones de marketing que creemos que pueden ser de su
                  interés, en la medida permitida por la ley. Para personalizar su experiencia
                  en los Servicios mediante la presentación de productos y ofertas adaptadas a
                  usted. Para permitirle participar en sorteos, concursos y promociones
                  similares y para administrar estas actividades. Algunas de estas actividades
                  tienen reglas adicionales, que pueden contener información adicional sobre
                  cómo usamos y divulgamos su información personal. Le sugerimos que lea
                  atentamente dichas reglas, ya que estará sujeto a ellas si decide
                  participar. Para facilitar la funcionalidad de compartir en redes sociales
                </p>
                <p>
                  Para permitirle enviar mensajes a otra persona a través de los Servicios. Al
                  usar esta funcionalidad, nos está diciendo que tiene derecho a
                  proporcionarnos el nombre y la dirección de correo electrónico de su amigo.
                </p>
                <p>
                  Para nuestros fines comerciales, como análisis de datos, auditorías,
                  monitoreo y prevención de fraudes, desarrollo de nuevos productos, mejora,
                  mejora o modificación de nuestros Servicios, identificación de tendencias de
                  uso, determinación de la efectividad de nuestras campañas promocionales y
                  operación y expansión de nuestras actividades comerciales.
                </p>
                <p>
                  Según creamos que es necesario o apropiado: (a) según la ley aplicable,
                  incluidas las leyes fuera de su estado o país de residencia; (b) para
                  cumplir con procesos legales y para prevenir, detectar o reprimir abusos,
                  fraudes o actividades delictivas; (c) para responder a solicitudes de
                  autoridades públicas y gubernamentales y organizaciones de autorregulación,
                  incluidas autoridades públicas y gubernamentales y organizaciones de
                  autorregulación fuera de su estado o país de residencia; (d) para hacer
                  cumplir nuestros términos y condiciones; (e) para proteger nuestras
                  operaciones, activos o intereses o los de cualquiera de nuestras afiliadas;{" "}
                  (f) para proteger nuestros derechos, privacidad, seguridad o propiedad, y/o
                  los de nuestros afiliados, usted u otros; y (g) para permitirnos buscar los
                  recursos disponibles o limitar los daños que podamos sufrir
                </p>
                <h2 className="mb-1 mt-5 infoheadbx">
                  CÓMO SE PUEDE DIVULGAR LA INFORMACIÓN PERSONAL
                </h2>
                <p>
                  Su información personal puede ser divulgada o transferida a las siguientes
                  entidades. Con la excepción de nuestros afiliados corporativos y proveedores
                  de servicios, estas entidades no están controladas por nosotros y la
                  información personal que se les revela está sujeta a la política de
                  privacidad y las prácticas de seguridad de la entidad correspondiente. Por
                  lo tanto, lo alentamos a que revise las políticas de privacidad de cualquier
                  entidad cuyos productos o servicios compre utilizando los Servicios.
                </p>
                <p>
                  A nuestras filiales corporativas en todo el mundo para los fines descritos
                  en esta Política de privacidad. Volar es responsable de la gestión de la
                  Información personal utilizada conjuntamente. A nuestros proveedores
                  externos relacionados con viajes, como aerolíneas, hoteles y compañías de
                  alquiler de automóviles, para que puedan proporcionar los productos y
                  servicios que reserva o compra utilizando los Servicios. A otras empresas
                  relacionadas con viajes con las que nos asociamos para proporcionar una
                  parte de los Servicios, como consolidadores o agregadores de aerolíneas,
                  otras agencias de viajes que brindan acceso a su inventario relacionado con
                  viajes a través de los Servicios y proveedores de seguros de viaje.
                </p>
                <p>
                  A nuestros socios comerciales, cuyos productos o servicios pueden ofrecerse
                  en los Servicios, que lo refirieron a los Servicios desde otro sitio web o
                  servicio en línea, o a cuyo sitio web o servicio en línea se vinculan los
                  Servicios. Le recomendamos que revise la política de privacidad de cada
                  sitio web o servicio en línea. A nuestros proveedores de servicios externos
                  que brindan servicios como alojamiento de sitios web, análisis de datos,
                  procesamiento de pagos, cumplimiento de pedidos, tecnología de la
                  información y provisión de infraestructura relacionada, servicio al cliente,
                  entrega de correo electrónico, auditoría y otros servicios. La información
                  que proporcionamos a terceros proveedores de servicios está sujeta a
                  obligaciones de confidencialidad y está destinada a ser utilizada únicamente
                  para los fines permitidos.
                </p>
                <h2 className="mb-1 mt-5 infoheadbx">
                  A TERCEROS PATROCINADORES U OPERADORES DE ENCUESTAS, SORTEOS, CONCURSOS Y
                  PROMOCIONES SIMILARES
                </h2>
                <p>
                  Para identificarlo ante cualquier persona a la que envíe mensajes a través
                  de los Servicios. También puede optar por divulgar su información personal
                  en tableros de mensajes, chat, páginas de perfil, blogs y otros servicios en
                  los que puede publicar información y materiales. Tenga en cuenta que
                  cualquier información que publique o divulgue a través de estos servicios se
                  hará pública y puede estar disponible para otros usuarios y el público en
                  general. Le instamos a que tenga mucho cuidado cuando decida divulgar
                  cualquier información sobre los Servicios. Sujeto a la configuración de su
                  cuenta de redes sociales, a sus amigos asociados con su cuenta de redes
                  sociales, a otros usuarios del sitio web y al proveedor de su cuenta de
                  redes sociales, en relación con su actividad de intercambio social, como si
                  conecta su cuenta de redes sociales a su cuenta de Servicios o inicia sesión
                  en su cuenta de Servicios desde su cuenta de redes sociales. Al conectar su
                  cuenta de Servicios y su cuenta de redes sociales, nos autoriza a compartir
                  información con el proveedor de su cuenta de redes sociales y comprende que
                  el uso de la información que compartimos se regirá por la política de
                  privacidad del sitio de redes sociales. Si no desea que su información
                  personal se comparta con otros usuarios o con su proveedor de cuentas de
                  redes sociales, no conecte su cuenta de redes sociales con su cuenta de
                  Servicios y no participe en el intercambio social de los Servicios. A un
                  tercero, en el caso de cualquier reorganización, fusión, venta, empresa
                  conjunta, cesión, transferencia u otra disposición de todo o parte de
                  nuestro negocio, activos, o acciones (incluso en relación con cualquier
                  quiebra o procedimiento similar). Según creamos que es necesario o
                  apropiado: (a) según la ley aplicable, incluidas las leyes fuera de su
                  estado o país de residencia; (b) para cumplir con procesos legales y para
                  prevenir, detectar o reprimir abusos, fraudes o actividades delictivas; (c)
                  para responder a solicitudes de autoridades públicas y gubernamentales y
                  organizaciones de autorregulación, incluidas autoridades públicas y
                  gubernamentales y organizaciones de autorregulación fuera de su estado o
                  país de residencia; (d) para hacer cumplir nuestros términos y condiciones;{" "}
                  (e) para proteger nuestras operaciones, activos o intereses o los de
                  cualquiera de nuestras afiliadas; (f) para proteger nuestros derechos,
                  privacidad, seguridad o propiedad, y/o los de nuestros afiliados, usted u
                  otros;
                </p>
                <h2 className="mb-1 mt-5 infoheadbx">OTRA INFORMACIÓN</h2>
                <p>
                  Otra información que podemos recopilar "Otra información" es cualquier
                  información que no revele directamente su identidad específica o que no se
                  relacione directamente con una persona. Si estamos obligados a tratar Otra
                  información como Información personal según la ley aplicable, entonces
                  podemos usarla solo para los fines para los que usamos y divulgamos
                  Información personal como se detalla en esta Política de privacidad.
                </p>
                <h2 className="mb-1 mt-5 infoheadbx">
                  OTRA INFORMACIÓN PUEDE, POR EJEMPLO, SER
                </h2>
                <p>
                  Información del navegador y del dispositivo Datos de uso de la aplicación
                  Información recopilada a través de cookies, etiquetas de píxeles y otras
                  tecnologías Información demográfica y otra información proporcionada por
                  usted Información agregada
                </p>
                <h2 className="mb-1 mt-5 infoheadbx">
                  CÓMO PODEMOS RECOPILAR OTRA INFORMACIÓN
                </h2>
                <p>
                  Nosotros y nuestros proveedores de servicios externos podemos recopilar Otra
                  información de varias maneras, que incluyen: A través de su navegador o
                  dispositivo: Cierta información es recopilada por la mayoría de los
                  navegadores o automáticamente a través de su dispositivo, como su dirección
                  de control de acceso a medios (MAC), computadora (Windows o Macintosh),
                  resolución de pantalla, nombre y versión del sistema operativo, fabricante y
                  modelo del dispositivo, idioma, tipo y versión del navegador de Internet y
                  el nombre y la versión de los Servicios (como la Aplicación) que está
                  utilizando. Utilizamos esta información para garantizar que los Servicios
                  funcionen correctamente.
                </p>
                <p>
                  Uso de cookies: Las cookies son piezas de información almacenadas
                  directamente en la computadora que está utilizando. Las cookies nos permiten
                  recopilar información como el tipo de navegador, el tiempo dedicado a los
                  Servicios, las páginas visitadas, las preferencias de idioma y otros datos
                  de tráfico anónimos. Nosotros y nuestros proveedores de servicios usamos la
                  información con fines de seguridad, para facilitar la navegación, para
                  mostrar la información de manera más efectiva, para personalizar su
                  experiencia mientras usa los Servicios y para reconocer su computadora a fin
                  de ayudarlo en el uso de los Servicios. También recopilamos información
                  estadística sobre el uso de los Servicios para mejorar continuamente su
                  diseño y funcionalidad, comprender cómo se usan y ayudarnos a resolver
                  preguntas sobre ellos. Las cookies nos permiten además seleccionar cuáles de
                  nuestros anuncios u ofertas tienen más probabilidades de atraerlo y
                  mostrarlos mientras se encuentra en los Servicios. También podemos usar
                  cookies u otras tecnologías para rastrear las respuestas a nuestros anuncios
                  en línea y comprender qué sitio o anuncio lo trajo a nuestro sitio. En este
                  momento, no respondemos a las señales de no seguimiento del navegador.
                </p>
                <p>
                  Si no desea que se recopile información mediante el uso de cookies, existe
                  un procedimiento simple en la mayoría de los navegadores que le permite
                  rechazar automáticamente las cookies o tener la opción de rechazar o aceptar
                  la transferencia a su computadora de una cookie (o cookies) en particular.
                  de un sitio en particular.
                </p>
                <p>
                  Uso de etiquetas de píxeles y otras tecnologías similares: las etiquetas de
                  píxeles (también conocidas como balizas web y GIF transparentes) se pueden
                  usar en relación con algunos Servicios para, entre otras cosas, rastrear las
                  acciones de los usuarios de los Servicios (incluidos los destinatarios de
                  correo electrónico), medir la el éxito de nuestras campañas de marketing y
                  compilar estadísticas sobre el uso de los Servicios y las tasas de
                  respuesta. Análisis: utilizamos Google Analytics, que utiliza cookies y
                  tecnologías similares para recopilar y analizar información sobre el uso de
                  los Servicios e informar sobre actividades y tendencias. Este servicio
                  también puede recopilar información sobre el uso de otros sitios web,
                  aplicaciones y recursos en línea. Puedes aprender sobre Google
                </p>
                <p>
                  prácticas yendo a www.google.com/policies/privacy/?partners/, y opte por no
                  participar descargando el complemento del navegador de exclusión voluntaria
                  de Google Analytics, disponible en https://tools.google.com/dlpage/ gaoptout{" "}
                  Uso de la tecnología Adobe Flash (incluidos Flash Local Shared Objects
                  ("Flash LSO")) y otras tecnologías similares: podemos usar Flash LSO y otras
                  tecnologías para, entre otras cosas, recopilar y almacenar información sobre
                  su uso de los Servicios. Si no desea que los Flash LSO se almacenen en su
                  computadora, puede ajustar la configuración de su reproductor Flash para
                  bloquear el almacenamiento de Flash LSO utilizando las herramientas
                  contenidas en el Panel de configuración de almacenamiento del sitio web.{" "}
                  También puede controlar los LSO Flash yendo al Panel de configuración de
                  almacenamiento global y siguiendo las instrucciones (que pueden incluir
                  instrucciones que explican, por ejemplo, cómo eliminar Flash LSO existentes
                  (denominado "información" en el sitio de Macromedia), cómo evitar que Flash
                  LSO se coloquen en su computadora sin que se lo pidan y (para Flash Player 8
                  y versiones posteriores) cómo bloquear Flash LSO que no están siendo
                  entregados por el operador de la página en la que se encuentra en ese
                  momento). Tenga en cuenta que configurar Flash Player para restringir o
                  limitar la aceptación de Flash LSO puede reducir o impedir la funcionalidad
                  de algunas aplicaciones Flash, incluidas las que se utilizan en relación con
                  los Servicios. Dirección IP: su dirección IP es un número que su proveedor
                  de servicios de Internet asigna automáticamente a la computadora que está
                  utilizando. Una dirección IP puede identificarse y registrarse
                  automáticamente en los archivos de registro de nuestro servidor cada vez que
                  un usuario accede a los Servicios, junto con la hora de la visita y la(s)
                  página(s) visitada(s). La recopilación de direcciones IP es una práctica
                  estándar y muchos sitios web, aplicaciones y otros servicios la realizan
                  automáticamente. Usamos las direcciones IP para fines tales como el cálculo
                  de los niveles de uso, el diagnóstico de problemas del servidor y la
                  administración de los Servicios. También podemos obtener su ubicación
                  aproximada a partir de su dirección IP.
                </p>
                <p>
                  Ubicación física: podemos recopilar la ubicación física de su dispositivo,
                  por ejemplo, mediante el uso de señales satelitales, de torre de telefonía
                  celular o WiFi. Podemos usar la ubicación física de su dispositivo para
                  brindarle servicios y contenido personalizados basados ​​en la ubicación.{" "}
                  También podemos compartir la ubicación física de su dispositivo con nuestros
                  socios de marketing, para que puedan brindarle publicidad orientada
                  geográficamente. Es posible que se le permita permitir o denegar dichos usos
                  y/o compartir la ubicación de su dispositivo, por ejemplo, a través de la
                  configuración de su dispositivo. Si lo hace, es posible que nosotros y/o
                  nuestros socios de marketing no podamos brindarle los servicios y contenidos
                  personalizados correspondientes.
                </p>
                <p>
                  De usted: Se recopila información como su medio de comunicación preferido y
                  solicitudes especiales de viaje (por ejemplo, en relación con una
                  discapacidad o restricción dietética) cuando usted la proporciona
                  voluntariamente.
                </p>
                <p>
                  Al agregar información: la Información personal agregada no lo identifica
                  personalmente a usted ni a ningún otro usuario de los Servicios (por
                  ejemplo, podemos agregar Información personal para calcular el porcentaje de
                  nuestros usuarios que tienen un código de área de teléfono particular).
                </p>
                <h2 className="mb-1 mt-5 infoheadbx">
                  CÓMO PODEMOS UTILIZAR Y DIVULGAR OTRA INFORMACIÓN
                </h2>
                <p>
                  Podemos usar y divulgar Otra información para cualquier propósito (excepto
                  cuando se nos exija hacer lo contrario según la ley aplicable), si no
                  califica como Información personal según la ley aplicable. En algunos casos,
                  podemos combinar Otra información con Información personal (como combinar su
                  nombre con su ubicación). Si lo hacemos, trataremos la información combinada
                  como Información personal siempre que se combine.
                </p>
                <h2 className="mb-1 mt-5 infoheadbx">SERVICIOS DE TERCEROS</h2>
                <p>
                  Esta Política de privacidad no aborda, y no somos responsables de, la
                  privacidad, la información u otras prácticas de terceros, incluido cualquier
                  tercero proveedor o intermediario, cualquier tercero que opere cualquier
                  sitio o servicio al que se vinculan los Servicios o cualquier tercero que
                  incluye un widget en los Servicios (por ejemplo, el botón Me gusta de
                  Facebook o los botones de compartir). La inclusión de un enlace en los
                  Servicios no implica la aprobación del sitio o servicio vinculado por
                  nosotros o por nuestros afiliados.
                </p>
                <p>
                  Además, no somos responsables de la recopilación, el uso, la divulgación o
                  las políticas o prácticas de seguridad de otras organizaciones, como
                  Facebook, Apple, Google, Microsoft o cualquier otro desarrollador de
                  aplicaciones, proveedor de aplicaciones, proveedor de plataformas de redes
                  sociales, operador proveedor de sistemas, proveedor de servicios
                  inalámbricos o fabricante de dispositivos, incluso con respecto a cualquier
                  información personal que divulgue a otras organizaciones a través de las
                  aplicaciones o en relación con ellas.
                </p>
                <h2 className="mb-1 mt-5 infoheadbx">ANUNCIANTES DE TERCEROS</h2>
                <p>
                  Podemos utilizar empresas de publicidad de terceros para publicar anuncios
                  sobre bienes y servicios que pueden ser de su interés cuando accede y
                  utiliza los Servicios y otros sitios web, aplicaciones o servicios en línea,
                  en función de la información relacionada con su acceso y uso de la Servicios
                  y otros sitios web, aplicaciones o servicios en línea en cualquiera de sus
                  dispositivos. Para hacerlo, estas empresas pueden colocar o reconocer una
                  cookie única en su navegador (incluso mediante el uso de etiquetas de
                  píxeles). También pueden usar estas tecnologías y otra información que ellos
                  y nosotros recopilamos sobre su uso en línea para reconocerlo en todos los
                  dispositivos que usa, como un teléfono móvil y una computadora portátil. Si
                  desea más información sobre esta práctica, y para conocer sus opciones en
                  relación con ella en navegadores de escritorio y móviles en el dispositivo
                  particular en el que accede a esta Política de privacidad, visite
                  http://www.networkadvertising.org/managing/opt_out.aspand http://www
                  .aboutads.info/choices. Puede descargar la aplicación AppChoices en
                  www.aboutads.info/appchoices para excluirse de las aplicaciones móviles.
                </p>
                <h2 className="mb-1 mt-5 infoheadbx">SEGURIDAD</h2>
                <p>
                  Procuramos utilizar medidas organizativas, técnicas y administrativas
                  razonables para proteger la información personal dentro de nuestra
                  organización. Desafortunadamente, no se puede garantizar que ningún sistema
                  de transmisión o almacenamiento de datos sea 100% seguro. Si tiene motivos
                  para creer que su interacción con nosotros ya no es segura (por ejemplo, si
                  cree que la seguridad de su cuenta se ha visto comprometida), notifíquenos
                  de inmediato de acuerdo con la sección "Contáctenos" a continuación.
                </p>
                <h2 className="mb-1 mt-5 infoheadbx">OPCIONES Y ACCESO</h2>
                <p>
                  Sus opciones con respecto a nuestro uso de su Información personal Puede
                  optar por no recibir nuestros correos electrónicos relacionados con
                  marketing en el futuro siguiendo las instrucciones contenidas en cada uno de
                  dichos correos electrónicos o comunicándose con nosotros de acuerdo con la
                  sección "Contáctenos" a continuación. . Puede optar por no recibir nuestras
                  notificaciones automáticas a través de la configuración de su dispositivo.
                </p>
                <p>
                  Intentaremos cumplir con su solicitud tan pronto como sea razonablemente
                  posible. Tenga en cuenta que si opta por no recibir nuestros correos
                  electrónicos relacionados con marketing, aún podemos enviarle mensajes
                  administrativos importantes, de los cuales no puede optar por no participar.
                </p>
                <h2 className="mb-1 mt-5 infoheadbx">
                  CÓMO PUEDE ACCEDER, MODIFICAR O SUPRIMIR SU INFORMACIÓN PERSONAL
                </h2>
                <p>
                  Si desea revisar, corregir, actualizar, suprimir o eliminar la información
                  personal que nos proporcionó anteriormente, puede comunicarse con nosotros
                  de acuerdo con la sección "Contáctenos" a continuación. En su solicitud,
                  aclare qué información personal le gustaría cambiar, si desea que su
                  información personal se elimine de nuestra base de datos o, de lo contrario,
                  háganos saber qué limitaciones le gustaría poner en nuestro uso de su
                  información personal. . Para su protección, solo podemos implementar
                  solicitudes con respecto a la Información personal asociada con la dirección
                  de correo electrónico particular que utiliza para enviarnos su solicitud, y
                  es posible que necesitemos verificar su identidad antes de implementar su
                  solicitud. Intentaremos cumplir con su solicitud tan pronto como sea
                  razonablemente posible.
                </p>
                <p>
                  Tenga en cuenta que es posible que debamos conservar cierta información para
                  fines de mantenimiento de registros y/o para completar cualquier transacción
                  que haya iniciado antes de solicitar un cambio o eliminación. También puede
                  haber información residual que permanecerá en nuestras bases de datos y
                  otros registros, que no se eliminará.
                </p>
                <h2 className="mb-1 mt-5 infoheadbx">
                  SUS DERECHOS DE PRIVACIDAD EN CALIFORNIA Y CANADÁ
                </h2>
                <p>
                  Si es residente de California o Canadá, puede solicitar información sobre la
                  divulgación de su información personal a nuestros afiliados y terceros para
                  fines de marketing directo de los destinatarios. Para realizar dicha
                  solicitud, comuníquese con nosotros de acuerdo con la sección "Contáctenos"
                  a continuación.
                </p>
                <h2 className="mb-1 mt-5 infoheadbx">PERIODO DE RETENCIÓN</h2>
                <p>
                  Retendremos su información personal durante el período necesario para
                  cumplir con los propósitos descritos en esta Política de privacidad, a menos
                  que la ley exija o permita un período de retención más largo.
                </p>
                <h2 className="mb-1 mt-5 infoheadbx">USO DE LOS SERVICIOS POR MENORES</h2>
                <p>
                  Los Servicios no están dirigidos a personas menores de dieciocho (18) años,
                  y solicitamos que no proporcionen Información personal a través de los
                  Servicios.
                </p>
                <h2 className="mb-1 mt-5 infoheadbx">TRANSFERENCIA TRANSFRONTERIZA</h2>
                <p>
                  Su Información personal puede transferirse, almacenarse, accederse y
                  procesarse en cualquier país donde tengamos instalaciones o en el que
                  contratemos proveedores de servicios, y al utilizar los Servicios, usted
                  acepta la transferencia de información a países fuera de su país de
                  residencia, incluidos los Estados Unidos, que pueden tener normas de
                  protección de datos diferentes a las de su país.
                </p>
                <h2 className="mb-1 mt-5 infoheadbx">INFORMACIÓN SENSIBLE</h2>
                <p>
                  Le pedimos que no nos envíe ni divulgue ninguna Información personal
                  confidencial (p. ej., números de Seguro Social, información relacionada con
                  el origen racial o étnico, opiniones políticas, religión u otras creencias,
                  salud, características biométricas o genéticas, antecedentes penales, o
                  afiliación sindical) en o a través de los Servicios o de otra manera a
                  nosotros.
                </p>
                <h2 className="mb-1 mt-5 infoheadbx">
                  ACTUALIZACIONES A ESTA POLÍTICA DE PRIVACIDAD
                </h2>
                <p>
                  Podemos cambiar esta Política de privacidad. La leyenda "Última
                  actualización" en la parte superior de esta página indica cuándo se revisó
                  por última vez esta Política de privacidad. Cualquier cambio entrará en
                  vigencia cuando publiquemos la Política de privacidad revisada en los
                  Servicios. Su uso de los Servicios después de estos cambios significa que
                  acepta la Política de privacidad revisada.
                </p>
                <h2 className="mb-1 mt-5 infoheadbx">CONTACTANDONOS</h2>
                <p>
                  Si tiene alguna pregunta sobre esta Política de privacidad, contáctenos por
                  correo electrónico a info@Airlingster.com. Debido a que las comunicaciones por
                  correo electrónico no siempre son seguras, no incluya la tarjeta de crédito
                  u otra información confidencial en los correos electrónicos que nos envíe.
                </p>
                <p>
                  Al usar este Sitio, usted reconoce que las tarifas ofrecidas por Airlingster y
                  las compañías afiliadas son el resultado de negociaciones entre Airlingster y
                  los Proveedores de viajes e incluyen ciertas tarifas retenidas por ellos por
                  sus servicios, impuestos y otros cargos. Al reservar con cualquier Proveedor
                  de viajes a través de este Sitio, usted autoriza a Airlingster y a las
                  compañías afiliadas a realizar reservas o celebrar un contrato en su nombre
                  con Proveedores de viajes por el precio total que se muestra, incluidas
                  dichas tarifas y cualquier impuesto o cargo aplicable relacionado con el
                  Proveedor de viajes o Los servicios de Cheapoflightticket.
                </p>
                <p>
                  Airlingster no será responsable de los errores o inexactitudes en el Sitio, o
                  la falla de los Proveedores de viajes de los que obtiene servicios a través
                  de este Sitio, incluidos, entre otros, aerolíneas, operadores turísticos,
                  proveedores y consolidadores. Airlingster, al proporcionar servicios de gestión
                  de viajes, no respalda, garantiza ni asegura los productos o servicios
                  proporcionados por un proveedor externo, la posición financiera de dichos
                  proveedores o el reembolso a usted de cualquier pérdida como resultado de la
                  condición financiera de dichos proveedores. proveedor. En el caso de que un
                  proveedor incumpla antes de brindarle el servicio cuando se haya realizado
                  un pago, su único recurso para obtener un reembolso será el proveedor
                  incumplidor o cualquier otro tercero responsable, a menos que dicha pérdida
                  haya sido causada únicamente por Airlingster.
                </p>
                <p>
                  Salvo que se indique expresamente en este documento, Airlingster no asume
                  ninguna responsabilidad por las acciones relacionadas con los servicios de
                  viaje fuera del control de Airlingster o sus empleados. Airlingster no es
                  responsable de ningún acto, error, omisión, lesión, pérdida, accidente,
                  daño, demora, incumplimiento, irregularidad o cualquier consecuencia de los
                  mismos, que pueda ser ocasionado por negligencia, incumplimiento o cualquier
                  otro acto o inacción de cualquier Proveedor de viajes. Airlingster no será
                  responsable de ninguna fluctuación en el precio o cambio en el horario, el
                  equipo o el alojamiento de cualquier servicio de viaje, que ocurra después
                  de la reserva y el pago de dicho servicio. Airlingster no será responsable de
                  ninguna cancelación, exceso de reservas, retrasos, cambios de ruta, huelgas,
                  incidentes meteorológicos o gubernamentales que afecten su reserva de viaje
                  realizada con nosotros.
                </p>
                <p>
                  Airlingster actúa como un servicio que brinda un servicio de valor agregado a
                  los agentes de viajes minoristas y a los consumidores. Airlingster no tiene
                  control ni asume ninguna responsabilidad por las acciones de los proveedores
                  de los que obtiene productos o servicios de viaje.
                </p>
                <p>
                  Airlingster no será responsable de la conversión de moneda o las tasas finales
                  cuando se pague después de que se haya realizado una reserva de viaje con
                  nosotros para productos y servicios de viajes internacionales. Usted acepta
                  y reconoce que las tasas de cambio varían y que cualquier precio cotizado en
                  el Sitio en moneda local es una guía y no es vinculante para nosotros ni
                  para el Proveedor de viajes.
                </p>
                <p>
                  Una vez que se realizan y pagan ciertas reservas de viaje, es posible que no
                  sean reembolsables en absoluto o que se aplique una penalización por la
                  cancelación o la solicitud de reembolso por parte del proveedor de productos
                  y servicios de viaje. Una vez emitidos los billetes puede haber penalización
                  por cancelaciones y devoluciones. No tenemos control sobre los precios
                  impresos en los boletos, aunque algunos boletos pueden tener impreso BT
                  (tarifa a granel), algunos pueden tener un valor específico, que puede ser
                  diferente (más bajo o más alto) que la tarifa cobrada.
                </p>
                <p>
                  Los descuentos ofrecidos pueden variar según una serie de factores,
                  incluidas las aerolíneas utilizadas, la clase de servicio, el destino, la
                  época del año (temporada baja, media o alta), el aviso previo proporcionado,
                  los requisitos mínimos de estadía cumplidos y la cantidad de vuelos.
                </p>
                <p>
                  Airlingster no garantiza, respalda, valida ni promociona los productos y
                  servicios de otros anunciantes que se anuncian en nuestro Sitio.
                </p>
                <p>
                  Al reservar con nosotros, se puede formar un contrato entre usted y un
                  Proveedor de viajes, y se pueden aplicar Términos y condiciones adicionales
                  a su reserva y compra de bienes y servicios relacionados con viajes. Lea
                  detenidamente los Términos y condiciones adicionales proporcionados por
                  dicho Proveedor de viajes. Por la presente, acepta estar sujeto a todos los
                  Términos y condiciones de compra impuestos por cualquier Proveedor de viajes
                  con el que elija contratar, incluidos, entre otros, el pago de todos los
                  montos a su vencimiento y el cumplimiento de las reglas y restricciones del
                  Proveedor de viajes con respecto a la disponibilidad. y uso de tarifas,
                  productos o servicios. Algunos proveedores de viajes pueden solicitarle que
                  presente una tarjeta de crédito o un depósito en efectivo al momento del
                  check-in para cubrir los gastos adicionales incurridos durante el uso de los
                  productos o servicios reservados. Dicho depósito no está relacionado con
                  ningún pago recibido por Airlingster por la reserva de su boleto de avión.{" "}
                  Usted comprende que cualquier violación de las reglas y restricciones de un
                  Proveedor de Viajes puede resultar en la cancelación de su(s) reserva(s), en
                  la denegación del acceso al Elemento de Servicio o servicios respectivos, en
                  la pérdida de cualquier monto pagado por dicha(s) reserva(s), y /o en
                  nuestro cargo de su cuenta por cualquier costo en el que incurramos como
                  resultado de dicha violación.
                </p>
                <h3 className="mb-1 mt-5 infoheadbx">DISPUTAS</h3>
                <p>
                  Airlingster está comprometido con la satisfacción del cliente, por lo que si
                  tiene un problema o disputa, intentaremos resolver sus inquietudes Usted
                  acepta darnos la oportunidad de resolver cualquier disputa o reclamo
                  relacionado de alguna manera con el sitio web, cualquier trato con nuestro
                  servicio al cliente agentes, cualquier servicio o producto proporcionado,
                  cualquier representación hecha por nosotros o nuestra Política de privacidad
                  ("Reclamaciones") poniéndose en contacto con Atención al cliente.
                </p>
                <h3 className="mb-1 mt-5 infoheadbx">ACTIVIDADES PROHIBIDAS</h3>
                <p>
                  El contenido y la información de Airlingster (incluidos, entre otros, el precio
                  y la disponibilidad de los servicios de viaje), así como la infraestructura
                  utilizada para proporcionar dicho contenido e información, son propiedad
                  nuestra o de nuestros proveedores y proveedores. Si bien puede hacer copias
                  limitadas de su itinerario de viaje (y documentos relacionados) para viajes
                  o reservas de servicios realizadas a través de Airlingster, acepta no
                  modificar, copiar, distribuir, transmitir, mostrar, realizar, reproducir,
                  publicar, licenciar, crear obras derivadas. de, transferir, vender o
                  revender cualquier información, software, productos o servicios obtenidos de
                  o a través de Airlingster. Además, acepta no:
                </p>
                <ul>
                  <li>Usar Airlingster o su contenido para cualquier propósito comercial;</li>
                  <li>
                    Hacer cualquier reserva especulativa, falsa o fraudulenta o cualquier
                    reserva anticipada a la demanda;
                  </li>
                  <li>
                    3. Acceder, monitorear o copiar cualquier contenido o información de
                    Airlingster utilizando cualquier robot, araña, raspador u otro medio
                    automatizado o cualquier proceso manual para cualquier propósito sin
                    nuestro permiso expreso por escrito;
                  </li>
                  <li>
                    4. Violar las restricciones en los encabezados de exclusión de robots en
                    Airlingster o eludir o eludir otras medidas empleadas para evitar o limitar
                    el acceso a Airlingster;
                  </li>
                  <li>
                    Tomar cualquier medida que imponga, o pueda imponer, a nuestra discreción,
                    una carga irrazonable o desproporcionadamente grande en nuestra
                    infraestructura;
                  </li>
                  <li>
                    Establecer un enlace profundo a cualquier parte de Airlingster (incluida,
                    entre otras, la ruta de compra de cualquier servicio de viaje) para
                    cualquier propósito sin nuestro permiso expreso por escrito.
                  </li>
                  <li>
                    "Frame", "mirror" o incorpore cualquier parte de Airlingster en cualquier
                    otro sitio web sin nuestra autorización previa por escrito
                  </li>
                </ul>
                <p>
                  Si su reserva o cuenta muestra signos de fraude, abuso o actividad
                  sospechosa, podemos cancelar cualquier reserva de viaje o servicio asociada
                  con su nombre, dirección de correo electrónico o cuenta. Además, podemos
                  verificar (es decir, preautorizar) su tarjeta de crédito. Si ha realizado
                  alguna actividad fraudulenta, Airlingster se reserva el derecho de emprender
                  las acciones legales necesarias y usted puede ser responsable de las
                  pérdidas monetarias de Airlingster, incluidos los costos de litigio y los daños
                  y perjuicios.
                </p>
              </Col>

            </Row>
          </Container>
            </div>

            <Footer />
        </>
    )
}
