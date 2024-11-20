import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const deepClone = (obj: any) => {
  if (obj === null || typeof obj !== 'object') return obj;

  const result = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}