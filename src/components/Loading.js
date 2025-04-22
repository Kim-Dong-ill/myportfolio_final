import React, { useEffect, useRef, useState } from "react";
import iconspinner from "../images/loadingSpinnerGIF.gif";
import "../css/components/loading.css";

function Loading({ fadeOut }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const indexRef = useRef(0);
  const timeoutRef = useRef(null);

  const loadingText = [
    "영상 가져오는 중...",
    "데이터 가져오는 중...",
    "리허설 하는중...",
    "잠시만 기다려 주세요...",
    "완료!",
    "완료!",
    "완료!",
  ];

  useEffect(() => {
    const loopText = () => {
      const nextIndex = (indexRef.current + 1) % loadingText.length;
      indexRef.current = nextIndex;
      setCurrentTextIndex(nextIndex);

      const randomDelay = Math.random() * (1400 - 600) + 600;
      timeoutRef.current = setTimeout(loopText, randomDelay);
    };

    // 첫 실행
    timeoutRef.current = setTimeout(loopText, 1000); // 첫 시작 1초 딜레이

    // 언마운트 시 타이머 정리
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [loadingText]);

  return (
    <div className={`loading ${fadeOut ? "fade-out" : ""}`}>
      <div className="loadingWrap">
        <div className="loadingIcon">
          <img className="icon" src={iconspinner} alt="" />
        </div>
        <div className="loadingText">{loadingText[currentTextIndex]}</div>
      </div>
    </div>
  );
}

export default Loading;
