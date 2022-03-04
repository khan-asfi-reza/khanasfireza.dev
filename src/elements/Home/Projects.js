import {SectionContainer} from "../../components/SectionContainer";
import BlogSpot from "../../assets/images/project1.png";
import Funskul from "../../assets/images/project2.png";
import Referral from "../../assets/images/project3.png";
import classNames from "classnames";
import {SectionHeader} from "../../components/SectionHeader";
import {useRef} from "react";
import {PROJECT_ID} from "../../assets/data/ContentID";
import {GallerySlides} from "../../components/Slide";

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
        "title": "BlogSpot",
        "image": BlogSpot.src,
        color: "text-white",
        "text": <>
            Blogspot is a blog site, similar to reddit or twitter
            A person can create account, login and them upload contents and images. <br/> A person can create their
            profile
            update it or change it whenever he or she wants. A user can follow multiple other users and create
            connection,
            A user can subscribe to any content creator.<br/> This web app is built using HTML, CSS, Django, Python</>,
        "tags": [<Python/>, <HTML/>, <CSS/>, <JS/>],
        "link": "https://khan-asfi-reza.github.io/Blog-Spot/"
    },
    {
        "title": "Funskul",
        "image": Funskul.src,
        color: "text-black",
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
    {
        "title": "Referral",
        "image": Referral.src,
        color: "text-black",
        "tags": [<Python/>, <Svelte/>, <CSS/>, <Django/>],
        "text": <>
            We all have seen referral marketing strategies and websites that enables users to refer others and provide
            them
            discounts or profits and also by inviting others a user can earn profit, This project is similar to that.
            But this is only for referring other users to get loan for properties, if a user can invite other people to
            close a loan or deal, the user can earn good amount of profit.
        </>,
        "link": "https://agent.shorecapital.net/referral/"
    },

]


export const Projects = () => {
    const containerRef = useRef(null);

    return (
        <SectionContainer id={PROJECT_ID}>
            <SectionHeader id={"project_header"} header={"Recent Projects"} headerClassName={"text-left text-primary"}/>
            <hr className={"w-32 h-2 rounded-xl bg-primary border-none"}/>
            <div className={"md:py-10 py-4"}>
                <div ref={containerRef}
                     className={"flex justify-center items-center relative overflow-hidden box-border md:container md:mx-auto py-10 px-5 rounded-2xl"}>
                    <GallerySlides slides={ProjectList} parentRef={containerRef}/>
                </div>
            </div>
        </SectionContainer>
    )
}