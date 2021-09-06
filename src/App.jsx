import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Debath from "./components/contents/debath/Debath";
import "./app.scss"
import {useState} from "react";
import Menu from "./components/menu/Menu";
import Project from "./components/contents/project/Project";
import {Switch, Route, BrowserRouter} from "react-router-dom";


const Home = () => {
    return (<div className="sections">
        <Intro/>
        <Works/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Project/>
    </div>)
}

function App() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <section>
            <div className="app">
                <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" render={() => <Home/>}/>
                        <Route exact path="/debath" render={() => <Debath/>}/>
                    </Switch>
                </BrowserRouter>


            </div>
        </section>
    );
}

export default App;
