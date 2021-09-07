import "./project.scss"
import {projectData} from "../projectsData";
import {withTranslation} from "react-i18next";
import {Component} from "react";

class Project extends Component {

    render() {
        const id = this.props.id;
        return (

            <div className="project">
                <div className="title">
                    <h1>{projectData.find(x => x.id === parseInt(id, 10)).title}</h1>
                </div>

                <div className="summary">
                    <p>{projectData.find(x => x.id === parseInt(id, 10)).summary}</p>
                </div>

                <div className="iconsContainer">
                    <div className="tools">
                        <h2>Tools:</h2>
                        <div className="icon">
                            {(projectData.find(x => x.id === parseInt(id, 10)).icons.tools).map((p) => (
                                <img src={p} title="Intellij"
                                     alt="Intellij"/>))}
                        </div>
                    </div>
                    <div className="languages">
                        <h2>Languages & Frameworks:</h2>
                        <div className="icon">
                            <div className="icon">
                                {(projectData.find(x => x.id === parseInt(id, 10)).icons.languagues).map((p) => (
                                    <img src={p} title="Intellij"
                                         alt="Intellij"/>))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="text">
                        <p>{projectData.find(x => x.id === parseInt(id, 10)).text}</p>
                    </div>
                    <div className="photo">
                        <img src={projectData.find(x => x.id === parseInt(id, 10)).photo} title="Intellij"
                             alt="Intellij"/>
                    </div>
                </div>
                image slider
                <div className="buttonContainer">
                    <a href={projectData.find(x => x.id === parseInt(id, 10)).git}><span>Check on Git</span></a>
                    <a href="/"><span>Download</span></a>
                </div>
            </div>
        );
    }
}

export default withTranslation('global')(Project);