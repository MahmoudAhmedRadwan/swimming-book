import React from 'react';
import './sideMenuStyle.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ProfileImg from './avatar.png'
class SideMenu extends React.Component {
    render(){
        return(
            <div className="side-menu">
                <h2 className="brand-name">
                    Swimming
                </h2>
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
                    
                    <div className="menu-navigation-list">

                    </div>
                </div>
            </div>
        )
    }
}

export default SideMenu;