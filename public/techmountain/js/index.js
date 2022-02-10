const isInViewport = function (el) {
    var scrollPosition = document.documentElement.scrollTop;

    return  scrollPosition >= el.offsetTop - el.offsetHeight * 0.25 &&
        scrollPosition <
        el.offsetTop + el.offsetHeight - el.offsetHeight * 0.25
};


const onViewPort = (element, callback) => {
    window.addEventListener('scroll', function(event) {
        // add event on scroll
        if (isInViewport(element)) {
            //if in Viewport
            callback()
        }

    }, false);
};

const Element = (id) => document.getElementById(id);


const navbarMobileExpand = Element("navbarMobileExpand");
const navbarNavMenu = Element("navbarNavMenu");

const navbarExtend = () => {
        navbarNavMenu.classList.toggle("navbar__nav__open");
        navbarMobileExpand.classList.toggle("expand__button__open");
};

navbarMobileExpand.onclick = function () {
    navbarExtend()
};

const navTags = document.querySelectorAll(".navbar__nav__ul__li__a");
const sections = document.querySelectorAll(".section");


navTags.forEach((each) => {
    each.addEventListener("click", ()=>{
        navbarExtend()
    })
});

const removeActiveClasses = () => {
    navTags.forEach((each)=>{
        each.classList.remove("nav__active")
    })
};

const addActiveClass = (id) => {
    const selector = `.navbar__nav__ul__li a[href="#${id}"]`;
    document.querySelector(selector).classList.add("nav__active");
};

sections.forEach((eachSection) => {
    onViewPort(eachSection, ()=>{
        removeActiveClasses();
        addActiveClass(eachSection.attributes.id.value)
    })
});



const navbar = Element("navbar");
const sectionOne = Element("main__section");

const sectionOneOptions = {
    rootMargin: "-100px 0px 0px 0px",
};


const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navbar.classList.add("navbar__white");
            } else {
                navbar.classList.remove("navbar__white");
            }
        });
    },
    sectionOneOptions);

sectionOneObserver.observe(sectionOne);


const animationsOnScroll = [];

const onScrollAnimation = (element, animation) => {

    return function(){
    var scrollPosition = document.documentElement.scrollTop;
    if(scrollPosition >= element.offsetTop - element.offsetHeight * 1.4 &&
        scrollPosition <
        element.offsetTop + element.offsetHeight - element.offsetHeight * 1.4){
        element.classList.add(animation)
    }
    }

};
animationsOnScroll.push(onScrollAnimation(Element("about"), "fade-left"));
animationsOnScroll.push(onScrollAnimation(Element("motto"), "fade-right"));
animationsOnScroll.push(onScrollAnimation(Element("work"), "scroll-anim"));
animationsOnScroll.push(onScrollAnimation(Element("projects"), "projects__animated"));
animationsOnScroll.push(onScrollAnimation(Element("contact"), "contact__animated"));
animationsOnScroll.push(onScrollAnimation(Element("blog"), "blog__animated"));
window.onscroll = function () {
    animationsOnScroll.forEach(eachAnim => {
        eachAnim()
    })
};


Element("learnMore").onclick = function () {
    Element("about").scrollIntoView();
};

const layerButtonEvent = (layer) => {
    Element("layerMask").classList.toggle("layer__display__none");
    Element(layer).classList.toggle("layer__display__none");
    Element(layer).classList.toggle("layer__display__animation__on");
    Element(layer).classList.toggle("layer__display__animation__off");
    Element("body").classList.toggle("scroll__off");
};

Element("projectBtn").onclick = function () {
    layerButtonEvent("layerProject")
};

Element("layerProjectClose").onclick = function () {
    layerButtonEvent("layerProject")
};

Element("hireUsButton").onclick = function () {
    layerButtonEvent("hireUsSection")
};

Element("layerHireUsCancel").onclick = function () {
    layerButtonEvent("hireUsSection")
};

