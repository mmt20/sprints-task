import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import UserTable from "./UserTable";

function Dashboard() {
  const navigate = useNavigate();
  const username = JSON.parse(localStorage.getItem("loggedInUser")).fullName || "";


  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <div className="flex flex-row w-full">
      <Sidebar />
      <div className="w-full md:w-3/4 min-h-screen">
        <div className="flex justify-between items-center p-8">
          <h1 className="text-4xl font-semibold">
            Welcome to Dashboard, {username}
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
        <UserTable />
      </div>
    </div>
  );
}

export default Dashboard;
