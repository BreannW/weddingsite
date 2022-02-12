import * as React from 'react'
import { container, monogram, homeNav } from "./navbar.module.css"
import NavBarItems from './navbar-items'

const NavBar = ({isHomepage}) => {

        if(isHomepage){
            return(
            <nav className={`${homeNav} ${container}`}>
                <div className={monogram}> SB </div>
                <NavBarItems /> 
            </nav>
            )
            
        } else{
            return(
            <nav className={container}>
                <div className={monogram}> SB </div>
                <NavBarItems />
            </nav>
            )
        };
    
    
}

export default NavBar