/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import Paragraph from '../paragaph';
import { Sections } from '../../Utils/types';
import SectionTitle from '../section-title';
import AnimatedDiv from '../animated-div';
import useSelectCurrentProject from '../../hooks/useSelectCurrentProject';
import { setCurrentProject } from '../../app/features/UISlice';
import ProjectButton from './ProjectButton';
import ProjectInfo from './ProjectInfo';
import type { ProjectTypes } from '../../Utils/types';

type Props = {
  projects: ProjectTypes[];
};

const Projects = ({ projects }: Props) => {
  const { dispatch, currentProject } = useSelectCurrentProject();

  useEffect(() => {
    dispatch(setCurrentProject(projects[0].name));
  }, []);

  return (
    <section className="layout--projects mb-[4rem]" id={Sections.PROJECTS}>
      <AnimatedDiv axis="y" direction={50} delay={0} styles="p-1">
        <div className="mb-[4rem]">
          <SectionTitle number={3} section={Sections.PROJECTS}>Projects</SectionTitle>
          <Paragraph styles="mt-[-2rem]">
            These projects showcase the technologies I’ve worked with. More of
            my work can be seen on my {` `}
            <span className="text-secondary-500 underline">
              <a
                href="https://github.com/AnasAzkoul"
                target="_blank"
                rel="noreferrer"
              >
                github account
              </a>
            </span>
            {` `}.
          </Paragraph>
        </div>
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
                  <ProjectInfo key={project.id} project={project} />
                )
              );
            })}
          </div>
        </div>
      </AnimatedDiv>
    </section>
  );
};

export default Projects;
