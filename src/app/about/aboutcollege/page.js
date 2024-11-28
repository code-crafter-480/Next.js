import Link from "next/link";

const AboutCollege = () => {
    return(
        <div>
            <h1>This is About College</h1>
            <br /><br />

            <Link href="/">Go to Home</Link>
            <br /><br />
            
            <Link href="/about">Go to About </Link>
        </div>
    )
}
export default AboutCollege ;