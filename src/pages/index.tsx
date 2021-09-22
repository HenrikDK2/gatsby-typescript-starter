import * as React from "react";
import { styled, css } from "goober";
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

const imageStyle = css`
  margin: 0 auto;
  width: 256px;
  display: block !important;
`;

const HomePage: React.FC = () => (
  <Seo title="Homepage">
    <Heading>Gatsby Typescript Starter</Heading>
    <StaticImage
      className={imageStyle}
      placeholder="blurred"
      src="../images/icon.png"
      alt="Gatsby logo"
    />
  </Seo>
);

export default HomePage;
