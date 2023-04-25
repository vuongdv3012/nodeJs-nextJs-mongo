// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { CUSTOMIZE_HEADER } from "./service/config";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname) {
    return NextResponse.rewrite(new URL("/", request.url));
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(CUSTOMIZE_HEADER.X_URL, request.url);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/about/:path*",
};
