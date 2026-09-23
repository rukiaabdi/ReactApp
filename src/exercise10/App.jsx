import UserList from "./exercise10/UserList";

function App() {
  const users = [
    { id: 1, name: "asli", email: "asli88@gmail.com", },
    { id: 2, name: "xusen", email: "xusen@gmail.com", },
    {id: 3, name: "aish", email: "aisha11@gmail.com",},
  ];

  return (
    <div>
  
      <UserList users={users} />
    </div>
  );
}

export default App;