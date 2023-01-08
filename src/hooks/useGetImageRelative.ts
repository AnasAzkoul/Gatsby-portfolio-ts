import { useStaticQuery, graphql } from 'gatsby';

const useGetImageRelative = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          relativePath
        }
      }
    }
  `);

  return data;
};

export default useGetImageRelative;
