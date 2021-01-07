/** @jsx jsx */
import { css } from "@emotion/core";
import { jsx, useColorMode } from "theme-ui";

export default function LinkPill({ children, href }) {
  const [colorMode] = useColorMode();
  const linkStyle = css`
    display: inline-block;
    padding: 5px 15px;
    border-radius: 25px;
    border: 2px solid;
    margin-top: 5px;
    margin-bottom: 12px;
    margin-right: 15px;
    text-decoration: none;
  `;

  return (
    <a
      css={linkStyle}
      sx={{
        bg: "background",
        color: "link",
        borderColor: "border",
      }}
      href={href}
      target="__blank"
    >
      {children}
    </a>
  );
}
