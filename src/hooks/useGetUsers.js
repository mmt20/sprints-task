import { useState, useEffect } from "react";

export const useGetUsers = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch('https://dummyjson.com/users');
    const jsonData = await response.json();
    setUsers(jsonData.users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return users;
};
