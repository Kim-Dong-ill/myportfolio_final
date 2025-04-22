import React from "react";
import "../css/body/body.css";
import Header from "../layout/Header";
import { NavLink } from "react-router-dom";

function Body() {
  return (
    <>
      <div className="body">
        <Header></Header>
        <div className="body_container">
          <div className="body_inner">
            <NavLink to="/starforest">
              <div className="body_box starforest">별숲</div>
            </NavLink>
            <NavLink to="dangdang">
              <div className="body_box dangdang">댕댕일주</div>
            </NavLink>
            <NavLink to="lib">
              <div className="body_box lib">한국데이터통신</div>
            </NavLink>
          </div>
          <div className="body_inner">
            <NavLink to="shop">
              <div className="body_box shop">쇼핑몰</div>
            </NavLink>
            <NavLink to="myself">
              <div className="body_box myself">내 설명</div>
            </NavLink>
            <NavLink to="chatbotex">
              <div className="body_box chatbot">챗봇</div>
            </NavLink>
            <NavLink to="eyemtaxi">
              <div className="body_box chatbot">아임택시</div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
