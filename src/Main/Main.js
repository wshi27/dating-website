import MemberList from "./MemberList/MemberList.js";
import Ads from "./Ads/Ads.js";
import "./Main.css";

const main_content = pros => {
  return (
    <div class="mainContent">
      <MemberList></MemberList>
      <Ads></Ads>
    </div>
  );
};

export default main_content;
