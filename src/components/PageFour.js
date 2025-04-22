import React, { useEffect, useState, useRef } from "react";
import "../css/components/pagefour.css";

function PageFour({ PageFourContents }) {
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
    <div className="pageFour" ref={ref}>
      <div className={`pageFourTitle ${visible ? "animate-title" : ""}`}>
        {PageFourContents[0]?.title}
      </div>
      <div className="pageFourContent">
        <img
          className={`pageFourImg ${visible ? "animate-img" : ""}`}
          src={PageFourContents[1]?.img}
          alt=""
        />
      </div>
    </div>
  );
}

export default PageFour;
