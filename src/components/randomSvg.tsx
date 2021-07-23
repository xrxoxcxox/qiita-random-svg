export const RandomSVG = (): JSX.Element => {
  const randomize = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };
  const firstPointX1: number = randomize(0.6, 1.2) * 180;
  const firstPointY1: number = randomize(0.6, 1.2) * 140;
  const firstPointX2: number = randomize(0.6, 1.2) * 240;
  const firstPointY2: number = randomize(0.6, 1.2) * 30;
  const secondPointX1: number = randomize(0.6, 1.2) * -10;
  const secondPointY1: number = randomize(0.6, 1.2) * -15;
  const secondPointX2: number = randomize(0.6, 1.2) * 20;
  const secondPointY2: number = randomize(0.6, 1.2) * 200;
  const thirdPointX1: number = randomize(0.6, 1.2) * 200;
  const thirdPointY1: number = randomize(0.6, 1.2) * 340;
  const thirdPointX2: number = randomize(0.6, 1.2) * 120;
  const thirdPointY2: number = randomize(0.6, 1.2) * 360;
  const fourthPointX1: number = randomize(0.6, 1.2) * 380;
  const fourthPointY1: number = randomize(0.6, 1.2) * 320;
  const fourthPointX2: number = randomize(0.6, 1.2) * 360;
  const fourthPointY2: number = randomize(0.6, 1.2) * 40;
  const firstPointX: number = (firstPointX2 + secondPointX1) / 2;
  const firstPointY: number = (firstPointY2 + secondPointY1) / 2;
  const secondPointX: number = (secondPointX2 + thirdPointX1) / 2;
  const secondPointY: number = (secondPointY2 + thirdPointY1) / 2;
  const thirdPointX: number = (thirdPointX2 + fourthPointX1) / 2;
  const thirdPointY: number = (thirdPointY2 + fourthPointY1) / 2;
  const fourthPointX: number = (fourthPointX2 + firstPointX1) / 2;
  const fourthPointY: number = (fourthPointY2 + firstPointY1) / 2;
  return (
    <svg
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={`
          M ${fourthPointX} ${fourthPointY}
          C ${firstPointX1} ${firstPointY1} ${firstPointX2} ${firstPointY2} ${firstPointX} ${firstPointY}
          C ${secondPointX1} ${secondPointY1} ${secondPointX2} ${secondPointY2} ${secondPointX} ${secondPointY}
          C ${thirdPointX1} ${thirdPointY1} ${thirdPointX2} ${thirdPointY2} ${thirdPointX} ${thirdPointY}
          C ${fourthPointX1} ${fourthPointY1} ${fourthPointX2} ${fourthPointY2} ${fourthPointX} ${fourthPointY}
          Z
        `}
        fill="#C4C4C4"
      />
    </svg>
  );
};
