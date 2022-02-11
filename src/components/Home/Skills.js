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
   const [current, setCurrent] = useState(1);
   const [animation, setAnimation] = useState("")

   const headRef = useRef(null);

   useEffect(()=>{
       setInterval(()=>{
           gsap.from(headRef.current, {
               duration: 3,
               opacity: 0,
           })
           setCurrent(current === 1 ? 0 : 1);
           gsap.to(headRef.current, {
               opacity: 1,
               duration: 3,
           })
       }, 8000)
   }, [])

  return(
      <SectionContainer id={SKILLS_ID}>
          <SectionRow className={"gap-x-24 gap-y-20 mt-12"}>
              <div>
                  <SectionHeader header={"Skills and Experience"} headerClassName={"text-left text-primary"}/>
                  <p className={"mt-14 dark:text-typo-dark-100 text-typo-light-200"}>
                      I have professional experience in more than 10+ Languages and Frameworks along with relational databases and many other
                      technical tools. I have worked with 3 Companies and several clients to provide services.
                  </p>
                  <div className={"mt-12"}>
                      <h2 className={"dark:text-typo-dark-400 text-typo-light-400 text-4xl font-semibold"}>Skills</h2>
                      <div ref={headRef} className={"grid grid-cols-3 md:gap-10 gap-3 mt-12"}>
                          {
                              AllSkillContents[current].map(
                                  (content, key) => (
                                      <div key={key} className={classNames("transition-all", animation)}>
                                          <div className={"h-20 w-20 dark:bg-theme-dark-100 bg-theme-light-50 rounded-full grid place-items-center"}>
                                              <img className={"w-10 "} src={content.logo.src} alt={content.name}/>
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

              <div>
                  <h3 className={"dark:text-typo-dark-400 text-typo-light-400 text-4xl font-semibold"}>Experience</h3>
                  <div className={"mt-20"}>
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