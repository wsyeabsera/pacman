export enum WallTypes {
  BORDER = "border",
  OBSTACLE = "obstacle",
}

const smallObstacleSquare = { width: 50, height: 50, type: WallTypes.OBSTACLE };
const bigObstacleSquare = { width: 100, height: 100, type: WallTypes.OBSTACLE };


const smallBorderSquare = { width: 50, height: 50, type: WallTypes.BORDER };

const borders = [
  { top: 0, left: 50, ...smallBorderSquare },
  { top: 0, left: 100, ...smallBorderSquare },
  { top: 0, left: 150, ...smallBorderSquare },
  { top: 0, left: 200, ...smallBorderSquare },
  { top: 0, left: 250, ...smallBorderSquare },
  { top: 0, left: 300, ...smallBorderSquare },
  { top: 0, left: 350, ...smallBorderSquare },
  { top: 0, left: 400, ...smallBorderSquare },
  { top: 0, left: 450, ...smallBorderSquare },
  { top: 0, left: 500, ...smallBorderSquare },
  { top: 0, left: 550, ...smallBorderSquare },
  { top: 0, left: 600, ...smallBorderSquare },
  { top: 0, left: 650, ...smallBorderSquare },
  { top: 0, left: 700, ...smallBorderSquare },
  { top: 0, left: 750, ...smallBorderSquare },
  { top: 0, left: 800, ...smallBorderSquare },

  { top: 0, left: 0, ...smallBorderSquare },

  { top: 50, left: 0, ...smallBorderSquare },
  { top: 100, left: 0, ...smallBorderSquare },
  { top: 150, left: 0, ...smallBorderSquare },
  { top: 200, left: 0, ...smallBorderSquare },
  { top: 250, left: 0, ...smallBorderSquare },
  { top: 300, left: 0, ...smallBorderSquare },
  { top: 350, left: 0, ...smallBorderSquare },
  { top: 400, left: 0, ...smallBorderSquare },
  { top: 450, left: 0, ...smallBorderSquare },
  { top: 500, left: 0, ...smallBorderSquare },
  { top: 550, left: 0, ...smallBorderSquare },
  { top: 600, left: 0, ...smallBorderSquare },

  { top: 600, left: 50, ...smallBorderSquare },
  { top: 600, left: 100, ...smallBorderSquare },
  { top: 600, left: 150, ...smallBorderSquare },
  { top: 600, left: 200, ...smallBorderSquare },
  { top: 600, left: 250, ...smallBorderSquare },
  { top: 600, left: 300, ...smallBorderSquare },
  { top: 600, left: 350, ...smallBorderSquare },
  { top: 600, left: 400, ...smallBorderSquare },
  { top: 600, left: 450, ...smallBorderSquare },
  { top: 600, left: 500, ...smallBorderSquare },
  { top: 600, left: 550, ...smallBorderSquare },
  { top: 600, left: 600, ...smallBorderSquare },
  { top: 600, left: 650, ...smallBorderSquare },
  { top: 600, left: 700, ...smallBorderSquare },
  { top: 600, left: 750, ...smallBorderSquare },
  { top: 600, left: 800, ...smallBorderSquare },

  { top: 50, left: 800, ...smallBorderSquare },
  { top: 100, left: 800, ...smallBorderSquare },
  { top: 150, left: 800, ...smallBorderSquare },
  { top: 200, left: 800, ...smallBorderSquare },
  { top: 250, left: 800, ...smallBorderSquare },
  { top: 300, left: 800, ...smallBorderSquare },
  { top: 350, left: 800, ...smallBorderSquare },
  { top: 400, left: 800, ...smallBorderSquare },
  { top: 450, left: 800, ...smallBorderSquare },
  { top: 500, left: 800, ...smallBorderSquare },
  { top: 550, left: 800, ...smallBorderSquare },
  { top: 600, left: 800, ...smallBorderSquare },
]

