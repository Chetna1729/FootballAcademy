import React from 'react';

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: "https://via.placeholder.com/150",
    location: "New York, USA",
    Gender: "Male",
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-4xl w-full p-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center space-x-6">
          {/* User Avatar */}
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-32 h-32 rounded-full border-4 border-blue-500"
          />

          {/* User Info */}
          <div>
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-gray-600">{user.jobTitle}</p>
            <p className="text-gray-500">{user.location}</p>
            <p className="text-gray-500 mt-2">{user.email}</p>
          </div>
        </div>

        {/* User Bio */}

        {/* Edit Profile Button */}
        <div className="mt-6">
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
