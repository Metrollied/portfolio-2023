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
        title: "LiveBuzz Junior Web Developer",
        description: "As a Junior Web Developer for LiveBuzz I design, produce and deploy websites for use in registration for trade events. Through this position I have learnt about PHP, maintaining and improving code for live, customer facing websites and interacting with a complex back-end. Another part of this position is to work as an onsite-technician, through the setting up and maintaining of registration areas at events both in the UK and abroad. ",
        imageurl: "images/livebuzz.jpeg",
        linkurl: "https://www.livebuzz.co.uk/",
        skills: [skills.html, skills.css, skills.javascript, skills.php ]

    },
    {
        title: "HyperionDev Bootcamp",
        description: "This University of Manchester co-certified course taught Python, a popular front-end language. During the bootcamp, I developed a strong understanding of core Python concepts such as data types, variables, conditionals, loops, functions, and object-oriented programming. I honed my skills in writing clean, efficient, and well-documented code, fostering best practices in software development.",
        imageurl: "images/hyperiondev.jpeg",
        linkurl: "https://www.hyperiondev.com/portfolio/127901/",
        skills: [skills.python]

    },
    {
        title: "Login App",
        description: "This app uses the MERN stack and Redux to create a safe login portal, complete with input sanitation and encryption through a secret key. Cookies are also used in this app to allow the user to remain logged in for a short time.",
        imageurl: "images/Login-App.jpeg",
        linkurl: "https://login-app-cnoe.onrender.com/",
        skills: [skills.html, skills.css, skills.javascript, skills.node, skills.mongodb, skills.react,],
        alignment: "left",
    },
    {
        title: "Plant Inventory",
        description: "Inventory",
		description: "Using CRUD methods and MongoDB as a back-end, this Plant Inventory app allows users to create, update, and keep track of plants and their stock levels through a MERN stack with Pug as a templating language. Hosted on Render, the app also allows for image upload and use.",
        imageurl: "images/Plant-Inventory.jpeg",
        linkurl: "https://plantinventoryapp.onrender.com/",
        skills: [skills.html, skills.css, skills.javascript, skills.node, skills.mongodb, skills.pug],
        alignment: "left",
    },
    {
        title: "React CV Generator",
        description: "By employing React states this app allows a user to create a CV that is then dynamically displayed based on the information entered by the user. The app allows the user to choose the size of sections and automatically generates the CV based on this.",
        imageurl: "images/projects/cv-app.png",
        linkurl: "https://metrollied.github.io/cv-app/",
        skills: [skills.html, skills.css, skills.javascript, skills.react,],
        alignment: "left",
    },
    {
        title: "React Memory Game",
        description: "By employing React states this app allows a user to create a CV that is then dynamically displayed based on the information entered by the user.",
        imageurl: "images/Memory-Game.jpeg",
        linkurl: "https://metrollied.github.io/memory-game/",
        skills: [skills.html, skills.css, skills.javascript, skills.react,],
        alignment: "left",
    },
    {
        title: "React Shop",
        description: "This is a single-page application shop demo, using React and Fake Store API. By using promises in conjunction with React states the site allows a user to add, remove, and view items in their basket (but not to checkout!)",
        imageurl: "images/projects/theshop.png",
        linkurl: "https://metrollied.github.io/shopping-app/",
        skills: [skills.html, skills.css, skills.javascript, skills.react,],
        alignment: "left",
    },
    {
        title: "Pub Landing Page",
        description: "This simple website was create to serve as single landing page for a small business.",
        imageurl: "images/projects/pub.png",
        linkurl: "https://metrollied.github.io/westacre-stag/",
        skills: [skills.html, skills.css],
        alignment: "left",
    },
    {
        title: "Car Splash Page",
        description: "This small website was created to work on the UI and aesthetics of a website, and as a test for using Bootstrap.",
        imageurl: "images/projects/car.png",
        linkurl: "https://metrollied.github.io/e-golf/",
        skills: [skills.html, skills.css],
        alignment: "left",
    }
]

module.exports = projects;