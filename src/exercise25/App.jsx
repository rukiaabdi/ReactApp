import { Outlet } from "react-router-dom";
import Navbar from "./exercise25/components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;