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
  const fieldRef = useRef(null);
  useEffect(() => {
    fieldRef.current && (fieldRef.current.innerText = value);
  }, [value]);
  return (
    <div
      className="ChatField"
      sx={{
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        alignItems: "center",
      }}
    >
      <RefreshCw
        onClick={() => fieldRef.current && onShuffle(fieldRef.current)}
        style={{ cursor: "pointer" }}
      />
      <div
        type="text"
        value={value}
        onChange={onChange}
        ref={fieldRef}
        contentEditable="true"
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
      ></div>
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

  const setRandomQuestion = (el) => {
    let chosenQuestion, randomIndex;
    do {
      randomIndex = Math.round(Math.random() * (curatedQuestions.length - 1));
      chosenQuestion = curatedQuestions[randomIndex];
    } while (curatedQuestions[randomIndex] === fieldValue);
    setFieldValue((el.innerText = chosenQuestion));
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
      <div
        className="response-box"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "300px",
          border: "2px solid",
          borderColor: "border",
          padding: "15px",
          borderRadius: "7px",
          margin: "10px",
        }}
      >
        {isLoading ? "Loading..." : answer}
      </div>

      <ChatField
        onShuffle={setRandomQuestion}
        onSend={() => setQuestion(fieldValue)}
        onChange={updateField}
        value={fieldValue}
      />
    </div>
  );
}
