import Recat from "react";

import PageIcon from "../../static/home.png";
import UserIcon from "../../static/user.png"

import "./style/header.scss";

const Header = () => {
    
    return (
        <header className="header-container">
            <div className="header-box">
                <div>
                    <img src={PageIcon} alt="page-icon" className="header-icon" />
                    <h2 className="header-logo">asdasd</h2>
                </div>
                <div>
                    <img src={UserIcon} alt="header-user-info-icon" className="header-user-info-icon"/>
                </div>            
            </div>
        </header>
    )
}

export default Header;