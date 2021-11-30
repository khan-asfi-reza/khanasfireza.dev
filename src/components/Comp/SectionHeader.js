import classnames from "classnames";

const headerClassNameFunc = (className) => classnames("font-semibold md:text-6xl xs:text-5xl text-4xl", className);
const textClassNameFunc = (className) => classnames("mt-3 md:text-lg text-base", className);

export const SectionHeader = ({children, header, text, headerClassName, textClassName}) => (
    <div className={"text-center"}>
        <h2 className={headerClassNameFunc(headerClassName || "text-primary")}>{header}</h2>
        <p className={textClassNameFunc(textClassName || "text-typo-light-300 dark:text-typo-dark-100")}>{text}</p>
        {children}
    </div>
)