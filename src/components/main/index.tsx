/* eslint-disable prettier/prettier */
import Button from '../button';
import AnimatedDiv from '../animated-div';
import {Link} from 'gatsby';
import { Sections } from '@/Utils/types';

const Main = () => {
  return (
    <AnimatedDiv as='section' styles='layout--main' id={Sections.HOME}>
      <AnimatedDiv axis='y' direction={50} delay={0.25}>
         <div className='mb-10 self-start font-heading'>
          <h1 className='text-h1 text-secondary-500'>Hi, my name is</h1>
        </div>
        <div>
          <h2 className='text-big-heading font-heading font-semibold text-gray-300'>
            Anas Azkoul
          </h2>
        </div>
        <div>
          <h3 className='text-big-heading font-heading font-semibold'>
            {`I'm a web developer`}
          </h3>
        </div>
        <div className='my-16 md:max-w-[60%]'>
          <p className='leading-8 md:leading-9 text-para'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, rerum a dolor odit ut inventore eligendi possimus modi ratione. Vitae quod officia saepe tempore, ipsum cumque quia nihil voluptates deleniti.
          </p>
        </div>
        <div>
          <Button>
            <Link to={Sections.ABOUTME}>check out my projects</Link>
          </Button>
        </div>
      </AnimatedDiv>
    </AnimatedDiv>
  )
}

export default Main; 
