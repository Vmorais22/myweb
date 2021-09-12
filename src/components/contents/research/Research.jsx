import "./research.scss"
import {researchData} from "./researchData";
import {Component} from "react";
import {withTranslation} from "react-i18next";
import CVES from "../../../assets/documents/CV Spanish.pdf";

class Research extends Component {
    render() {
        const t = this.props.t;
        const id = this.props.id;
        return (

            <div className="research">
                <div className="title">
                    <h1>{researchData.find(x => x.id === parseInt(id, 10)).title}</h1>
                </div>
                <div className="researchContainer">
                    <div className="imageContainer" style={{
                        backgroundImage: `url(${researchData.find(x => x.id === parseInt(id, 10)).photo})`
                    }}>
                        <a href={CVES} target="_blank" rel="noreferrer">{t("download")}</a>
                    </div>
                    <div className="textContainer">
                        <h2>{researchData.find(x => x.id === parseInt(id, 10)).date}</h2>
                        <hr/>
                        <br/>
                        <br/>
                        <p>{researchData.find(x => x.id === parseInt(id, 10)).resume}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation('global')(Research);