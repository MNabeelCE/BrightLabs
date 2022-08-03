import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import Main from "../main/Main";
const Dashboard = () => {
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

export default Dashboard;