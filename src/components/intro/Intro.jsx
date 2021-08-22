import "./intro.scss"
import me from "../../assets/me.png"
import down from "../../assets/down.png"
import {init} from 'ityped'
import {useEffect, useRef} from "react";

export default function Intro() {

    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            strings: ["Computer engineering student", "Software Developer", "Novel writer", "Videogames and films passionate", "Experienced swimmer"]
        });
    }, []);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src={me} alt="me"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, my name is</h2>
                    <h1>Víctor Morais</h1>
                    <h3>and I'm a <span ref={textRef}></span></h3></div>
                <a href="#portfolio">
                    <img src={down} alt=""/>
                </a>
            </div>
        </div>
    )
}