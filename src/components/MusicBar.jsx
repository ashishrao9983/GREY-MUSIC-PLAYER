import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { artists, playlists } from '../assets/assets';

const MusicBar = ({ goBack }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Music");

  const filteredPlaylists = playlists.filter((playlist) => {
    if (activeTab === "All") return true;
    if (activeTab === "Music") return !playlist.isPodcast;
    if (activeTab === "Podcasts") return playlist.isPodcast;
    return true;
  });

  return (
    <div className="p-4 bg-gray text-white min-h-screen">
      
     

      
      <div className='flex items-center gap-2 mt-4 mb-6'>
        <p
          onClick={goBack} // Back to home or Al
          className={`px-4 py-1 rounded-2xl cursor-pointer ${activeTab === "All" ? "bg-green-500" : "bg-black"}`}
        >
          All
        </p>
        <p
          onClick={() => setActiveTab("Music")}
          className={`px-4 py-1 rounded-2xl cursor-pointer ${activeTab === "Music" ? "bg-green-500" : "bg-black"}`}
        >
          Music
        </p>
        <p
          onClick={() => setActiveTab("Podcasts")}
          className={`px-4 py-1 rounded-2xl cursor-pointer ${activeTab === "Podcasts" ? "bg-green-500" : "bg-black"}`}
        >
          Podcasts
        </p>
      </div>

      {/* Playlists */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {filteredPlaylists.map((playlist, index) => (
          <div key={index} className="bg-gray-800 p-3 rounded-lg flex items-center space-x-3 hover:bg-gray-700 transition">
            <img src={playlist.image} alt={playlist.title} className="w-30 h-25 object-cover rounded" />
            <span className="text-sm font-medium">{playlist.title}</span>
          </div>
        ))}
      </div>

      
      <h2 className="text-xl font-bold mb-4">Popular artists</h2>
      <div className="flex space-x-8 overflow-x-auto">
        {artists.map((artist, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative">
              <img src={artist.image} alt={artist.name} className="w-36 h-36 rounded-full object-cover" />
              {artist.isPlaying && (
                <div className="absolute bottom-2 right-2 bg-green-500 p-2 rounded-full">
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              )}
            </div>
            <span className="mt-2 text-sm">{artist.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicBar;
