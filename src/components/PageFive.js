import React, { useEffect, useState, useRef } from "react";
import "../css/components/pagefive.css";

function PageFive({ PageFiveContents }) {
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
    <div className="pageFive" ref={ref}>
      <div className={`pageFiveTitle ${visible ? "animate-title" : ""}`}>
        {PageFiveContents[0]?.title}
      </div>
      <div className="pageFiveContent">
        <img
          className={`pageFiveImg ${visible ? "animate-img" : ""}`}
          src={PageFiveContents[1]?.img}
          alt=""
        />
      </div>
    </div>
  );
}

export default PageFive;
