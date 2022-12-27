import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" exact element={ } /> */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
