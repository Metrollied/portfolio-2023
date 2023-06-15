let skills = {
    react: {
        "icon": "images/icons/react.svg",
        "title": "React",
    },
    express: {
        "icon": "images/icons/express-js.svg",
        "title": "Express",
    },
    html: {
        "icon": "images/icons/html5.svg",
        "title": "HTML5",
    },
    css: {
        "icon": "images/icons/css3.svg",
        "title": "CSS3",
    },
    javascript: {
        "icon": "images/icons/javascript.svg",
        "title": "Javascript",
    },
    mongodb: {
        "icon": "images/icons/mongodb.svg",
        "title": "MongoDB",
    },
    node: {
        "icon": "images/icons/nodejs.svg",
        "title": "NodeJS",
    },
    php: {
        "icon": "images/icons/php.svg",
        "title": "PHP",
    },
    pug: {
        "icon": "images/icons/pug.svg",
        "title": "Pug",
    },
    python: {
        "icon": "images/icons/python.svg",
        "title": "Python"
    }
}

let projects = [
    {
        title: "HyperionDev Bootcamp",
        description: "Words here that describe the app",
        imageurl: "images/hyperiondev.jpg",
        linkurl: "https://www.hyperiondev.com/portfolio/127901/",
        skills: [skills.python]

    },
    {
        title: "Login App",
        description: "Words here that describe the app",
        imageurl: "images/projects/loading.png",
        linkurl: "images/projects/loading.png",
        skills: [skills.html, skills.css, skills.javascript, skills.node, skills.mongodb, skills.react,],
        alignment: "left",
    },
    {
        title: "Plant Inventory",
        description: "Words here that describe the app",
        imageurl: "images/projects/loading.png",
        linkurl: "https://www.google.com",
        skills: [skills.html, skills.css, skills.javascript, skills.node, skills.mongodb, skills.pug],
        alignment: "left",
    },
    {
        title: "React CV Generator",
        description: "Words here that describe the app",
        imageurl: "images/projects/cv-app.png",
        linkurl: "https://metrollied.github.io/cv-app/",
        skills: [skills.html, skills.css, skills.javascript, skills.react,],
        alignment: "left",
    },
    {
        title: "React Memory Game",
        description: "Words here that describe the app",
        imageurl: "images/projects/loading.png",
        linkurl: "https://www.google.com",
        skills: [skills.html, skills.css, skills.javascript, skills.react,],
        alignment: "left",
    },
    {
        title: "React Shop",
        description: "Words here that describe the app",
        imageurl: "images/projects/theshop.png",
        linkurl: "https://metrollied.github.io/shopping-app/",
        skills: [skills.html, skills.css, skills.javascript, skills.react,],
        alignment: "left",
    },
    {
        title: "Pub Landing Page",
        description: "Words here that describe the app",
        imageurl: "images/projects/pub.png",
        linkurl: "https://metrollied.github.io/westacre-stag/",
        skills: [skills.html, skills.css],
        alignment: "left",
    },
    {
        title: "Car Splash Page",
        description: "Words here that describe the app",
        imageurl: "images/projects/car.png",
        linkurl: "https://metrollied.github.io/e-golf/",
        skills: [skills.html, skills.css],
        alignment: "left",
    }
]

module.exports = projects;