import React, { useState } from "react";
import "../../css/pages/myself/myselfSkill/myselfSkill.css";
import github from "../../images/logos/akar-icons_github-fill.svg";
import aws from "../../images/logos/amazonwebservices-original-wordmark.svg";
import qgis from "../../images/logos/Daco_5426684 1.svg";
import docker from "../../images/logos/docker-plain-wordmark.svg";
import figma from "../../images/logos/figma-original.svg";
import gcp from "../../images/logos/Group 16.svg";
import react from "../../images/logos/logos_react.svg";
import sass from "../../images/logos/logos_sass.svg";
import mongodb from "../../images/logos/mongodb-original-wordmark.svg";
import opencv from "../../images/logos/opencv-original.svg";
import oracle from "../../images/logos/oracle-original.svg";
import dbeaver from "../../images/logos/pngaaa.com-6692094 1.svg";
import eclipce from "../../images/logos/pngwing.com (1) 1.svg";
import postgresql from "../../images/logos/postgresql-plain-wordmark.svg";
import java from "../../images/logos/Programming logos and icons by hrhasnai (23).svg";
import spring from "../../images/logos/spring-original-wordmark.svg";
import css from "../../images/logos/vscode-icons_file-type-css.svg";
import html from "../../images/logos/vscode-icons_file-type-html.svg";
import javascript from "../../images/logos/vscode-icons_file-type-js-official.svg";
import vscode from "../../images/logos/vscode-icons_file-type-vscode.svg";
import node from "../../images/logos/Frame 5.svg";

function SectionSkill() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skills = [
    { img: html, percent: "99" },
    { img: css, percent: "99" },
    { img: javascript, percent: "85" },
    { img: sass, percent: "99" },
    { img: figma, percent: "99" },
    { img: react, percent: "99" },
    { img: vscode, percent: "99" },
    { img: spring, percent: "85" },
    { img: eclipce, percent: "90" },
    { img: java, percent: "80" },
    { img: node, percent: "80" },
    { img: mongodb, percent: "85" },
    { img: oracle, percent: "80" },
    { img: dbeaver, percent: "90" },
    { img: postgresql, percent: "75" },
    { img: qgis, percent: "70" },
    { img: github, percent: "90" },
    { img: aws, percent: "60" },
    { img: gcp, percent: "60" },
    { img: docker, percent: "35" },
    { img: opencv, percent: "35" },
  ];

  return (
    <div className="sectionSkillPage">
      <div className="sectionSkillMainTitle">My Skills</div>
      <div className="sectionSkillBox">
        {skills.map((item, idx) => {
          return (
            <div
              className="skillCard"
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="skillCardInner">
                <div className="skillCardFront">
                  <img
                    className="skillBoxImg"
                    src={item.img}
                    alt="skill-icon"
                  />
                </div>
                <div className="skillCardBack">
                  <div
                    className="skillFill"
                    style={{
                      height: hoveredIndex === idx ? `${item.percent}%` : "0%",
                    }}
                  ></div>
                  <span className="skillPercentText">{item.percent}%</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SectionSkill;
