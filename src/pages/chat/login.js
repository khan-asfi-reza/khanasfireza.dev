const Login = () => {
    return (
        <main className={"w-full h-screen bg-chat-light-100 dark:bg-chat-dark-300 grid place-items-center"}>
            <section
                className={"max-w-screen-sm md:w-9/12 w-11/12 m-auto px-4 py-7 bg-chat-light-300 dark:bg-chat-dark-100 rounded-xl"}>
                <div className={"text-center my-1"}>
                    <h2 className={"text-primaryLight font-semibold text-2xl"}>Chit<span
                        className={"text-red-500"}>Chat</span></h2>
                    <p>Welcome Back</p>
                </div>

                <form className={"md:px-4 mt-12"} method="POST">
                    <div className="relative">
                        <input id="email" name="email" type="text"
                               className="bg-transparent peer h-10 w-full border-b border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-green-500"
                               placeholder="john@doe.com"/>
                        <label htmlFor="email"
                               className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:text-green-500">Email
                            | Username</label>
                    </div>

                    <div className="mt-10 relative">
                        <input id="password" type="password" name="password"
                               className="bg-transparent peer h-10 w-full border-b border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                               placeholder="Password"/>
                        <label htmlFor="password"
                               className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:text-green-500">Password</label>
                    </div>
                    <input type="sumbit" value="Sign in"
                           className="mt-14 px-4 py-2 rounded bg-green-500 hover:bg-rose-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80 cursor-pointer"/>
                </form>

                <div className={"md:px-4 mt-5 flex flex-row justify-between"}>
                    <a href="" className={"text-red-500 no-underline text-sm"}>Forget Password?</a>

                    <a href="" className={"text-green-500 no-underline text-sm"}>Register</a>
                </div>

                <div className={"mt-6"}>
                    <p className={"text-center text-sm text-gray-500"}>All rights reserved to @Khan Asfi Reza</p>
                </div>



            </section>
        </main>
    )
}

export default Login;