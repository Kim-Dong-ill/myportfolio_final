import React, { useEffect, useState } from "react";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import Starforest from "./pages/Starforest";
import Dangdang from "./pages/Dangdang";
import Lib from "./pages/Lib";
import Shop from "./pages/Shop";
import Myself from "./pages/Myself";
import Chatbot from "./pages/Chatbot";
import ChatBotEx from "./pages/ChatBotEx";
import BlockScreen from "./components/BlockScreen";
import EyemTaxi from "./pages/EyemTaxi";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const mobileBreakpoint = 1500;
  useEffect(() => {
    // 화면 크기 변경 감지 함수
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 화면이 작을 때 BlockScreen 컴포넌트 표시
  if (windowWidth < mobileBreakpoint) {
    return <BlockScreen />;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/starforest" element={<Starforest />}></Route>
        <Route path="/dangdang" element={<Dangdang />}></Route>
        <Route path="/lib" element={<Lib />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/myself" element={<Myself />}></Route>
        <Route path="/chatbot" element={<Chatbot />}></Route>
        <Route path="/chatbotex" element={<ChatBotEx />}></Route>
        <Route path="/eyemtaxi" element={<EyemTaxi />}></Route>
      </Routes>
    </div>
  );
}

export default App;
