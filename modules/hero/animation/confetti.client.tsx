"use client";

import { useCallback, useRef } from "react";
import {
  CanvasForm,
  CanvasSpace,
  Const,
  Pt,
  Rectangle,
  Triangle,
  Util,
} from "pts";
import {
  HandleAnimateFn,
  HandleResizeFn,
  HandleStartFn,
  PtsCanvas,
} from "react-pts-canvas";

// Confetti extends Pt to implement custom logic and rendering.
class Confetti extends Pt {
  color: string;
  size: number;
  dir: number;
  shape: string;
  accAngle: number;

  constructor(...args: any) {
    super(...args);
    this.color = ["#f03", "#09f", "#0c6", "#fff"][Util.randomInt(4)];
    this.size = Math.random() * 7 + 2;
    this.accAngle = Math.random() * Const.two_pi;
    this.dir = Math.random() > 0.5 ? 1 : -1;
    this.shape = ["rect", "circle", "tri"][Util.randomInt(3)];
  }

  render(form: CanvasForm, space: CanvasSpace) {
    if (this.y < space.size.y) {
      this.y += 2 / this.size + Math.random();
      this.x += Math.random() - Math.random();
      this.accAngle +=
        this.dir * (Math.random() * Const.one_degree + Const.one_degree);

      if (this.shape == "tri" || this.shape == "rect") {
        let shape =
          this.shape == "tri"
            ? Triangle.fromCenter(this, this.size)
            : Rectangle.corners(Rectangle.fromCenter(this, this.size * 2));
        shape.rotate2D(this.accAngle, this);
        form.fillOnly(this.color).polygon(shape);
      } else {
        form.fillOnly(this.color).point(this, this.size, "circle");
      }
    }
  }
}

export function ConfettiHeroAnimation() {
  const isMouseOverRef = useRef(false);
  const ptsRef = useRef<Confetti[]>([]);

  const onStart = useCallback<HandleStartFn>((bound, space, form) => {}, []);

  const onAnimate = useCallback<HandleAnimateFn>((space, form, time, ftime) => {
    const hasReachedBottom =
      ptsRef.current.length > 1000 ||
      (ptsRef.current.length > 0 && ptsRef.current[0].y > space.size.y);

    if (hasReachedBottom) {
      ptsRef.current.shift();
    }

    if (isMouseOverRef.current && Math.floor(time) % 100 >= 50) {
      ptsRef.current.push(new Confetti(space.pointer));
    }

    ptsRef.current.forEach((p) => p.render(form, space));
  }, []);

  const onResize = useCallback<HandleResizeFn>((space, form, size, event) => {
    ptsRef.current.forEach((p) => p.render(form, space));
  }, []);

  return (
    <div
      style={{ position: "absolute", inset: 0 }}
      onMouseEnter={() => {
        isMouseOverRef.current = true;
      }}
      onMouseLeave={() => {
        isMouseOverRef.current = false;
      }}
    >
      <PtsCanvas
        background="lightgray"
        style={{ width: "100%", height: "100%" }}
        onStart={onStart}
        onAnimate={onAnimate}
        onResize={onResize}
      />
    </div>
  );
}
