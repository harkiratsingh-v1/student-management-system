import { useState } from "react";

function App() {
  //{"id":1,"name":"John Doe","course":"Computer Science"}

  const [students, setStudents] = useState([]);
  const [count, setCount] = useState(0);

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getStudents = async () => {
    const response = await fetch("http://localhost:8080/students");
    const data = await response.json();
    setStudents(data);
  };

  const getBcaStudents = async () => {
    const response = await fetch("http://localhost:8080/students/bca");
    const data = await response.json();
    setStudents(data);
  };

  const fetchTotalStudentCount = async () => {
    const response = await fetch("http://localhost:8080/students/count");
    const data = await response.json();
    setCount(data);
  };

  const addStudent = async () => {
    const response = await fetch("http://localhost:8080/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, course }),
    });

    if (response.ok) {
      alert("Student registered successfully!");
    } else {
      alert("Failed to register student.");
    }
  };

  const login = async () => {
    const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      alert("Login successful!");
    } else {
      alert("Login failed.");
    }
  };
  return (
    <div>
      <button onClick={getStudents}>fetch Students</button>

      <button onClick={getBcaStudents}>fetch BCA Students</button>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.course}
          </li>
        ))}
      </ul>

      <button onClick={fetchTotalStudentCount}>
        Fetch Total Student Count
      </button>
      <p>Total Students: {count}</p>

      <h1>Student Registration Form</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      ></input>
      <button onClick={addStudent}>Register</button>
      <br></br>
      <br></br>
      <input
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>

      <input
        placeholder="Enter Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default App;
