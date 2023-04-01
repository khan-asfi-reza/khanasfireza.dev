import {SeoMetaTags} from "../assets/data/SEO";
import Head from "next/head";

export const SeoHead = ({title, config={}}) => (
    <Head >
        <title>Khan Asfi Reza | {title}</title>
        <link rel="shortcut icon" href=""/>

        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <link rel="shortcut icon" href="/favicon.ico" />
        {
            SeoMetaTags.map((each, i) =>
                (
                    each.name in config ? 
                    <meta key={i} name={each.name} content={
                        config[each.name].contentToAdd ? each.content + " "+config[each.name].content
                        :
                        config[each.name].content
                    } property={
                        config[each.name].propertyToAdd ? each.property + " "+config[each.name].property
                        :
                        config[each.name].property
                    }/> 
                    : 
                    <meta key={i} name={each.name} content={each.content} property={each.property}/> 

                )
            )
        }
    </Head>
)