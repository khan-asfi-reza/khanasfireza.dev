import Header from "../components/Comp/Header";
import BodyContent from "../container/Layout/BodyContent";
import Hero from "../components/Home/Hero";
import {About} from "../components/Home/About";
import {Experience} from "../components/Home/Experience";
import {HireMe} from "../components/Home/HireMe";
import {Projects} from "../components/Home/Projects";
import Contact from "../components/Home/Contact";
import Footer from "../components/Home/Footer";
import {SeoHead} from "../components/Comp/Head";
import ScrollToTop from "../components/Comp/ScrollToTop";
import {ContentParticle} from "../components/Comp/Particles";
import {Skills} from "../components/Home/Skills";
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