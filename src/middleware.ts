import { decrypt } from "@/utils/libs/jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { getProfile } from "./utils/actions";

export async function middleware(request: NextRequest) {
  const session = cookies().get("session")?.value;

  const payload = await decrypt(session);
  const verifyToken = payload?.sub ? await getProfile(payload?.sub) : null;

  if (!session || !payload || !verifyToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/(dashboard|bookmarks|library|profile)"],
};
