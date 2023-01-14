import AnimatedDiv from '../animated-div';
import SectionTitle from '../section-title';
import Paragraph from '../paragaph';
import { StaticImage } from 'gatsby-plugin-image';
import { IoMdArrowDropright } from 'react-icons/io';
import { Sections } from '../../Utils/types';
import { technologies } from '../../Utils/constants';

const AboutMe = () => {
  return (
    <AnimatedDiv as="section" id={Sections.ABOUTME} styles="layout--section">
      <AnimatedDiv axis="y" direction={50} delay={0}>
        <SectionTitle number={2}>about me</SectionTitle>
        <div className="md:layout--aboutme-content">
          <div className="flex flex-col mb-[4rem]">
            <Paragraph>
              It was while working as an accountant in Damascus, automating
              tasks using logic in Microsoft Excel that I first discovered how
              powerful coding can be. From that moment I was hooked but then the
              war came.
            </Paragraph>
            <Paragraph>
              Nevertheless, it was always on my mind. And then in 2020, while
              working as an English Teacher and with more time on my hands, I
              decided to take a disciplined approach to developing my coding
              skills.
            </Paragraph>
            <div>
              <Paragraph>
                Here are the main technologies I have been working with
                recently:
              </Paragraph>
              <ul className="grid grid-cols-2 gap-y-5 mt-10">
                {technologies.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="capitalize flex font-para text-para"
                    >
                      <IoMdArrowDropright className="mr-2 text-secondary-500" />
                      {item.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="relative max-w-[40rem] mx-auto self-start justify-self-end">
            <div className="sudo-img-before">
              <StaticImage
                src="../../images/anasazkoul1.jpg"
                alt="Anas Azkoul"
                placeholder="dominantColor"
                layout="constrained"
                width={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </AnimatedDiv>
    </AnimatedDiv>
  );
};

export default AboutMe;
