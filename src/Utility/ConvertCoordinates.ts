/*
  <Insert link to documentation for what in God's green Earth all of this means when @Chippy writes it>

  Dynny: You probably didn't write any documentation for it yet
  Chippy: Nah but I'll write something about it. Just like in general how StDB should be 1080p and the client is downscaled 4x
*/

import { DebugLogger } from "./DebugLogger";

export const ViewportToStdbCoords = (x: number, y: number): { x: number; y: number } => {
  DebugLogger("Converting viewport coordinates to SpacetimeDB coordinates");
  return {
    x: (x + 0.75) * 4,
    y: (y + 0.75) * 4,
  };
};

export const MouseViewportToStdbCoords = (x: number, y: number): { x: number; y: number } => {
  DebugLogger("Converting mouse viewport coordinates to SpacetimeDB coordinates");
  let vh = window.innerHeight;
  let vw = window.innerWidth;

  y = y * (1080 / vh);
  x = x * (1920 / vw);

  return {
    x: x,
    y: y,
  };
};

export const ViewportToStdbSize = (width: number, height: number): { width: number; height: number } => {
  DebugLogger("Converting viewport to SpacetimeDB");
  return {
    width: width * 4,
    height: height * 4,
  };
};

export const ViewportToStdbFontSize = (fontSize: number): { fontSize: number } => {
  DebugLogger("Converting viewport font size to SpacetimeDB font size");
  return {
    fontSize: fontSize * 4,
  };
};

export const StdbToViewportCoords = (x: number, y: number): { x: number; y: number } => {
  DebugLogger("Converting SpacetimeDB coordinates to viewport coordinates");
  return {
    x: x / 4 - 0.75,
    y: y / 4 - 0.75,
  };
};

export const MouseStdbToViewportCoords = (x: number, y: number): { x: number; y: number } => {
  DebugLogger("Converting SpacetimeDB mouse coordinates to viewport coordinates");
  let vh = window.innerHeight;
  let vw = window.innerWidth;

  y = y * (vh / 1080);
  x = x * (vw / 1920);

  return {
    x: x,
    y: y,
  };
};

export const StdbToViewportSize = (width: number, height: number): { width: number; height: number } => {
  DebugLogger("Converting SpacetimeDB size to viewport size");
  return {
    width: width / 4,
    height: height / 4,
  };
};

export const StdbToViewportFontSize = (fontSize: number): { fontSize: number } => {
  DebugLogger("Converting SpacetimeDB font size to viewport font size");
  return {
    fontSize: fontSize / 4,
  };
};

export const GetCoordsFromTransform = (
  transform: string
): { x: number; y: number; rotation: number; scaleX: number | null; scaleY?: number | null } => {
  DebugLogger("Getting coordinates from transform");
  const translate = transform.substring(transform.indexOf("translate(") + 10, transform.indexOf(")"));
  const newX = parseFloat(translate.substring(0, translate.indexOf("px, ")));
  const newY = parseFloat(translate.substring(translate.indexOf(" ") + 1, translate.length - 2));

  let rotationValue;

  if (transform.includes("deg")) {
    rotationValue = parseFloat(transform.substring(transform.indexOf("rotate(") + 7, transform.indexOf("deg")));
  } else {
    rotationValue = 0;
  }

  const scaleXRegex = transform.match(/scaleX\((-?[1-9.])\)/);
  const scaleYRegex = transform.match(/scaleY\((-?[1-9.])\)/);

  let scaleX: number | null = null;
  let scaleY: number | null = null;

  if (scaleXRegex) {
    scaleX = parseFloat(scaleXRegex[1]);
  }

  if (scaleYRegex) {
    scaleY = parseFloat(scaleYRegex[1]);
  }

  return {
    x: newX,
    y: newY,
    rotation: rotationValue,
    scaleX: scaleX,
    scaleY: scaleY,
  };
};

export const GetTransformFromCoords = (
  x: number,
  y: number,
  rotation: number,
  scaleX: number | null | undefined,
  scaleY: number | null | undefined
): string => {
  DebugLogger("Getting transform from coordinates");
  let rotate = "";
  let scaleXString = "";
  let scaleYString = "";

  if (rotation !== 0) rotate = ` rotate(${rotation}deg)`;
  if (scaleX) scaleXString = ` scaleX(${scaleX})`;
  if (scaleY) scaleYString = ` scaleY(${scaleY})`;

  return `translate(${x}px, ${y}px)` + rotate + scaleXString + scaleYString;
};

export const StdbToOverlayCoords = (x: number, y: number): { x: number; y: number } => {
  DebugLogger("Getting SpacetimeDB coordinates to Overlay coordinates");
  let vh = window.innerHeight;

  let newX,
    newY = 0;

  newY = y * (vh / 1080);
  newX = x * (vh / 1080);

  return {
    x: newX,
    y: newY,
  };
};
