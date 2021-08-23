import "./works.scss"
import mobile from "../../assets/mobile.png"
import cv from "../../assets/cv.png"
import arrow from "../../assets/arrow.png"
import {sliderData} from "../../sliderData.js"
import {useState} from "react";

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < sliderData.length - 1 ? currentSlide + 1 : 0);
    };
    return (
        <div className="works" id="works">
            <div
                className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {sliderData.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img
                                    src={cv}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
                    <img src={arrow} className="arrow left" alt="" onClick={() => handleClick("left")}/>
                    <img src={arrow} className="arrow right" alt="" onClick={() => handleClick()}/>
                    </div>
                    )
                }