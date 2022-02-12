import {useCustomTheme} from "../../hooks/useCustomTheme";
import classnames from "classnames";
import {FaBars, FaTimes} from "react-icons/fa";
import {useEffect, useRef, useState} from "react";
import {ABOUT_ID, CONTACT_ID, HOME_ID, SERVICES_ID, SKILLS_ID} from "../../assets/data/ContentID";
import {gsap} from "gsap";

export default function Header() {

    const {toggleTheme, getThemeIcon} = useCustomTheme();
    const [navOpen, setNavOpen] = useState(false);
    const headerLinkRef = useRef(null);

    useEffect(()=>{

        for (let i =0; i < headerLinkRef.current.children.length; i++){

            gsap.from(headerLinkRef.current.children[i], {
                opacity: 0,
                y: -100,
            })
        }
    }, [])

    const navOnClick = () => {
        setNavOpen(!navOpen)
    }

    const navigationClassName = classnames(
            "flex-auto md:px-6 " +
        "list-none md:h-auto flex md:flex-row " +
        "md:justify-around md:items-center md:static " +
        "h-screen md:bg-transparent bg-primary text-white " +
        "fixed top-0 flex-col transition-all duration-300 md:w-auto xs:w-3/6 w-3/4 md:py-0 py-3 px-5 z-100",
        {
            "-right-full": !navOpen,
            "right-0": navOpen
        }


    )

    return(
        <header className={"m-auto fixed w-full top-0 left-0 h-16 bg-theme-light-100 dark:bg-theme-dark-100 grid place-items-center z-100 border-b border-zinc-200 dark:border-zinc-900"}>
            <div className={"flex container m-auto px-2 py-3 h-full"}>
                <div className={"flex-1 flex items-center"}>
                    <h3 className={"dark:text-typo-dark-400 text-typo-light-400 text-xl md:text-2xl font-bold"}>Khan Asfi Reza</h3>
                </div>
                <div className={"flex-1 flex md:justify-start justify-end"}>
                    <nav role={"navigation"}
                         aria-label={"Navigation Menu"}
                         className={navigationClassName}>
                        <div className={"md:hidden flex justify-between items-center"}>
                            <p className={"text-typo-dark-500 font-light text-3xl"}>
                                Menu
                            </p>

                            <button onClick={navOnClick} aria-label={"navigation toggle"} className={"md:hidden grid place-items-center ml-3 text-primary bg-white text-center w-7 h-7 rounded-full"}>
                                <FaTimes/>
                            </button>

                        </div>
                        <hr className={"md:hidden text-typo-dark-300 w-full m-auto my-2"}/>
                        <div ref={headerLinkRef} className={"md:flex-row md:h-auto h-3/4 flex flex-col justify-around"}>
                            <a href={`#${HOME_ID}`} className="navbar-items text-lg dark:text-typo-dark-300 md:text-typo-light-300 text-typo-dark-300"> Home </a>
                            <a href={`#${ABOUT_ID}`} className="navbar-items text-lg dark:text-typo-dark-300 md:text-typo-light-300 text-typo-dark-300"> About </a>
                            <a href={`#${SKILLS_ID}`} className="navbar-items text-lg dark:text-typo-dark-300 md:text-typo-light-300 text-typo-dark-300"> Skills </a>
                            <a href={`#${SERVICES_ID}`} className="navbar-items text-lg dark:text-typo-dark-300 md:text-typo-light-300 text-typo-dark-300"> Services </a>
                            <a href={`#${CONTACT_ID}`} className="navbar-items text-lg dark:text-typo-dark-300 md:text-typo-light-300 text-typo-dark-300"> Contact </a>
                        </div>
                    </nav>
                    <div className={"flex flex-row justify-end items-center"}>
                        <button aria-label={"theme toggle"} onClick={toggleTheme}
                                className={"grid place-items-center duration-500 bg-primary w-7 h-7 hover:transform hover:-translate-y-2 rounded-full transition-all  text-white "}>
                            {getThemeIcon()}
                        </button>
                        <button onClick={navOnClick} aria-label={"navigation toggle"} className={"md:hidden ml-3 align-middle text-white bg-primary hover:bg-primaryLight text-center px-3 h-7 rounded-xl"}>
                            <FaBars/>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}