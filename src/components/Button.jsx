/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

export default function Button(props) {
  const buttonStyle = css`
    padding: 10px 20px;
  `;
  return <button className={buttonStyle}>{props.children}</button>;
}
