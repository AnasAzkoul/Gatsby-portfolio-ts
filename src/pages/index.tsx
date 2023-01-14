/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import Layout from '../components/layout';
import Main from '../components/main';
import AboutMe from '../components/aboutme';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Footer from '../components/footer';
import {graphql, PageProps} from 'gatsby';
import type {ProjectTypes} from '../Utils/types'; 

function HomePage({data}: PageProps<Queries.HomePageQuery>) {
    
  const extractedProjects: ProjectTypes[] = data?.allStrapiProject.nodes.map(
    (item: typeof data.allStrapiProject.nodes[0]) => {
      return ({
        id: item.strapi_id!,
        name: item.name!,
        title: item.title!,
        description: item.description?.data?.description!,
        stack: item.tech_stack?.stack!,
        links: {
          github: item.github_url!,
          live: item.live_url!,
        },
      });
    },
  );

  return (
    <Layout>
      <Main />
      <AboutMe />
      <Projects projects={extractedProjects} />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default HomePage;

export const query = graphql`
  query HomePage {
    allStrapiProject {
      nodes {
        strapi_id
        name
        title
        description {
          data {
            description
          }
        }
        tech_stack {
          stack
        }
        live_url
        github_url
      }
    }
  }
`;
