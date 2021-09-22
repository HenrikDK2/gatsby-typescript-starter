import * as React from "react";
import { styled } from "goober";
import Seo from "../components/Seo";

const Heading = styled("h2")`
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const NotFoundPage: React.FC = () => (
  <Seo title="404">
    <Heading>Page not found</Heading>
  </Seo>
);

export default NotFoundPage;
