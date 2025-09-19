import axios from "axios";

export interface AppError {
  message: string;
  code?: number | string;
}

interface AxiosErrorData {
  detail?: string;
  message?: string;
}

export function normalizeError(err: unknown): AppError {
  if (axios.isAxiosError(err)) {
    const data = err.response?.data as AxiosErrorData | undefined;
    return {
      message: data?.detail ?? data?.message ?? err.message,
      code: err.response?.status,
    };
  }

  if (err instanceof Error) {
    return { message: err.message };
  }

  if (typeof err === "object" && err !== null) {
    const e = err as { message?: string; code?: number | string };
    return { message: e.message ?? "Unknown error", code: e.code };
  }

  return { message: String(err) };
}

export class NormalizedError extends Error {
  code?: number | string;

  constructor(appError: AppError) {
    super(appError.message);
    this.name = "NormalizedError";
    this.code = appError.code;
  }
}

// ✅ Type guard for React / TS checks
export function isNormalizedError(err: unknown): err is NormalizedError {
  return err instanceof NormalizedError;
}
