import { React, useState, useEffect } from "react";
import ColorChangeForSimon from "./ColorChangeForSimon";

function SimonGame() {
  const SimonColor = ["red", "blue", "green", "yellow"];

  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gamePattern, setGamePattern] = useState([]);
  const [userPattern, setUserPattern] = useState([]);
  const [activeColor, setActiveColor] = useState(null);

  const nextSequence = () => {
    const randomColor = SimonColor[Math.floor(Math.random() * 4)];
    setGamePattern((prev) => [...prev, randomColor]);
    setUserPattern([]);
  };

  const startGame = () => {
    setGameOver(false);
    setStarted(true);
    setGamePattern([]);
    setUserPattern([]);
    setTimeout(nextSequence, 300);
  };

  useEffect(() => {
    if (gamePattern.length > 0) {
      playSequence(gamePattern);
    }
  }, [gamePattern]);

  useEffect(() => {
    const keyPressHandle = () => {
      console.log("Working");
      if (!started) {
        startGame();
      }
    };
    window.addEventListener("keypress", keyPressHandle);
    return () => window.removeEventListener("keypress", keyPressHandle);
  },[started]);

  const handleclick = (color) => {
    if (!started) return;
    AnimateButton(color);
    const newUserDesign = [...userPattern, color];
    setUserPattern(newUserDesign);
    checkAnswer(newUserDesign.length - 1, newUserDesign);
  };

  const checkAnswer = (idx, NewDesign) => {
    if (gamePattern[idx] === NewDesign[idx]) {
      if (gamePattern.length === NewDesign.length) {
        setTimeout(nextSequence, 1000);
      }
    } else {
      setGameOver(true);
      setStarted(false);
    }
  };

  const playSequence = (pattern) => {
    pattern.forEach((color, index) => {
      setTimeout(
        () => {
          AnimateButton(color);
        },
        (index + 1) * 600,
      );
    });
  };

  const AnimateButton = (color) => {
    setActiveColor(color);
    setTimeout(() => setActiveColor(null), 300);
  };

  const buttonStore = <ColorChangeForSimon />;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-4xl font-bold mb-8">
        <h1 className="pb-12">
          {gameOver
            ? "Game Over! , Press any key to restart"
            : "Simon Game : Press any key to start."}
        </h1>
        <div className="grid grid-cols-2 gap-6">
          {SimonColor.map((color) => (
            <button key={color} onClick={() => handleclick(color)}>
              <ColorChangeForSimon
                color={color}
                isActive={activeColor === color}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SimonGame;
