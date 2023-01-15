/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import { useRef, useEffect } from 'react';
import { setCurrentSection } from '../../app/features/UISlice';
import useSelectCurrentSection from '../../hooks/useSelectCurrentSection';
import { useInView } from 'framer-motion';
import Button from '../button';
import Paragraph from '../paragaph';
import AnimatedDiv from '../animated-div';
import { Link } from 'gatsby';
import { Sections } from '../../Utils/types';

const Main = () => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef);
  const { dispatch } = useSelectCurrentSection();

  useEffect(() => {
    if (isInView) {
      dispatch(setCurrentSection(Sections.HOME));
    }
  }, [isInView, dispatch]);

  return (
    <section className="layout--main" id={Sections.HOME}>
      <AnimatedDiv axis="y" direction={50} delay={0.25}>
        <div className="mb-10 self-start font-heading">
          <h1 className="text-h1 text-secondary-500" ref={titleRef}>Hi, my name is</h1>
        </div>
        <div>
          <h2 className="text-big-heading font-heading font-semibold text-gray-300">
            Anas Azkoul.
          </h2>
        </div>
        <div>
          <h3 className="text-big-heading font-heading font-semibold">
            Welcome to my piece of the Web.
          </h3>
        </div>
        <div className="my-16 md:max-w-[60%]">
          <Paragraph styles="leading-8 md:leading-10 text-para">
            I'm a self-taught web developer currently based in Bratislava. I'm
            passionate about building things on the web. My aim now is to become
            part of a team of professional developers.
          </Paragraph>
        </div>
        <div>
          <Button>
            <Link to={`#${Sections.PROJECTS}`}>check out my projects</Link>
          </Button>
        </div>
      </AnimatedDiv>
    </section>
  );
};

export default Main;
