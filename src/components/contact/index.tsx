/* eslint-disable react/no-unescaped-entities */
import AnimatedDiv from '../animated-div';
import Paragraph from '../paragaph';
import Button from '../button';
import { Sections } from '../../Utils/types';

const Contact = () => {
  return (
    <AnimatedDiv styles="layout--section" as="section" id={Sections.CONTACT}>
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

        <h2 className="text-smaller-heading font-bold ">Get In Touch</h2>

        <Paragraph styles="my-12 md:max-w-[70%] mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          sapiente eaque perspiciatis ipsam odio praesentium?
        </Paragraph>

        <Button styles="self-stretch mt-4 md:self-center">
          <a href="mailto:anas.azkoul@gmail.com">Say Hello</a>
        </Button>
      </AnimatedDiv>
    </AnimatedDiv>
  );
};

export default Contact;
