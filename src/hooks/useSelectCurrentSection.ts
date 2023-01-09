/* eslint-disable prettier/prettier */
import {useAppSelector, useAppDispatch} from '../app/hooks';
import {selectCurrentSection} from '../app/features/UISlice';

function useSelectCurrentSection() {
  const currentSection = useAppSelector(selectCurrentSection); 
  const dispatch = useAppDispatch(); 
  
  return ({currentSection, dispatch}); 
}

export default useSelectCurrentSection; 
