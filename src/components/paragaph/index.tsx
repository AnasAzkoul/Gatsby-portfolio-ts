import React from 'react';

type Props = {
  children: React.ReactNode;
  styles?: string;
};

const Paragraph = ({ children, styles }: Props) => {
  return (
    <p className={`text-para my-4 font-para leading-9 md:leading-10 ${styles}`}>
      {children}
    </p>
  );
};

export default Paragraph;
