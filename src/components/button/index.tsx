/* eslint-disable prettier/prettier */
import React from 'react'; 



type Props = {
  children: React.ReactNode
  styles?: string
}

const Button = ({children, styles}: Props) => {
  return (
    <button
      className={`text-secondary-500 border-secondary-500 border-2 p-4 text-xl uppercase rounded-lg self-start hover:bg-secondary-500/10 ${styles}`}
    >
      {children}
    </button>
  );
};


export default Button
