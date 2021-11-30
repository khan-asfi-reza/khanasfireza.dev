export const SectionContainer = ({className, children, ...rest}) => (
    <section className={"container mx-auto mt-10 "+ className} {...rest}>
        {children}
    </section>
)