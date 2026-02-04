import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import "./App.css";

export default function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [noTextIndex, setNoTextIndex] = useState(0);
  const [noScale, setNoScale] = useState(1);

  const noTexts = [
    "No 🙄",
    "Nice try Anna 😏",
    "Be serious.",
    "That’s not an option 😌",
    "Anna pls…",
    "Just press YES ❤️",
    "I’m getting tired 😵",
    "You’re embarrassing yourself",
    "Okay fine… YES?"
  ];

  const moveNo = () => {
    setNoPos({
      x: Math.random() * 240 - 120,
      y: Math.random() * 240 - 120
    });

    setNoTextIndex((prev) =>
      prev < noTexts.length - 1 ? prev + 1 : prev
    );

    setNoScale((prev) => (prev > 0.4 ? prev - 0.08 : prev));
  };

  const handleYes = () => {
    setYesClicked(true);
    confetti({
      particleCount: 220,
      spread: 100,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="container">
      {!yesClicked ? (
        <motion.div className="card">
          <h1>Hey Anna, Meri Jaan  💕</h1>
          <p>
            I could’ve asked you normally…<br />
            but I wanted to make you smile 😌
          </p>

          <h2>Will you be my Valentine? 🌹</h2>

          <div className="buttons">
            <button className="yes" onClick={handleYes}>
              YES 💖
            </button>

            <motion.button
              className="no"
              animate={{
                x: noPos.x,
                y: noPos.y,
                scale: noScale
              }}
              onMouseEnter={moveNo}
              onClick={moveNo}
            >
              {noTexts[noTextIndex]}
            </motion.button>
          </div>
        </motion.div>
      ) : (
        <motion.div className="card">
          <h1>YAYYYY 🎉💞</h1>
          <p>
            i love you Sweetheart 😌<br />
            You’re officially my Valentine ❤️
          </p>
        </motion.div>
      )}
    </div>
  );
}
