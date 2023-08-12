import React from 'react';
import Lottie from 'lottie-react';

type Props = {
  animationData: unknown;
};

const GreetingLottie = ({ animationData }: Props) => {
  return (
    <div onClick={() => null}>
      <Lottie animationData={animationData} loop={true} autoplay />
    </div>
  );
};

export default GreetingLottie;
