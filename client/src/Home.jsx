import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css';
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
// import Notfound from "./components/Notfound";
function Home() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        {/* <Header/> */}
        <Hero />
      </div>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default Home;
