import { useState, useRef, useEffect } from 'react';

export function Canvas(props) {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  let heightOffset = 0;
  let widthOffset = 5;
  let snowFlakes = [];

  class Snowflake {
    constructor(containerWidth, containerHeight) {
      this.x = Math.random() * containerWidth;
      this.y = Math.random() * containerHeight;
      this.offset = 1;
      this.radius = Math.random() * 3;
      this.velocity = this.radius;
    }

    draw() {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      context.fill();
      context.closePath();

      this.y += this.velocity;
      this.x += this.offset;
      if (this.y > context.canvas.height || this.x > context.canvas.width) {
        let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        this.x = Math.random() * context.canvas.clientWidth * plusOrMinus;
        this.y = 0;
      }
    }
  }

  const draw = () => {
    heightOffset += 5;
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    for (let i = 0; i < 10; i++) {
      context.fillStyle = "#ffffff";
    }
    if (heightOffset > context.canvas.height) {
      heightOffset = 0;
      widthOffset = Math.random() * context.canvas.width;
    }
  };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      setContext(ctx);
    }
  }, []);

  useEffect(() => {

    for (let i = 0; i < 1000; i++) {
      snowFlakes.push(new Snowflake(context.canvas.width, context.canvas.height));
    }
    let frameCount = 0;
    let animationFrameId;

    if (context) {
      const render = () => {
        snowFlakes.forEach((snowFlake) => { snowFlake.draw() })
        frameCount++;
        draw(frameCount);
        animationFrameId = window.requestAnimationFrame(render);
        snowFlakes.forEach((snowFlake) => snowFlake.draw());
      };
      render();
    }
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw, context]);

  return <canvas ref={canvasRef} width={props.width} height={props.height} />;
}