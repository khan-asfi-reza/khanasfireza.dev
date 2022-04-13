import {SectionContainer} from "../../components/SectionContainer";
import {SectionHeader} from "../../components/SectionHeader";
import {FaLinkedin, FaMailBulk, FaPaperPlane, FaPhone, FaSpinner} from "react-icons/fa";
import {useState} from "react";
import {CONTACT_ID} from "../../assets/data/ContentID";
import {LINKEDIN} from "../../assets/data/SocialLinks";
import {motion} from "framer-motion";
import classNames from "classnames";
import {moveFromLeft} from "../../const";



const ContactLinks = () =>
    <motion.div {...moveFromLeft()} className={"grid grid-cols-3 gap-1 "}>
        <a name={"Send Email"} title={"Send Email"} href={"mailto:khanasfireza10@gmail.com"}
           className={"h-14 w-14 text-lg grid place-items-center bg-blue-400 text-typo-dark-400"}>
            <FaMailBulk/>
        </a>

        <a name={"Call Phone"} title={"Call"} href={"tel:+8801753489310"}
           className={"h-14 w-14 text-lg grid place-items-center bg-blue-400 text-typo-dark-400"}>
            <FaPhone/>
        </a>

        <a name={"LinkedIn"} title={"LinkedIn"} href={LINKEDIN} target={"_blank"}
           className={"h-14 w-14 text-lg grid place-items-center bg-blue-400 text-typo-dark-400"}>
            <FaLinkedin/>
        </a>

    </motion.div>


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
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (!data.name || !data.message || !data.email || !validateEmail(data.email)) {
            setData({...data, 'error': "Invalid Form, please enter name, email and message properly"})
        } else {
            changeData({loading: true})
            fetch("/api/mail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
                mode: 'no-cors',
                referrerPolicy: 'no-referrer',
            }).then((res) => {
                changeData({
                    name: "",
                    email: "",
                    message: "",
                    loading: false,
                    sent: true
                })
                setTimeout(() => {
                    changeData({
                        name: "",
                        email: "",
                        message: "",
                        loading: false,
                        sent: true
                    })
                }, 5000)

            }).catch((e) => {
                changeData({
                    loading: false,
                    error: "Unable to send message, please try again. " +
                        "Or send mail to my email address",
                    name: "",
                    email: "",
                    message: "",
                })
            })
        }

    }


    return (
        <SectionContainer id={CONTACT_ID} className={""}>
            <SectionHeader header={"Contact Me"} headerClassName={"text-left text-primaryLight"}/>
            <div className={"grid md:grid-cols-5 grid-cols-1 mt-20 z-20 bg-theme-dark-100 rounded-2xl z-20"}>

                <div className={"col-span-2 z-20 md:px-4 md:py-20 px-2 py-8 lg:w-9/12 md:w-full w-11/12 mx-auto "}>
                    <motion.div {...moveFromLeft()}>
                        <h2 id={"contact_h"}
                            className={"text-4xl font-semibold text-indigo-100 "}>Let's get connected</h2>
                        <hr id={"contact_hr"} className={"w-32 h-1 border-none bg-indigo-400 rounded-xl mt-3"}/>
                    </motion.div>
                    <motion.p {...moveFromLeft(0.3)} id={"contact_text"} className={"mt-14 text-typo-dark-200  text-xl"}>
                        Send me a feedback about my website and projects, for any collaboration, feel free
                        to reach out to me, I would be happy to get connected.
                        <br/>
                        Send message vai this form or you can mail me at
                        <span className={"dark:text-blue-400 text-blue-500 ml-2 "}>khanasfireza@gmail.com</span>
                    </motion.p>
                    <motion.div {...moveFromLeft(0.6)} id={"contact_btn"} className={"md:mt-32 mt-20"}>
                        <ContactLinks/>
                    </motion.div>

                </div>
                <div
                    className={"col-span-3 bg-white rounded-3xl border-[1rem] border-theme-dark-100 "}>
                    <div
                        className={"rounded-2xl bg-opacity-70 lg:w-9/12 md:w-full w-11/12 m-auto h-full md:px-4 md:py-8 px-2 py-4"}>
                        <h2 id={"contact_h"}
                            className={"text-4xl font-bold text-black"}>Send message</h2>
                        <form onSubmit={onSubmit} className={"mt-10"}>
                            <div className="relative contact_input">
                                <label htmlFor="name" className={"text-gray-800 font-medium"}>Your Name</label>
                                <input value={data.name} onChange={onChange} id="name" name="name" type="text"
                                       required={true}
                                       className={classNames(
                                           "border text-gray-700 mt-4 autofill-transparent autofill:text-gray-800 peer",
                                           "bg-gray-100 focus-within:border-emerald-500 transition-all",
                                           "duration-500 w-full h-12 active:outline-0 outline-0 px-2 focus:outline-0")}
                                       placeholder="David Silva"/>
                            </div>

                            <div className="relative mt-10 contact_input">
                                <label htmlFor="email" className={"text-gray-800 font-medium"}>Your Email</label>
                                <input value={data.email} onChange={onChange} id="email" name="email" type="text"
                                       required={true}
                                       className={classNames(
                                           "border text-gray-700 mt-4 autofill-transparent peer",
                                           "bg-gray-100 focus-within:border-emerald-500 transition-all",
                                           "duration-500 w-full h-12 active:outline-0 outline-0 px-2 focus:outline-0")}
                                       placeholder="john@doe.com"/>
                            </div>


                            <div className="mt-10 relative contact_input">
                                <label htmlFor="message" className={"text-gray-800  font-medium"}>Your
                                    Message</label>
                                <textarea value={data.message} onChange={onChange} id="message" name={"message"}
                                          required={true}
                                          placeholder={"My message"}
                                          className={classNames("border w-full active:outline-0 outline-0 text-gray-700 mt-4 autofill-transparent peer",
                                              "bg-gray-100 p-2 focus-within:border-emerald-500 transition-all", "resize-none h-28")}
                                />
                            </div>
                            {
                                <p className={"text-red-500 mt-2"}>{data.error}</p>
                            }
                            {
                                data.sent && <p className={"text-green-500 mt-2 text-xl"}>Thank you for your message</p>
                            }

                            <button type="submit"
                                    className="flex mt-14 text-center ml-auto w-32 justify-center items-center px-6 py-4  leading-6 text-lg shadow rounded-sm text-white bg-blue-500 hover:bg-indigo-700 transition ease-in-out duration-150">
                                {data.loading &&
                                    <span className={"animate-spin mr-2"}>
                                    <FaSpinner/>
                                </span>}
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