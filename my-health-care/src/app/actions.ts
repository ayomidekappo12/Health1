"use server";
import { cookies } from "next/headers";
import { getIronSession, IronSession, SessionOptions } from "iron-session";

export interface SessionData {
  aut: string;
  role: string;
}

const isProd = process.env.NODE_ENV === "production";

// In-memory fallback
let memorySession: SessionData | null = null;

/**
 * Universal cookies helper that works in Next.js 13/14 (sync)
 * and Next.js 15 (async).
 */
async function getCookieStore() {
  const result = cookies();

  // Check if result is a Promise-like object
  if (result && typeof result === "object" && "then" in result) {
    return await result;
  }

  return result;
}

async function getSession(): Promise<IronSession<SessionData>> {
  try {
    const cookieStore = await getCookieStore();
    const sessionOptions: SessionOptions = {
      password: `${process.env.SESSION_SECRET}`,
      cookieName: "TULIP-COOKIE-MONSTER",
      cookieOptions: {
        httpOnly: isProd,
        secure: isProd,
        sameSite: "lax",
        path: "/",
      },
    };

    return await getIronSession(cookieStore, sessionOptions);
  } catch (err) {
    console.warn("[Session] Falling back to in-memory session:", err);

    // ✅ Fixed fallback implementation
    const fallback: IronSession<SessionData> = {
      aut: memorySession?.aut ?? "",
      role: memorySession?.role ?? "",
      save() {
        memorySession = { aut: this.aut, role: this.role };
        return Promise.resolve();
      },
      destroy() {
        memorySession = null;
        return Promise.resolve();
      },
      updateConfig() {
        // no-op - parameter removed since it's unused
      },
    };

    return fallback;
  }
}

/**
 * ✅ Strongly typed session data
 */
export async function getSessionData(): Promise<SessionData | null> {
  const session = await getSession();
  return session.aut && session.role ? { ...session } : null;
}

export async function createSession(authToken: string, role: string) {
  const session = await getSession();
  session.aut = authToken;
  session.role = role;
  await session.save();
}

export async function deleteSession() {
  const session = await getSession();
  await session.destroy();
}
