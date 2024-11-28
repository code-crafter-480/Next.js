'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";


const Login = () => {
    const router = useRouter()
    return (
        <div>
            <h1 className="heading">Login page</h1>
            <Link href="/" >Go to Home page</Link>
            <br /><br />

            <button onClick={() => router.push("/login/loginstudent")  }>Go to Student Login </button>
            <br /><br />

            <button onClick={() => router.push("/login/loginteacher")  }>Go to Teacher Login </button>
            <br /><br />

        </div>
    )
}

export default Login ;