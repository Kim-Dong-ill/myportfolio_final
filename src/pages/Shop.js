import React, { useEffect, useState, useRef } from "react";
import "../css/pages/dangdang/dangdang.css";
import YouTubeBackground from "../components/YouTubeBackground";

import PageThree from "../components/PageThree";
import PageTwo from "../components/PageTwo";
import PageOne from "../components/PageOne";
import myVideo from "../videos/shop.mp4";
import Loading from "../components/Loading";
import PageYoutube from "../components/PageYoutube";

function Shop() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [fadeOutLoading, setFadeOutLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef(null);
  const totalVerticalPages = 4;

  //page1
  const projectName = "쇼핑몰";

  //Page2
  const tools = [
    { title: "Tools :" },
    {
      text: "GitHub, Eclipse, VsCode, Postman, Oracle SQL Developer",
    },
  ];
  const libray = [
    { title: "Libray :" },
    {
      text: "thymeleaf, jpa, security, oauth2, log4j2, lombok",
    },
  ];
  const db = [{ title: "DB :" }, { text: "Oracle / Oracle SQL Developer" }];

  //Page3
  const myPart = [
    "-담당 Part-",
    "1인 project",
    "기획",
    "DB설계",
    "Front_end",
    "Back_end",
  ];

  //youtudePage
  const youtubeId = { id: "n6yC3yjeTw8", mute: "1" };

  // 세로 스크롤 제어
  useEffect(() => {
    const handleWheel = (e) => {
      if (!videoLoaded || isAnimating) return;

      const isScrollDown = e.deltaY > 0;

      if (page < totalVerticalPages && isScrollDown) {
        e.preventDefault();
        setPage((prev) => prev + 1);
      } else if (page > 1 && !isScrollDown) {
        e.preventDefault();
        setPage((prev) => prev - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [page, isAnimating, videoLoaded]);

  // 세로 애니메이션 실행
  useEffect(() => {
    if (!videoLoaded || !contentRef.current || page > totalVerticalPages)
      return;

    const posTop = (page - 1) * window.innerHeight;
    setIsAnimating(true);

    const scrollAnimation = () => {
      const start = contentRef.current.scrollTop;
      const change = posTop - start;
      const duration = 400;
      let startTime = null;

      const animateScroll = (currentTime) => {
        if (!contentRef.current) return; // 여기서도 null 체크!

        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const easeInOutQuad = (t) =>
          t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        const progress = Math.min(elapsed / duration, 1);
        contentRef.current.scrollTop = start + change * easeInOutQuad(progress);

        if (elapsed < duration) {
          requestAnimationFrame(animateScroll);
        } else {
          setIsAnimating(false);
        }
      };

      requestAnimationFrame(animateScroll);
    };

    scrollAnimation();
  }, [page, videoLoaded]);

  return (
    <div className="dangdang-container">
      {!videoLoaded && <Loading fadeOut={fadeOutLoading} />}

      <YouTubeBackground
        src={myVideo}
        onLoad={() => {
          setFadeOutLoading(true); // fade-out 시작
          setTimeout(() => setVideoLoaded(true), 700); // 애니메이션 시간 후 컴포넌트 제거
        }}
      />
      <div
        className="content-wrapper"
        ref={contentRef}
        style={{ overflowY: "hidden" }} // 기본 스크롤바 숨기기
      >
        <section className="page-section">
          <PageOne projectName={projectName} videoLoaded={videoLoaded} />
        </section>
        <section className="page-section">
          <PageTwo tools={tools} libray={libray} db={db} />
        </section>
        <section className="page-section">
          <PageThree myPart={myPart} />
        </section>
        <section className="page-section">
          <PageYoutube youtubeId={youtubeId} />
        </section>
      </div>
    </div>
  );
}

export default Shop;
