import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const FallingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const newHearts: Heart[] = [];
    for (let i = 0; i < 25; i++) {
      newHearts.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 18 + 12,
        duration: Math.random() * 8 + 8,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.4 + 0.3,
      });
    }
    setHearts(newHearts);
  }, []);

  const heartSymbols = ['❤', '♥', '💕', '💗'];

  return (
    <div className="falling-hearts-container">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="falling-heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            color: heart.id % 3 === 0 ? '#f4a8b8' : heart.id % 3 === 1 ? '#d4a574' : '#f7c6d0',
            opacity: heart.opacity,
          }}
        >
          {heartSymbols[heart.id % heartSymbols.length]}
        </span>
      ))}
    </div>
  );
};

export default FallingHearts;
