import Header from "../components/Comp/Header";
import BodyContent from "../container/Layout/BodyContent";
import ContentTop from "../components/Home/ContentTop";
import {About} from "../components/Home/About";
import {Experience} from "../components/Home/Experience";
import {Skills} from "../components/Home/Skills";
import {HireMe} from "../components/Home/HireMe";
import {Projects} from "../components/Home/Projects";
import Contact from "../components/Home/Contact";
import Footer from "../components/Home/Footer";

const Home = () => {
  return(
      <>
        <Header/>
        <BodyContent>
            <ContentTop/>
            <About/>
            <Experience/>
            <Skills/>
            <HireMe/>
            <Projects/>
            <Contact/>
        </BodyContent>
        <Footer/>
      </>
  )
}
export default Home;