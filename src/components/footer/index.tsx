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

        <div className="flex flex-col space-y-4 text-center text-xl">
          <a
            href="https://brittanychiang.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-secondary-500 transition-all duration-150 ease-in hover:-translate-y-2 active:translate-y-0"
          >
            Inspired by Brittany Chiang
          </a>
          <a
            href="https://github.com/AnasAzkoul/Gatsby-portfolio-ts"
            target="_blank"
            rel="noreferrer"
            className="hover:text-secondary-500 transition-all duration-150 ease-in hover:-translate-y-1 active:translate-y-0"
          >
            Built by Anas Azkoul
          </a>
        </div>
      </AnimatedDiv>
    </footer>
  );
};

export default Footer;
