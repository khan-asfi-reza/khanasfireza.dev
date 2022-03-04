const Layout = ({children}) => {
    return(
        <main className={"bg-theme-light-200 dark:bg-theme-dark-200"}>
            {children}
        </main>
    )
}

export default Layout;