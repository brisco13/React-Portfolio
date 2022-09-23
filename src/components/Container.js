//import react
import React, {useState} from 'react';
//import all components/pages that will be housed in this container
import Navbar from './Navbar';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function Container() {
    //check the current page and set default;
    const [currentPage, setCurrentPage] = useState('AboutMe')
    //render the page that is needed/clicked based off the state of currentPage
    const render = () => {
        switch (currentPage) {
            default: 
                return <AboutMe/>
            case 'AboutMe':
                return <AboutMe/>;
            case 'Contact':
                return <Contact/>;
            case 'Portfolio':
                return <Portfolio/>;
            case 'Resume':
                return <Resume/>;
            }
        }
    //write a event handler function to set the state of the currentPage
    const handlePageChange = (page) => setCurrentPage(page)

    //Always return this container with one of the pages (from render) with the Navbar on top
    // The nav bar will have the attributes of the variable "currentPage" and also the event listener to set/change "currentPage"
    return (
        <div>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} /> 
        {render()}   
        {/*Add a footer Component - maybe a header component above the navbar as well*/}
        </div>
    )
}
