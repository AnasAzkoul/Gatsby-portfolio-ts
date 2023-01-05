/* eslint-disable prettier/prettier */
import {HiBars3BottomRight} from 'react-icons/hi2'; 
import useSelectIsOpen from '@/hooks/useIsOpen';
import {openSideNav, closeSideNav} from '@/app/features/UISlice';
import {AiOutlineClose} from 'react-icons/ai'

type Props = {
  variant: 'hamburger' | 'close'
}

const HamburgerButton = ({variant}: Props) => {
  const {dispatch} = useSelectIsOpen(); 
  
  if (variant === `close`) {
    return (
      <div className='flex justify-end px-10'>
        <button className='my-14' onClick={() => dispatch(closeSideNav())}>
          <AiOutlineClose className='text-secondary-500 text-5xl' />
        </button>
      </div>  
    )
  }
    
  return (
    <button className='ml-auto animate-moveFromLeft-65' onClick={() => dispatch(openSideNav())}>
      <HiBars3BottomRight className='text-secondary-500 text-7xl cursor-pointer' />
    </button>
  )
}

export default HamburgerButton
