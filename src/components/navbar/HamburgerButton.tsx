import { HiBars3BottomRight } from 'react-icons/hi2';
import useSelectIsOpen from '../../hooks/useIsOpen';
import { openSideNav, closeSideNav } from '../../app/features/UISlice';
import { AiOutlineClose } from 'react-icons/ai';
import AnimatedDiv from '../animated-div';

type Props = {
  variant: 'hamburger' | 'close';
};

const HamburgerButton = ({ variant }: Props) => {
  const { dispatch } = useSelectIsOpen();

  if (variant === `close`) {
    return (
      <AnimatedDiv
        styles="flex justify-end px-10"
        axis="x"
        direction={-25}
        delay={0}
      >
        <button className="my-14" onClick={() => dispatch(closeSideNav())}>
          <AiOutlineClose className="text-secondary-500 text-5xl" />
        </button>
      </AnimatedDiv>
    );
  }

  return (
    <AnimatedDiv axis="x" direction={25} delay={0}>
      <button className="ml-auto" onClick={() => dispatch(openSideNav())}>
        <HiBars3BottomRight className="text-secondary-500 text-7xl cursor-pointer" />
      </button>
    </AnimatedDiv>
  );
};

export default HamburgerButton;
