/* eslint-disable prettier/prettier */
import {createPortal} from 'react-dom'; 
import HamburgerButton from '../navbar/HamburgerButton';
import NavList from '../navbar/NavList';
import useSelectIsOpen from '@/hooks/useIsOpen';
import {closeSideNav} from '@/app/features/UISlice';

function SideNav() {
  const {isOpen, dispatch} = useSelectIsOpen(); 
  
  const sideNavStyles = `h-full w-2/3 bg-primary-500 drop-shadow-xl fixed right-0 bottom-0 z-[1000] transition-all duration-300 ease`

  return createPortal(
    <>
      <div
        className={`${
          isOpen &&
          `fixed top-0 bottom-0 left-0 right-0 h-screen w-screen bg-primary-400/50 backdrop-blur-sm z-[1000]`
          }`}
        onClick={() => dispatch(closeSideNav())}
      />
      <div
        className={`${sideNavStyles} ${isOpen ? `translate-x-0` : `translate-x-[2000px]`}`}
      >
        <HamburgerButton variant='close' />
        <NavList variant='mobile'/>
      </div>
    </>, 
    document.getElementById(`portal`) as HTMLElement
  )
}

export default SideNav; 
