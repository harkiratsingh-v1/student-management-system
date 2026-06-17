function StudentCard({ name, course }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        margin: "20px",
        width: "300px",
        height: "200px",

        borderRadius: "10px",
      }}
    >
      <h1>Welcome Dear!</h1>
      <h2>This is Student Card</h2>
      <p>{name}</p>
      <p>{course}</p>
    </div>
  );
}

export default StudentCard;
