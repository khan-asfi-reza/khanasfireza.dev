const BASE_URL = `https://khanasfireza.dev/`

const getContentUrl = (contentUrl) => BASE_URL + contentUrl

const SEO_Image = getContentUrl("_next/image?url=%2F_next%2Fstatic%2Fmedia%2FKhanAsfiReza.ada32960.png&w=3840&q=75")

export  const SeoMetaTags = [
    {
        name: "title",
        content: "Khan Asfi Reza | Full Stack Developer",
        property: ""
    },
    {
        name: "description",
        content: "I am Khan Asfi Reza, a full stack developer, tech enthusiast with more than 5+ Years of experience. Currently working as a freelance developer at various marketplace.",
        property: ""
    },
    {
        name: "keywords",
        content: "khan asfi reza, full stack developer, web developer, python, django, javascript, full stack developer cv, full stack developer resume, full stack web developer, font-end developer, backend developer",
        property: ""
    },
    {
        name: "robots",
        content: "index, follow",
        property: ""
    },
    {
        name: "language",
        content: "English",
        property: ""
    },
    {
        name: "msapplication-TileImage",
        content: "",
        property: SEO_Image,
    },
    {
        name: "",
        property: "og:site_name",
        content: "Khan Asfi Reza"
    },
    {
        name: "",
        property: "og:title",
        content: "Khan Asfi Reza | Full Stack Developer"
    },
    {
        name: "",
        property: "og:description",
        content: "I am Khan Asfi Reza, a full stack developer, tech enthusiast with more than 5+ Years of experience."
    },
    {
        name: "",
        property: "og:image",
        content: SEO_Image
    },
    {
        name: "",
        property: "og:type",
        content: "website"
    },
    {
        name: "",
        property: "og:image:type",
        content: "image/png"
    },
    {
        name: "",
        property: "og:image:width",
        content: "246"
    },
    {
        name: "",
        property: "og:image:height",
        content: "256"
    },
    {
        name: "",
        property: "og:url",
        content: BASE_URL
    },
]
