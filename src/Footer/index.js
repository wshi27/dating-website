import "./footer.css";
import "font-awesome/css/font-awesome.min.css";

const footer = props => {
  return (
    <div class="footer-basic">
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
        <p class="copyright">Company Name &copy; 2021</p>
      </footer>
    </div>
  );
};

export default footer;
