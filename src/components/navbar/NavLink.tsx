import type { NavLinkType } from '../../Utils/constants';
import { Link } from 'gatsby';
import useSelectCurrentSection from '../../hooks/useSelectCurrentSection';
import { setCurrentSection, closeSideNav } from '../../app/features/UISlice';
import { Sections } from '../../Utils/types';
import AnimatedDiv from '../animated-div';

type Props = {
  item: NavLinkType;
  linkId: string;
  variant?: 'mobile' | 'desktop';
  delay: number;
};

const NavLink = ({ item, linkId, variant, delay }: Props) => {
  const { dispatch, currentSection } = useSelectCurrentSection();

  const variantStyles =
    variant === `mobile`
      ? `flex-col items-center mb-10 text-[18px] text-primary-100`
      : `flex-row`;

  const handleClick = () => {
    dispatch(closeSideNav());
    dispatch(setCurrentSection(linkId as Sections));
  };

  return (
    <AnimatedDiv axis="x" direction={0} delay={delay}>
      <li className={`font-links capitalize`} onClick={handleClick}>
        <Link
          to={`/#${linkId}`}
          className={`flex items-center py-4 px-8 ${variantStyles}`}
        >
          <span
            className={`text-secondary-500 mr-3 text-links md:text-[1.3rem] text-center ${
              variant === `mobile` ? `mb-3` : ``
            }`}
          >
            0{item.id}.
          </span>
          <span
            className={`text-links md:text-[1.3rem] hover:text-gray-300 ${
              currentSection === linkId && `text-gray-300`
            }`}
          >
            {item.text}
          </span>
        </Link>
      </li>
    </AnimatedDiv>
  );
};

export default NavLink;
