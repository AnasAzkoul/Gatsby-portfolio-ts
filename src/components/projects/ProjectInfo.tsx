import Paragraph from '../paragaph';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import type { ProjectTypes } from '../../Utils/types';

type Props = {
  project: ProjectTypes;
};

const ProjectInfo = ({ project }: Props) => {
  const iconStyles = `text-[2rem] text-gray hover:text-secondary-500 cursor-pointer transition-150 hover:translate-up-3`;
  return (
    <div>
      <h3 className="text-project-title capitalize text-gray-300 mb-[3rem]">
        {project.title}
      </h3>
      <Paragraph styles="mb-[3rem]">{project.description}</Paragraph>

      <div className="flex flex-wrap leading-8">
        {project.stack.map((item, index) => {
          return (
            <span
              key={index}
              className="text-secondary-500 mr-6 capitalize text-[1.2rem]"
            >
              {item}
            </span>
          );
        })}
      </div>

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
          href={project.links.live}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          <FiExternalLink className={iconStyles} />
        </a>
      </div>
    </div>
  );
};

export default ProjectInfo;
