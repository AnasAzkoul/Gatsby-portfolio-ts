/* eslint-disable prettier/prettier */
import Logo from '../logo';
import HamburgerButton from './HamburgerButton';
import NavList from './NavList';

import useMediaQuery from '@/hooks/useMediaQuery';
const Navbar = () => {
  const isMatch = useMediaQuery(`screen and (min-width: 768px)`);

  return (
    <nav className="navbar">
      <div className='navbar--layout'>
        <Logo />
        {isMatch ? (
          <NavList variant='desktop'/>
        ) : (
          <HamburgerButton variant='hamburger'/>  
        )
      }
      </div>
    </nav>
  );
};

export default Navbar;
