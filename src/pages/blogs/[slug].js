import Header from "../../components/Header";
import BodyContent from "../../container/Layout/BodyContent";
import Footer from "../../elements/Home/Footer";
import {SeoHead} from "../../components/Head";
import ScrollToTop from "../../components/ScrollToTop";
import {useEffect} from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import oneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark';
import oneLight from 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark';
import yaml from "react-syntax-highlighter/dist/cjs/languages/prism/yaml";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import docker from "react-syntax-highlighter/dist/cjs/languages/prism/docker";
import readingTime from "reading-time";
import { useCustomTheme } from "../../hooks/useCustomTheme";
import getBlogs from "../../apis/getBlogs";

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('html', jsx);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('yaml', yaml);
SyntaxHighlighter.registerLanguage('shell', bash);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('Dockerfile', docker);

const Home = ({data, title}) => {
    const theme = useCustomTheme()
    const customRenderers = {
        h1(hText){
            return <h1 className="text-primaryLight font-bold 2xl:my-8 my-6 2xl:text-5xl md:text-4xl text-3xl">
                {hText.children}
            </h1>
        },
        h2(hText){
            return <h2 className="dark:text-typo-dark-400 text-typo-light-400 my-6 text-2xl font-semibold">
                {hText.children}
            </h2>
        },
        h3(hText){
            return <h3 className="dark:text-typo-dark-400 text-typo-light-400 my-6 text-2xl font-semibold">
                {hText.children}
            </h3>
        },
        h4(hText){
            return <h4 className="dark:text-typo-dark-400 text-typo-light-400 my-6 text-2xl font-semibold">
                {hText.children}
            </h4>
        },
        li(list) {
            return(
                    
            <li className="my-1 text-typo-light-400 dark:text-typo-dark-100">
                - {list.children} 
            </li>
            )
        },
        p(paragraph) {
            const { node } = paragraph;
            
            if (node.children[0].tagName === 'img') {
                const image = node.children[0];
                return (
                    <div className="my-5">
                        <img
                            src={image.properties.src.replace("github.com", "raw.githubusercontent.com").replace('blob/', '')}
                            alt={image.alt}
                            
                        />
                    </div>
                );
            }
            

            return <p className="my-4 text-typo-light-400 dark:text-typo-dark-100">{paragraph.children}</p>;
        },

        code(code) {
            let { className, children } = code;
            if(className === undefined){
                className = ''
            }
            const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
            return (
                <SyntaxHighlighter
                    style={theme.theme === "dark" ? oneDark : oneLight}
                    language={language}>
                    {children}
                </SyntaxHighlighter>
            );
        },
    };

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
    }, [])
  return(
      <>
        <SeoHead title={title} />
        <Header/>
        <BodyContent>
        <div className={"container mx-auto py-8 px-4 sm:px-6 lg:px-8 dark:bg-theme-dark-100 bg-theme-light-100"}>
            <ReactMarkdown components={customRenderers}>{data}</ReactMarkdown>
        </div>
        </BodyContent>
        <Footer/>
        <ScrollToTop/>
      </>
  )
}

export async function getStaticPaths() {

  const data = await getBlogs()
  return {
    paths: data.map(
        each => (
            {
                "params": {
                    "slug": each.slug
                }
            }
        )
    ),
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps({params}) {

    const {slug} = params;
    const api = await fetch(`https://raw.githubusercontent.com/khan-asfi-reza/blogs.khanasfireza.dev/master/${slug}.md`)
    const data = await api.text()
    const _title = slug.charAt(0).toUpperCase() + slug.slice(1)
    let title = "Blog"
    try{
        title = _title.replaceAll("-", " ")
    }catch{
        title = "Blog"
    }
    return {
      props: {
        data: data,
        title: title
      }, // will be passed to the page component as props
    }
  }

export default Home;