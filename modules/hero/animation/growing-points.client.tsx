"use client";

import { useCallback, useRef } from "react";
import { Bound, CanvasForm, Create, Group, Pt } from "pts";
import {
  HandleAnimateFn,
  HandleResizeFn,
  HandleStartFn,
  PtsCanvas,
} from "react-pts-canvas";

// Scale of a circle.
const maxRadius = 12;
// Multiplier for the radius of the circles.
// Also nice: 0.02
const intensity = 0.05;
// Divisor over width/height of space.
const density: [number, number] = [40, 40];

const drawCircle =
  (form: CanvasForm, pointer: Pt, fillColor: string) => (pt: Pt, i: number) => {
    const p = pointer.$subtract(pt);
    const mag = p.magnitude();

    const magScaled = Math.min(mag * intensity, maxRadius);
    const radius = maxRadius - magScaled;
    form.fillOnly(fillColor).point(pt, radius, "circle");
  };

export function GrowingPointsHeroAnimation() {
  const gridRef = useRef<Group>(new Group());
  const columnsRef = useRef<number>(20);
  const rowsRef = useRef<number>(20);

  const onStart = useCallback<HandleStartFn>((bound, space, form) => {
    columnsRef.current = space.width / density[0];
    rowsRef.current = space.height / density[1];
    gridRef.current = Create.gridPts(
      space.innerBound,
      columnsRef.current,
      rowsRef.current
    );
  }, []);

  const onAnimate = useCallback<HandleAnimateFn>((space, form, time, ftime) => {
    const { pointer } = space;
    gridRef.current.forEach(drawCircle(form, pointer, "white"));
  }, []);

  const onResize = useCallback<HandleResizeFn>((space, form, size, event) => {
    gridRef.current = Create.gridPts(
      new Bound(...size),
      columnsRef.current,
      rowsRef.current
    );
  }, []);

  return (
    <PtsCanvas
      background="crimson"
      style={{ position: "absolute", inset: 0 }}
      canvasStyle={{ width: "100%", height: "100%" }}
      onStart={onStart}
      onAnimate={onAnimate}
      onResize={onResize}
    />
  );
}
