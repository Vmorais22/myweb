import "./topbar.scss"
import logo from "../../assets/logo.jpg"
import {LinkedIn, MailOutline} from "@material-ui/icons"


export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro">
                        <img className="logo" src={logo} alt="Logo"/>
                    </a>
                    <div className="itemContainer">
                        <LinkedIn className="icon"/>
                        <span>Visit my Linkedin!</span>
                    </div>
                    <div className="itemContainer">
                        <MailOutline className="icon"/>
                        <span>victormoraisllahi@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                   <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                       <span className="line1"></span>
                       <span className="line1"></span>
                       <span className="line1"></span>
                   </div>
                </div>
            </div>

        </div>
    )
}