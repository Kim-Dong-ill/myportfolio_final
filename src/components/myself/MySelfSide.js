import React from "react";
import "../../css/components/myself/myselfside.css";
import mypoto from "../../images/mypoto.jpg";
function MySelfSide() {
  return (
    <div className="myselfpage">
      <div className="myselfpageWrap">
        <section className="section myselfpageSec1">
          <div className="sec1ImgBox">
            <img className="sec1Img" src={mypoto} alt="" />
          </div>
          <div className="sec1ExWrap">
            <div className="sec1Title">김동일</div>
            <div className="sec1Text">Fullstack & Back-end</div>
          </div>
          <div className="sec1LinkWrap">
            <div>유튜브</div>
            <div>이메일</div>
            <div>카페</div>
          </div>
        </section>
        <section className="section myselfpageSec2">
          <div className="sec2Box">
            <div className="sec2Title">Age :</div>
            <div className="sec2Text">29</div>
          </div>
          <div className="sec2Box">
            <div className="sec2Title">Phone :</div>
            <div className="sec2Text">010-7183-2893</div>
          </div>
          <div className="sec2Box">
            <div className="sec2Title">Major :</div>
            <div className="sec2Text">체육학과</div>
          </div>
          <div className="sec2Box">
            <div className="sec2Title">Address:</div>
            <div className="sec2Text">광명시 하안로284</div>
          </div>
        </section>
        <section className="section myselfpageSec3">
          <div className="sec3Title">Awards History</div>
          <div className="sec2TextWrap">
            <div>학과 수석 졸업</div>
            <div>GIS 프로젝트 최우수상</div>
            <div>O2O 프로젝트 우수상</div>
            <div>온투인 공모전 동상</div>
            <div>. . . </div>
          </div>
        </section>
        <section className="section myselfpageSec4">
          <div className="sec4Title">Skills</div>
          <div className="sec4TextWrap">
            <div className="sec4SkillWrap">
              <div className="sec4Text">
                <div>Html</div>
                <div>99%</div>
              </div>
              <div className="sec4Percent">
                <div className="se4PercentHtml"></div>
              </div>
            </div>
            <div className="sec4SkillWrap">
              <div className="sec4Text">
                <div>Css</div>
                <div>99%</div>
              </div>
              <div className="sec4Percent">
                <div className="se4PercentCss"></div>
              </div>
            </div>
            <div className="sec4SkillWrap">
              <div className="sec4Text">
                <div>React</div>
                <div>99%</div>
              </div>
              <div className="sec4Percent">
                <div className="se4PercentReact"></div>
              </div>
            </div>
            <div className="sec4SkillWrap">
              <div className="sec4Text">
                <div>JavaScript</div>
                <div>85%</div>
              </div>
              <div className="sec4Percent">
                <div className="se4PercentJavaScript"></div>
              </div>
            </div>
            <div className="sec4SkillWrap">
              <div className="sec4Text">
                <div>Java</div>
                <div>80%</div>
              </div>
              <div className="sec4Percent">
                <div className="se4PercentJava"></div>
              </div>
            </div>
            <div className="sec4SkillWrap">
              <div className="sec4Text">
                <div>Node</div>
                <div>80%</div>
              </div>
              <div className="sec4Percent">
                <div className="se4PercentNode"></div>
              </div>
            </div>
            <div className="sec4SkillWrap">
              <div className="sec4Text">
                <div>Figma</div>
                <div>99%</div>
              </div>
              <div className="sec4Percent">
                <div className="se4PercentFigma"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MySelfSide;
