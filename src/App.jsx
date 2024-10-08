import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import './App.css';

function App() {
    return (
      <>
        <Navbar />
        <Header />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </>
    );
}

export default App;

