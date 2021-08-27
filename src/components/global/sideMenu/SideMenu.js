import React from 'react';
import './sideMenuStyle.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faEnvelope,faLaptop } from '@fortawesome/free-solid-svg-icons';
import ProfileImg from './avatar.png'
class SideMenu extends React.Component {
    render(){
        return(
            <div className="side-menu shrinked-menu">
                {/* BRAND NAME */}
                <h2 className="brand-name">
                   <span className="brand-letters">wimming</span> S
                </h2>
                {/* PROFILE SECTION */}
                <div className="menu-profile">
                    <div className="user-info">
                        <div className="profile-image-section">
                            <div className="profile-image-icon">
                                <FontAwesomeIcon icon={faInfo} /> 
                            </div>
                            <div className="profile-image-item">
                                <img src={ProfileImg} alt="profile image" className="avatar" />
                            </div>
                            <div className="profile-image-icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                        </div>
                        <div className="user-description">
                            <h3 className="user-name">John Doe</h3>
                            <h4 className="user-position">Web Developer/Designer</h4>
                        </div>
                    </div>
                    {/* NAVIGATION SIDE MENU */}
                    <div className="menu-navigation-list">
                        <ul className="menu-items">
                            <li className="menu-item">
                                <a href="#"><FontAwesomeIcon icon={faEnvelope} /> <span className="link-text">Menu Link</span> </a>
                                <ul className="expaned-menu-itmes">
                                    <li className="expanded-menu-item">
                                        <a href="#"><span className="link-text">Expanded Menu Link</span> </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item"> 
                                <a href="#"><FontAwesomeIcon icon={faEnvelope} /><span className="link-text"> Menu Link </span> </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideMenu;