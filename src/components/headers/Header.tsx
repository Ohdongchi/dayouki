import PageIcon from "../../static/flower.png";
import UserIcon from "../../static/user.png";

import "./style/header.scss";

const Header = () => {
    
    return (
        <header className="header-container">
            <div className="header-box">
                <span>
                    <img src={PageIcon} alt="page-icon" className="header-icon" />
                    <h2 className="header-logo">asdasd</h2>
                </span>
                <span>
                    <img src={UserIcon} alt="header-user-info-icon" className="header-user-info-icon"/>
                </span>            
            </div>
        </header>
    )
}

export default Header;