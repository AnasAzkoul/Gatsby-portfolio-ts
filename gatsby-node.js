/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */


// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       plugins: [new TsconfigPathsPlugin()],
//     },
//   });
// };

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type Site {
      siteMetadata: SiteMetadata!
    }

    type SiteMetadata {
      title: String!
    }
  `);
};
