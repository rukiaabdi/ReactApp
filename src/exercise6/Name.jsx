import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    if (name === "") {
      document.title = "Welcome";
    } else {
      document.title = `${greeting} ${name}`;
    }
  }, [name, greeting]);

  return (
    <div>
      <h1>Enter Your Name:</h1>

      <input type="text"  value={name} onChange={(e) => setName(e.target.value)}/>

      <h1>Choose a Greeting:</h1>

      <select
        value={greeting}
        onChange={(e) => setGreeting(e.target.value)}
      >
        <option value="">Select Greeting</option>
        <option value="Hello">Hello</option>
        <option value="Assalamu Alaikum">Assalamu Alaikum</option>
      </select>
    </div>
  );
}

export default App;