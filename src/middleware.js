import { NextResponse } from "next/server";


// 👉 Ai file tar jonno continuously terminal a "/login GET /login 200 in 36ms" ata print korbe...
/*
    export function middleware (request) {
        // console.log("middleware")
        // console.log(request)         // 👉 Akhane url sob details thake...
        // return NextResponse.redirect(new URL("/login", request.url))     // 📌 Ata run korale "localhost redirected you too many times." ata throw korbe... Why it's happening because amra ai code a bolchi je jokhoni new url asbe tokhon redirect kore dao '/login' page a, and first time redirect korar por ata login url keo new url vab6e so ata bar bar '/login' page a redirect kore di66e...  
        
        if (request.nextUrl.pathname != "/login" ) {

            return NextResponse.redirect(new URL("/login", request.url))

        } 
        
    }
*/

// 👉 This is for specefic paths...
export function middleware (request) {
    return NextResponse.redirect(new URL("/login", request.url))
}
// export const config={
//     matcher:["/about/:path*", "/studentlist/:path*"]
// }

// 👉 Akhane 'about' a gele '/login' page a niye jabe na but 'about/somethigs' a gele '/login' page a niye jabe...
export const config={
    matcher:["/about/:path+", "/studentlist/:path*"] 
}
