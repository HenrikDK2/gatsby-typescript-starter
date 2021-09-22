import React from "react";
import { styled } from "goober";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/Seo";

const Heading = styled("h2")`
  text-align: center;
  margin-top: 0;
  & > span {
    margin-top: 0.5rem;
    display: block;
    font-size: 1rem;
  }
`;

const Link = styled("a")`
  display: block;
  margin-top: 0.5rem;
  text-align: center;
`;

const imageStyle: React.CSSProperties = {
  margin: "0 auto",
  width: "256px",
  height: "256px",
  display: "block",
};

const HomePage: React.FunctionComponent = () => (
  <Seo title="Homepage">
    <Heading>Gatsby Typescript Starter</Heading>
    <StaticImage
      onDragStart={(e) => e.preventDefault()}
      style={imageStyle}
      placeholder="blurred"
      src="../images/gatsby.png"
      alt="Gatsby logo"
    />
    <Link href="https://github.com/HenrikDK2/gatsby-typescript-starter">Link to Github repo</Link>
  </Seo>
);

export default HomePage;
