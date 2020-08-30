/** @jsx jsx */
import { useState, useEffect, useRef, useCallback } from "react";
import { css, keyframes } from "@emotion/core";
import { jsx } from "theme-ui";

import t from "prop-types";
import { Send, RefreshCw } from "react-feather";

const curatedQuestions = [
  "What are the prereqs for CSC 482?",
  "What is Dr. Workman's email?",
  "Is CSC 202 going to be offered next quarter?",
  "How many units is Data Structures?",
  "Where is Dr. Lupo's office?",
  "What is the email for the CSAI club?",
  "How would I see Dr. Ventura now?",
  "What do you learn in Object Oriented Programming?",
];

const spinnerAnimation = keyframes`
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
`;

const ChatField = ({ onChange, value, onShuffle, onSend }) => {
  return (
    <div
      className="ChatField"
      sx={{
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        alignItems: "center",
      }}
    >
      <RefreshCw onClick={onShuffle} style={{ cursor: "pointer" }} />
      <input
        type="text"
        placeholder="Ask Nimbus..."
        value={value}
        onChange={onChange}
        sx={{
          padding: "10px",
          margin: "0 10px",
          bg: "header.bg",
          border: "none",
          borderRadius: "20px",
          fontFamily: "inherit",
          fontSize: "inherit",
          color: "inherit",
          width: "200px",
        }}
      />
      <Send onClick={onSend} color={"blue"} style={{ cursor: "pointer" }} />
    </div>
  );
};

const Loader = (props) => (
  <div
    className="loader"
    css={css`
      animation: ${spinnerAnimation} 1s infinite;
    `}
    sx={{ border: "3px solid primary", borderTopColor: "transparent" }}
  ></div>
);

const Bubble = ({ children }) => {
  return (
    <div
      css={css`
        color: white;
        padding: 5px 15px;
        border-radius: 20px;
        margin: 20px 0;
      `}
      sx={{ bg: "primary" }}
    >
      {children}
    </div>
  );
};

export default function NimbusWidget(props) {
  let [answer, setAnswer] = useState("");
  let [fieldValue, setFieldValue] = useState("");
  let [question, setQuestion] = useState("");
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!question.length) return;
    const askQuestion = async () => {
      setIsLoading(true);
      const body = JSON.stringify({
        question,
      });
      const response = await fetch("https://nimbus.api.calpolycsai.com/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      }).then((res) => res.json());
      setAnswer(response.answer || "");
      setIsLoading(false);
    };
    askQuestion();
  }, [question]);

  const getRandomQuestion = () => {
    const randomIndex = Math.round(
      Math.random() * (curatedQuestions.length - 1)
    );
    setFieldValue(curatedQuestions[randomIndex]);
  };

  const updateField = (e) => {
    setFieldValue(e.target.value);
  };

  return (
    <div
      className="NimbusWidget"
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        border: "2px solid border",
        borderRadius: "7px",
        width: "70%",
        height: "500px",
        minWidth: "300px",
        maxWidth: "700px",
        margin: "auto",
      }}
    >
      {isLoading ? <Loader /> : <Bubble>{answer}</Bubble>}

      <ChatField
        onShuffle={getRandomQuestion}
        onSend={() => setQuestion(fieldValue)}
        onChange={updateField}
        value={fieldValue}
      />
    </div>
  );
}
