import React from "react";
import { Link } from "react-router-dom";
import "../../css/pages/myself/myselfPortfolio/myselfPortfoloi.css";
import chatbotnail from "../../images/chatbotnail.svg";
import dangdangnail from "../../images/dangdangnail.svg";
import eyemtaxinail from "../../images/eyemtaxinail.svg";
import kimaenail from "../../images/kimaenail.svg";
import starforestnail from "../../images/starforestnail.svg";
import libnail from "../../images/libnail.svg";

function SectionPortfolio() {
  const portfolio = [
    { img: starforestnail, name: "별숲", path: "/starforest" },
    { img: libnail, name: "강서도서관", path: "/lib" },
    { img: eyemtaxinail, name: "아임택시", path: "/eyemtaxi" },
    { img: dangdangnail, name: "댕댕일주", path: "/dangdang" },
    { img: chatbotnail, name: "챗봇", path: "/chatbotex" },
    { img: kimaenail, name: "쇼핑몰", path: "/shop" },
  ];
  return (
    <div className="secPortfolio">
      <div className="secPortfolioTitle">Portfolio</div>
      <div className="secPortfolioCardWrap">
        {portfolio.map((item, idx) => {
          return (
            <Link to={item.path} key={idx} className="secPortfolioCard">
              <div className="secPortfolioImg">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="secPortfolioName">{item.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SectionPortfolio;
