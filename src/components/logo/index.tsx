import AnimatedDiv from '../animated-div';

const Logo = () => {
  return (
    <AnimatedDiv axis="x" direction={-25} delay={0}>
      <div className="logo animate-moveFromLeft font-links">A</div>
    </AnimatedDiv>
  );
};

export default Logo;
