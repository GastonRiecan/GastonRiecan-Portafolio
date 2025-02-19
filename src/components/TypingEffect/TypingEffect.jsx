import { useState, useEffect } from "react";

const TypingEffect = () => {
  const text = "En constante aprendizaje como desarrollador...";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 50;
    const pauseTime = 800;


    const handleTyping = () => {
      setDisplayedText(text.slice(0, index));

      if (!isDeleting && index === text.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
      }

      setIndex((prev) => prev + (isDeleting ? -1 : 1));
    };

    const timeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text]);

  return (
    <h3 style={{ color: "#B6C5F2", marginLeft: "20px", minHeight: "2rem" }}>
      {displayedText}
    </h3>
  );
};

export default TypingEffect;
