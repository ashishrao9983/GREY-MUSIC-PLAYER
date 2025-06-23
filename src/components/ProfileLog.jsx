import React from 'react';
import { assets } from '../assets/assets';

const ProfileLog = ({ goBack }) => {
  return ( <div className="fixed top-0 right-0 h-full w-[26%] bg-zinc-900/95 text-white p-6 shadow-lg rounded-l-2xl z-50">
   
      {/* Close Button */}
      <button
        onClick={goBack}
        className="bg-[#222222] px-3 py-1 mb-4 rounded font-bold text-white hover:bg-white transition"
      >
        <img onClick ={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
      </button>

      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-black font-bold text-lg">
          A
        </div>
        <div>
          <h2 className="text-lg font-semibold">Ashish</h2>
          <p className="text-sm text-gray-400">View profile</p>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="space-y-4">
        <p className="hover:text-blue-400 cursor-pointer">Add account</p>
        <p className="hover:text-blue-400 cursor-pointer">What's new</p>
        <p className="hover:text-blue-400 cursor-pointer">Recents</p>
        <p className="hover:text-blue-400 cursor-pointer">Settings & Privacy</p>
      </nav>
    </div>
  );
};


export default ProfileLog;