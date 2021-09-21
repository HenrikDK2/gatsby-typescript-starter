import * as React from "react";
import { Helmet } from "react-helmet";

type Props = {
  title: string;
  description?: string;
  tags?: string;
};

const Seo: React.FC<Props> = ({ title, description, tags, children }) => (
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
    </Helmet>
    {children}
  </>
);
export default Seo;
