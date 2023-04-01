export default async function blogsAPI(req, res) {
    const api = await fetch("https://api.github.com/graphql", {
        "method": "POST",
        "body": JSON.stringify({
          query: `query RepoFiles {
            repository(owner: "khan-asfi-reza", name: "blogs.khanasfireza.dev") {
              object(expression: "HEAD:") {
                ... on Tree {
                  entries {
                    name
                    type
                  }
                }
              }
            }
          }`
        }),
        "headers": {
            "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`
        }
    })
    const data = await api.json()
    const blogs = data.data.repository.object.entries.filter((data) => data.type === "blob" && data.name.split(".")[-1] === ".md" && data.name.toLowerCase() !== "readme.md")
    await res.status(200).json({blogs: blogs})

}