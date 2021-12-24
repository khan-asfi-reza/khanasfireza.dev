import {SectionContainer} from "../Comp/SectionContainer";
import {SectionHeader} from "../Comp/SectionHeader";
import {SectionRow} from "../Comp/SectionRow";
import {getNumberOfYear, getPercentage, SkillContent} from "../../assets/data/Content";
import Image from "next/image";
import {useAge} from "../../hooks/useAge";
import {SKILLS_ID} from "../../assets/data/ContentID";


export const Skills = () => {
  const age = useAge(2016);

  return(
      <SectionContainer id={SKILLS_ID}>
          <SectionHeader header={"Skills"} text={"My Technical Skills"}/>
          <SectionRow className={"gap-x-24 gap-y-20 mt-12"}>
              {SkillContent.map(({name, logo, text, skill_set}, key) => (
                  <div key={key}>
                      <div className={"mb-12"}>
                          <h2 className={"font-medium flex flex-row text-3xl text-typo-light-400 dark:text-typo-dark-400"}>{logo} <span className={"ml-2"}>{name}</span></h2>
                          <p className={"text-xl text-typo-light-200 dark:text-typo-dark-200 mt-2"}>{text}</p>
                      </div>
                      {skill_set.map((content, id) => (
                          <div key={id} className={"flex flex-row mt-6"}>
                            <div className={"w-12 h-20 overflow-hidden mr-6"}>
                                <Image className={"w-full object-cover object-center"} alt={content.name} src={content.logo}/>
                            </div>
                            <div className={"flex-1"}>
                                <div className={"flex flex-row justify-between"}>
                                    <p className={"text-typo-light-300 dark:text-typo-dark-300"}>{content.name}</p>
                                    <p className={"text-typo-light-300 dark:text-typo-dark-300"}>{getNumberOfYear(content.year)}+ Years</p>
                                </div>
                                <div className={"w-full h-3 rounded-xl bg-secondary transition transition-all duration-500"}>
                                    <div style={{width: `${getPercentage(getNumberOfYear(content.year), age)}%`}} className={"h-full rounded-xl bg-primaryLight"}/>
                                </div>
                            </div>
                          </div>
                      ))}
                  </div>
              ))}
          </SectionRow>
      </SectionContainer>

  )
}