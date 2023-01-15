/* eslint-disable prettier/prettier */
import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { Sections } from '../../Utils/types';
import useSelectCurrentSection from '../../hooks/useSelectCurrentSection';
import { setCurrentSection } from '../../app/features/UISlice';

type Props = {
  children: React.ReactNode;
  number: number;
  section?: Sections;
};

const SectionTitle = ({ children, number, section }: Props) => {
  // const afterStyles = `after:block after:relative after:w-1/2 after:ml-4 after:top-[2rem] after:bg-gray-300/40 text-gray-300 after:h-[1px]`;
  const titleRef = useRef(null);
  const isInView = useInView(titleRef);
  const {dispatch} = useSelectCurrentSection(); 

  useEffect(() => {
    if (isInView) {
      dispatch(setCurrentSection(section as Sections))
    }
  }, [isInView, section, dispatch]);

  return (
    <h2
      className={`flex w-2/3 mt-[1rem] mb-[4rem] text-section-title capitalize font-para text-gray-300 font-semibold whitespace-nowrap`}
      ref={titleRef}
    >
      <span className="text-secondary-500 mr-4 font-links font-light">
        0{number}.
      </span>
      {children}
    </h2>
  );
};

export default SectionTitle;
