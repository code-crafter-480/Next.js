'use client'
import Script from "next/script"

export default function Page() {
    return (
        <div>
            <Script 
            src='/location.js' 
            onload={()=>{
                console.log("file loaded")
            }}
            />
            <h1>Get user geoLocation</h1>
        </div>
    )
}