export default async function getBlogs(){
    // Get List of blogs
    const blog = await fetch("https://raw.githubusercontent.com/khan-asfi-reza/blogs.khanasfireza.dev/master/blog.json")
    const raw_text = await blog.text()
    return JSON.parse(raw_text) 
}