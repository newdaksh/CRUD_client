import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/api';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data || []);
      } catch (err) {
        setError(err.error || "Failed to fetch users");
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  if (loading) return <div className="flex items-center justify-center min-h-screen">Loading users...</div>;
  if (error) return <div className="text-red-600 text-center mt-8">{error}</div>;

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-indigo-50 to-sky-100 py-10">
      <h2 className="text-3xl font-bold text-indigo-700 mb-8">User List</h2>
      {users.length === 0 ? (
        <div className="text-lg text-gray-500">No users found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl px-4">
          {users.map((user) => (
            <div key={user._id} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition">
              <div className="w-16 h-16 rounded-full bg-indigo-200 flex items-center justify-center text-2xl font-bold text-indigo-700 mb-4">
                {user.firstName?.[0]?.toUpperCase()}{user.lastName?.[0]?.toUpperCase()}
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-1">
                {user.firstName} {user.lastName}
              </div>
              <div className="text-sm text-gray-500 mb-1">{user.email}</div>
              <div className="text-sm text-gray-400">{user.mobile}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;