import React from 'react';
import { useLocation } from 'react-router-dom';

const Welcome = () => {
  // Get user name from location state
  const location = useLocation();
  const name = location.state?.name || 'User';

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-violet-100 to-indigo-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold text-indigo-700 mb-4">
          Hey {name}. क्या हाल चाल ?
        </h1>
      </div>
    </div>
  );
};

export default Welcome;
