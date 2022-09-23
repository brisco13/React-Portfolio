import React from 'react'

// structure the navbar but return it as a function that can utilize the handlePageChange function and the currentPage varaible.
function Navbar({currentPage, handlePageChange}){
    return (
    <div class="custom-nav">
    <br></br>
    <ul class="nav justify-content-center">
        <li class="nav-item">
            <a onClick={()=>handlePageChange('AboutMe')}className={currentPage==='AboutMe'?'nav-link active' : 'nav-link'} href="#AboutMe"><i class="fa-sharp fa-solid fa-circle-user"></i> About Me</a>
        </li>
        <li class="nav-item">
            <a onClick={()=>handlePageChange('Contact')}className={currentPage==='Contact'?'nav-link active' : 'nav-link'} href="#Contact"><i class="fa-solid fa-envelope"></i> Contact Me</a>
        </li>
        <li class="nav-item">
            <a onClick={()=>handlePageChange('Portfolio')}className={currentPage==='Portfolio'?'nav-link active' : 'nav-link'} href="#Portfolio"><i class="fa-solid fa-file-code"></i> My Portfolio</a>
        </li>
        <li class="nav-item">
            <a onClick={()=>handlePageChange('Resume')}className={currentPage==='Resume'?'nav-link active' : 'nav-link'} href="#Resume"><i class="fa-sharp fa-solid fa-file"></i> My Resume</a>
        </li>
    </ul>
    <br></br>
    </div>
    )
}

export default Navbar;