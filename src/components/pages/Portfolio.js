import React from 'react'
//import images from the back end
import customHomepage from '../../backAssets/custom-homepage.png'
import codeQuiz from '../../backAssets/codeQuiz.jpg'
import noteApp from '../../backAssets/noteApp.png'
import cacheFood from '../../backAssets/cacheFood.png'
import readMe from '../../backAssets/readMeGen.png'
import empSQL from '../../backAssets/empSQL.png'

export default function Portfolio(){
    const projectList = [
        {
            title: "Custom Home Page",
            image: customHomepage,
            repoLink: "https://github.com/brisco13/custom-homepage",
            liveLink: "https://brisco13.github.io/custom-homepage/",
            desc: "A collaborative project to create a single page application that uses HTML, JavaScript, and CSS and allows for a user to make a customized home page for their internet browser.",
            tags: "HTML, Javascript, Third-Party APIs, CSS, Materialize",
            num: "1"
        },
        {
            title: "Cache Food Decisions",
            image: cacheFood,
            repoLink: "https://github.com/brisco13/cache-food-decisions",
            liveLink: "http://damp-harbor-49836.herokuapp.com/",
            desc: "A collaborative project that uses MySQL, Express.js, Node.js, HTML, CSS, and Javascript. This application allows the user to generate meal plans based of dietary preferences and will output a compiled shopping list with the option to send the selected recipes and shopping list to the users email. The application requires the user to register and leverages authentication to save preferences. This project is still under development and is not meeting 100% user acceptance criteria",
            tags: "MySQL, Node.js, Express.js, CSS, Third-Party APIs, REST API, Bootstrap, Javascript",
            num: "2"
        },{
            title: "Read Me Generator",
            image: readMe,
            repoLink: "https://github.com/brisco13/readMeGenerator",
            liveLink: "",
            desc: "This is a terminal operated application using Node.js to generate a polished README.md file template. Due to this being a terminal operated application, there is no deployed link.",
            tags: "Node.js",
            num: "3"
        },{
            title: "Coding Quiz",
            image: codeQuiz,
            repoLink: "https://github.com/brisco13/CodingQuiz",
            liveLink: "https://brisco13.github.io/CodingQuiz/",
            desc: "This is a quiz application that utilizes HTML, CSS, and Javascript and quizzes the user on an assortment of Javascript questions.",
            tags: "HTML, JavaScript, CSS, Bootstrap",
            num: "4"
        },{
            title: "Employee SQL Database",
            image: empSQL,
            repoLink: "https://github.com/brisco13/EmployeeSQLDatabase",
            liveLink: "",
            desc: "A Node.js and MySQL application that allows for a simple employee management system run from the terminal. Allows the tracking of employee wage, position, department, and reporting structure. Due to this being a terminal operated application, there is no deployed link.",
            tags: "MySQL, Node.js, Express.js",
            num: "5"
        },{
            title: "Note App",
            image: noteApp,
            repoLink: "https://github.com/brisco13/NoteApp",
            liveLink: "https://desolate-sands-63045.herokuapp.com/",
            desc: "This is an application that allows notes to be drafted and saved to a JSON database within the repo. This is built using Express.js, HTML, CSS, and Javascript.",
            tags: "Express.js, Node.js, HTML, CSS, Bootstrap, Javascript",
            num: "6"
        },
    ];

    // create card element
    const Card = (props) => {
        
        return (
            <div class="card text-center">
                <div class="card-header">Project: #{props.num}</div>
                <img src={props.image} class="card-img-top" alt= {props.title}/>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.desc}</p>
                    <div class="row justify-content-evenly">
            
                        <a href={props.liveLink} class="col-3 btn btn-primary">See It Deployed!</a>
                    <a href={props.repoLink} class="col-3 btn btn-primary">See the Repo!</a>
                    </div>
                    
                </div>
                <div class="card-footer text-muted">
                    <b>Tags:</b> {props.tags}
                </div>
            </div>
        )
    }

    return (
    <div>
        <br></br>
        <h1 class="text-center">Portfolio</h1>
        <br></br>
        <div class="col justify-content-evenly">
            
            {projectList.map((project) => (
                <div class="container">
                <Card 
                title = {project.title} 
                image = {project.image}
                repoLink = {project.repoLink}
                liveLink = {project.liveLink}
                desc = {project.desc}
                tags = {project.tags}
                num = {project.num}
                />
                <br></br>
                <br></br>
                </div>
            ))}

        </div>

    </div>)
}