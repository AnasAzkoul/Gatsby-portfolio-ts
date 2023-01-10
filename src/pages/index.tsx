/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import Layout from '../components/layout';
import Main from '../components/main';
import AboutMe from '../components/aboutme';
import Projects from '../components/projects';
import { graphql, PageProps } from 'gatsby';

function HomePage({ data }: PageProps<Queries.HomePageQuery>) {
  return (
    <Layout>
      <Main />
      <AboutMe />
      <Projects />
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
