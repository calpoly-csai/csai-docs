/** @jsx jsx */
import { jsx } from "theme-ui";

import t from "prop-types";
import { GitHub, Link as LinkIcon } from "react-feather";

Project.propTypes = {
  title: t.string.isRequired,
  description: t.string,
  image: t.string,
  githubLink: t.string,
  liveLink: t.string,
  generalLink: t.string,
};

const Link = (props) => (
  <a
    href={props.href}
    target="__blank"
    sx={{ textDecoration: "none", color: "link", height: "24px" }}
  >
    {props.children}
  </a>
);

const Button = (props) => (
  <button
    sx={{
      bg: "primary",
      padding: "15px",
      borderRadius: "30px",
      border: "none",
      cursor: "pointer",
      color: "white",
      margin: "0 10px",
    }}
  >
    {props.children}
  </button>
);

export default function Project(props) {
  const Menu = () => (
    <div
      className="menu"
      style={{
        padding: "15px",
        width: "100%",
        alignSelf: "flex-end",
        boxSizing: "border-box",
      }}
    >
      {props.githubLink && (
        <Link href={props.githubLink}>
          <Button>
            <GitHub color="white" size={20} />
          </Button>
        </Link>
      )}
      {props.liveLink && (
        <Link href={props.liveLink}>
          <Button>See it Live</Button>
        </Link>
      )}
      {props.generalLink && (
        <Link href={props.generalLink}>
          <Button>
            <LinkIcon color="white" size={20} />
          </Button>
        </Link>
      )}
    </div>
  );

  return (
    <div
      className="card"
      sx={{
        bg: "header.bg",
        borderRadius: "7px",
        width: "250px",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        "& p": {
          margin: "0px",
        },
      }}
    >
      {props.image && (
        <img
          style={{ objectFit: "contain", borderRadius: "7px" }}
          src={props.image}
          alt="Project"
        />
      )}
      <div
        className="info"
        style={{ padding: "20px", textAlign: "left", height: "100%" }}
      >
        <p className="title" style={{ fontWeight: "600", fontSize: "1.4em" }}>
          {props.title}
        </p>
        <p className="description">{props.description}</p>
      </div>
      <Menu />
    </div>
  );
}
