import * as React from "react";
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

const imageStyle: React.CSSProperties = {
  margin: "0 auto",
  width: "256px",
  height: "256px",
  display: "block",
};

const HomePage: React.FC = () => (
  <Seo title="Homepage">
    <Heading>Gatsby Typescript Starter</Heading>
    <StaticImage
      style={imageStyle}
      placeholder="blurred"
      src="../images/gatsby.png"
      alt="Gatsby logo"
    />
  </Seo>
);

export default HomePage;
