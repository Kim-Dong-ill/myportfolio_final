import React from "react";
import {
  Webchat,
  StylesheetProvider,
  useWebchatClient,
} from "@botpress/webchat";
import "../css/pages/dangdang/chatbot.css";

function Chatbot() {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const { clientState, client } = useWebchatClient({ clientId });

  return (
    <StylesheetProvider client={client}>
      <Webchat
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </StylesheetProvider>
  );
}

export default Chatbot;
