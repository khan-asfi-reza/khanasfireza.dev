const Layout = ({children}) => {
    return(
        <main className={"bg-theme-light-200 dark:bg-theme-dark-200 overflow-x-hidden"}>
            {children}
        </main>
    )
}

export default Layout;