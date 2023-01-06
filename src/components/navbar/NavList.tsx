/* eslint-disable prettier/prettier */
import ResumeButton from '../button/ResumeButton';
import NavLink from './NavLink';
import { navLinks } from '@/Utils/constants';

type Props = {
  variant: 'mobile' | 'desktop';
};

const NavList = ({ variant }: Props) => {
  const variantStyles =
    variant === `mobile`
      ? `flex-col items-center mb-8 text-primary-100`
      : `flex-row`;

  return (
    <div className={`flex items-center ${variantStyles}`}>
      <ul className={`flex ${variantStyles}`}>
        {navLinks.map((item) => {
          const linkId = item.text.replace(/\s/g, ``);
          return (
            <NavLink
              item={item}
              key={item.id}
              linkId={linkId}
              variant={variant}
            />
          );
        })}
      </ul>
      <div
        className={`max-w-[75%] mx-auto flex justify-center ${
          variant === `mobile` && `mt-16`
        }`}
      >
        <ResumeButton styles="self-stretch" />
      </div>
    </div>
  );
};

export default NavList;
