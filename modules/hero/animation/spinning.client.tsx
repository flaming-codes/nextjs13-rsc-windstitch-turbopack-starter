"use client";

import { Group, Line, Rectangle, Util, Num, Vec, CanvasSpace } from "pts";
import { useCallback, useRef } from "react";
import {
  HandleAnimateFn,
  PtsCanvas,
  HandleStartFn,
  HandleResizeFn,
} from "react-pts-canvas";
import { indigo } from "tailwindcss/colors";

function seedPoints(space: CanvasSpace) {
  const pts = Array.from({ length: 50 }, (_, i) => {
    return Num.randomPt(space.innerBound.p1, space.innerBound.p2);
  });

  return Group.fromArray(pts);
}

export function SpinningHeroAnimation() {
  const ptsRef = useRef<Group>(new Group());

  const onStart = useCallback<HandleStartFn>((bound, space) => {
    ptsRef.current = seedPoints(space);
  }, []);

  const onResize = useCallback<HandleResizeFn>((space) => {
    ptsRef.current = seedPoints(space);
  }, []);

  const onAnimate = useCallback<HandleAnimateFn>((space, form, time, ftime) => {
    const pts = ptsRef.current;
    const c = space.pointer;

    // const factor = Num.cycle((time % 2000) / 2000) - 0.5;
    // Rectangle.corners(pts).rotate2D((factor * Math.PI) / 60, space.pointer);

    pts.forEach((pt) => {
      const mag = Line.magnitude(new Group(c, pt));
      form.fillOnly("white").point(pt, Math.abs(20 - mag * 0.05), "circle");
    });

    /*
    const subs = space.innerBound.map((p) =>
      Line.subpoints([p, space.pointer], 30)
    );

    const rects = Util.zip(subs).map((r, i) =>
      Rectangle.corners(r).rotate2D((i * Math.PI) / 60, space.pointer)
    );

    form.strokeOnly(indigo[400], 2).polygons(rects);
    */
  }, []);

  return (
    <PtsCanvas
      background="transparent"
      style={{ position: "absolute", inset: 0 }}
      onStart={onStart}
      onResize={onResize}
      onAnimate={onAnimate}
    />
  );
}
