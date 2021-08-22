import "./portfolio.scss"
import cv from "../../assets/cv.png"
import PortfolioList from "../portfolioList/PortfolioList";
import {useEffect, useState} from "react";
import {
    personalPortfolio, projectsPortfolio, researchPortfolio, otherPortfolio
} from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("personal");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "personal",
            title: "Personal",
        },
        {
            id: "projects",
            title: "Projects involved",
        },
        {
            id: "research",
            title: "Research works",
        },
        {
            id: "other",
            title: "Other",
        },
    ];

    useEffect(() => {
        // eslint-disable-next-line default-case
        switch (selected) {
            case "personal":
                setData(personalPortfolio);
                break;
            case "projects":
                setData(projectsPortfolio);
                break;
            case "research":
                setData(researchPortfolio);
                break;
            case "other":
                setData(otherPortfolio);
                break;
        }
    }, [selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected}
                                   id={item.id}/>
                ))}
            </ul>
            <div className="container">
                {data.map((d)=>(
                    <div className="item">
                        <img src={d.img} alt="cv"/>
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>

        </div>
    )
}