import {SectionContainer} from "../Comp/SectionContainer";
import BlogSpot from "../../assets/images/project1.png";
import Funskul from "../../assets/images/project2.png";
import Referral from "../../assets/images/project3.png";
import classNames from "classnames";
import {SectionHeader} from "../Comp/SectionHeader";
import Image from "next/image";
import {ABOUT_ID} from "../../assets/data/ContentID";
import {FaExternalLinkAlt} from "react-icons/fa";

const TagClassName = (...args) => classNames("px-4 mr-2 mt-2 py-2 text-xs font-bold  rounded-2xl", ...args)

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
        "text": <>
            Blogspot is a blog site, similar to reddit or twitter
            A person can create account, login and them upload contents and images. <br/> A person can create their profile
            update it or change it whenever he or she wants. A user can follow multiple other users and create connection,
            A user can subscribe to any content creator.<br/> This web app is built using HTML, CSS, Django, Python</>,
        "tags": [<Python/>, <HTML/>, <CSS/>, <JS/>],
        "link": "https://khan-asfi-reza.github.io/Blog-Spot/"
    },
    {
        "name": "Funskul",
        "image": Funskul,
        "tags": [<HTML/>, <CSS/>, <JS/>],
        "text": <>
            Funskul is a interactive learning platform for extra curricular activities, generally Online Learning
            Platforms are more likely prone to create content related to curricular studies. But funskul mainly focuses
            on extra curricular activities. <br/> Anyone who is interested to learn any sort of extra curricular skills
            are welcome to our platform, we use social medias and content sites to publish our contents, for example,
            youtube or facebook, besides we have our website to showcase our activities and link our contents there.
        </>,
        "link": "https://funskul.com/"

    },
    // {
    //     "name": "Tech Mountain",
    //     "image": TechMountain,
    //     "tags": [<HTML/>, <CSS/>, <JS/>],
    //     "text": "A template website for a tech based company as their portfolio to showcase their services",
    //     "link": ""
    // },
    {
        "name": "Referral",
        "image": Referral,
        "tags": [<Python/>, <Svelte/>, <CSS/>, <Django/>],
        "text": <>
        We all have seen referral marketing strategies and websites that enables users to refer others and provide them
            discounts or profits and also by inviting others a user can earn profit, This project is similar to that.
            But this is only for referring other users to get loan for properties, if a user can invite other people to
            close a loan or deal, the user can earn good amount of profit.
        </>,
        "link": "https://agent.shorecapital.net/referral/"
    },
    // {
    //     "name": "Disease Symptom",
    //     "image": DiseaseSymptom,
    //     "tags": [<ReactFramework/>, <CSS/>, <JS/>],
    //     "text": "A website that shows us diseases based on symptoms built using Columbia University Papers"
    // },
    // {
    //     "name": "Invasso",
    //     "image": Invasso,
    //     "tags": [<ReactFramework/>, <CSS/>, <JS/>, <Django/>, <Python/>],
    //     "text": "A portfolio website for an Egyptian IT Firm to showcase their works and services, also an option to buy their service"
    // },
    // {
    //     "name": "SCP",
    //     "image": SCP,
    //     "tags": [<ReactFramework/>, <CSS/>, <JS/>, <Django/>, <Python/>],
    //     "text": "A portfolio for a mortgage "
    // },
]


export const Projects = () => {
    return(
        <SectionContainer >
            <SectionHeader header={"Recent Projects"}  headerClassName={"text-left text-primary"}/>
            <hr className={"w-32 h-2 rounded-xl bg-primary border-none"}/>
            <div className={"mt-12 grid xl:grid-cols-3 auto-rows-max md:grid-rows-[27rem] lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-10"}>
                {
                    ProjectList.map((project, key) =>
                        <div key={key} className={classNames("row-span-3 grid grid-cols-1 align-items gap-10", key === 2 ? "items-end" : key === 1 ? "items-center" : "items-start")}>
                            <div className={"py-2 "}>
                                <div className={"flex justify-between"}>
                                    <h2 className={"lg:text-3xl text-2xl dark:text-typo-dark-300 text-typo-light-300 font-medium"}>{project.name}</h2>
                                    <a href={project.link} target={"_blank"} className={"h-10 w-10 transition-all hover:h-12 hover:w-12 grid place-items-center rounded-full text-center block text-white bg-purple-600 text-base"}>
                                        <FaExternalLinkAlt/>

                                    </a>
                                </div>
                                <div className={"w-full mt-10"}>
                                    <Image src={project.image}/>
                                </div>
                            </div>
                        </div>
                //     <div className={key % 2 === 0 ? "order-2" : "order-1"}>
                //     <h2 className={"text-4xl dark:text-typo-dark-300 text-typo-light-300 text-medium"}>{project.name}</h2>
                //     <p className={"mt-10 dark:text-typo-dark-100 text-typo-light-100"}>{project.text}</p>
                //
                //     <div className={"mt-10"}>
                //     <div className={"flex flex-wrap mt-5"}>
                // {
                //     project.tags.map((each, k) => (
                //     <div key={k}>
                // {each}
                //     </div>
                //     ))
                // }
                //     </div>
                //     </div>
                //     <div className={"mt-10"}>
                //     <a href={project.link} className={"bg-primary hover:bg-primaryLight text-white rounded-3xl px-4 py-2 w-32 flex flex-row items-center justify-center"}>Visit <span className={"ml-1"}><FaExternalLinkAlt/></span></a>
                //     </div>
                //     </div>
                        // <div key={key} className={classNames("grid grid-rows-2 dark:bg-theme-dark-100 bg-theme-light-50 rounded-xl z-20")}>
                        //     <div className={"relative h-56 overflow-hidden rounded-xl text-center"}>
                        //         <div className={"w-full h-full overflow-hidden text-center grid place-items-center"}>
                        //             <img alt={"Project Image"} className={"w-full h-full object-fill"} src={project.image.src}/>
                        //         </div>
                        //     </div>
                        //     <div className={"py-5 md:px-6 px-4 "}>
                        //         <div className={"h-1/2"}>
                        //             <div className="flex items-center">
                        //                 <h3 className={"dark:text-typo-dark-300 text-typo-light-300 text-lg mb-0 mr-3"}>{project.name}</h3>
                        //                 <a className={"text-blue-400"} href=""><FaExternalLinkAlt/></a>
                        //             </div>
                        //             <p className={"dark:text-typo-dark-100 mt-4 text-typo-light-100 text-sm"}>{project.text}</p>
                        //         </div>
                        //
                        //         <div className={"flex flex-wrap mt-5"}>
                        //             {
                        //                 project.tags.map((each, k) => (
                        //                     <div key={k}>
                        //                         {each}
                        //                     </div>
                        //                 ))
                        //             }
                        //         </div>
                        //     </div>
                        //
                        // </div>
                    )
                }

            </div>
        </SectionContainer>
    )
}