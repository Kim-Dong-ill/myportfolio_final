import React, { useEffect, useState, useRef } from "react";
import "../css/components/pageseven.css";

function PageSeven({ PageSevenContents }) {
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
    <div className="pageSeven" ref={ref}>
      <div className="pageSevenImgWrap">
        <img src={PageSevenContents.img[1]} alt="" />
        <img src={PageSevenContents.img[0]} alt="" />
      </div>
      <div className="pageSevenTitleWrap">
        <div className={`${visible ? "animate-title0" : ""}`}>
          {PageSevenContents.title[0]}
        </div>
        <div className={`${visible ? "animate-title1" : ""}`}>
          {PageSevenContents.title[1]}
        </div>
      </div>
    </div>
  );
}

export default PageSeven;
