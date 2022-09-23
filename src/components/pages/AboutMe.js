import React from 'react'

export default function AboutMe({currentPage, handlePageChange}){
    return (
    <div class="row justify-content-evenly">
        <div class="col-6">
        <h1>About Me</h1>
        <br/>
        <h4>Hello! And thank you so much for stopping by.</h4>
        <br/>
        <p>My name is Brisco Arechederra. Born and raised in Northern Colorado, I graduated from Colorado State University in 2017 with a B.S. in Chemical and Biological Engineering with Honors.
        <br/>
        I have a diverse portfolio of experience that ranges from working in pyrochemical metal research and development to biotechnological pharmacuetical quality control. My current role is as a System Engineer with FWI | Poppulo. I aid in the implementation of digital signage and internal communication solutions. 
        <br/>
        Upon entering the workforce, I discovered the technology sector presents the problem-solving challenges that I enjoy most - more so than chemical and biological engineering. In 2021, I accrued enough savings to enroll in the Denver University's Coding Bootcamp where I developed a skillset to make me marketable as a web developer. For example, I designed and built this website entirely from scratch along with the projects linked above. My portfolio page outlines the technologies I have learned and used.
        <br/>
        I'd love to hear from you! Please feel free to contact me anyway that is easiest for you - I have several methods available below. 
        </p>
        <div class="row justify-content-evenly">
            <div class="col align-self-start">
            <i class="fa-brands fa-linkedin"></i>     <a class="links" href="https://www.linkedin.com/in/brisco-arechederra-4b8b05ba/">My LinkedIn</a>
            </div>
            <div class="col align-self-center">
            <i class="fa-solid fa-envelope"></i>     <a class="links" href="mailto:brisco.arch@gmail.com">Email Me</a>
            </div>
            <div class="col align-self-end">
            <i class="fa-brands fa-github"></i>     <a href="https://github.com/brisco13">My GitHub</a>
        </div>
    </div>
    </div>

        <div class="col-4 d-flex align-items-center justify-content-center">
            <div class="container">
                <img class="myPicture" src='./assets/images/brisco-picture.jpg' alt="BriscoPicture"></img>
            </div>
            
        </div>
        </div>
    
)}