"use client"
import Link from "next/link";

const Student = async ({ params }) => {

    const { student } = await params;           // Unwrap `params` using `await`
    
    return (
      <div>
        <h1>Student Page</h1>
        <p>Student: {student}</p>
      </div>
    );
  };
  
export default Student;