import Link from "next/link";

const AboutStudent = () => {
    return(
        <div>
            <h1>This is About Student</h1>
            <br /><br />

            <Link href="/">Go to Home</Link>
            <br /><br />

            <Link href="/about">Go to About </Link>
        </div>
    )
}
export default AboutStudent ;