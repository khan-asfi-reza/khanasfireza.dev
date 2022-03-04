export const SectionRow = ({children, className, ...rest}) => (
    <div className={"grid md:grid-cols-2 grid-cols-1 mt-10 gap-5 "+className} {...rest}>
        {children}
    </div>
)