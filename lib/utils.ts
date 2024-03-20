import { type ClassValue, clsx } from "clsx"
import path from "path";
import { twMerge } from "tailwind-merge"

import { ListBlobResult, list } from '@vercel/blob';


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getItem = async () => {
  const item = await list();
  return item
}