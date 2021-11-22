import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCaretDown, faEnvelope, faSearch } from "@fortawesome/free-solid-svg-icons";
const header = pros => {
  // const username=pros.username;

  return (
    <div class="header">
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}

      <nav class="header">
        <ul class="main-menu">
          <li>
            <img src="image/heart2.jpeg" class="icon" alt="no img" width="150px" />{" "}
          </li>

          <li class="active icon1">
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
          <li class="icon1">
            <FontAwesomeIcon icon={faEnvelope} />
            消息
          </li>
          <li class="icon1">
            <input type="text" placeholder="Search.." /> <FontAwesomeIcon icon={faSearch} />
            Search
          </li>
        </ul>
      </nav>

      <div>
        <meta charset="UTF-8"></meta>
        <meta name="keywords" content="相亲，社交"></meta>
        <meta name="description" content="社交网站"></meta>
        <meta httpEquiv="refresh" content="100"></meta>
      </div>
    </div>
  );
};

export default header;
