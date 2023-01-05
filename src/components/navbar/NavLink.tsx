import type { NavLinkType } from '@/Utils/constants';
import { Link } from 'gatsby';
import useSelectCurrentSection from '@/hooks/useSelectCurrentSection';
import { setCurrentSection, closeSideNav } from '@/app/features/UISlice';
import { Sections } from '@/Utils/types';

type Props = {
  item: NavLinkType;
  linkId: string;
  variant?: 'mobile' | 'desktop';
};

const NavLink = ({ item, linkId, variant }: Props) => {
  const { dispatch } = useSelectCurrentSection();

  const variantStyles =
    variant === `mobile`
      ? `flex-col items-center mb-10 text-[18px] text-primary-100`
      : `flex-row`;

  const handleClick = () => {
    dispatch(closeSideNav());
    dispatch(setCurrentSection(linkId as Sections));
  };

  return (
    <li className={`font-links capitalize`} onClick={handleClick}>
      <Link to={`/#${linkId}`} className={`flex ${variantStyles}`}>
        <span
          className={`text-secondary-500 mr-3 text-links ${
            variant === `mobile` && `mb-3`
          }`}
        >
          0{item.id}.
        </span>
        <span className="text-links">{item.text}</span>
      </Link>
    </li>
  );
};

export default NavLink;
