import React from "react";
import "../css/components/blockscreen.css";
import screenIcon from "../images/blockImg.svg";

function BlockScreen() {
  return (
    <div className="blockscreen">
      <div className="screenWrap">
        <div className="screenImg">
          <img className="blockImg" src={screenIcon} alt="" />
        </div>
        <div className="screenText">your browser is too small</div>
        <div className="textWrap">
          <div className="screenTextWrap">
            <div className="screenFirst">
              The size of your browser must be at least
            </div>
            <div className="screenPixel"> 1430px </div>
            <div className="screenLast"> wide to use portfolio.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockScreen;
