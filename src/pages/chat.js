import {useCustomTheme} from "../hooks/useCustomTheme";
import {useEffect, useReducer, useState} from "react";
import {FaBars, FaCogs, FaPhone, FaSearch, FaUser, FaUsers, FaVideo} from "react-icons/fa";
import classNames from "classnames";
import {uniqueNamesGenerator, names } from "unique-names-generator";

const colors = ["bg-red-400", "bg-purple-400", "bg-green-400", "bg-blue-400", "bg-yellow-400"]

const Chat = () => {
  const {toggleTheme, getThemeIcon} = useCustomTheme("dark");

  const [users, setUsers] = useState([])

  const [isChatOpen, setIsChatOpen] = useState(true);

  const [notification, setNotification] = useState([

      {
          "username": "T",
          "color": colors[Math.floor(Math.random()*colors.length)],
          "unread": Math.floor(Math.random()*10)
      },
      {
          "username": "T",
          "color": colors[Math.floor(Math.random()*colors.length)],
          "unread": Math.floor(Math.random()*10)
      }
  ])

  useEffect(()=>{

      const list = [];
      for(let i=0; i<100; i++){
          list.push(
              {"username": uniqueNamesGenerator(
                      {
                          dictionaries: [names],
                      }
                  ),
              "color": colors[Math.floor(Math.random()*colors.length)]})
      }

      setUsers(list);

      const notificationList = []

      for(let i=0; i<5; i++){
          notificationList.push(
              {
                  "username": ["A", "B", "C", "D", "E"][i%5],
                  "color": colors[Math.floor(Math.random()*colors.length)],
                  "unread": Math.floor(Math.random()*10)
              },
          )
      }

      setNotification(notificationList)

  }, [])

  return(
      <main className={"w-full h-screen bg-chat-light-100 dark:bg-chat-dark-300"}>
          <header className={"fixed z-100 top-0 left-0 h-10 w-full bg-chat-light-50 dark:bg-chat-dark-50 border-b border-gray-200 dark:border-gray-800"}>
                <div className="flex justify-between items-center container mx-auto h-full">
                    <div className={"flex flex-row items-center"}>
                        <button onClick={()=>{setIsChatOpen(!isChatOpen)}} className={"md:hidden px-2 py-4 text-2xl"}><FaBars/></button>
                        <h2 className={"text-primaryLight font-semibold text-2xl"}>Chit<span className={"text-red-500"}>Chat</span></h2>
                    </div>

                    <button aria-label={"theme toggle"} onClick={toggleTheme}
                            className={"align-middle duration-500 bg-primary w-7 h-7 hover:transform hover:-translate-y-1 rounded-full transition-all  text-white "}>
                        {getThemeIcon()}
                    </button>
                </div>
          </header>
          <aside className={"fixed flex flex-col top-0 left-0 h-full w-28 bg-chat-light-200 dark:bg-chat-dark-200 border-gray-200 dark:border-gray-800 border-r "}>
            <div className={"py-4 flex flex-col flex-grow h-0 items-center pt-14 overflow-y-auto"}>
                {
                    notification.map((data, key) =>
                        <div key={key} className={"relative w-12 grid place-items-center h-12 rounded-full text-center mt-4 "+ data.color}>
                            <div>
                                <p className={"mt-2 text-white text-2xl"}>{data.username}</p>
                            </div>
                            <div className={"absolute top-0 right-0 h-6 w-6 rounded-full bg-yellow-500 grid place-items-center text-white"}>
                                {data.unread}
                            </div>
                        </div>
                    )
                }
            </div>
          </aside>
          <aside className={"fixed pt-10 left-28 h-full z-50 top-0 flex flex-col z-50 h-full w-72 bg-chat-light-300 dark:bg-chat-dark-100"}>
              <div className={"py-2 border-b border-gray-500 px-3"}>
                  <div className={"px-4 h-10 w-full flex items-center border border-gray-500 focus-within:border-green-500 overflow-hidden rounded-lg"}>
                      <input type="text" placeholder={"Search"} className={"mr-2 focus:outline-none active:outline-none h-full w-full bg-transparent border-transparent"}/>
                      <button>
                          <FaSearch/>
                      </button>
                  </div>
              </div>
              <div className={"px-1 py-2 flex-1 flex flex-col "}>
                  <button className={"px-4 py-2 mb-4 rounded-xl hover:bg-chat-light-200 dark:hover:bg-chat-dark-200 w-full  bg-transparent flex flex-row items-center text-xl text-typo-light-300 dark:text-typo-dark-300 justify-between"}>
                      <span>Friends</span>
                      <FaUsers/>
                  </button>

                  <div className={"overflow-y-scroll flex-grow h-0"}>
                      {
                          users.map(
                              ({username, color}, key) =>
                                  <div className={"flex flex-row items-center justify-between px-4 py-2"} key={key}>
                                      <div className={classNames("w-10 h-10 rounded-full grid place-items-center", color)}>
                                          {username[0]}
                                      </div>
                                      <p className={"text-typo-light-300 dark:text-typo-dark-300"}>
                                          {username}
                                      </p>

                                  </div>)
                      }
                  </div>
              </div>
          </aside>

          <section className={classNames("transition transition-position duration-500 fixed h-full dark:bg-chat-dark-50 bg-chat-light-50 top-10 md:left-96 md:ml-4 md:w-[calc(100%-25rem)]  z-60", isChatOpen?"w-full left-0 ml-0": "left-96 ml-4 w-[calc(100%-25rem)]")}>
            <div className={"bg-chat-light-200 dark:bg-chat-dark-200 h-14 px-8"}>
                <div className="grid grid-cols-5 h-full w-full items-center">
                    <div className={"col-span-3 flex h-full items-center "}>
                        <div className={"mr-4 w-8 h-8 rounded-full bg-pink-500 grid place-items-center"}>
                            S
                        </div>
                        <p className={"text-typo-light-300 dark:text-typo-dark-300 mr-4"}>User</p>
                        <div className={"w-4 h-4 bg-green-600 rounded-full"}>

                        </div>
                    </div>

                    <div className={"grid grid-cols-4 col-span-2"}>
                        <div className={"grid grid-cols-2 items-center"}>
                            <button className={"h-10 w-10 rounded-full bg-gray-800 grid place-items-center"}>
                                <FaPhone/>
                            </button>
                            <button className={"h-10 w-10 rounded-full bg-gray-800 grid place-items-center"}>
                                <FaVideo/>
                            </button>
                        </div>
                        <div className={"col-span-2 py-2 px-3 flex flex-row items-center "}>
                            <div className={"mr-4 px-4 h-10 w-full flex items-center border border-gray-500 focus-within:border-green-500 overflow-hidden rounded-lg"}>
                                <input type="text" placeholder={"Search"} className={"mr-2 focus:outline-none active:outline-none h-full w-full bg-transparent border-transparent"}/>
                                <button>
                                    <FaSearch/>
                                </button>
                            </div>
                        </div>
                        <div className={"grid grid-cols-2 items-center"}>
                            <button className={"h-10 w-10 rounded-full bg-gray-800 grid place-items-center"}>
                                <FaCogs/>
                            </button>
                            <button className={"h-10 w-10 rounded-full bg-gray-800 grid place-items-center"}>
                                <FaVideo/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
          </section>
      </main>
  )
}

export default Chat;