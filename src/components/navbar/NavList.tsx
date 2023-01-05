/* eslint-disable prettier/prettier */
import ResumeButton from '../button/ResumeButton';
import NavLink from './NavLink';
import { navLinks } from '@/Utils/constants';

type Props = {
  variant: 'mobile' | 'Desktop'
}


const NavList = ({variant}: Props) => {
  const variantStyles = variant === `mobile`? `flex-col items-center mb-8 text-primary-100` : `flex-row`;
  
  
  return (
    <div className={`flex ${variantStyles}`}>
      <ul className='flex flex-col'>
        {navLinks.map(item => {
          const linkId = item.text.replace(/\s/g, ``);
          return (
            <NavLink
              item={item}
              key={item.id}
              linkId={linkId}
              variant='mobile'
            />  
          )
        })}
      </ul>
      <div className='max-w-[75%] mx-auto flex justify-center mt-16'>
        <ResumeButton styles='self-stretch'/>
      </div>
    </div>
  )
}

export default NavList
