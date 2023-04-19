"use client";

import { Line, Rectangle, Util } from "pts";
import { HandleAnimateFn, PtsCanvas } from "react-pts-canvas";
import { indigo } from "tailwindcss/colors";

const onAnimate: HandleAnimateFn = (space, form, ftime) => {
  const subs = space.innerBound.map((p) =>
    Line.subpoints([p, space.pointer], 30)
  );
  const rects = Util.zip(subs).map((r, i) =>
    Rectangle.corners(r).rotate2D((i * Math.PI) / 60, space.pointer)
  );

  form.strokeOnly(indigo[400], 2).polygons(rects);
};

export function RectanglesHeroAnimation() {
  return (
    <PtsCanvas
      background="transparent"
      style={{ position: "absolute", inset: 0 }}
      canvasStyle={{ width: "100%", height: "100%" }}
      onAnimate={onAnimate}
    />
  );
}
