import { type ClassValue, clsx } from "clsx"
import path from "path";
import { twMerge } from "tailwind-merge"

const fs = typeof window === 'undefined' ? require('fs').promises : null;


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getbrandProfile = async () => {
  
  let dirs:string[] = [];
  try {
    // Attempt to read the directories from the specified path
     dirs = await fs.readdir(path.join(process.cwd(), "/public/brand-style"));

     console.log(dirs);
     
    // Return an object with the populated dirs array
    return { dirs };
  } catch (error) {
    // Handle errors, and return an object with an 'error' property
    return {dirs};
  }
};