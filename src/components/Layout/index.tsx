import * as React from "react";
import { styled } from "goober";
import "./global.css";

const Copyright = styled("small")`
  font-size: 14px;
  line-height: 135%;
  text-align: center;
  margin: 40px auto 0;
  display: block;
`;

const Layout: React.FC = ({ children }) => {
  const year = new Date().getFullYear();

  return (
    <>
      <header>{/* Navigation here */}</header>
      <main>{children}</main>
      <footer>
        <Copyright>&copy; {year} Company Name </Copyright>
      </footer>
    </>
  );
};

export default Layout;
