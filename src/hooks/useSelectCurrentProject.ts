import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectCurrentProject } from '../app/features/UISlice';

function useSelectCurrentProject() {
  const currentProject = useAppSelector(selectCurrentProject);
  const dispatch = useAppDispatch();

  return { currentProject, dispatch };
}

export default useSelectCurrentProject;
