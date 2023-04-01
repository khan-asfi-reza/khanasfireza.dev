import Header from "../components/Header";
import BodyContent from "../container/Layout/BodyContent";
import Hero from "../elements/Home/Hero";
import {About} from "../elements/Home/About";
import {Experience} from "../elements/Home/Experience";
import Contact from "../elements/Home/Contact";
import Footer from "../elements/Home/Footer";
import {SeoHead} from "../components/Head";
import ScrollToTop from "../components/ScrollToTop";
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

            <Hero/>
            <About/>
            <Experience/>
  
            <Skills/>
            {/* <Projects/> */}
            <Contact/>
        </BodyContent>
        <Footer/>
        <ScrollToTop/>
      </>
  )
}
export default Home;