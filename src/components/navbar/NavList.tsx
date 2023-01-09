/* eslint-disable prettier/prettier */
import ResumeButton from '../button/ResumeButton';
import NavLink from './NavLink';
import AnimatedDiv from '../animated-div';
import { navLinks } from '../../Utils/constants';

type Props = {
  variant: 'mobile' | 'desktop';
};

const NavList = ({ variant }: Props) => {
  const variantStyles =
    variant === `mobile`
      ? `flex-col items-center mb-8 text-primary-100`
      : `flex-row`;
  
  let delay = 0

  return (
    <div className={`flex items-center ${variantStyles}`}>
      <ul className={`flex ${variantStyles}`}>
        {navLinks.map((item) => {
          const linkId = item.text.replace(/\s/g, ``);
          delay += 0.25     
          
          return (
            <NavLink
              item={item}
              key={item.id}
              linkId={linkId}
              variant={variant}
              delay={delay}
            />
          );
        })}
      </ul>
      <AnimatedDiv axis='x' direction={0} delay={1.25} styles={`mx-auto flex ${variant === `mobile` && `mt-8 w-full`}`}>
        <ResumeButton
          styles={`${
            variant === `mobile` && `w-[50%] text-links font-links mx-auto`
          }`}
        />
      </AnimatedDiv>

    </div>
  );
};

export default NavList;
