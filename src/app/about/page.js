import Link from "next/link";

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <Link href="/" >Go to Home page</Link>
            <br /><br />
            
            <Link href="/about/aboutcollege">Go to About College</Link>
            <br />
            
            <Link href="/about/aboutstudent">Go to About Student</Link>
        </div>
    )
}

export default About ;