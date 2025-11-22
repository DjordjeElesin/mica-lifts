import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <div style={{padding: '15px'}}>

        <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;
