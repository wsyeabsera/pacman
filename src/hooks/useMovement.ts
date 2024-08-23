import { useState, useEffect } from 'react';

const useMovement = (obstacles: { top: number; left: number; width: number; height: number }[]) => {
  const [pacmanPosition, setPacmanPosition] = useState({ top: 60, left: 50 });
  const [direction, setDirection] = useState<string | null>(null);
  const [moveInterval, setMoveInterval] = useState<NodeJS.Timeout | null>(null);

  const movePacman = (direction: string) => {
    setPacmanPosition((prevPosition) => {
      let newPosition = { ...prevPosition };
      switch (direction) {
        case 'w':
          newPosition.top = Math.max(0, prevPosition.top - 10);
          break;
        case 's':
          newPosition.top = Math.min(800, prevPosition.top + 10);
          break;
        case 'a':
          newPosition.left = Math.max(0, prevPosition.left - 10);
          break;
        case 'd':
          newPosition.left = Math.min(800, prevPosition.left + 10);
          break;
      }

      if (!isCollision(newPosition)) {
        setDirection(direction);
        return newPosition;
      }
      return prevPosition;
    });
  };

  const isCollision = (newPosition: { top: number; left: number }) => {
    const pacmanRect = {
      top: newPosition.top,
      left: newPosition.left,
      right: newPosition.left + 30,
      bottom: newPosition.top + 30,
    };

    for (let obstacle of obstacles) {
      const obstacleRect = {
        top: obstacle.top,
        left: obstacle.left,
        right: obstacle.left + obstacle.width,
        bottom: obstacle.top + obstacle.height,
      };

      if (
        pacmanRect.right > obstacleRect.left &&
        pacmanRect.left < obstacleRect.right &&
        pacmanRect.bottom > obstacleRect.top &&
        pacmanRect.top < obstacleRect.bottom
      ) {
        return true;
      }
    }
    return false;
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!moveInterval) {
      movePacman(event.key.toLowerCase());
      const interval = setInterval(() => movePacman(event.key.toLowerCase()), 100);
      setMoveInterval(interval);
    }
  };

  const handleKeyUp = () => {
    if (moveInterval) {
      clearInterval(moveInterval);
      setMoveInterval(null);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moveInterval]);

  return {
    pacmanPosition,
    direction,
  };
};

export default useMovement;