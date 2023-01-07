/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import Layout from '@/components/layout';
import Main from '@/components/main';
import AboutMe from '@/components/aboutme';
import {navigate} from 'gatsby';
import { Sections } from '@/Utils/types';

function Home() {
  
  useEffect(() => {
    navigate(`#${Sections.ABOUTME}`); 
  }, [])
  
  return (
    <Layout>
      <Main />
      <AboutMe />
    </Layout>
  );
}

export default Home;
