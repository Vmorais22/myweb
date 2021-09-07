import intellij from "../../assets/intellij-idea_logo_300x300.png"
import postman from "../../assets/postman.png"
import vs from "../../assets/visual studio.png"
import adobexd from "../../assets/adobe.png"
import react from "../../assets/react.png"
import cplusplus from "../../assets/c++.png"
import js from "../../assets/JS.png"
import kotlin from "../../assets/kotlin.png"
import unity from "../../assets/unity.png"
import yayOS from "../../assets/exampleYayos1.PNG"
import pockles from "../../assets/Sin título.png"
import mb from "../../assets/mb.png"
import mario from "../../assets/mario.PNG"
import matlab from "../../assets/Matlab-1.png"
import señales from "../../assets/signsdetec.png"
import hn from "../../assets/Hn_screenshot.png"

export const projectData = [
    {
        id: 1,
        title: "yayOS: Plataforma web interactiva de inclusión de personas de la tercera edad en las nuevas tecnologías",
        summary: "El objetivo de este TFG es crear una herramienta software que permita aprender a usar los aspectos más básicos de un ordenador a gente con ninguna experiencia en el uso de las nuevas tecnologías, principalmente personas mayores. La transición digital ha abandonado a este sector de la población, y los efectos se han magnificado por culpa de la pandemia y el confinamiento.",
        icons: {
            ntools: 3,
            tools: [intellij,
                postman,
                adobexd],

            nlanguages: 2,
            languagues: [react, js],
        },
        text: "Hasta hace relativamente poco, cosa de un año, considerábamos la transformación de servicios analógicos a digitales como una mejora. Como un capricho, podríamos incluso decir. Bastó una pandemia que restringiese nuestra movilidad y que estableciera el distanciamiento social como principal mecanismo de autodefensa para que dicha opción se convirtiera en una necesidad. Y es lógico, en realidad. Es más seguro hacer cualquier trámite bancario desde el móvil que desde una oficina. Es más seguro comprar por Internet que no en un abarrotado centro comercial. Y, por descontado, es más seguro restringir cualquier trámite a través de una pantalla que no cara a cara con un funcionario. El problema surge cuando esta medida, como muchas otras, no viene acompañada de su correspondiente séquito de contramedidas y planes de contingencia. ¿La consecuencia? El incremento de la brecha digital entre los denominados nativos digitales, aquellos que hemos nacido, crecido y vivido en un mundo rodeado de constantes avances tecnológicos, y de los no tan afortunados inmigrantes digitales, aquellos que han tenido que adaptarse a este cambio y, en definitiva, a un nuevo mundo en el que vivir. El problema es un puzle de muchas piezas y todas deben de tener el mismo peso e importancia si queremos hacer algo por remediarlo y esto es muy importante tenerlo en cuenta. Porque si lo hacemos, entendemos el problema y si entendemos el problema, podemos solucionarlo. Es por ello que el sistema a desarrollar enseñará conceptos sencillos e indispensables hoy en día para defenderse en la era tecnológica. Se estudiará a los potenciales usuarios para saber sus expectativas, se diseñará una plataforma web a partir de sus opiniones, se presentará el contenido de dos formas distintas, aprendizaje y desafío, de manera que el usuario podrá aprender algo por primera vez o retarse día a día para que el estudio sea continuado, y se intentará dar el empuje necesario para empezar a moverse en dirección a una inclusión digital.",
        photo: yayOS,
        opt: { //segundo texto o fotos-slider
        },
        git: "https://github.com/Vmorais22/yayOS",
        //descarga
    }, {
        id: 2,
        title: "Pockles: Red de mensajería geosocial",
        summary: "Pockles es una aplicación Android que permite a los usuarios publicar mensajes allá donde quieran que vayan de manera que solo los usuarios que estén cerca podrán verlos. ¡Empieza a llenar el mundo de Pocks ya mismo! En este proyecto grupal participaron: Víctor Blanco, Joan Bosch, Pau Dastis, Daniel Palomo, Joan Salvador, Sergio Vázquez y yo.",
        icons: {
            ntools: 4,
            tools: [intellij,
                kotlin,
                postman,
                adobexd],
            nlanguages: 1,
            languagues: [js],
        },
        text: "Pockles es una aplicación de mensajería geosocial nunca antes vista en el mercado que facilita la cooperación entre los usuarios permitiendo dejar mensajes en lugares en los que se encuentren de diferentes índole.\n" +
            "\n" +
            "Cuando descubras un mensaje navegando por el mundo, además de leerlo, podrás indicar si es útil o hablar con el autor mediante la función de chat, haciendo más fácil la cooperación entre usuarios.\n" +
            "\n" +
            "Nuestra app también beneficiará a los comercios locales y eventos que se organicen ya que podrán publicitarse mediante el uso de los ‘pocks’, que son los mensajes.\n" +
            "\n" +
            "En definitiva, una aplicación pensada para cooperar y divertirse con la comunidad local.\n" +
            "\n",
        photo: pockles,
        opt: { //segundo texto o fotos-slider

        },
        git: "https://bitbucket.org/sergiovmdo9797/pockles-app/src/develop/",
    },
    {
        id: 3,
        title: "Bouncig Mario",
        summary: "Bouncing Mario es una adaptación inspirada en el mundo de Mario Bros del conocido juego QOMP (https://store.steampowered.com/app/1066900/qomp/) que, a su vez, es una adaptación del mítico juego de la primera generación de consolas PONG (https://es.wikipedia.org/wiki/Pong). Este proyecto fue realizado con Unity y, a nivel personal, el primer videojuego plenamente funcional que he creado. Colaboró en el desarrollo de este proyecto Sergio Arcos.",
        icons: {
            ntools: 3,
            tools: [unity,
                vs,
                mb],
            nlanguages: 1,
            languagues: [cplusplus],
        },
        text: "El juego ofrece una experiencia en tres dimensiones de su musa, QOMP. Imita las mecánicas del juego pero cambiando por completo su estética y ambientación. EL juego se divide en una serie de niveles y el jugador tendrá que valerse de su destreza para superarlos todos y enfrentarse al nivel final. La mecánica del juego es muy simple pues tan solo existe un movimiento posible que es invertir la velocidad de la pelota apretando SPACEBAR. ¡Buena suerte!",
        photo: mario,
        opt: { //segundo texto o fotos-slider

        },
        git: "https://github.com/SergioArcos1999/3DGame-VJ",
    },
    {
        id: 4,
        title: "Algoritmo de detección de señales de tráfico",
        summary: "Un detector de señales de tráfico a base del estudio de la composición cromática, su circularidad y la orientación de los píxeles. Proyecto realizado conjuntamente con Pau Dastis.",
        icons: {
            ntools: 1,
            tools: [matlab],
            nlanguages: 1,
            languagues: [matlab],
        },
        text: "El objetivo de esta práctica es identificar correctamente una señal de tráfico presente en cualquier imagen de entrada de una base de datos en concreto. Aunque solo hay 43 tipos de señales a reconocer, la base de datos contiene un subconjunto de casi 40.000 imágenes.\n" +
            "\n" +
            "Las imágenes utilizadas para esta práctica han sido extraídas de una grabación realizada en un vehículo en marcha y las fotografías han sido tomadas desde distintos ángulos, distancias, fondos e incluso con variaciones en cuanto a la iluminación,el color y la escala se refiere.\n" +
            "\n" +
            "Para realizar este proyecto, extraemos las características que, a nuestro juicio, nos parezcan las más discriminantes con el fin de, mediante un clasificador, poder razonar y decidir a qué señal pertenecen los datos que observamos en dichos descriptores. Usaremos un conjunto de imágenes para entrenar al sistema y otro para testearlo (las imágenes que usaremos para hacer el test no habrán sido procesadas antes por el sistema).\n" +
            "\n" +
            "Esta práctica se desarrollará con el sistema de cómputo genérico MATLAB.\n",
        photo: señales,
        opt: { //segundo texto o fotos-slider

        },
        git: "https://bitbucket.org/paudastis/practica/src/master/",
    },
    {
        id: 5,
        title: "Recreación del foro web Hacker News",
        summary: "Hacker News es un sitio web de noticias sociales que se centra en la informática y el espíritu empresarial. El objetivo de este proyecto fue simplemente el de recrear toda sus funcionalidades y diseño. Práctica desarrollado junto con Víctor Blanco, Marc Bofill y Segio Vázquez.",
        icons: {
            ntools: 2,
            tools: [intellij, postman],
            nlanguages: 2,
            languagues: [react, js],
        },
        text: "Una práctica universitaria que permitió trabajar por primera vez con contenido dinámico como la publicación y reacción a posts y comentarios, la creación de sistemas de gestión de bases de datos y de identificación y la edición de contenido subidos a servidores.",
        photo: hn,
        opt: { //segundo texto o fotos-slider

        },
        git: "https://bitbucket.org/sergiovmdo9797/hackernews-web-g12e/src/master/",
    },
];