import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Memoized cn function for better performance
const cnCache = new Map<string, string>();

export function cn(...inputs: ClassValue[]) {
  const key = JSON.stringify(inputs);
  
  if (cnCache.has(key)) {
    return cnCache.get(key)!;
  }
  
  const result = twMerge(clsx(inputs));
  
  // Prevent memory leaks by limiting cache size
  if (cnCache.size > 500) {
    cnCache.clear();
  }
  
  cnCache.set(key, result);
  return result;
}

// Cache for formatted dates to avoid recalculation
const dateCache = new Map<string, string>();

export function formatDate(date: string): string {
  // Check cache first
  if (dateCache.has(date)) {
    return dateCache.get(date)!;
  }

  const currentDate = Date.now();
  const normalizedDate = date.includes("T") ? date : `${date}T00:00:00`;
  const targetDate = new Date(normalizedDate).getTime();
  const timeDifference = Math.abs(currentDate - targetDate);
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  const fullDate = new Date(normalizedDate).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  let result: string;
  if (daysAgo < 1) {
    result = "Today";
  } else if (daysAgo < 7) {
    result = `${fullDate} (${daysAgo}d ago)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    result = `${fullDate} (${weeksAgo}w ago)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    result = `${fullDate} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    result = `${fullDate} (${yearsAgo}y ago)`;
  }

  // Cache the result
  dateCache.set(date, result);
  return result;
}

// Clear cache periodically to prevent memory leaks
if (typeof window !== 'undefined') {
  setInterval(() => {
    if (dateCache.size > 100) {
      dateCache.clear();
    }
  }, 300000); // Clear every 5 minutes if cache gets too large
}
