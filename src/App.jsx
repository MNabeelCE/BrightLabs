import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import '.././node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const openSidebar = () => {
    setSidebarOpen(true)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }
 
  return (
		<div className="app-header">
			<Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
			<Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
			   <Main />
		  
	 </div>
  )
}

export default App;
