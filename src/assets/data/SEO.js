const BASE_URL = `https://khanasfireza.dev/`

const getContentUrl = (contentUrl) => BASE_URL + contentUrl

const SEO_Image = getContentUrl("_next/image?url=%2F_next%2Fstatic%2Fmedia%2FKhanAsfiReza.ada32960.png&w=3840&q=75")

export const KeyWords = [
    "khan asfi reza",
    "khan",
    "asfi",
    "reza",
    "pranto",
    "Khan Asfi Reza",
    "khanasfireza",
    "khan-asfi-reza",
    "django",
    "python",
    "docker",
    "django rest framework",
    "djangorestframework",
    "pythonbangladesh",
    "djangobangladesh",
    "bangladesh",
    "dhaka",
    "djangodhaka",
    "djangopython",
    "django dhaka",
    "django bangladesh",
    "api dhaka",
    "api bangladesh",
    "fullstack developer",
    "full stack developer",
    "web developer",
    "fullstackdeveloper",
    "backend developer",
    "backend engineer",
    "zelf",
    "hellozelf",
    "zelflive",
    "zelf engineer",
    "cv",
    "resume",
    "engineer",
    "computer science",
    "khan engineer",
    "khan developer",
    "khan asfi developer"
]

export  const SeoMetaTags = [
    {
        name: "title",
        content: "Khan Asfi Reza | Full Stack Developer",
        property: ""
    },
    {
        name: "description",
        content: "Hello there! I'm Khan Asfi Reza, a passionate Pythonista and lead backend engineer at Zelf Technologies. With a deep-rooted love for web technologies, I strive to deliver innovative, efficient, and robust solutions to complex problems. My curiosity for compilers and interpreters fuels my passion for software engineering, motivating me to explore new horizons and sharpen my skills each day.",
        property: ""
    },
    {
        name: "keywords",
        content: KeyWords.toString(),
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
        content: "Hello there! I'm Khan Asfi Reza, a passionate Pythonista and lead backend engineer at Zelf Technologies. With a deep-rooted love for web technologies, I strive to deliver innovative, efficient, and robust solutions to complex problems. My curiosity for compilers and interpreters fuels my passion for software engineering, motivating me to explore new horizons and sharpen my skills each day."
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
