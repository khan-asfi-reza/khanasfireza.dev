const Layout = ({children}) => {
    return(
        <div className={"bg-theme-light-200 dark:bg-theme-dark-200 h-screen"}>
            {children}
        </div>
    )
}

export default Layout;