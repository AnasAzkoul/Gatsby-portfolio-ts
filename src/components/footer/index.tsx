import AnimatedDiv from '../animated-div';
import SocialIcon from '../social-icons';
import useMediaQuery from '../../hooks/useMediaQuery';

const Footer = () => {
  const match = useMediaQuery(`screen and (min-width: 768px)`);

  return (
    <footer className="layout--footer mt-60">
      <AnimatedDiv as="div" styles="flex flex-col items-center">
        {!match && (
          <div className="flex gap-8">
            <SocialIcon variant="github" />
            <SocialIcon variant="instagram" />
            <SocialIcon variant="linkedin" />
            <SocialIcon variant="twitter" />
          </div>
        )}

        <p className="text-gray text-2xl hover:text-secondary-500 cursor-pointer hover:-translate-y-1 active:translate-y-0 transition-all ease-in">
          Built by Anas Azkoul
        </p>
      </AnimatedDiv>
    </footer>
  );
};

export default Footer;
