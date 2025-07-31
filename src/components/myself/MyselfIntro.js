import React from "react";
import "../../css/pages/myself/myselfintro/myselfintro.css";
import intropoto from "../../images/intorpoto.png";

function MyselfIntro() {
  return (
    <div className="myselfIntro">
      <div className="myselfIntroTitle">
        <div>
          <span>화려하지</span> 않지만
        </div>
        <div>
          <span>밋밋한</span> 개발자
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
