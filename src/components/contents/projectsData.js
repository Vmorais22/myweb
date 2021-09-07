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
        summary: "Pockles es una aplicación Android que permite a los usuarios publicar mensajes allá donde quieran que vayan de manera que solo los usuarios que estén cerca podrán verlos. ¡Empieza a llenar el mundo de Pocks ya mismo!",
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
];