import "./project.scss"
import a from "../../../assets/intellij-idea_logo_300x300.png"

export default function Project({ id, title, icons, content, photos}){
    return(
        <div className="project">
            <div className="title">
                <h1>Título de proyecto</h1>
            </div>
            <div className="summary">
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra, velit non pulvinar consequat, quam odio tincidunt nunc, at lacinia lectus dui id massa. Vestibulum in ornare velit, sed faucibus elit. Curabitur interdum magna ac convallis facilisis. Quisque porta posuere placerat. Fusce quis elit justo. Etiam rutrum turpis in faucibus tincidunt. Nam nec orci condimentum, placerat neque et, sollicitudin est. Nullam nec vehicula nibh, id pellentesquepellentesquepellentesquepellentesque metus."</p>
            </div>

            <div className="iconsContainer">
                <div className="tools">
                    <h2>Tools:</h2>
                    <div className="icon">
                        <img src={a} title="Intellij" alt="Intellij"/>
                        <img src={a} title="Intellij" alt="Intellij"/>
                        <img src={a} title="Intellij" alt="Intellij"/>
                    </div>
                </div>
                <div className="languages">
                    <h2>Languages:</h2>
                    <div className="icon">
                        <img src={a} title="Intellij" alt="Intellij"/>
                        <img src={a} title="Intellij" alt="Intellij"/>
                        <img src={a} title="Intellij" alt="Intellij"/>
                    </div>
                </div>
            </div>

            <div className="content">
                <div className="text">
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra, velit non pulvinar consequat, quam odio tincidunt nunc, at lacinia lectus dui id massa. Vestibulum in ornare velit, sed faucibus elit. Curabitur interdum magna ac convallis facilisis. Quisque porta posuere placerat. Fusce quis elit justo. Etiam rutrum turpis in faucibus tincidunt. Nam nec orci condimentum, placerat neque et, sollicitudin est. Nullam nec vehicula nibh, id pellentesquepellentesquepellentesquepellentesque metus."</p>
                </div>
                <div className="photo">
                    <img src={a} title="Intellij" alt="Intellij"/>
                </div>
            </div>
                image slider
            <div className="buttonContainer">
                <a href="/"><span>Check on Git</span></a>
                <a href="/"><span>Download</span></a>
            </div>
        </div>
    );
}