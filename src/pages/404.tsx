import * as React from "react";
import Seo from "../components/Seo";
import { styled } from "goober";

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
