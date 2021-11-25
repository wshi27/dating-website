import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCaretDown, faEnvelope, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./header.css";

const header = props => {
  return (
    <div className="header">
      <nav className="header">
        <ul className="main-menu">
          <li>
            <img src="image/heart2.jpeg" className="icon" alt="no img" width="150px" />{" "}
          </li>

          <li className="active icon1">
            {" "}
            <FontAwesomeIcon icon={faHome} />
            首页
          </li>
          <li class="dropdown-submenu icon1">
            <FontAwesomeIcon icon={faUser} />
            我的资料
            <FontAwesomeIcon icon={faCaretDown} />
            <ul class="submenu-content">
              <li>收藏</li>
              <li>访问我的</li>
              <li>我访问的</li>
            </ul>
          </li>
          <li className="icon1">
            <FontAwesomeIcon icon={faEnvelope} />
            消息
          </li>
          <li className="icon1">
            <input type="text" placeholder="Search.." /> <FontAwesomeIcon icon={faSearch} />
            Search
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default header;
