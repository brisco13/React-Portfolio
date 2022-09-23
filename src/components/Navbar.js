import React from 'react'

// structure the navbar but return it as a function that can utilize the handlePageChange function and the currentPage varaible.
function Navbar({currentPage, handlePageChange}){
    return (
    <ul class="nav">
        <li class="nav-item">
            <a onClick={()=>handlePageChange('AboutMe')}className={currentPage==='AboutMe'?'nav-link active' : 'nav-link'} href="#AboutMe">About Me</a>
        </li>
        <li class="nav-item">
            <a onClick={()=>handlePageChange('Contact')}className={currentPage==='Contact'?'nav-link active' : 'nav-link'} href="#Contact">Contact Me</a>
        </li>
        <li class="nav-item">
            <a onClick={()=>handlePageChange('Portfolio')}className={currentPage==='Portfolio'?'nav-link active' : 'nav-link'} href="#Portfolio">My Portfolio</a>
        </li>
        <li class="nav-item">
            <a onClick={()=>handlePageChange('Resume')}className={currentPage==='Resume'?'nav-link active' : 'nav-link'} href="#Resume">My Resume</a>
        </li>
    </ul>)
}

export default Navbar;