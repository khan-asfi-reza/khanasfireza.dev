import classnames from "classnames";
import React from "react";
export const SectionContainer = React.forwardRef( ({children, className, ...rest},ref) => (
    <section ref={ref} className={classnames("container mx-auto mt-20", className && className)} {...rest}>
        {children}
    </section>
))