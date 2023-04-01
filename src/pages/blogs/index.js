import Header from "../../components/Header";
import BodyContent from "../../container/Layout/BodyContent";
import Footer from "../../elements/Home/Footer";
import {SeoHead} from "../../components/Head";
import ScrollToTop from "../../components/ScrollToTop";
import {useEffect} from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import getBlogs from "../../apis/getBlogs";
import Image from "next/image";
import HomeImage from "../../assets/images/KhanAsfiReza.png"
import Link from "next/link";

const Blog = ({blogs, keywords}) => {
    
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
    }, [])

  return(
      <>
        <SeoHead title={"Blogs"} config={{
            "title": {"content": "Khan Asfi Reza | Blogs"},
            "keywords": {"content": keywords.toString(), contentToAdd: true},
            }
            }/>
        <Header/>
        <BodyContent>
        <main className="min-h-screen py-10">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-1 grid-cols-1 ">
            {
                blogs.map((blog) => (
                    <Link href={`/blogs/${blog.slug}`} className={"cursor-pointer"}>
                    <div className="py-4 rounded-lg cursor-pointer px-4 sm:px-4 lg:px-4 dark:bg-theme-dark-100 bg-theme-light-100">
                        <div className="h-[250px] overflow-hidden">
                          <img src={blog.image} className="h-full object-cover"/>
                        </div>
                        <div className="flex my-4  items-center justify-between">
                        <p className="text-sm text-gray-400">
                           {blog.published_at}
                        </p>
                        <p className="text-sm text-gray-400">
                           {blog.read}
                        </p>
                        </div>
                        <h3 className="my-4 text-lg font-regular text-gray-300">
                            {blog.name}
                        </h3>
                        
                        <div className="flex flex-row gap-3 items-center">
                            <p className="text-sm text-gray-400">by</p>
                            <div className="h-7 w-7 overflow-hidden bg-gray-200 rounded-full">
                                <Image src={HomeImage} width="100%" height="100%" layout="responsive" objectFit="contain" />
                            </div>
                            <p className="text-sm text-gray-400">Khan Asfi Reza</p>
                        </div>
                    </div>
                    </Link>
                ))
            }
            </div>
        </main>
        </BodyContent>
        <Footer/>
        <ScrollToTop/>
      </>
  )
}
export async function getStaticProps(context) {
    const data = await getBlogs();
    const keywords = data.map((each) => each.name.toLowerCase().split(" ")).flat(1)
    return {
      props: {
        blogs: data,
        keywords: keywords
      }, // will be passed to the page component as props
    }
  }

export default Blog;