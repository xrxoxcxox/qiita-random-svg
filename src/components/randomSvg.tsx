export const RandomSVG = (): JSX.Element => {
  const randomize = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };
  const firstPointX1 = randomize(0.6, 1.2) * 180;
  const firstPointY1 = randomize(0.6, 1.2) * 140;
  const firstPointX2 = randomize(0.6, 1.2) * 240;
  const firstPointY2 = randomize(0.6, 1.2) * 30;
  const secondPointX1 = randomize(0.6, 1.2) * -10;
  const secondPointY1 = randomize(0.6, 1.2) * -15;
  const secondPointX2 = randomize(0.6, 1.2) * 20;
  const secondPointY2 = randomize(0.6, 1.2) * 200;
  const thirdPointX1 = randomize(0.6, 1.2) * 200;
  const thirdPointY1 = randomize(0.6, 1.2) * 340;
  const thirdPointX2 = randomize(0.6, 1.2) * 120;
  const thirdPointY2 = randomize(0.6, 1.2) * 360;
  const fourthPointX1 = randomize(0.6, 1.2) * 380;
  const fourthPointY1 = randomize(0.6, 1.2) * 320;
  const fourthPointX2 = randomize(0.6, 1.2) * 360;
  const fourthPointY2 = randomize(0.6, 1.2) * 40;
  const firstPointX = (fourthPointX2 + firstPointX1) / 2;
  const firstPointY = (fourthPointY2 + firstPointY1) / 2;
  const secondPointX = (firstPointX2 + secondPointX1) / 2;
  const secondPointY = (firstPointY2 + secondPointY1) / 2;
  const thirdPointX = (secondPointX2 + thirdPointX1) / 2;
  const thirdPointY = (secondPointY2 + thirdPointY1) / 2;
  const fourthPointX = (thirdPointX2 + fourthPointX1) / 2;
  const fourthPointY = (thirdPointY2 + fourthPointY1) / 2;
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
          M ${firstPointX} ${firstPointY}
          C ${firstPointX1} ${firstPointY1} ${firstPointX2} ${firstPointY2} ${secondPointX} ${secondPointY}
          C ${secondPointX1} ${secondPointY1} ${secondPointX2} ${secondPointY2} ${thirdPointX} ${thirdPointY}
          C ${thirdPointX1} ${thirdPointY1} ${thirdPointX2} ${thirdPointY2} ${fourthPointX} ${fourthPointY}
          C ${fourthPointX1} ${fourthPointY1} ${fourthPointX2} ${fourthPointY2} ${firstPointX} ${firstPointY}
          Z
        `}
        fill="#C4C4C4"
      />
    </svg>
  );
};
