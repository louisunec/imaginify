import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import qs from "qs"
import { aspectRatioOptions } from "@/constants"
import { Buffer } from "buffer";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ERROR HANDLER
export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    // This is a native JavaScript error (e.g. ,
    // TypeError, ReferenceError, SyntaxError)
    console.error(error.message);
    throw new Error(`Error: ${error.message}`);
  } else if (typeof error === "string") {
    // This is a string error
    console.error(error);
    throw new Error(`Error: ${error}`);
  } else {
    // This is an unknown error
    console.error(error);
    throw new Error(`Unknow error: ${JSON.stringify(error)}`)
  }
}

// PLACEHOLDER LOADER - while image is transforming
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#7986AC" offset="20%" />
      <stop stop-color="#68769e" offset="50%" />
      <stop stop-color="#7986AC" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#7986AC" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
</svg>
`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : (window as any).btoa(str);

export const dataUrl = `data:image/svg+xml;base64,${toBase64(shimmer(1000, 1000))}`;
// === End

// FORM URL QUERY
export const formUrlQuery = ({ 
  searchParams,
  key,
  value,
}: FormUrlQueryParams) => {
  const params = { ...qs.parse(searchParams.toString()), [key]: value };

  return `${window.location.pathname}?${qs.stringify(params, {
    skipNulls: true,
  })}`;
};

// GE IMAGE SIZE
export type AspectRatioKey = keyof typeof aspectRatioOptions;
export const getImageSize = (
  type: string,
  image: any,
  dimension: "width" | "height",
): number => {
  if (type === "fill") {
    return (
      aspectRatioOptions[image.aspectRatio as AspectRatioKey]?.[dimension] 
      || 1000
    );
  }
  return image?.[dimension] || 1000;
};
