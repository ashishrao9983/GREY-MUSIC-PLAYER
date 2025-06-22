import React, { useContext, useState } from 'react';
import { PlayerContext } from '../context/PlayerContext';
import { songsData } from '../assets/assets';

const DisplaySearch = () => {
  const [query, setQuery] = useState('');
  const { playWithId } = useContext(PlayerContext);

  const filteredSongs = songsData.filter((song) =>
    song.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="px-6 py-6 min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <h1 className="text-white font-extrabold text-4xl py-4">Search</h1>

      {/* Search Bar */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="What do you want to listen to?"
        className="w-full max-w-xl px-5 py-3 text-white bg-gray-800 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-white"
      />

      {/* Filtered Songs */}
      <div className="mt-6">
        {query !== '' && filteredSongs.length > 0 ? (
          filteredSongs.slice(0, 3).map((song) => {
            const songIndex = songsData.findIndex((s) => s.id === song.id);
            return (
              <div
                key={song.id}
                onClick={() => playWithId(songIndex)}
                className="cursor-pointer p-4 mb-2 bg-gray-800 rounded-lg text-white shadow hover:bg-gray-700 transition"
              >
                <p className="text-lg font-semibold">{song.name}</p>
                <p className="text-sm opacity-60">Tap to play</p>
              </div>
            );
          })
        ) : (
          query && (
            <p className="text-white opacity-60 mt-4">
              No matching songs found.
            </p>
          )
        )}
      </div>

   {/* Start Browsing Section */}
      <div className="mb-6">
        <h2 className="text-white text-2xl font-bold mb-4">Start Browsing</h2>

        <div className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
          {/* Music Card */}
          <div className="min-w-[160px] bg-gradient-to-br from-pink-500 to-red-500 rounded-xl p-4 text-white shadow-md hover:scale-105 transition-transform flex-shrink-0">
            <p className="text-lg font-semibold">🎵 Music</p>
            <p className="text-sm opacity-80">Latest hits & classics</p>
          </div>

          {/* Podcasts Card */}
          <div className="min-w-[160px] bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-4 text-white shadow-md hover:scale-105 transition-transform flex-shrink-0">
            <p className="text-lg font-semibold">🎙️ Podcasts</p>
            <p className="text-sm opacity-80">Talks & stories</p>
          </div>

          {/* Live Events Card */}
          <div className="min-w-[160px] bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl p-4 text-white shadow-md hover:scale-105 transition-transform flex-shrink-0">
            <p className="text-lg font-semibold">🔴 Live Events</p>
            <p className="text-sm opacity-80">Happening around you</p>
          </div>

          {/* I-Pop Card */}
          <div className="min-w-[160px] bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-4 text-white shadow-md hover:scale-105 transition-transform flex-shrink-0">
            <p className="text-lg font-semibold">🌏 Home of I-Pop</p>
            <p className="text-sm opacity-80">Indian pop & trends</p>
          </div>
        </div>
      </div>
      
    </div>

    
  );
};

export default DisplaySearch;