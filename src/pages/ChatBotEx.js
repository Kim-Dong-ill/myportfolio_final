import React, { useEffect, useRef, useState } from "react";
import PageOne from "../components/PageOne";
import PageTwo from "../components/PageTwo";
import PageThree from "../components/PageThree";
import PageFour from "../components/PageFour";
import YouTubeBackground from "../components/YouTubeBackground";
import myVideo from "../videos/chatbot.mp4";
import chatbotflow from "../images/chatbot.svg";
import Loading from "../components/Loading";

function ChatBotEx() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [fadeOutLoading, setFadeOutLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef(null);
  const totalVerticalPages = 4;

  //page1
  const projectName = "Chat Bot";

  //Page2
  const tools = [
    { title: "Tools :" },
    {
      text: "VsDode, BotPress",
    },
  ];
  const libray = [
    { title: "Libray :" },
    {
      text: "react, react-dom, react-router-dom",
    },
  ];
  const db = [{ title: "" }, { text: "" }];

  //Page3
  const myPart = [
    "-Knowledge Bases-",
    "별숲 Project",
    "댕댕일주 Project",
    "아임택시 Project",
    "쇼핑몰 Project",
    "강서 도서관 Project",
    "자기소개",
  ];

  //   //Page4
  const PageFourContents = [{ title: "Workflow" }, { img: chatbotflow }];

  //youtudePage
  const youtubeId = { id: "6URFylhiGTg", mute: "0" };

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
      </div>
    </div>
  );
}

export default ChatBotEx;
