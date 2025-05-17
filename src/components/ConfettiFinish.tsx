// components/ConfettiFinish.tsx
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

const ConfettiFinish = () => {
  const [width, height] = useWindowSize();

  return (
    <Confetti
      width={width}
      height={height}
      numberOfPieces={250}
      gravity={0.3}
      recycle={false}
    />
  );
};

export default ConfettiFinish;
