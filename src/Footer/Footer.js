import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

const footer = pros => {
  return (
    <div class="footer-basic">
      <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css" />
      <footer>
        <div class="social">
          <a href="#">
            {" "}
            <i class="fa fa-google"></i>
          </a>
          <a href="#">
            <i class="fa fa-github"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
        </div>

        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="#">最新活动</a>
          </li>
          <li class="list-inline-item">
            <a href="#">常见问题</a>
          </li>
          <li class="list-inline-item">
            <a href="#">交友安全</a>
          </li>
          <li class="list-inline-item">
            <a href="#">隐私政策</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Cookie 政策</a>
          </li>
        </ul>
        <p class="copyright">Company Name © 2021</p>
      </footer>
    </div>
  );
};

export default footer;
