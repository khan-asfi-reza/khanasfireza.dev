import classnames from "classnames";
export const SectionContainer = ({className, children, ...rest}) => (
    <section className={classnames("container mx-auto mt-20", className && className)} {...rest}>
        {children}
    </section>
)