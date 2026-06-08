import { useState } from "react";

function App(){

    //{"id":1,"name":"John Doe","course":"Computer Science"}

    const [students, setStudents] = useState([]);
    const [count,setCount]=useState(0);
    
    const getStudents = async () => {
        
            const response = await fetch('http://localhost:8080/students');
            const data = await response.json();
            setStudents(data);
        
    };
    const getBcaStudents = async () => {
        
            const response = await fetch('http://localhost:8080/students/bca');
            const data = await response.json();
            setStudents(data);
    };

      const fetchTotalStudentCount = async () => {
        const response = await fetch('http://localhost:8080/students/count');
        const data = await response.json();
        setCount(data);
    }
    return (
        <div>
            <button onClick={getStudents}>
                Fetch Students
            </button>
            <button onClick={getBcaStudents}>
                Show Bca Students
            </button>
            <ul>

                {students.map(student => (
                    <li key={student.id}>
                        {student.name} - {student.course}
                    </li>
                ))}
            </ul>

           <button onClick={fetchTotalStudentCount}>
                Fetch Total Student Count
            </button>
            <p>Total Students: {count}</p>


        </div>
    )
}
export default App;