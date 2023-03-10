/* eslint-disable react/no-unescaped-entities */
import { useRef, useEffect } from 'react';
import { setCurrentSection } from '../../app/features/UISlice';
import useSelectCurrentSection from '../../hooks/useSelectCurrentSection';
import { useInView } from 'framer-motion';
import AnimatedDiv from '../animated-div';
import Paragraph from '../paragaph';
import Button from '../button';
import { Sections } from '../../Utils/types';

const Contact = () => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef);
  const { dispatch } = useSelectCurrentSection();

  useEffect(() => {
    if (isInView) {
      dispatch(setCurrentSection(Sections.CONTACT));
    }
  }, [isInView, dispatch]);

  return (
    <section className="layout--section" id={Sections.CONTACT}>
      <AnimatedDiv
        as="div"
        axis="y"
        direction={50}
        delay={0}
        styles="text-center"
      >
        <h2 className="text-secondary-500 text-links capitalize mb-6">
          <span>04.</span>
          <span>What's Next?</span>
        </h2>

        <h2
          className="text-smaller-heading font-bold whitespace-nowrap"
          ref={titleRef}
        >
          Get in touch.
        </h2>

        <Paragraph styles="my-12 md:max-w-[70%] mx-auto">
          To say hello, or to discuss interesting internship or job
          opportunities, I would love to hear from you.
        </Paragraph>

        <Button styles="self-stretch mt-4 md:self-center">
          <a href="mailto:anas.azkoul@gmail.com">Say Hello</a>
        </Button>
      </AnimatedDiv>
    </section>
  );
};

export default Contact;
