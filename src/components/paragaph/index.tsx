/* eslint-disable prettier/prettier */

import React from 'react'

type Props = {
  children: React.ReactNode
}

const Paragraph = ({children}: Props) => {
  return (
    <p className='text-para my-4 font-para'>
      {children}
    </p>
  )
}

export default Paragraph
