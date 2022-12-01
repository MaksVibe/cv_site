import React, { useEffect, useRef, useState } from 'react';

export interface IBackground {}

const Background: React.FC<IBackground> = () => {
  const [width, setWidth] = useState(globalThis?.window?.innerWidth);
  const [height, setHeight] = useState(globalThis?.window?.innerHeight);

  const letters =
    'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ1234567890'.split(
      ''
    );

  const canvasRef = useRef(null);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    const fontSize = 14,
      columns = canvas.width / fontSize;

    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }
    function draw() {
      context.font = 'normal 14px sans-serif';
      context.fillStyle = 'rgba(0, 0, 0, .1)';
      context.fillRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        context.fillStyle = '#0f0';
        context.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    }

    setInterval(draw, 50);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-full bg-black fixed -z-10 inset-0 brightness-75">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Background;
