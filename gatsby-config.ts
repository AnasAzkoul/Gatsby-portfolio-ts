/* eslint-disable prettier/prettier */
import type {GatsbyConfig} from 'gatsby';

const config: GatsbyConfig = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  siteMetadata: {
    title: `Anas Azkoul`, 
    description: `Anas Azkoul is a self taught full stack web developer based in Europe who loves working on challenges in a team and is eager to learn and expand his experience.`, 
    author: `Anas Azkoul`, 
    peron: {name: `Anas`, age: `38`}, 
    projects: [
      {name: `evogym`, mainTechnology: `vite-react`},
      {name: `comfy sloth`, mainTechnolog: `react`}
    ], 
    simpleData: [`item 1`, `item 2`, `item 3`]
  }, 
  graphqlTypegen: true, 
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        // eslint-disable-next-line n/no-path-concat
        path: `${__dirname}/src/images`,
      },
    },
  ],
  jsxRuntime: `automatic`,
};


export default config;
