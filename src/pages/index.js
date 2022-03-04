import Header from "../components/Header";
import BodyContent from "../container/Layout/BodyContent";
import Hero from "../elements/Home/Hero";
import {About} from "../elements/Home/About";
import {Experience} from "../elements/Home/Experience";
import {HireMe} from "../elements/Home/HireMe";
import {Projects} from "../elements/Home/Projects";
import Contact from "../elements/Home/Contact";
import Footer from "../elements/Home/Footer";
import {SeoHead} from "../components/Head";
import ScrollToTop from "../components/ScrollToTop";
import {ContentParticle} from "../components/Particles";
import {Skills} from "../elements/Home/Skills";
import {useEffect} from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



const Home = () => {
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
    }, [])
  return(
      <>
        <SeoHead/>
        <Header/>
        <BodyContent>
            <ContentParticle id={"experience_particle"}/>
            <Hero/>
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