import {SectionContainer} from "../Comp/SectionContainer";
import {SectionHeader} from "../Comp/SectionHeader";
import {SectionRow} from "../Comp/SectionRow";
import {FaMailBulk, FaPaperPlane, FaPhone} from "react-icons/fa";
import classNames from "classnames";
import {useState} from "react";
import {CONTACT_API} from "../../assets/data/API";

const ContactInfo = [
    {
        "title": "Phone",
        "text": "+8801753489310",
        "icon": <FaPhone/>
    },
    {
        "title": "Email",
        "text": "khanasfireza10@gmail.com",
        "icon": <FaMailBulk/>
    },
    {
        "title": "Location",
        "text": "Dhaka, Bangladesh",
        "icon": <FaPaperPlane/>
    },
]

const FloatingLabel = ({text, className, ...extra}) =>
    <label
    {...extra}
    className={classNames("absolute left-0 -top-3.5 " +
        "dark:peer-placeholder-shown:text-typo-dark-200 peer-placeholder-shown:text-typo-light-200 text-sm transition-all " +
        "peer-placeholder-shown:text-base " +
        "peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 " +
        "peer-focus:text-sm peer-focus:text-green-500 peer-valid:-top-3.5 " +
        "peer-valid:text-gray-600 peer-valid:text-sm peer-valid:text-green-500", className)}>{text}
    </label>


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

    return(
        <SectionContainer>
            <SectionHeader header={"Contact Me"} text={"Feel free to contact me"}/>
            <SectionRow className={"mt-20 gap-16"}>
                <div className={"grid gap-y-16 md:mr-auto md:m-0 m-auto"}>

                    {
                        ContactInfo.map((contact, key) =>
                            <div key={key} className={"flex flex-row "}>
                                <div className={"h-14 w-14 text-xl rounded-full mr-3 bg-primaryLight grid place-items-center"}>
                                    {contact.icon}
                                </div>
                                <div>
                                    <p className={"mb-2 text-2xl text-typo-light-300 dark:text-typo-dark-300"}>{contact.title}</p>
                                    <p className={"text-lg text-typo-light-100 dark:text-typo-dark-100"}>{contact.text}</p>
                                </div>
                            </div>
                        )
                    }

                </div>

                <div>
                    <div className={"dark:bg-theme-dark-100 bg-gray-200 rounded-xl bg-opacity-70 w-9/12 md:ml-auto m-auto h-full md:px-10 px-4 py-8"}>
                         <h2 className={"dark:text-typo-dark-400 text-3xl text-center"}>Send Message </h2>
                         <form onSubmit={onSubmit} className={"mt-10"}>
                             <div className="relative">
                                 <input onChange={onChange} id="name" name="name" type="text" required={true}
                                        className="bg-transparent peer h-10 w-full border-b border-gray-300 dark:text-typo-dark-200 text-typo-light-200 placeholder-transparent focus:outline-none focus:border-green-500"
                                        placeholder="Name"/>
                                 <FloatingLabel text={"Name"} htmlFor={"name"}/>
                             </div>

                             <div className="relative mt-10">
                                 <input onChange={onChange} id="email" name="email" type="text" required={true}
                                        className="bg-transparent peer h-10 w-full border-b border-gray-300 dark:text-typo-dark-200 text-typo-light-200 placeholder-transparent focus:outline-none focus:border-green-500"
                                        placeholder="john@doe.com"/>

                                 <FloatingLabel text={"Email"} htmlFor={"email"}/>
                             </div>

                             <div className="mt-10 relative">
                                 <textarea onChange={onChange} id="message" name={"message"} required={true}
                                        className="bg-transparent resize-none  overflow-y-auto peer h-20 py-4 w-full border-b border-gray-300 dark:text-typo-dark-200 text-typo-light-200 placeholder-transparent focus:outline-none focus:border-green-500"
                                        placeholder="Password"/>
                                 <FloatingLabel text={"Message"} htmlFor={"message"}/>
                             </div>
                             {
                                 <p className={"text-red-400 mt-2"}>{data.error}</p>
                             }
                             {
                                data.sent && <p className={"text-green-400 mt-2"}>Thank you for your message</p>
                             }


                             <button type={"submit"} className="mt-14 px-4 py-2 rounded bg-green-500 hover:bg-green-600 text-white font-semibold text-center block w-full focus:outline-none  cursor-pointer">Send </button>

                         </form>
                    </div>
                </div>

            </SectionRow>
        </SectionContainer>
    )
}

export default Contact;