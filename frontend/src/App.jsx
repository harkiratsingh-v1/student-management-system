import { useState, useEffect } from "react";
import StudentCard from "./components/StudentCard";
import StudentForm from "./components/StudentForm";

function App() {
  const [students, setStudents] = useState([]);
  const [count, setCount] = useState(0);

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getStudents = async () => {
    try {
      const response = await fetch("http://localhost:8080/students");
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const getBcaStudents = async () => {
    try {
      const response = await fetch("http://localhost:8080/students/bca");
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching BCA students:", error);
    }
  };

  const fetchTotalStudentCount = async () => {
    try {
      const response = await fetch("http://localhost:8080/students/count");
      const data = await response.json();
      setCount(data);
    } catch (error) {
      console.error("Error fetching count:", error);
    }
  };

  const addStudent = async () => {
    try {
      const response = await fetch("http://localhost:8080/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, course }),
      });

      if (response.ok) {
        alert("Student registered successfully!");
        getStudents();
      } else {
        alert("Failed to register student.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const login = async () => {
    try {
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
    } catch (error) {
      console.error(error);
    }
  };

  const loginWithGoogle = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  useEffect(() => {
    const loadStudents = async () => {
      const response = await fetch("http://localhost:8080/students");
      const data = await response.json();
      setStudents(data);
    };

    loadStudents();
  }, []);

  return (
    <div>
      <button onClick={getStudents}>Fetch Students</button>
      <button onClick={getBcaStudents}>Fetch BCA Students</button>

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
      />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <button onClick={addStudent}>Register</button>

      <br />
      <br />

      <input
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        placeholder="Enter Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>Login</button>

      <div style={{ padding: "40px" }}>
        <h1>Student Management System</h1>
        <button onClick={loginWithGoogle}>Login with Google</button>
      </div>

      <div style={{ padding: "20px" }}>
        <h1>Student Management System</h1>

        <StudentForm refreshStudents={getStudents} />

        <hr />

        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
          />
        ))}
      </div>
    </div>
  );
  return (
    <div>
      <StudentCard name="Harkirat Singh" course="Btech" />
      <StudentForm refreshStudents={() => {}} />
    </div>
  );
}

export default App;
