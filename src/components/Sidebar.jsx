import {
  MagnifyingGlassIcon,
  HomeIcon,
  DocumentIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <button className=' text-white text-4xl fixed z-50 top-6 left-10  md:hidden  ' onClick={() => setShowSidebar(!showSidebar)}>
        {showSidebar ? "X" : <Bars3Icon className='h-10 w-10 text-indigo-600' />}
      </button>
      <div className='md:w-1/4'>
        <div
          className={`fixed bg-indigo-600 top-0 left-0 h-full w-full md:w-1/4 p-10 text-left  ease-in-out   duration-300 
                    ${showSidebar ? "translate-x-0" : "-translate-x-full md:translate-x-0 "
            }`}
        >
          <h1 className=" text-2xl font-bold  text-white mb-6 ">Admin Dashbord</h1>
          <ul>
            <li className="mb-6">
              <div className="relative">
                <button className="absolute left-0 inset-0 pl-2">
                  <MagnifyingGlassIcon className="h-4 w-4 text-gray-500" />
                </button>
                <input
                  className="w-full px-4 py-2 pl-12 rounded shadow"
                  placeholder="Search"
                />
              </div>
            </li>
            <li className="sidebar-item">
              <Link to={`/users`} className=" text-white font-bold ">
                <HomeIcon className="sidebar-icon" />
                Home
              </Link>
            </li>
            <li className="sidebar-item">
              <a href="#" className=" text-white font-bold  ">
                <DocumentIcon className="sidebar-icon" />
                Blogs
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className=" text-white font-bold ">
                <DocumentTextIcon className="sidebar-icon" />
                Reports
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className=" text-white font-bold ">
                <EnvelopeIcon className="sidebar-icon" />
                Inbox
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
