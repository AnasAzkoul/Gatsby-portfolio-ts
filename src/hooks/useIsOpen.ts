import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectIsOpen } from '../app/features/UISlice';

const useSelectIsOpen = () => {
  const isOpen = useAppSelector(selectIsOpen);

  const dispatch = useAppDispatch();

  return { isOpen, dispatch };
};

export default useSelectIsOpen;
