import {SectionContainer} from "../Comp/SectionContainer";
import {SectionHeader} from "../Comp/SectionHeader";
import {FaMailBulk, FaPaperPlane, FaLinkedin, FaPhone} from "react-icons/fa";
import {gsap} from "gsap";
import {useEffect, useState} from "react";
import {CONTACT_API} from "../../assets/data/API";
import {CONTACT_ID} from "../../assets/data/ContentID";
import {LINKEDIN} from "../../assets/data/SocialLinks";

const ContactLinks = () =>
    <div className={"grid grid-cols-3 gap-1 "}>
        <a href={"mailto:khanasfireza10@gmail.com"} className={"h-14 w-14 text-lg grid place-items-center bg-blue-400 text-typo-dark-400"}>
            <FaMailBulk/>
        </a>

        <a href={"tel:+8801753489310"} className={"h-14 w-14 text-lg grid place-items-center bg-blue-400 text-typo-dark-400"}>
            <FaPhone/>
        </a>

        <a href={LINKEDIN} target={"_blank"} className={"h-14 w-14 text-lg grid place-items-center bg-blue-400 text-typo-dark-400"}>
            <FaLinkedin/>
        </a>

    </div>


const Contact = () => {


    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
        error: "",
        loading: false,
        sent: false,
    })

    const changeData = (newData) => {
        setData({...data, ...newData})
    }

    const onChange = (e) => {
        changeData({[e.target.name]: e.target.value, error: ""})
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(!data.name || !data.message || !data.email || !validateEmail(data.email)){
            setData({...data, 'error': "Invalid Form, please enter name, email and message properly"})
        }
        else{
            changeData({loading: true})
            fetch(CONTACT_API, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(data),
                mode: 'no-cors',
                referrerPolicy: 'no-referrer',
            }).then((res) => {
                changeData({
                    loading: false,
                    sent: true
                })

            }).catch((e) => {
                changeData({
                    loading: false,
                    error: "Unable to send message, please try again. " +
                              "Or send mail to my email address"})
            })
        }

    }

    useEffect(()=>{
        const sl = gsap.timeline({
            scrollTrigger: "#"+CONTACT_ID,
        });
        sl.from(".contact_input", {
            x: 100,
        })
        sl.from(["#contact_h",], {
            opacity: 0,
            x: -100,
        })
        sl.from(["#contact_hr",], {
            opacity: 0,
            width: 0,
        })
        sl.from(["#contact_text", "#contact_btn"], {
            opacity: 0,
            x: -100,
        })

    }, [])

    return(
        <SectionContainer id={CONTACT_ID} className={""}>
            <SectionHeader header={"Contact Me"} headerClassName={"text-left text-primaryLight"}/>
            <div className={"grid md:grid-cols-5 grid-cols-1 mt-20 z-20 dark:bg-theme-dark-100 bg-theme-light-50 rounded-2xl z-20"}>

                <div className={"col-span-2 z-20 md:px-4 md:py-20 px-2 py-8 lg:w-9/12 md:w-full w-11/12 mx-auto "}>
                    <div>
                        <h2 id={"contact_h"} className={"text-4xl font-semibold dark:text-indigo-100 text-indigo-900"}>Send Message</h2>
                        <hr id={"contact_hr"} className={"w-32 h-1 border-none bg-indigo-400 rounded-xl mt-3"}/>
                    </div>
                    <p id={"contact_text"} className={"mt-14 dark:text-typo-dark-200 text-typo-light-200 text-xl"}>
                        Feel free to send any message, for any enquiry <br/>
                        Send me message to discuss about your project, Let's get connected
                    </p>
                    <div id={"contact_btn"} className={"mt-16 "}>
                        <ContactLinks/>
                    </div>

                </div>
                <div className={"col-span-3 bg-indigo-400 rounded-3xl border-[1rem] dark:border-theme-dark-100 border-theme-light-50"}>
                    <div className={"rounded-2xl bg-opacity-70 lg:w-9/12 md:w-full w-11/12 m-auto h-full md:px-4 md:py-8 px-2 py-4"}>
                         <form onSubmit={onSubmit} className={"mt-10"}>
                             <div className="relative contact_input">
                                 <label htmlFor="name" className={"text-typo-dark-400  font-medium"}>Your Name</label>
                                 <input onChange={onChange} id="name" name="name" type="text" required={true}
                                        className="px-2 rounded-lg h-10 w-full bg-indigo-100 border-transparent text-typo-light-300 placeholder-transparent transition-all focus:outline-none border-2 focus:border-green-400"
                                        placeholder="Name"/>
                             </div>

                             <div className="relative mt-10 contact_input">
                                 <label htmlFor="email" className={"text-typo-dark-400 font-medium"}>Your Email</label>
                                 <input onChange={onChange} id="email" name="email" type="text" required={true}
                                        className="px-2 rounded-lg h-10 w-full bg-indigo-100 border-transparent text-typo-light-300 placeholder-transparent transition-all focus:outline-none border-2 focus:border-green-400"
                                        placeholder="john@doe.com"/>
                             </div>


                             <div className="mt-10 relative contact_input">
                                 <label htmlFor="message" className={"text-typo-dark-400  font-medium"}>Your Message</label>
                                 <textarea onChange={onChange} id="message" name={"message"} required={true}
                                        className="px-2 rounded-lg w-full bg-indigo-100 border-transparent text-typo-light-300 placeholder-transparent transition-all focus:outline-none border-2 focus:border-green-400 resize-none h-28"
                                        />
                             </div>
                             {
                                 <p className={"text-green-300 mt-2"}>{data.error}</p>
                             }
                             {
                                data.sent && <p className={"text-green-500 mt-2"}>Thank you for your message</p>
                             }

                             <button  type="submit" className="flex mt-14 text-center ml-auto w-28 justify-center items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-sm text-white bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-150">
                                 {data.loading && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                       xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                                 </svg>}
                                 Send <span className={"ml-2"}><FaPaperPlane/></span>
                             </button>
                         </form>
                    </div>
                </div>


            </div>
        </SectionContainer>
    )
}

export default Contact;