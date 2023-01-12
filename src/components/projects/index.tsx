/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import { Sections } from '../../Utils/types';
import SectionTitle from '../section-title';
import AnimatedDiv from '../animated-div';
import useSelectCurrentProject from '../../hooks/useSelectCurrentProject';
import { setCurrentProject } from '../../app/features/UISlice';
import { projects } from '../../Utils/constants';
import ProjectButton from './ProjectButton';
import ProjectInfo from './ProjectInfo';

const Projects = () => {
  const { dispatch, currentProject } = useSelectCurrentProject();

  useEffect(() => {
    dispatch(setCurrentProject(projects[0].name));
  }, []);

  return (
    <AnimatedDiv as="section" styles="layout--projects" id={Sections.PROJECTS}>
      <AnimatedDiv axis="y" direction={50} delay={0} styles="p-1">
        <SectionTitle number={3}>Projects</SectionTitle>
        <div className="md:flex">
          <div className="flex md:flex-col md:mb-0 md:mr-16 mb-10 max-w-[25rem] xs:max-w-[35rem] sm:max-w-[45rem] md:w-[25rem] overflow-x-auto md:overflow-x-hidden">
            {projects.map((project) => {
              return <ProjectButton key={project.id} project={project} />;
            })}
          </div>
          <div className="relative w-full">
            {projects.map((project) => {
              return (
                currentProject === project.name && (
                  <ProjectInfo key={project.id} project={(project)} />
                )
              );
            })}
          </div>
        </div>
      </AnimatedDiv>
    </AnimatedDiv>
  );
};

export default Projects;
