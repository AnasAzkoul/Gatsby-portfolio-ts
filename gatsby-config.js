/* eslint-disable prettier/prettier */

require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [`project`],

  remoteFileHeaders: {
    Referer: `http://localhost:8000`,
    Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
  },
};

module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  siteMetadata: {
    title: `Anas Azkoul`,
    description: `Anas Azkoul a self-taught web developer currently based in Bratislava. I'm passionate about building things on the web. My aim now is to become part of a team of professional developers.`,
    author: `Anas Azkoul`,
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-pnpm`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: `portal`,
        id: `portal`,
      },
    },
  ],
  jsxRuntime: `automatic`,
};
