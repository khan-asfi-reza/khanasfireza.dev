import {SectionContainer} from "../Comp/SectionContainer";
import {SectionHeader} from "../Comp/SectionHeader";
import {SectionRow} from "../Comp/SectionRow";
import {gsap} from "gsap";
import {SKILLS_ID} from "../../assets/data/ContentID";
import {AllSkillContents} from "../../assets/data/Content";
import {useEffect, useRef, useState} from "react";
import classNames from "classnames";


const WorkingExperience = [
    {
        title: "Freelance Full-Stack Developer",
        workplace: "Fiverr",
        validity: "2018-"
    },
    {
        title: "Jr Full-Stack Developer",
        workplace: "Invasso LLC",
        validity: "2020-2021"
    },
    {
        title: "Full Stack Software Developer",
        workplace: "Shore Capital Corporation",
        validity: "2021-2022"
    },
    {
        title: "Freelance Full Stack Developer",
        workplace: "Upwork",
        validity: "2021-"
    },
]

export const Skills = () => {
   const [current, setCurrent] = useState(0);
   const headRef = useRef(null);
   const workingRef = useRef(null);

   const changingStateAnimation = () => {
       return setTimeout(() => {
           gsap.from(headRef.current, {
               opacity: 0,
               duration: 1,
               y: -10,
           })
           setCurrent(current ? 0 : 1);

       }, 10000);
   }


   useEffect(()=>{
       const interval = changingStateAnimation()
       return () => {
           clearInterval(interval);
       }
   }, [current])

   useEffect(()=>{
       let sl = gsap.timeline({
           scrollTrigger: {
               trigger: "#"+SKILLS_ID,
           }
       });
       sl.from("#skill_text", {
           opacity: 0,
           x: -100,
       })
       Array.from(headRef.current.children).map(each => {
           sl.from(each, {
               opacity: 0,
               y: 10,
               duration: 0.1
           })
       })
       Array.from(workingRef.current.children).map(each => {
           sl.from(each, {
               opacity: 0,
               y: -100,
               duration: 0.5
           }, )
       })
   }, [])

  return(
      <SectionContainer id={SKILLS_ID}>
          <SectionRow className={"gap-x-24 gap-y-20 mt-12"}>
              <div className={"flex flex-col justify-between"}>
                  <div id={"skill_text"}>
                      <SectionHeader header={"Skills and Experience"} headerClassName={"text-left text-primary"}/>
                      <p className={"mt-14 dark:text-typo-dark-100 text-typo-light-200"}>
                          I have professional experience in more than 10+ Languages and Frameworks along with relational databases and many other
                          technical tools. I have worked with 3 Companies and several clients to provide services.
                      </p>
                  </div>
                  <div className={"mt-12"}>
                      <h2 className={"dark:text-typo-dark-400 text-typo-light-400 text-4xl font-semibold"}>Skills</h2>
                      <div ref={headRef} className={"grid grid-cols-3 md:gap-10 gap-3 gap-y-10 mt-12"}>
                          {
                              AllSkillContents[current].map(
                                  (content, key) => (
                                      <div key={key} id={`skill_content_${key}`} className={classNames("transition-all")}>
                                          <div className={"md:h-20 h-16"}>
                                              <img className={"md:h-20 h-16"} src={content.logo.src} alt={content.name}/>
                                          </div>
                                          <p className={"text-base dark:text-typo-dark-100 text-typo-light-200 mt-5"}>
                                              {content.name}
                                          </p>
                                      </div>
                                  )
                              )
                          }
                      </div>
                  </div>
              </div>

              <div className={"flex flex-col justify-between pt-20"}>
                  <h3 className={"dark:text-typo-dark-400 text-typo-light-400 text-4xl font-semibold"}>Experience</h3>
                  <div ref={workingRef} className={"mt-20"}>
                      {
                          WorkingExperience.map(

                              (each, k) => (
                                  <div key={k} className={"py-4 grid grid-cols-12 border-b border-0.5 dark:border-typo-light-300 border-typo-dark-300 mt-5"}>
                                      <p className={"md:col-span-3 col-span-4 dark:text-typo-dark-100 text-typo-light-100 mr-6"}>{each.validity}</p>
                                      <div className={"md:col-span-9 col-span-8 flex flex-col"}>
                                          <h2 className={"md:text-2xl text-xl font-medium dark:text-typo-dark-200 text-typo-light-200"}>{each.title}</h2>
                                          <p className={"mt-3 md:text-base text-sm dark:text-typo-dark-100 text-typo-light-100"}>{each.workplace}</p>
                                      </div>
                                  </div>
                              )
                          )
                      }
                  </div>
              </div>
          </SectionRow>
      </SectionContainer>

  )
}