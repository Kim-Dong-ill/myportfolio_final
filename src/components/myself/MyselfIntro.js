import React from "react";
import "../../css/pages/myself/myselfintro/myselfintro.css";
import intropoto from "../../images/intorpoto.png";

function MyselfIntro() {
  return (
    <div className="myselfIntro">
      <div className="myselfIntroTitle">
        <div>안녕하세요!</div>
        <div>
          <span>소통</span>과 <span>이해</span>를 중시하는
        </div>
        <div>
          <span>김동일 </span> 입니다.
        </div>
      </div>
      <div className="myselfIntroImg">
        <img src={intropoto} alt="" />
      </div>
    </div>
  );
}

export default MyselfIntro;
