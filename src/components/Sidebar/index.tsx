import SocialIcon from '../social-icons';
import AnimatedDiv from '../animated-div';

const Sidebar = () => {
  return (
    <AnimatedDiv
      axis="x"
      direction={-25}
      delay={0}
      styles="hidden md:fixed left-[1%] bottom-4 md:flex items-end justify-start relative"
    >
      <ul className="flex flex-col bottom-32 after:block after:w-[2px] after:h-[100px] after:bg-gray-500 after:mx-auto">
        <li>
          <SocialIcon variant="github" />
        </li>
        <li>
          <SocialIcon variant="twitter" />
        </li>
        <li>
          <SocialIcon variant="linkedin" />
        </li>
        <li>
          <SocialIcon variant="instagram" />
        </li>
      </ul>
    </AnimatedDiv>
  );
};

export default Sidebar;
