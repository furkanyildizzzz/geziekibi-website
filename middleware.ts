import NextAuth from "next-auth";
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from "./routes";
import authConfig from "./modules/auth/auth.config";
const { auth } = NextAuth(authConfig);
export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;
  const isApiAuth = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  if (isApiAuth) {
    return;
  }
  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }
  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/auth/signin", nextUrl));
  }
  return;
});
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

// import { withAuth } from "next-auth/middleware";
// import { getToken } from "next-auth/jwt";
// import { NextResponse } from "next/server";

// export default withAuth(
//   async function middleware(req) {
//     const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
//     const baseUrl = req.nextUrl.origin;

//     // Check if the user is authenticated
//     if (token && Date.now() >= token.data.validity.refresh_until * 1000) {
//       // Redirect to the login page
//       const response = NextResponse.redirect(`${baseUrl}/google-signin`);
//       // Clear the session cookies
//       response.cookies.set("next-auth.session-token", "", { maxAge: 0 });
//       response.cookies.set("next-auth.csrf-token", "", { maxAge: 0 });

//       return response;
//     }

//     // If authenticated, continue with the request
//     return NextResponse.next();
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => {
//         // You can add custom logic here, for example, check roles
//         return !!token; // if token exists, the user is authenticated
//       },
//     },
//   }
// );

// // Authenticate all routes except for /api, /_next/static, /_next/image, and .png files
// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
// };
