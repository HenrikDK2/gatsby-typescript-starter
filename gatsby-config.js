const path = require("path");
const gatsbyRequiredRules = path.join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
);

module.exports = {
  plugins: [
    `gatsby-plugin-preact`,
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        rulePaths: [gatsbyRequiredRules],
        stages: ["develop"],
        extensions: ["js", "jsx", "ts", "tsx"],
        exclude: ["node_modules", "bower_components", ".cache", "public"],
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["400", "700"],
              strategy: "selfHosted",
            },
          ],
        },
        formats: ["woff"],
        useMinify: true,
        usePreload: true,
      },
    },
    `gatsby-plugin-goober`,
    "gatsby-plugin-remove-trailing-slashes",
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-image",
    "gatsby-plugin-purgecss",
    "gatsby-plugin-optimize-svgs",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images",
      },
      __key: "images",
    },
  ],
};
