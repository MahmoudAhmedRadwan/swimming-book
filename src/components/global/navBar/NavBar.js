import React from 'react';
import './navBarStyle.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faSearch , faPowerOff , faComments , faTasks} from '@fortawesome/free-solid-svg-icons';

class NavBar extends React.Component {
    render(){
        return(
            <nav className="navBar">

                <div className="Side">
                    <div className="openMenu">
                        <FontAwesomeIcon icon={faBars} className="openMenuIcone" />
                    </div>
                    <div className="golpalSearch">
                        <input type="text" placeholder="Search" />
                        <FontAwesomeIcon icon={faSearch} className="searchIcone" />
                    </div>
                </div>

                <div className="Side">
                    <div className="webSite-tasks">
                        <FontAwesomeIcon icon={faTasks} className="tasks-icone" />
                    </div>
                    <div className="webSite-comments">
                        <FontAwesomeIcon icon={faComments} className="comments-icone" />
                    </div>
                    <div className="webSite-action">
                        <FontAwesomeIcon icon={faPowerOff} className="webSite-action-icone" />
                    </div>
                </div>



                
                
            </nav>
        )
    }
}

export default NavBar;