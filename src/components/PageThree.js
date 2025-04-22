import React from "react";
import "../css/components/pagethree.css";

function PageThree({ myPart }) {
  return (
    <div className="pageThree">
      {myPart.map((item, idx) => {
        return (
          <div className="pageThreeContent" key={idx}>
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default PageThree;
