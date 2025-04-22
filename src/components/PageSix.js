import React, { useEffect, useState, useRef } from "react";
import "../css/components/pageSix.css";

function PageSix({ PageSixContents }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="pageSix" ref={ref}>
      <div className="pageSixImgWrap">
        <img
          className={`pageSixImg ${visible ? "animate-img" : ""}`}
          src={PageSixContents.img}
          alt=""
        />
      </div>
      <div className="pageSixContents">
        <div className={`pageSixTitle ${visible ? "animate-title" : ""}`}>
          {PageSixContents.title}
        </div>
        <div className="pageSixTextWrap">
          {PageSixContents.text.map((item, idx) => {
            return (
              <div
                className={`pageSixText ${visible ? `animate-text${idx}` : ""}`}
                key={idx}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PageSix;
