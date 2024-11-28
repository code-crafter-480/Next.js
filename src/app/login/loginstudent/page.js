'use client'

import { useRouter } from "next/navigation"

const LoginStudent = () => {
    const router = useRouter()
    return (
        <div>
            <h1 className="heading">Login Student </h1>
            <br /><br />

            <button onClick={()=> router.push("/login") } >Go to Login</button>

        </div>
    )
}

export default LoginStudent ;