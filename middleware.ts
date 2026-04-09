import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl

  // ─── 1. API Auth Guard ───────────────────────────────────────────
  // Protect all /api routes with a simple Authorization header check
  if (pathname.startsWith('/api')) {
    const authHeader = request.headers.get('Authorization')

    if (!authHeader) {
      return NextResponse.json(
        { success: false, message: 'Authorization header is required' },
        { status: 401 }
      )
    }
  }

  // ─── 2. Auth Route Redirect ──────────────────────────────────────
  // Example: redirect logged-in users away from /sign-in or /sign-up
  // const token = request.cookies.get('session')?.value
  // if (token && pathname.startsWith('/sign-in')) {
  //   return NextResponse.redirect(new URL('/dashboard', request.url))
  // }

  // ─── 3. Protected Page Guard ─────────────────────────────────────
  // Example: redirect unauthenticated users away from /dashboard
  // if (!token && pathname.startsWith('/dashboard')) {
  //   return NextResponse.redirect(new URL('/sign-in', request.url))
  // }

  // ─── 4. Add Custom Response Headers ─────────────────────────────
  // Example: security headers, CORS, request IDs
  // const response = NextResponse.next()
  // response.headers.set('X-Request-Id', crypto.randomUUID())
  // return response

  return NextResponse.next()
}

export const config = {
  // Match all routes EXCEPT Next.js internals and static files
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}