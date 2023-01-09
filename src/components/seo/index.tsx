/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import {useStaticQuery, graphql} from 'gatsby'; 
import {Helmet} from "react-helmet"

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`


const SEO = () => {
  
  const {site} = useStaticQuery(query)
  
  return (
    <Helmet
      htmlAttributes={{lang: `en`}}
      title={`${site.siteMetadata.title}`}
      meta={[{name: `description`, content: site.siteMetadata.description}]}
    >
      
    </Helmet>
  )
}

export default SEO
