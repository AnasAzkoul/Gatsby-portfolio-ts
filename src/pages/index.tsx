/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import Layout from '@/components/layout';
import Main from '@/components/main';
import AboutMe from '@/components/aboutme';
import {graphql} from 'gatsby';

interface HomePageProps {
  data: Queries.HomePageQuery
}

function HomePage({data}: HomePageProps) {
    
  return (
    <Layout>
      <Main />
      <AboutMe />
    </Layout>
  );
}

export default HomePage;

export const query = graphql`
 query HomePage {
  site {
    siteMetadata {
      author
      description
      projects {
        mainTechnolog
        name
      }
    }
  }
 }
`; 
