import React, { useEffect, useRef, useState } from 'react';
import { Bg } from './Background.styles';

export interface IBackground {
  children?: String;
}

const Background: React.FC<IBackground> = () => {
  const [width, setWidth] = useState(globalThis?.window?.innerWidth);
  const [height, setHeight] = useState(globalThis?.window?.innerHeight);
  const katakana =
    'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
  const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nums = '0123456789';

  const letters = katakana + latin + nums;

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
    const canvas: any = canvasRef.current;
    const context = canvas!.getContext('2d');
    canvas!.width = width;
    canvas!.height = height;
    const fontSize = 16,
      columns = canvas!.width / fontSize;

    const drops: any = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }
    function draw() {
      context.font = 'bold 16px sans-serif';
      context.fillStyle = 'rgba(0, 0, 0, .05)';
      context.fillRect(0, 0, canvas.width, canvas!.height);
      for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        context.shadowColor = '#0f0';
        context.shadowBlur = 7;
        context.strokeText(text, i * fontSize, drops[i] * fontSize);
        context.shadowColor = 'transparent';
        context.shadowBlur = 0;
        context.fillStyle = '#0f0';
        context.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas!.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    }
    setInterval(draw, 70);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Bg>
      <canvas ref={canvasRef} />
    </Bg>
  );
};

export default Background;
