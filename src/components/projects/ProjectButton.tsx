import useSelectCurrentProject from '../../hooks/useSelectCurrentProject';
import { setCurrentProject } from '../../app/features/UISlice';
import type { ProjectTypes } from '../../Utils/constants';

type Props = {
  project: ProjectTypes;
};

const ProjectButton = ({ project }: Props) => {
  const { currentProject, dispatch } = useSelectCurrentProject();

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
};

export default ProjectButton;
