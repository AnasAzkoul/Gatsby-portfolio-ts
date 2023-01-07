/* eslint-disable prettier/prettier */
import type {GatsbyConfig} from 'gatsby';

const config: GatsbyConfig = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-pnpm`,
    `gatsby-plugin-postcss`,
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

export default config;
