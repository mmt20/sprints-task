import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import UserTable from './UserTable';
import useLocalStorage from '../hooks/useLocalStorge';
import { useEffect } from 'react';

function Dashboard() {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useLocalStorage('loggedInUser', null);
  const handleLogout = () => {
    setLoggedInUser(null);
  };

  useEffect(() => {
    if (!loggedInUser) {
      navigate('/login');
    }
  }, [loggedInUser, navigate]);

  if (!loggedInUser) {
    return null;
  }
  return (
    <div className="flex flex-row w-full">
      <Sidebar />
      <div className="w-full md:w-3/4 min-h-screen">
        <div className="flex justify-between items-center p-8">
          <h1 className="text-4xl font-semibold">
            Welcome to Dashboard, {loggedInUser.fullName}
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
