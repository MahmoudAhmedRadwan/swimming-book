import React from 'react';
import './navBarStyle.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class NavBar extends React.Component {
    render(){
        return(
            <nav className="navBar">
                <div className="openMenu">
                    <FontAwesomeIcon icon={faBars} className="openMenuIcone" />
                </div>
                <div>

                </div>
            </nav>
        )
    }
}

export default NavBar;