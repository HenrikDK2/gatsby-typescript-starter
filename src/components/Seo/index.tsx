import React from "react";
import { Helmet } from "react-helmet";
import faviconSrc from "../../assets/favicon.svg";
import Layout from "../Layout";

type Props = {
  title: string;
  favicon?: string;
  description?: string;
  tags?: string;
};

const Seo: React.FunctionComponent<Props> = ({ title, description, tags, favicon, children }) => (
  <>
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
    >
      <title>{title + " | Company Name"}</title>
      <meta name="description" content={description || "Default Description"} />
      <meta name="keywords" content={tags || "Default, Tags"} />
      <meta name="author" content="Author Name" />
      <link rel="shortcut icon" type="image/png" href={faviconSrc || favicon} />
    </Helmet>
    <Layout>{children}</Layout>
  </>
);
export default Seo;
