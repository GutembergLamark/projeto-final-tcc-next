"use client";

import Image from "next/image";
import * as svgSheet from "./svgSheet";

export function Icon({ type }: { type: keyof typeof svgSheet }) {
  const svgElement = svgSheet[type].default;

  return (
    <Image
      src={svgElement.src}
      width={svgElement.width}
      height={svgElement.height}
      alt={`Icon ${type}`}
    />
  );
}
