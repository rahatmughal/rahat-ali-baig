// components/SpotlightAnimation.tsx
import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
}

interface CellProps {
  p1: Point;
  p2: Point;
  p3: Point;
  p4: Point;
}

class Cell {
  private p1: Point;
  private p2: Point;
  private p3: Point;
  private p4: Point;

  constructor({ p1, p2, p3, p4 }: CellProps) {
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
    this.p4 = p4;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = 'rgba(255,255,255,0)';
    ctx.fillStyle = 'rgba(105,0,210,1)'; // Purple color for the dot
    ctx.beginPath();
    ctx.arc(this.p1.x, this.p1.y, 1.5, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.lineWidth = 6;
    ctx.moveTo(this.p1.x + 0.5, this.p1.y + 0.5);
    ctx.lineTo(this.p2.x - 0.5, this.p2.y + 0.5);
    ctx.lineTo(this.p3.x - 0.5, this.p3.y - 0.5);
    ctx.lineTo(this.p4.x + 0.5, this.p4.y - 0.5);
    ctx.closePath();
    ctx.stroke();
  }
}

class Grid {
  private ctx: CanvasRenderingContext2D;
  private w: number;
  private h: number;
  private bubble: number;
  private cells: number;
  private ms: Point | null = null;
  private sqs: (Cell | undefined)[] = [];

  constructor(ctx: CanvasRenderingContext2D, w: number, h: number, bubble: number, cells: number) {
    this.ctx = ctx;
    this.w = w;
    this.h = h;
    this.bubble = bubble;
    this.cells = cells;
  }

  public struct() {
    const col = ((this.w - 1) / this.cells | 0) + 1;
    const row = ((this.h - 1) / this.cells | 0) + 1;
    const bubbleXL = 1 / (this.bubble * this.bubble);
    const diam = [
      { x: -1, y: 0 },
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: 0, y: 1 }
    ];

    const pindx = (x: number, y: number) => (0 <= x && x < col + 1 && 0 <= y && y < row + 1) ? x + y * (col + 1) : null;
    const cindx = (x: number, y: number) => (0 <= x && x < col && 0 <= y && y < row) ? x + y * col : null;

    for (let x = 0; x < col + 1; x++) {
      for (let y = 0; y < row + 1; y++) {
        const px = x * this.cells;
        const py = y * this.cells;
        this.pts[pindx(x, y) as number] = new Part(px, py);

        if (x > 0 && y > 0) {
          const idxc = cindx(x - 1, y - 1);
          const p1 = this.pts[pindx(x - 1, y - 1) as number];
          const p2 = this.pts[pindx(x, y - 1) as number];
          const p3 = this.pts[pindx(x, y) as number];
          const p4 = this.pts[pindx(x - 1, y) as number];
          if (p1 && p2 && p3 && p4) {
            this.sqs[idxc as number] = new Cell({ p1, p2, p3, p4 });
          }
        }
      }
    }

    for (let x = 0; x < col + 1; x++) {
      for (let y = 0; y < row + 1; y++) {
        const p = this.pts[pindx(x, y) as number];
        if (p) {
          let cnt = 1;
          let msX = x * this.cells;
          let msY = y * this.cells;
          for (let i = 0; i < diam.length; i++) {
            const dp = diam[i];
            const cp = this.pts[pindx(x + dp.x, y + dp.y) as number];
            if (cp) {
              msX += cp.x - dp.x * this.cells;
              msY += cp.y - dp.y * this.cells;
              cnt++;
            }
          }
          p.vx += (msX / cnt - p.x) * 0.6;
          p.vy += (msY / cnt - p.y) * 0.6;

          if (this.ms) {
            const d2 = (this.ms.x - p.x) ** 2 + (this.ms.y - p.y) ** 2;
            if (d2 * bubbleXL < 1.0) {
              const t = 1.0 - (d2 * bubbleXL);
              p.vx -= (this.ms.x - p.x) * t * 0.06;
              p.vy -= (this.ms.y - p.y) * t * 0.06;
            }
          }
        }
      }
    }

    for (let x = 0; x < col + 1; x++) {
      for (let y = 0; y < row + 1; y++) {
        const p = this.pts[pindx(x, y) as number];
        if (p) p.anim();
      }
    }
  }

  public draw() {
    this.ctx.clearRect(0, 0, this.w, this.h);
    for (const sq of this.sqs) {
      if (sq) sq.draw(this.ctx);
    }
  }

  public setMousePosition(point: Point) {
    this.ms = point;
  } private pts: (Part | undefined)[] = [];
}

class Part {
  public x: number;
  public y: number;
  public vx: number;
  public vy: number;

  constructor(px: number, py: number) {
    this.x = px;
    this.y = py;
    this.vx = 0;
    this.vy = 0;
  }

  public anim() {
    this.x += this.vx;
    this.y += this.vy;
    this.vx *= 0.9;
    this.vy *= 0.9;
  }
}

const DotsBG: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    ctx.fillStyle = 'rgba(0,0,0,1)';
    ctx.fillRect(0, 0, w, h);

    const bubble = 300;
    const cells = 30;
    const grid = new Grid(ctx, w, h, bubble, cells);

    window.addEventListener('mousemove', (e: MouseEvent) => {
      grid.setMousePosition({ x: e.clientX, y: e.clientY });
    }, false);

    window.addEventListener('touchmove', (e: TouchEvent) => {
      e.preventDefault();
      grid.setMousePosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }, false);

    function load() {
      grid.struct();
      grid.draw();
      window.requestAnimationFrame(load);
    }

    load();

    console.log('Code With ❤ Always, @tmrDevelops');
  }, []);

  return (
    <div className="absolute z-0 opacity-60 w-full h-screen overflow-hidden">
      <canvas id="canv" ref={canvasRef} className="absolute top-0 left-0 w-full " />
    </div>
  );
};

export default DotsBG;
