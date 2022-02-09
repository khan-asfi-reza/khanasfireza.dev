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
import {SeoHead} from "../components/Comp/Head";
import ScrollToTop from "../components/Comp/ScrollToTop";

const Home = () => {
  return(
      <>
        <SeoHead/>
        <Header/>
        <BodyContent>
            <ContentTop/>
            <Experience/>
            <About/>
            <Skills/>
            <HireMe/>
            <Projects/>
            <Contact/>
        </BodyContent>
        <Footer/>
        <ScrollToTop/>
      </>
  )
}
export default Home;