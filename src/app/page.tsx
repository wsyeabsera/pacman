"use client"

import { useState, useEffect, useRef, useMemo } from 'react';
import useMovement from '../hooks/useMovement';
import { initialDots, obstaclesMatrix, removeDotIfTouched, WallTypes } from './values';
import Image from 'next/image';

const PacmanGame = () => {
  const obstacles = useMemo(() => obstaclesMatrix, []);

  const { pacmanPosition, direction } = useMovement(obstacles);
  const [dots, setDots] = useState(initialDots);
  const [monsterPosition, setMonsterPosition] = useState({ top: 150, left: 150 });
  const [isGameOver, setIsGameOver] = useState(false);
  const [missionComplete, setMissionComplete] = useState(true);

  const monsterIntervalRef = useRef(null);

  useEffect(() => {
    const newDots = dots.filter(dot => {
      const distance = Math.sqrt(
        Math.pow(dot.top - pacmanPosition.top, 2) +
        Math.pow(dot.left - pacmanPosition.left, 2)
      );
      return distance > 10; // Adjust the distance threshold as needed
    });
    setDots(newDots);

    if (newDots.length === 0) {
      setMissionComplete(true);
    }

    const monsterDistance = Math.sqrt(
      Math.pow(monsterPosition.top - pacmanPosition.top, 2) +
      Math.pow(monsterPosition.left - pacmanPosition.left, 2)
    );
    if (monsterDistance < 20) { // Adjust the distance threshold as needed
      setIsGameOver(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pacmanPosition, monsterPosition]);

  useEffect(() => {
    const moveMonster = () => {
      const step = 5; // Adjust the step size as needed
      let newTop = monsterPosition.top;
      let newLeft = monsterPosition.left;

      // Move vertically towards Pac-Man
      if (monsterPosition.top < pacmanPosition.top) {
        newTop += step;
      } else if (monsterPosition.top > pacmanPosition.top) {
        newTop -= step;
      }

      // Check for vertical collisions
      const verticalCollision = obstacles.some(obstacle => {
        return (
          newTop < obstacle.top + obstacle.height &&
          newTop + 32 > obstacle.top && // 32 is the height of the monster
          monsterPosition.left < obstacle.left + obstacle.width &&
          monsterPosition.left + 32 > obstacle.left // 32 is the width of the monster
        );
      });

      if (verticalCollision) {
        newTop = monsterPosition.top; // Revert to original position if collision detected
      }

      // Move horizontally towards Pac-Man
      if (monsterPosition.left < pacmanPosition.left) {
        newLeft += step;
      } else if (monsterPosition.left > pacmanPosition.left) {
        newLeft -= step;
      }

      // Check for horizontal collisions
      const horizontalCollision = obstacles.some(obstacle => {
        return (
          newTop < obstacle.top + obstacle.height &&
          newTop + 32 > obstacle.top && // 32 is the height of the monster
          newLeft < obstacle.left + obstacle.width &&
          newLeft + 32 > obstacle.left // 32 is the width of the monster
        );
      });

      if (horizontalCollision) {
        newLeft = monsterPosition.left; // Revert to original position if collision detected
      }

      setMonsterPosition({ top: newTop, left: newLeft });
    };

    if (!monsterIntervalRef.current) {
      monsterIntervalRef.current = setInterval(moveMonster, 80); // Adjust the interval as needed
    }

    return () => {
      if (monsterIntervalRef.current) {
        clearInterval(monsterIntervalRef.current);
        monsterIntervalRef.current = null;
      }
    };
  }, [pacmanPosition, monsterPosition, obstacles]);

  if (isGameOver) {
    return (
      <div className="bg-black flex justify-center items-center h-screen">
        <h1 className="text-white text-4xl">Game Over</h1>
      </div>
    );
  }

  const getBackground = (type: WallTypes) => {
    switch (type) {
      case WallTypes.BORDER:
        return '/assets/image.png'
      case WallTypes.OBSTACLE:
        return '/assets/wall-02.png'
      default:
        return '/assets/wall-02.png'
    }
  };

  return (
    <div className="bg-black flex justify-center items-center h-screen">
      <div className="relative w-[800px] h-[800px] bg-black">
        <div
          id="pacman"
          className={[
            "absolute w-8 h-8 rounded-full bg-[url('/assets/pacman.gif')] object-fill bg-contain",
            direction === "w" && "-rotate-90",
            direction === "s" && "rotate-90",
            direction === "a" && "-rotate-180",
            direction === "d" && "rotate-0",
          ].join(" ")}
          style={{ top: pacmanPosition.top, left: pacmanPosition.left }}
        />
        {obstacles.map((obstacle, index) => (
          <Image
            key={index}
            src={getBackground(obstacle.type)}
            width={50}
            height={50}
            alt='obstacle'
            className={[
              `absolute object-fill bg-contain`
            ].join(" ")}
            style={{
              top: obstacle.top,
              left: obstacle.left,
              width: obstacle.width,
              height: obstacle.height,
            }}
          />
        ))}
        {removeDotIfTouched(pacmanPosition, dots).map((dot, index) => (
          <div
            key={index}
            className="absolute w-2 h-2 rounded-full bg-yellow-500"
            style={{
              top: dot.top,
              left: dot.left,
            }}
          ></div>
        ))}
        <div
          id="monster"
          className="absolute w-8 h-8 rounded-full bg-[url('/assets/monster.gif')] object-fill bg-contain"
          style={{ top: monsterPosition.top, left: monsterPosition.left }}
        />

      </div>
      {missionComplete && (
        <div className="absolute h-screen w-full inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white text-4xl">
          Mission Complete!
        </div>
      )}
    </div>
  );
};

export default PacmanGame;