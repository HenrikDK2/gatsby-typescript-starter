import React from "react";
import { styled, css } from "goober";
import Seo from "../components/Seo";
import { Link } from "gatsby";

const Heading = styled("h2")`
  text-align: center;
`;

const linkStyle = css`
  text-align: center;
  padding: 0.2em 1.45em;
  border: 0.15em solid #cccccc;
  box-sizing: border-box;
  text-decoration: none;
  color: #000000;
  background-color: #cccccc;
  border-radius: 4px;
  transition: transform 0.2s;
  &:hover {
    border: 0.15em solid #999999;
    background-color: #999999;
  }
`;

const NotFoundPage: React.FunctionComponent = () => (
  <Seo title="404">
    <Heading>
      Page not found
      <span role="img" aria-label="Sad smiley">
        {" "}
        😢
      </span>
    </Heading>
    <Link className={linkStyle} to="/">
      Go back to Homepage
    </Link>
  </Seo>
);

export default NotFoundPage;
