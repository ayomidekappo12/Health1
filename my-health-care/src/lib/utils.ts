import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getSessionData } from "@/app/actions";
import axios from "axios";
import { normalizeError, NormalizedError } from "@/lib/errors";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const debugLog = (...args: unknown[]) => {
  if (process.env.NODE_ENV === "development") {
    console.log(...args);
  }
};

export const debugError = (...args: unknown[]) => {
  if (process.env.NODE_ENV === "development") {
    console.error(...args);
  }
};

interface SessionData {
  aut?: string;
  role?: string;
}

export const fetcher = async <T = unknown>(url: string): Promise<T> => {
  let session: SessionData = {};

  try {
    const raw = await getSessionData();

    if (typeof raw === "string") {
      // safely parse with a cast
      session = JSON.parse(raw) as SessionData;
    } else if (raw && typeof raw === "object") {
      session = raw as SessionData;
    }
  } catch {
    session = {};
  }

  const token = session.aut;
  const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};

  try {
    const res = await api.get<T>(url, config);
    return res.data;
  } catch (err) {
    throw new NormalizedError(normalizeError(err));
  }
};

