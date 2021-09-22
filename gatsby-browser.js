import React from "react";
import { setup } from "goober";
import Layout from "./src/components/Layout/";
setup(React.createElement);

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
