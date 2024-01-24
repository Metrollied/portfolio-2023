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
        title: "React Shop",
        description: "This is a single-page application shop demo, using React and Fake Store API. I was very happy with the styling used on this site and felt it was very professional, as well as being mobile-friendly. The app demonstrates my ability to use async methods to get information from the \"Fake Store\" API and React states to store the user's basket - but not to checkout.",
        imageurl: "images/projects/theshop.png",
        linkurl: "https://metrollied.github.io/shopping-app/",
        skills: [skills.html, skills.css, skills.javascript, skills.react,],
        alignment: "left",
    },
    {
        title: "Login App",
        description: "This login app was a challenge to create as it required two separate sections - a React frontend to display the page and a Node backend to connect to a MongoDB server. Creating this application taught me how to use cookies to allow users to stay logged in and how to properly sanitize user information and use bencrypt to hash sensitive passwords. I also employed Redux for the first time, a practise I wish I had started using much sooner in my projects.",
        imageurl: "images/Login-App.jpeg",
        linkurl: "https://login-app-cnoe.onrender.com/",
        skills: [skills.html, skills.css, skills.javascript, skills.node, skills.mongodb, skills.react,],
        alignment: "left",
    },
    {
        title: "Plant Inventory",
        description: "Inventory",
		description: "One of the first projects I made that employed databases, in this case with MongoDB. I really enjoyed learning about and utilising non-SQL databases. Plant Inventory employs async methods to allow CRUD methods so that users can keep track of various plants and their quantities in a fictional store. I decided to go with plants as I am a big houseplant person, and at some point may need this to keep track of the jungle my office is becoming.",
        imageurl: "images/Plant-Inventory.jpeg",
        linkurl: "https://plantinventoryapp.onrender.com/",
        skills: [skills.html, skills.css, skills.javascript, skills.node, skills.mongodb, skills.pug],
        alignment: "left",
    },
    {
        title: "React CV Generator",
        description: "React is a very powerful framework for applications, as I discovered when making this CV generator, which was my first react project. By employing React states a user can enter information in a form that is then displayed below as a mock CV. Learning React was very challenging at first, but I have grown to love how it can make web applications dynamic in a relatively simple way.",
        imageurl: "images/projects/cv-app.png",
        linkurl: "https://metrollied.github.io/cv-app/",
        skills: [skills.html, skills.css, skills.javascript, skills.react,],
        alignment: "left",
    },
    {
        title: "React Memory Game",
        description: "While improving my React capabilities, I created this Memory Game using React. Because React re-renders pages frequently, web applications can be made to completely change on a whim - as is the case here. Try to click all of the symbols without repeating any of them for the high score. The biggest challenge I had with this application was making it display correctly on all browsers, so I learnt a lot about what not to do when working with functions in web applications.",
        imageurl: "images/Memory-Game.jpeg",
        linkurl: "https://metrollied.github.io/memory-game/",
        skills: [skills.html, skills.css, skills.javascript, skills.react,],
        alignment: "left",
    },
    {
        title: "LiveBuzz Junior Web Developer",
        description: "LiveBuzz is owned by SeeTickets, a worldwide events company. As a Web Developer for LiveBuzz I work as a part of a tight knit team of 11 developers who work together to design, create and deploy registration pages for corporate events.  This is mainly through PHP and Laravel, which although I had no experience with before starting at LiveBuzz I have picked up quickly, even to the point of creating pages completely solo. Click above to see one of the pages I made in action. In this role I also attend these events and set up Linux servers and general equipment to allow customers to register or print badges, and have so far worked abroad in three countries (and counting!)",
        imageurl: "images/livebuzz.jpeg",
        linkurl: "https://chsi-stitches-2024.reg.buzz/",
        skills: [skills.html, skills.css, skills.javascript, skills.php ]

    },
    {
        title: "HyperionDev Bootcamp",
        description: "This University of Manchester co-certified course taught Python, a popular front-end language. During the bootcamp, I developed a strong understanding of core Python concepts such as data types, variables, conditionals, loops, functions, and object-oriented programming. I honed my skills in writing clean, efficient, and well-documented code, fostering best practices in software development. It was great fun to spend dedicated time learning a new language to bolster my skills as a developer.",
        imageurl: "images/hyperiondev.jpeg",
        linkurl: "https://www.hyperiondev.com/portfolio/127901/",
        skills: [skills.python]

    },
]

module.exports = projects;