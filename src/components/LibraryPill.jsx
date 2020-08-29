/** @jsx jsx */
import { css } from "@emotion/core";
import { jsx, useColorMode } from "theme-ui";
import React from "react";
import t from "prop-types";

export default function LibraryPill(props) {
  const [colorMode] = useColorMode();
  const pillStyle = css`
    position: relative;
    padding: 8px 20px;
    border: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    cursor: pointer;
    border-radius: 7px;
    height: 70px;
    margin: 10px;
    box-sizing: border-box;
  `;

  const iconStyle = css`
    display: inline-block;
    object-fit: contain;
    object-position: center;
    height: 100%;
    filter: ${props.invertOnDark && colorMode === "dark"
      ? "grayscale(1) invert(1)"
      : "initial"};
    max-width: 100px;
  `;

  const labelStyle = css`
    display: inline-block;
    margin-left: 20px;
    font-weight: 600;
  `;

  const navigateToLibrary = () => {
    window.open(props.link, "__blank");
  };
  return (
    <button
      sx={{ bg: "header.bg" }}
      css={pillStyle}
      onClick={navigateToLibrary}
    >
      <img src={props.icon} alt={`${props.name} icon`} sx={iconStyle} />
    </button>
  );
}

LibraryPill.propTypes = {
  name: t.string,
  icon: t.string,
  link: t.string,
  invertOnDark: t.bool,
};
