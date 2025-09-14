import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getFirstTwoLetters = (word?: string | null): string => {
  if (!word) return ":(";
  if (word.length === 0) {
    return word; // Return the word itself if it's empty
  }

  // Capitalize the first letter
  const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);

  // Return the first two letters
  return capitalizedWord.substring(0, 2);
};

export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
};

export const getAvatarInitials = (name?: string) => {
  if (!name) return "YA";
  const words = name.trim().split(/\s+/);
  if (words.length === 1) {
    return name.slice(0, 2).toUpperCase();
  }
  const firstInitial = words[0]?.[0] ?? "";
  const secondInitial = words[1]?.[0] ?? "";
  return (firstInitial + secondInitial).toUpperCase();
};
