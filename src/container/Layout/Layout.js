const Layout = ({children}) => {
    return(
        <div className={"bg-theme-light-200 dark:bg-theme-dark-200"}>
            {children}
        </div>
    )
}

export default Layout;