const obstaclesMatrix = [
  ...borders,
  { top: 100, left: 150, ...smallObstacleSquare },
  { top: 100, left: 100, ...smallObstacleSquare },
  { top: 100, left: 150, ...smallObstacleSquare },
  { top: 100, left: 250, ...smallObstacleSquare },
  { top: 100, left: 300, ...smallObstacleSquare },
  { top: 100, left: 350, ...smallObstacleSquare },

  { top: 100, left: 450, ...smallObstacleSquare },
  { top: 100, left: 500, ...smallObstacleSquare },
  { top: 100, left: 550, ...smallObstacleSquare },
  { top: 100, left: 600, ...smallObstacleSquare },

  { top: 100, left: 500, ...smallObstacleSquare },
  { top: 150, left: 500, ...smallObstacleSquare },
  { top: 200, left: 500, ...smallObstacleSquare },
  { top: 250, left: 500, ...smallObstacleSquare },

  { top: 100, left: 450, ...smallObstacleSquare },
  { top: 100, left: 500, ...smallObstacleSquare },
  { top: 100, left: 550, ...smallObstacleSquare },
  { top: 100, left: 600, ...smallObstacleSquare },


  { top: 100, left: 50, ...smallObstacleSquare },
  { top: 100, left: 50, ...smallObstacleSquare },
  { top: 150, left: 50, ...smallObstacleSquare },
  { top: 150, left: 50, ...smallObstacleSquare },


  { top: 500, left: 50, ...smallObstacleSquare },
  { top: 500, left: 100, ...smallObstacleSquare },
  { top: 500, left: 150, ...smallObstacleSquare },
  { top: 500, left: 200, ...smallObstacleSquare },

  { top: 500, left: 450, ...smallObstacleSquare },
  { top: 500, left: 500, ...smallObstacleSquare },
  { top: 500, left: 550, ...smallObstacleSquare },
  { top: 500, left: 600, ...smallObstacleSquare },
  { top: 500, left: 650, ...smallObstacleSquare },
  { top: 450, left: 650, ...smallObstacleSquare },

  { top: 200, left: 200, ...bigObstacleSquare },
  { top: 200, left: 350, ...bigObstacleSquare },
  { top: 300, left: 50, ...bigObstacleSquare },
  { top: 350, left: 200, ...bigObstacleSquare },

  { top: 400, left: 350, ...smallObstacleSquare },
  { top: 400, left: 400, ...smallObstacleSquare },
  { top: 400, left: 450, ...smallObstacleSquare },

  { top: 150, left: 650, ...bigObstacleSquare },
  { top: 300, left: 650, ...bigObstacleSquare },

];

const removeDotIfTouched = (pacman: { top: number, left: number }, dots: { top: number, left: number }[]) => {
  return dots.filter(dot => !(Math.abs(dot.top - pacman.top) < 5 && Math.abs(dot.left - pacman.left) < 5));
}

const generateRightDots = (top: number, left: number, count: number) => {
  const dots = [];
  for (let i = 0; i < count; i++) {
    dots.push({ top, left: left + i * 30 });
  }
  return dots;
}

const generateBottomDots = (top: number, left: number, count: number) => {
  const dots = [];
  for (let i = 0; i < count; i++) {
    dots.push({ top: top + i * 30, left });
  }
  return dots;
}

const initialDots: any[] = [
  // { top: 70, left: 150 },
  ...generateRightDots(70, 150, 21),

  ...generateBottomDots(110, 220, 3),

  ...generateRightDots(170, 250, 8),

  ...generateBottomDots(210, 320, 13),

  // ...generateRightDots(70, 150, 20),
  // { top: 50, left: 300 },
  // { top: 50, left: 450 },
  // { top: 100, left: 100 },
  // { top: 100, left: 250 },
  // { top: 100, left: 400 },
  // { top: 100, left: 550 },
  // { top: 150, left: 50 },
  // { top: 150, left: 200 },
  // { top: 150, left: 350 },
  // { top: 150, left: 500 },
  // { top: 200, left: 150 },
  // { top: 200, left: 300 },
  // { top: 200, left: 450 },
  // { top: 250, left: 100 },
  // { top: 250, left: 250 },
  // { top: 250, left: 400 },
  // { top: 250, left: 550 },
  // { top: 300, left: 150 },
  // { top: 300, left: 300 },
  // { top: 300, left: 450 },
  // { top: 350, left: 150 },
  // { top: 350, left: 300 },
  // { top: 350, left: 450 },
  // { top: 400, left: 100 },
  // { top: 400, left: 250 },
  // { top: 400, left: 400 },
  // { top: 400, left: 550 },
  // { top: 450, left: 50 },
  // { top: 450, left: 200 },
  // { top: 450, left: 350 },
  // { top: 450, left: 500 },
  // { top: 500, left: 150 },
  // { top: 500, left: 300 },
  // { top: 500, left: 450 },
];


export { obstaclesMatrix, initialDots, removeDotIfTouched };