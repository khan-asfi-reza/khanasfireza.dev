import {useCustomTheme} from "../hooks/useCustomTheme";
import classNames from "classnames";
import {FaBars, FaMoon, FaSun, FaTimes} from "react-icons/fa";
import {useState} from "react";
import {ABOUT_ID, CONTACT_ID, HOME_ID, SERVICES_ID, SKILLS_ID} from "../assets/data/ContentID";
import {Disclosure, Switch} from "@headlessui/react";
import {moveFromBottom, moveFromLeft} from "../const";
import {motion} from "framer-motion";

const navigation = [
    {name: 'Home', href: `#${HOME_ID}`, current: false},
    {name: 'About', href: `#${ABOUT_ID}`, current: false},
    {name: 'Skills', href: `#${SKILLS_ID}`, current: false},
    {name: 'Services', href: `#${SERVICES_ID}`, current: false},
    {name: 'Contact', href: `#${CONTACT_ID}`, current: false},
]

export default function Header() {
    const [enabled, setEnabled] = useState(false)
    const {toggleTheme, getThemeIcon} = useCustomTheme();

    return (<Disclosure as="nav" className="fixed z-100 w-full dark:bg-theme-dark-100 bg-theme-light-100">
            {({open}) => (
                <>
                    <div className="container mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center p-2 rounded-md dark:text-gray-300
                                    text-gray-800 transition-all hover:text-white hover:bg-blue-500 focus:outline-none
                                    focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <div className="block h-6 w-6 grid place-items-center" aria-hidden="true">
                                            <FaTimes/>
                                        </div>
                                    ) : (
                                        <div className="block h-6 w-6 grid place-items-center" aria-hidden="true">
                                            <FaBars/>
                                        </div>
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <motion.div {...moveFromLeft()}  className="flex-shrink-0 flex items-center">
                                    <motion.h2 className={"dark:text-white text-typo-light-400 font-bold text-xl"}>Khan Asfi
                                        Reza</motion.h2>
                                </motion.div>
                                <div className="hidden sm:block sm:ml-6">
                                    <motion.div {...moveFromLeft()} className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    'dark:text-gray-300 text-gray-800 hover:bg-blue-500 hover:dark:text-white hover:text-white',
                                                    'px-3 py-2 rounded-md text-base font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                            <div
                                className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <Switch
                                    checked={enabled}
                                    onChange={() => {
                                        setEnabled(!enabled);
                                        toggleTheme()
                                    }}
                                    className={classNames(enabled ? 'bg-blue-500' : 'bg-sky-500',
                                        "relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none ")}
                                >
                                    <span className="sr-only">Use setting</span>
                                    <div
                                        aria-hidden="true"
                                        className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
                                pointer-events-none grid place-items-center h-[34px] w-[34px] rounded-full text-blue-500 bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                                    >
                                        {enabled ? <FaMoon/> : <FaSun/>}
                                    </div>
                                </Switch>
                                {/* Profile dropdown */}
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        'dark:text-gray-300 text-gray-800 hover:bg-primary hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}