import UserCard from "./UserCard";

const App = () => {
  return (
    <div>
      <UserCard name="John Doe" email="john.doe@example.com"/>

      <UserCard name="Alice Smith"  email="alice.smith@example.com"/>

      <UserCard name="Ahmed Ali"  email="ahmed.ali@example.com" />
    </div>
  );
};

export default App;