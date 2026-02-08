import React from 'react';

function UserProfile() {
  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto my-8 p-4 sm:p-6 md:p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      
      <img
        src="https://via.placeholder.com/150"
        alt="User Profile"
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full mx-auto object-cover border-4 border-blue-500 hover:scale-110 transition-transform duration-300"
      />
      
      
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center mt-4 mb-2 hover:text-blue-400 transition-colors duration-300">
        John Doe
      </h1>
      
      
      <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center leading-relaxed">
        Developer at Example Co. Passionate about building responsive and accessible web applications with modern technologies like React and Tailwind CSS.
      </p>
    </div>
  );
}

export default UserProfile;