import React, { useEffect, useState, useRef } from "react";
import "../css/pages/dangdang/dangdang.css";
import PageOne from "../components/PageOne";
import PageTwo from "../components/PageTwo";
import PageThree from "../components/PageThree";
import PageFour from "../components/PageFour";
import PageFive from "../components/PageFive";
import PageSix from "../components/PageSix";
import YouTubeBackground from "../components/YouTubeBackground";
import fourDBImg from "../images/startforestDB.svg";
import fiveAPIImg from "../images/starforstAPI.svg";
import dangdangGIS from "../images/starforestGIS.svg";
import PageSeven from "../components/PageSeven";
import starforestPay from "../images/starforestPay.svg";
import starforestReservation from "../images/starforestReservation.svg";
import Loading from "../components/Loading";
import PageYoutube from "../components/PageYoutube";

function Starforest() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [fadeOutLoading, setFadeOutLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef(null);
  const totalVerticalPages = 8;

  //page1
  const projectName = "별숲";

  //Page2
  const tools = [
    { title: "Tools :" },
    {
      text: "Notion, Discord, GitHub, Eclipse, VsCode, Figma, Postman, Dbeaver",
    },
  ];
  const libray = [
    { title: "Libray :" },
    {
      text: "date-picker, react, axios, redux-toolkit, lombok, jpa, hibernate, jwt, bcryptjs",
    },
  ];
  const db = [{ title: "DB :" }, { text: "Mysql / Dbeaver" }];

  //Page3
  const myPart = [
    "-담당 Part-",
    "기획",
    "DB설계",
    "API명세서",
    "캠핑장 비즈니스",
    "예약 & 결제",
    "지도 비즈니스",
  ];

  //Page4
  const PageFourContents = [{ title: "DB" }, { img: fourDBImg }];

  //Page5
  const PageFiveContents = [{ title: "API명세서" }, { img: fiveAPIImg }];

  //Page6
  const PageSixContents = {
    title: "GIS",
    text: ["GeoJson", "KakaoMap", "$near"],
    img: dangdangGIS,
  };

  //Page7
  const PageSevenContents = {
    title: ["예약", "결제"],
    img: [starforestPay, starforestReservation],
  };

  //youtudePage
  const youtubeId = { id: "zi9VBh7yJ6o", mute: "1" };

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
        videoId={youtubeId.id}
        onReady={() => {
          setFadeOutLoading(true);
          setTimeout(() => setVideoLoaded(true), 700);
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
          <PageFour PageFourContents={PageFourContents} />
        </section>
        <section className="page-section">
          <PageFive PageFiveContents={PageFiveContents} />
        </section>
        <section className="page-section">
          <PageSix PageSixContents={PageSixContents} />
        </section>
        <section className="page-section">
          <PageSeven PageSevenContents={PageSevenContents} />
        </section>
        <section className="page-section">
          <PageYoutube youtubeId={youtubeId} />
        </section>
      </div>
    </div>
  );
}

export default Starforest;
