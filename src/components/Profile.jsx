import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import { EnvelopeIcon, PhoneIcon, BriefcaseIcon, CakeIcon, UserIcon, BarsArrowUpIcon, CircleStackIcon, IdentificationIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';


function Profile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://dummyjson.com/users/${userId}`);
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, [userId]);

  if (!user) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className='flex flex-row w-full'>
      <Sidebar />
      <div className="w-full   md:w-3/4 min-h-screen">
        <main className=" flex-1  ">
          <div className="">
            <div className="bg-gradient-to-r  from-blue-500 to-indigo-600 p-6 ">
              <div className="flex flex-col md:flex-row items-center">
                <img
                  className="h-32 w-32 rounded-full object-cover border-4 border-white shadow-lg mb-4 md:mb-0 md:mr-6"
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                />
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold text-white">
                    {user.firstName} {user.lastName}
                  </h2>
                  <p className="text-indigo-100">@{user.username}</p>
                  <p className="text-indigo-100 mt-1">{user.company.title}</p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-10">
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <IdentificationIcon className="h-6 w-6 mr-2 text-indigo-600" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InfoItem icon={<UserIcon className="h-5 w-5 text-gray-400" />} label="Gender" value={user.gender} />
                  <InfoItem icon={<CakeIcon className="h-5 w-5 text-gray-400" />} label="Birth Date" value={user.birthDate} />
                  <InfoItem icon={<BarsArrowUpIcon className="h-5 w-5 text-gray-400" />} label="Height" value={`${user.height} cm`} />
                  <InfoItem icon={<CircleStackIcon className="h-5 w-5 text-gray-400" />} label="Weight" value={`${user.weight} kg`} />
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <EnvelopeIcon className="h-6 w-6 mr-2 text-indigo-600" />
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InfoItem icon={<EnvelopeIcon className="h-5 w-5 text-gray-400" />} value={user.email} />
                  <InfoItem icon={<PhoneIcon className="h-5 w-5 text-gray-400" />} value={user.phone} />
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <BriefcaseIcon className="h-6 w-6 mr-2 text-indigo-600" />
                  Work Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InfoItem icon={<BriefcaseIcon className="h-5 w-5 text-gray-400" />} label="Company" value={user.company.name} />
                  <InfoItem icon={<BuildingOfficeIcon className="h-5 w-5 text-gray-400" />} label="Department" value={user.company.department} />
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
      {icon}
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-600 py-2">{label} : {value}</p>
      </div>
    </div>
  );
}

export default Profile;