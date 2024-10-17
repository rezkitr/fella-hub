import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { COOKIES } from './utils/enum'

export function middleware(req: NextRequest) {
  const token = req.cookies.get(COOKIES.auth)

  if (!token && req.nextUrl.pathname !== '/sign-in') {
    return NextResponse.redirect(new URL('/sign-in', req.url))
  }

  if (token && req.nextUrl.pathname === '/sign-in') {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
