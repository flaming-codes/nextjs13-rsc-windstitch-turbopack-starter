"use client";

import {
  Group,
  Line,
  Rectangle,
  Util,
  Num,
  Vec,
  CanvasSpace,
  Create,
  Geom,
} from "pts";
import { useCallback, useRef } from "react";
import {
  HandleAnimateFn,
  PtsCanvas,
  HandleStartFn,
  HandleResizeFn,
} from "react-pts-canvas";

function seedGrid(space: CanvasSpace) {
  const w = space.innerBound.width;
  const h = space.innerBound.height;

  const aspectRatio = w / h;
  const columns = Math.ceil(aspectRatio * 10);
  const rows = 10;

  return Create.gridCells(space.innerBound, columns, rows);
}

export function ShearHeroAnimation() {
  const ptsRef = useRef<Group[]>([]);
  const colorsRef = useRef({ dot: "" });
  const isHoverRef = useRef(false);

  const onStart = useCallback<HandleStartFn>((bound, space) => {
    ptsRef.current = seedGrid(space);
    colorsRef.current = {
      dot: getComputedStyle(document.documentElement).getPropertyValue(
        "--blueA10"
      ),
    };
  }, []);

  const onResize = useCallback<HandleResizeFn>((space) => {
    ptsRef.current = seedGrid(space);
  }, []);

  const onAnimate = useCallback<HandleAnimateFn>((space, form, time, ftime) => {
    const pts = ptsRef.current;
    const { dot: blueA8 } = colorsRef.current;
    const c = isHoverRef.current ? space.pointer : space.center;

    const duration = 16_000;
    const rawFactor = Num.cycle((time % duration) / duration) - 0.5;
    const factor = Num.mapToRange(rawFactor, -0.5, 0.5, 0, 0.005);

    pts.forEach((p) => {
      const r = Rectangle.toSquare(p);
      const poly = Rectangle.polygon(r);
      const mag = Line.magnitude(new Group(c, ...p)) * factor;

      Geom.shear2D(poly, mag, c);

      form.fillOnly(blueA8).polygon(poly);
    });
  }, []);

  return (
    <div
      className="bg-blue-6 absolute inset-0"
      onMouseEnter={() => {
        isHoverRef.current = true;
      }}
      onMouseLeave={() => {
        isHoverRef.current = false;
      }}
    >
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
