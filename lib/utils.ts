import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

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

