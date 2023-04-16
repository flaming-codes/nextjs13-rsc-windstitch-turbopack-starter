"use client";

import { Line, Rectangle, Util } from "pts";
import { HandleAnimateFn, PtsCanvas } from "react-pts-canvas";
import colors from "tailwindcss/colors";

const onAnimate: HandleAnimateFn = (space, form, ftime) => {
  let subs = space.innerBound.map((p) =>
    Line.subpoints([p, space.pointer], 30)
  );
  let rects = Util.zip(subs).map((r, i) =>
    Rectangle.corners(r).rotate2D((i * Math.PI) / 60, space.pointer)
  );

  form.strokeOnly(colors["indigo"][400], 2).polygons(rects);
};

export function HeroAnimation() {
  return (
    <PtsCanvas
      background="transparent"
      style={{ position: "absolute", inset: 0 }}
      canvasStyle={{ width: "100%", height: "100%" }}
      onAnimate={onAnimate}
    />
  );
}
