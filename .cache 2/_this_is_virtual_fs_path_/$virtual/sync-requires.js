
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/anas/Desktop/gatsby-starter-ts/.cache/dev-404-page.js")),
  "component---src-pages-404-tsx": preferDefault(require("/Users/anas/Desktop/gatsby-starter-ts/src/pages/404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/anas/Desktop/gatsby-starter-ts/src/pages/index.tsx"))
}

