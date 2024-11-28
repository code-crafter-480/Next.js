'use client'

import { useRouter } from "next/navigation"


const LoginTeacher = () => {
    const router = useRouter()
    return (
        <div>
            <h1 className="heading">Login Teacher </h1>
            <br /><br />

            <button onClick={()=> router.push("/login") }>Go to Login</button>

        </div>
    )
}

export default LoginTeacher ;