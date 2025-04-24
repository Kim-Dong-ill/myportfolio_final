import React from "react";
import "../css/pages/dangdang/chatbot.css";

function Chatbot() {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  // useEffect(() => {
  //   // 이미 초기화되었는지 확인
  //   if (!window.botpressWebChat) return;

  //   window.botpressWebChat.init({
  //     botId: { clientId },
  //     hostUrl: "https://cdn.botpress.cloud/webchat/v0",
  //     messagingUrl: "https://messaging.botpress.cloud",
  //     container: "#webchat",
  //     showPoweredBy: false,
  //   });
  // }, []);

  return <div id="webchat" style={{ width: "100%", height: "100vh" }} />;
}

export default Chatbot;
