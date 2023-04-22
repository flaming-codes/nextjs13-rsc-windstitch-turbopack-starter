"use client";

import { Group, Line, Num, CanvasSpace } from "pts";
import { useCallback, useRef } from "react";
import {
  HandleAnimateFn,
  PtsCanvas,
  HandleStartFn,
  HandleResizeFn,
} from "react-pts-canvas";

function seedPoints(space: CanvasSpace) {
  const pts = Array.from({ length: 80 }, (_, i) => {
    return Num.randomPt(space.innerBound.p1, space.innerBound.p2);
  });

  return Group.fromArray(pts);
}

export function MagnifyHeroAnimation() {
  const ptsRef = useRef<Group>(new Group());
  const colorsRef = useRef<string[]>([]);

  const onStart = useCallback<HandleStartFn>((bound, space) => {
    ptsRef.current = seedPoints(space);
    colorsRef.current = ["--yellowA6", "--yellowA8", "--yellowA10"].map(
      (value) =>
        getComputedStyle(document.documentElement).getPropertyValue(value)
    );
  }, []);

  const onResize = useCallback<HandleResizeFn>((space) => {
    ptsRef.current = seedPoints(space);
  }, []);

  const onAnimate = useCallback<HandleAnimateFn>((space, form, time, ftime) => {
    const colors = colorsRef.current;

    const duration = 8_000;
    const rawFactor = Num.cycle((time % duration) / duration) - 0.5;
    const factor = Num.mapToRange(rawFactor, -0.5, 0.5, 0.03, 0.08);

    ptsRef.current.forEach((pt, i) => {
      const dot = colors[i % colors.length];
      const mag = Line.magnitude(new Group(space.pointer, pt)) * 0.7;
      form.fillOnly(dot).point(pt, mag * factor, "circle");
    });
  }, []);

  return (
    <div className="bg-blue-6 absolute inset-0">
      <PtsCanvas
        background="transparent"
        style={{ width: "100%", height: "100%" }}
        onStart={onStart}
        onResize={onResize}
        onAnimate={onAnimate}
      />
    </div>
  );
}