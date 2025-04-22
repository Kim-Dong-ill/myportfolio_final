import React, { useEffect, useRef, useState } from "react";
import "../css/components/pagetwo.css";

function PageTwo({ tools, libray, db }) {
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
    <div className="pageTwo" ref={ref}>
      <div className={`pageTwoBox ${visible ? "animate-title" : ""}`}>
        <div className="title">{tools[0]?.title}</div>
        <div className={`text ${visible ? "animate-text" : ""}`}>
          {tools[1].text}
        </div>
      </div>
      <div className={`pageTwoBox ${visible ? "animate-title" : ""}`}>
        <div className="title">{libray[0]?.title}</div>
        <div className={`text ${visible ? "animate-text" : ""}`}>
          {libray[1].text}
        </div>
      </div>
      <div className={`pageTwoBox ${visible ? "animate-title" : ""}`}>
        <div className="title">{db[0]?.title}</div>
        <div className={`text ${visible ? "animate-text" : ""}`}>
          {db[1]?.text}
        </div>
      </div>
    </div>
  );
}

export default PageTwo;
