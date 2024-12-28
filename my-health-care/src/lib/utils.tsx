import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateToApplicationDate(inputDate: string) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateObj = new Date(inputDate);
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  return `${month} ${year}`;
}

export async function deletecloudinaryasset(publicId: string) {
  const response = await fetch("/api/utils/cloudinary/asset", {
    method: "DELETE",
    body: JSON.stringify({ publicId }),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }

  return response.json();
}

export function generateRandomId(length: number): string {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
