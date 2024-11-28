import Link from "next/link";

export default function StudentList() {
    const studentArray = ["Anil", "Sohom", "Gor", "Mona"];

    return (
        <div>
            <h1>Student List</h1>
            <ul>
                {studentArray.map((student) => (
                    <li key={student}>
                        <Link href={`/studentlist/${student}`}>{student}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

