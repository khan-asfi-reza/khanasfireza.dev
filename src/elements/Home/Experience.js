import {SectionContainer} from "../../components/SectionContainer";
import classnames from "classnames";
import classNames from "classnames";
import {ExperienceContent} from "../../assets/data/Content";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const headerClassNameFunc = () => classnames("font-semibold md:text-6xl xs:text-5xl text-4xl text-primary",);


export function Experience() {
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#experience",
                start: 50,
            }
        });

        tl.from("#expContText", {
                opacity:0,
                x: -100,
        })
        tl.from(`#expCont0`, {
            opacity: 0,
            x: 100,
        })
        tl.from(`#expCont1`, {
            opacity: 0,
            x: -100,
        })
        tl.from(`#expCont2`, {
            opacity: 0,
            x: 100,
        })


    }, [])

    return (
        <SectionContainer id={"experience"} className={"relative mt-20 overflow-hidden "}>
            <div className={"xl:px-32 lg:px-10 grid md:grid-cols-2 mt-10 xl:gap-20  lg:gap-16 md:gap-5 gap-y-14"}>
                <div id={"expContText"} className={"relative md:text-left text-center"}>
                    <h2 className={headerClassNameFunc()}>What I Do?</h2>
                    <hr className={classnames("w-20 mt-3 md:mx-0 mx-auto text-primary bg-primary w-25 h-1")}/>
                    <span
                        className={"overflow-hidden z-1 absolute md:text-9xl text-8xl dark:text-typo-light-100 text-typo-light-100 opacity-10 top-0"}>WHAT</span>
                    <p className={"mt-10 dark:text-typo-dark-100 text-typo-light-200"}>I have experience in web and
                        software development for a long time, and I have been working for several clients and companies
                        as a developer, besides that I have participated in various Programming and Web Dev contests and
                        was able to achieve something good in those contensts</p>
                </div>

                {
                    ExperienceContent.map((elem, key) => (
                        <div id={`expCont${key}`} key={key}
                             className={classNames("md:w-96 w-full  dark:bg-theme-dark-100 bg-theme-light-50 p-8 relative rounded-xl  md:mx-0 mx-auto", key % 2 === 0 ? "md:ml-auto" : "")}>
                            <div
                                className={classnames("absolute h-16 w-16 rounded-full grid place-items-center dark:bg-theme-dark-200 border-4 dark:border-theme-dark-100 bg-theme-light-200 -top-6 text-3xl", elem.color)}>
                                {elem.icon}
                            </div>
                            <h3 className={classnames("mt-8 text-xl font-medium", elem.color)}>{elem.name}</h3>
                            <hr className={classnames("w-20 mt-3", elem.color)}/>
                            <p className={"text-typo-light-300 dark:text-typo-dark-100 mt-8"}>{elem.text}</p>
                        </div>
                    ))
                }
            </div>
        </SectionContainer>
    )
}