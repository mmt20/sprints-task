import Sidebar from "./Sidebar";
import UserTable from "./UserTable";

function Dashboard() {
  let username = localStorage.getItem("username");
  return (
    <div className="flex flex-row w-full ">
      <Sidebar />
      <div className="w-full   md:w-3/4 min-h-screen">
        <h1 className="text-4xl text-left font-semibold mb-12 ml-8 pt-12 ">Welcome to Dashboard , {username}</h1>
        <UserTable />
      </div>

    </div>
  )
}

export default Dashboard
