import { styled } from "goober";
import * as React from "react";
import Seo from "../components/Seo";

const Heading = styled("h2")`
  text-align: center;
  & > span {
    margin-top: 0.5rem;
    display: block;
    font-size: 1rem;
  }
`;

const HomePage: React.FC = () => (
  <Seo title="Homepage">
    <Heading>Gatsby Typescript Starter</Heading>
  </Seo>
);

export default HomePage;
