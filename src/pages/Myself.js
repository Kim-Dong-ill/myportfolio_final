import React from "react";
import "../css/pages/dangdang/myself.css";
import MySelfSide from "../components/myself/MySelfSide";
import SectionPortfolio from "../components/myself/SectionPortfolio";
import SectionSkill from "../components/myself/SectionSkill";
import SectionEducation from "../components/myself/SectionEducation";
import MyselfAwards from "../components/myself/MyselfAwards";
import MyselfIntro from "../components/myself/MyselfIntro";

function Myself() {
  return (
    <div className="myselfContainer">
      <div className="myselfContainer">
        <MySelfSide />
      </div>
      <div className="myselfRight">
        <div className="myselfRightdiv">
          <MyselfIntro />
        </div>
        <div className="myselfRightdiv">
          <SectionEducation />
        </div>
        <div className="myselfRightdiv">
          <MyselfAwards />
        </div>
        <div className="myselfRightdiv">
          <SectionPortfolio />
        </div>
        <div className="myselfRightdiv">
          <SectionSkill />
        </div>
      </div>
    </div>
  );
}

export default Myself;
