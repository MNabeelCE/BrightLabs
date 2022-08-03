import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import '.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login/Login";
import '.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const openSidebar = () => {
    setSidebarOpen(true)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }
 
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
          </Route>
          <Route path="/login" element={<Login />}>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
