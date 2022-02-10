import {SectionContainer} from "../Comp/SectionContainer";
import {DrawingHeader} from "../Comp/Drawings";
import {FaExternalLinkAlt} from "react-icons/fa";
import Funskul from "../../assets/images/Projects/Image1.png";
import BlogSpot from "../../assets/images/Projects/Image2.png";
import DiseaseSymptom from "../../assets/images/Projects/Image4.png";
import TechMountain from "../../assets/images/Projects/Image5.png";
import Referral from "../../assets/images/Projects/Image7.png";
import SCP from "../../assets/images/Projects/Image8.png";
import Invasso from "../../assets/images/Projects/Image9.png";
import classNames from "classnames";


const TagClassName = (...args) => classNames("px-4 mr-4 mt-2 py-2 border-2 text-xs font-bold  rounded-2xl", ...args)

const Python = () => (
    <div className={TagClassName("border-yellow-600 bg-amber-200 text-yellow-600")}>
        PYTHON
    </div>
)

const ReactFramework = () => (
    <div className={TagClassName("border-blue-800 bg-sky-300 text-blue-800")}>
        REACT
    </div>
)

const Svelte = () => (
    <div className={TagClassName("border-orange-600 bg-amber-300 text-orange-600")}>
        SVELTE
    </div>
)

const Django = () => (
    <div className={TagClassName("border-green-900 bg-emerald-300 text-green-800")}>
        DJANGO
    </div>
)

const HTML = () => (
    <div className={TagClassName("border-green-900 bg-lime-200 text-green-800")}>
        HTML
    </div>
)

const CSS = () => (
    <div className={TagClassName("border-purple-900 bg-purple-300 text-purple-900")}>
        CSS
    </div>
)

const JS = () => (
    <div className={TagClassName("border-red-900 bg-rose-300 text-red-900")}>
        JAVASCRIPT
    </div>
)

const ProjectList = [
    {
        "name": "BlogSpot",
        "image": BlogSpot,
        "text": "A regular blog site like twitter or reddit, to implement the UI. Built using HTML, CSS and JavaScript",
        "tags": [<Python/>, <HTML/>, <CSS/>, <JS/>],
    },
    {
        "name": "Funskul",
        "image": Funskul,
        "tags": [<HTML/>, <CSS/>, <JS/>],
        "text": "A website for extra curricular learning platform, built with CMS for managing contents"

    },
    {
        "name": "Tech Mountain",
        "image": TechMountain,
        "tags": [<HTML/>, <CSS/>, <JS/>],
        "text": "A template website for a tech based company as their portfolio to showcase their services"
    },
    {
        "name": "Referral",
        "image": Referral,
        "tags": [<Python/>, <Svelte/>, <CSS/>, <Django/>],
        "text": "A website for handling referral campaign, where people can come and refer other people to earn money"
    },
    {
        "name": "Disease Symptom",
        "image": DiseaseSymptom,
        "tags": [<ReactFramework/>, <CSS/>, <JS/>],
        "text": "A website that shows us diseases based on symptoms built using Columbia University Papers"
    },
    {
        "name": "Invasso",
        "image": Invasso,
        "tags": [<ReactFramework/>, <CSS/>, <JS/>, <Django/>, <Python/>],
        "text": "A portfolio website for an Egyptian IT Firm to showcase their works and services, also an option to buy their service"
    },
    {
        "name": "SCP",
        "image": SCP,
        "tags": [<ReactFramework/>, <CSS/>, <JS/>, <Django/>, <Python/>],
        "text": "A portfolio for a mortgage "
    },

]


export const Projects = () => {
    return(
        <SectionContainer className={"max-w-full mt-0"}>
            <DrawingHeader header={"Projects"} text={"My completed personal and client projects"}/>
            <div className={"mt-12 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-x-5 gap-y-10 container mx-auto"}>

                {
                    ProjectList.map((project, key) =>
                        <div key={key} className={classNames("grid grid-rows-2 dark:bg-theme-dark-100 bg-theme-light-50 rounded-xl")}>
                            <div className={"relative h-56 overflow-hidden rounded-xl text-center"}>
                                <div className={"w-full h-full overflow-hidden text-center grid place-items-center"}>
                                    <img alt={"Project Image"} className={"w-full h-full object-fill"} src={project.image.src}/>
                                </div>
                            </div>
                            <div className={"py-5 md:px-6 px-4 "}>
                                <div className={"h-1/2"}>
                                    <div className="flex items-center">
                                        <h3 className={"dark:text-typo-dark-300 text-typo-light-300 text-lg mb-0 mr-3"}>{project.name}</h3>
                                        <a className={"text-blue-400"} href=""><FaExternalLinkAlt/></a>
                                    </div>
                                    <p className={"dark:text-typo-dark-100 mt-4 text-typo-light-100 text-sm"}>{project.text}</p>
                                </div>

                                <div className={"flex flex-wrap mt-5"}>
                                    {
                                        project.tags.map((each, k) => (
                                            <div key={k}>
                                                {each}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                        </div>)
                }

            </div>
        </SectionContainer>
    )
}