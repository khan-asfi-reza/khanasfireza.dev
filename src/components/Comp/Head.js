import {SeoMetaTags} from "../../assets/data/SEO";
import Head from "next/head";

export const SeoHead = () => (
    <Head>
        <title>Khan Asfi Reza | Full Stack Developer</title>
        <link rel="shortcut icon" href=""/>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        {
            SeoMetaTags.map((each, i) =>
                (
                    <meta key={i} {each.name && `name=${each.name}`} content={each.content} property={each.property}/>
                )
            )
        }
    </Head>
)