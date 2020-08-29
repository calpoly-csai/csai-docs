/** @jsx jsx */
import React from "react";
import { css } from "@emotion/core";
import { jsx } from "theme-ui";

import t from "prop-types";
import { GitHub, Mail, MessageCircle } from "react-feather";

const emailSubject = "Looking to join CSAI";
const emailTemplate = `mailto:$EMAIL?subject=${encodeURIComponent(
  emailSubject
)}`;
const defaultText = "Hey I've got a question about CSAI: ";
const textTemplate = `sms:$NUMBER?body=${encodeURIComponent(defaultText)}`;

const Link = (props) => (
  <a
    href={props.href}
    sx={{ textDecoration: "none", color: "link", height: "24px" }}
  >
    {props.children}
  </a>
);

Contact.propTypes = {
  name: t.string.isRequired,
  description: t.string,
  github: t.string.isRequired,
  email: t.string,
  textMessage: t.string,
};

const nameStyle = css`
  white-space: nowrap;
  margin: 0;
  font-weight: 600;
`;

const titleStyle = css`
  margin: 0;
  font-weight: 300;
  font-size: 15px;
`;

export default function Contact(props) {
  const profileURL = `https://github.com/${props.github}.png?size=60`;
  const githubURL = `https://github.com/${props.github}`;

  return (
    <div
      className="Contact"
      sx={{
        display: "flex",
        width: "min-content",
        p: "10px",
        bg: "header.bg",
        borderRadius: "7px",
        alignItems: "center",
        margin: "10px",
        "& > *": {
          margin: "0 12px",
        },
      }}
    >
      <img
        src={profileURL}
        sx={{
          height: "60px",
          borderRadius: "7px",
          marginLeft: "0px !important",
        }}
      />
      <div className="title">
        <p css={nameStyle}>{props.name}</p>
        <p css={titleStyle}>{props.description}</p>
      </div>
      {props.github && (
        <Link href={githubURL}>
          <GitHub />
        </Link>
      )}
      {props.email && (
        <Link href={emailTemplate.replace("$EMAIL", props.email)}>
          <Mail />
        </Link>
      )}
      {props.textMessage && (
        <Link href={textTemplate.replace("$NUMBER", props.textMessage)}>
          <MessageCircle />
        </Link>
      )}
    </div>
  );
}
