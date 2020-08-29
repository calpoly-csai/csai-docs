import React from "react";

export default function InlineFlex(props) {
  return (
    <div
      style={{
        display: "flex",
        padding: "10px",
        borderRadius: "7px",
        width: "100%",
        flexWrap: "wrap",
        background: props.bg || "transparent",
      }}
    >
      {props.children}
    </div>
  );
}
