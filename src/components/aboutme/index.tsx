/* eslint-disable prettier/prettier */
import AnimatedDiv from '../animated-div';
import SectionTitle from '../section-title';
import Paragraph from '../paragaph';
import { StaticImage } from 'gatsby-plugin-image';
import { IoMdArrowDropright } from 'react-icons/io';
import { Sections } from '@/Utils/types';
import { technologies } from '@/Utils/constants';


const AboutMe = () => {

  return (
    <AnimatedDiv as="section" id={Sections.ABOUTME} styles="layout--section">
      <AnimatedDiv axis="y" direction={50} delay={0}>
        <SectionTitle number={2}>about me</SectionTitle>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:basis-[80%] mb-[4rem] md:mr-[4rem]">
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ea
              inventore libero itaque amet id ipsam ipsa voluptatem ratione cum.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
              illo.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ea
              inventore libero itaque amet id ipsam ipsa voluptatem ratione cum.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
              illo.
            </Paragraph>
            <div>
              <Paragraph>
                Here are a few technologies I have been working with recently:
              </Paragraph>
              <ul className="grid grid-cols-2 gap-y-3 mt-10">
                {technologies.map((item) => {
                  return (
                    <li key={item.id} className="capitalize flex">
                      <IoMdArrowDropright className="mr-2 text-secondary-500" />
                      {item.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="relative self-center md:self-start basis-1/2">
            <figure
              className="w-full before:absolute before:h-full before:w-full before:border-2 before:border-secondary-500 
                before:top-[20px] before:left-[20px] before:-z-50 before:rounded-lg"
            >
              <StaticImage
                src="../../images/anasazkoul1.jpg"
                alt="Anas Azkoul"
                placeholder="dominantColor"
                layout="constrained"
                width={500}
                height={500}
              />
            </figure>
          </div>
        </div>
      </AnimatedDiv>
    </AnimatedDiv>
  );
};

export default AboutMe;
