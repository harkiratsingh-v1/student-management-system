import { useState } from "react";

function App(){

    //{"id":1,"name":"John Doe","course":"Computer Science"}

    const [student, setStudent] = useState(null);
    
    const getStudent = async () => {
        
            const response = await fetch('http://localhost:8080/students');
            const data = await response.json();
            setStudent(data);
        
    };

    return (
        <div>
            <button onClick={getStudent}>
                fetch Student
            </button>
            <h1>Here is student data:</h1>
            <h1>{student?.name}</h1>
            <h1>{student?.course}</h1>
        </div>
    )
}
export default App;