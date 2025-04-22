import React, { useEffect, useState } from "react";
import "../css/components/pageone.css";

function PageOne({ projectName, videoLoaded }) {
  const [showTitle, setShowTitle] = useState(false);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    if (!videoLoaded) return;

    const titleTimer = setTimeout(() => {
      setShowTitle(true);
    }, 200);

    const nameTimer = setTimeout(() => {
      setShowName(true);
    }, 600);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => {
      clearTimeout(titleTimer);
      clearTimeout(nameTimer);
    };
  }, [videoLoaded]);

  return (
    <div className="pageOne">
      <div className={`pageOneTitle ${showTitle ? "slide-in" : ""}`}>
        Project
      </div>
      <div className={`pageOneName ${showName ? "slide-in" : ""}`}>
        {projectName}
      </div>
    </div>
  );
}

export default PageOne;
