import './App.css'
import Navbar from "./Landing/Navbar/Navbar.jsx";
import Home from "./Landing/Home/Home.jsx";
import Service from "./Landing/Service/Service.jsx";
import OurWork from "./Landing/Service/OurWork.jsx";
import HumanCapital from "./Landing/Community/HumanCapital.jsx";
import NiceFewWords from "./Landing/Motivation/NiceFewWords.jsx";
import Footer from "./Landing/Footer/Footer.jsx";
import AboutUs2 from "./Landing/About/AboutUs2.jsx";

function App() {
    return (
        <>
            <Navbar />
            <div id="home">
                <Home />
            </div>
            <div id="business">
                <Service />
            </div>
            <div id="our-work">
                <OurWork />
            </div>
            <div id="about-us">
                <AboutUs2 />
            </div>
            <div id="community">
                <HumanCapital />
            </div>
            <div id="nice-few-words">
                <NiceFewWords />
            </div>
            <div id="contact">
                <Footer />
            </div>
        </>
    );
}

export default App;

