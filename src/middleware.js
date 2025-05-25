import { NextResponse } from 'next/server'
import { jwtVerify, importJWK } from 'jose'

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    try {
        const token = request.cookies.get('token').value
        const secretJWK = {
            kty: 'oct',
            k: process.env.JOSE_SECRET
        }
        const secretKey = await importJWK(secretJWK, 'HS256')
        const { payload } = await jwtVerify(token, secretKey)
        console.log(token)
        console.log(payload)
        //return NextResponse.redirect(new URL('/middlewarePass', request.url))
        if (payload.email !== 'abc@abc.com') {
            console.log('fail')
            throw new Error('email incorrect')
        }

        // แนบอะไรบางอย่างผ่านการ login ในนี้ใช้ Header
        const requestHeaders = new Headers(request.headers)
        requestHeaders.set('user', JSON.stringify({ email: payload.email }))
        //Header support การส่งเป็น text แนบไป = ต้องแปลงเป็น string เราเลยใช้ JSON.stringify ดักไว้
        const response = NextResponse.next({
            request: {
                headers: requestHeaders,
            },
        })

        return response
    } catch (error) {
        return NextResponse.redirect(new URL('/middlewarePass', request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/mini-project-blog/manage/blog/:path*']
}