import { useEffect } from 'react';
import { Sections } from '../../Utils/types';
import SectionTitle from '../section-title';
import AnimatedDiv from '../animated-div';
import useSelectCurrentProject from '../../hooks/useSelectCurrentProject';
import { setCurrentProject } from '../../app/features/UISlice';
import { projects } from '../../Utils/constants';
import Paragraph from '../paragaph';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const { dispatch, currentProject } = useSelectCurrentProject();
  const iconStyles = `text-[2rem] text-gray hover:text-secondary-500 cursor-pointer transition-150 hover:translate-up-3`;

  useEffect(() => {
    dispatch(setCurrentProject(projects[0].name));
  }, []);

  return (
    <AnimatedDiv
      as="section"
      styles="layout--projects overflow-x-hidden"
      id={Sections.PROJECTS}
    >
      <AnimatedDiv axis="y" direction={50} delay={0} styles="p-1">
        <SectionTitle number={3}>Projects</SectionTitle>
        <div className="md:flex">
          <div className="flex md:flex-col md:mb-0 md:mr-16 mb-10 max-w-[30rem] md:max-w-max overflow-x-auto md:overflow-x-hidden">
            {projects.map((project) => {
              return (
                <button
                  key={project.id}
                  className={`flex justify-start pl-6 pr-12 py-6 text-[1.4rem] capitalize border-l-2 
                  transition-all duration-500 delay-100 whitespace-nowrap
                  ${
                    project.name === currentProject
                      ? `border-l-secondary-500 text-secondary-500 bg-primary-400`
                      : `border-l-gray-500/25`
                  }`}
                  onClick={() => dispatch(setCurrentProject(project.name))}
                >
                  <span>{project.name}</span>
                </button>
              );
            })}
          </div>
          <div className="relative w-full min-h-[20rem]">
            {projects.map((project) => {
              return (
                <div
                  key={project.id}
                  className={`absolute transition-opacity duration-700 ${
                    project.name === currentProject
                      ? `opacity-100`
                      : `opacity-0`
                  }`}
                >
                  <h3 className="text-project-title capitalize text-gray-300 mb-[3rem]">
                    {project.title}
                  </h3>
                  <Paragraph styles="mb-[3rem]">
                    {project.description}
                  </Paragraph>
                  <div className="">
                    {project.stack.map((item, index) => {
                      return (
                        <span
                          key={index}
                          className="text-secondary-500 mr-10 capitalize text-[1.2rem]"
                        >
                          {item}
                        </span>
                      );
                    })}
                  </div>
                  {project.name === currentProject && (
                    <div className="flex gap-8 mt-8">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiGithub className={iconStyles} />
                      </a>
                      <a
                        href={project.links.liveVersion}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiExternalLink className={iconStyles} />
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedDiv>
    </AnimatedDiv>
  );
};

export default Projects;
