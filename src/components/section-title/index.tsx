/* eslint-disable prettier/prettier */
import React from 'react';

type Props = {
  children: React.ReactNode;
  number: number;
};

const SectionTitle = ({ children, number }: Props) => {
  // const afterStyles = `after:block after:relative after:w-1/2 after:ml-4 after:top-[2rem] after:bg-gray-300/40 text-gray-300 after:h-[1px]`;

  return (
    <h2
      className={`flex w-2/3 mt-[1rem] mb-[4rem] text-section-title capitalize font-para text-gray-300 font-semibold whitespace-nowrap`}
    >
      <span className="text-secondary-500 mr-4 font-links font-light">
        0{number}.
      </span>
      {children}
    </h2>
  );
};

export default SectionTitle;
