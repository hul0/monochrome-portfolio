import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Repeat, Shuffle, List, X } from 'lucide-react';

const MusicPlayer = ({ 
  playlist = [],
  autoPlay = false,
  showPlaylist = true,
  theme = 'dark',
  accentColor = 'blue'
}) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [showPlaylistPanel, setShowPlaylistPanel] = useState(showPlaylist);
  
  const audioRef = useRef(null);
  const progressRef = useRef(null);

  const currentTrack = playlist[currentTrackIndex];

  const accentColors = {
    blue: 'bg-blue-500 hover:bg-blue-600',
    purple: 'bg-purple-500 hover:bg-purple-600',
    green: 'bg-green-500 hover:bg-green-600',
    red: 'bg-red-500 hover:bg-red-600',
    pink: 'bg-pink-500 hover:bg-pink-600',
    orange: 'bg-orange-500 hover:bg-orange-600'
  };

  const themeStyles = theme === 'dark' 
    ? 'bg-gray-900 text-white' 
    : 'bg-white text-gray-900';

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (autoPlay && audioRef.current && currentTrack) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentTrackIndex]);

  const togglePlay = () => {
    if (!audioRef.current || !currentTrack) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    if (isShuffle) {
      const randomIndex = Math.floor(Math.random() * playlist.length);
      setCurrentTrackIndex(randomIndex);
    } else {
      setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
    }
  };

  const playPrevious = () => {
    if (currentTime > 3) {
      audioRef.current.currentTime = 0;
    } else {
      setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressClick = (e) => {
    if (!audioRef.current || !progressRef.current) return;
    
    const rect = progressRef.current.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * duration;
    
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleEnded = () => {
    if (isRepeat) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      playNext();
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const selectTrack = (index) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  if (!playlist || playlist.length === 0) {
    return (
      <div className={`${themeStyles} rounded-lg p-8 text-center max-w-2xl mx-auto`}>
        <p className="text-gray-500">No tracks available. Please provide a playlist.</p>
      </div>
    );
  }

  return (
    <div className={`${themeStyles} rounded-lg shadow-2xl max-w-4xl mx-auto overflow-hidden`}>
      <audio
        ref={audioRef}
        src={currentTrack?.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />

      <div className="flex">
        {/* Main Player */}
        <div className={`flex-1 p-6 ${showPlaylistPanel ? 'border-r border-gray-700' : ''}`}>
          {/* Album Art & Info */}
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-20 h-20 ${accentColors[accentColor]} rounded-lg flex items-center justify-center text-2xl font-bold shadow-lg`}>
              {currentTrack?.title?.[0] || '♪'}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold truncate">{currentTrack?.title || 'No Title'}</h3>
              <p className="text-gray-400 truncate">{currentTrack?.artist || 'Unknown Artist'}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div 
              ref={progressRef}
              onClick={handleProgressClick}
              className="h-2 bg-gray-700 rounded-full cursor-pointer relative overflow-hidden group"
            >
              <div 
                className={`h-full ${accentColors[accentColor]} transition-all duration-100`}
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
              <div 
                className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 ${accentColors[accentColor]} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}
                style={{ left: `${(currentTime / duration) * 100}%`, transform: 'translate(-50%, -50%)' }}
              />
            </div>
            <div className="flex justify-between text-sm text-gray-400 mt-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsShuffle(!isShuffle)}
                className={`p-2 rounded-lg transition-colors ${isShuffle ? accentColors[accentColor] : 'hover:bg-gray-800'}`}
                title="Shuffle"
              >
                <Shuffle size={20} />
              </button>
              <button
                onClick={() => setIsRepeat(!isRepeat)}
                className={`p-2 rounded-lg transition-colors ${isRepeat ? accentColors[accentColor] : 'hover:bg-gray-800'}`}
                title="Repeat"
              >
                <Repeat size={20} />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={playPrevious}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                title="Previous"
              >
                <SkipBack size={24} />
              </button>
              
              <button
                onClick={togglePlay}
                className={`p-4 ${accentColors[accentColor]} rounded-full shadow-lg transform hover:scale-105 transition-transform`}
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
              </button>
              
              <button
                onClick={playNext}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                title="Next"
              >
                <SkipForward size={24} />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  setVolume(parseFloat(e.target.value));
                  if (isMuted) setIsMuted(false);
                }}
                className="w-20 accent-blue-500"
                title="Volume"
              />
              <button
                onClick={() => setShowPlaylistPanel(!showPlaylistPanel)}
                className={`p-2 rounded-lg transition-colors ${showPlaylistPanel ? accentColors[accentColor] : 'hover:bg-gray-800'}`}
                title="Toggle Playlist"
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Playlist Panel */}
        {showPlaylistPanel && (
          <div className="w-80 bg-gray-800 bg-opacity-50 overflow-y-auto max-h-96">
            <div className="p-4 border-b border-gray-700 flex items-center justify-between">
              <h4 className="font-bold">Playlist ({playlist.length})</h4>
              <button
                onClick={() => setShowPlaylistPanel(false)}
                className="p-1 hover:bg-gray-700 rounded"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-2">
              {playlist.map((track, index) => (
                <div
                  key={index}
                  onClick={() => selectTrack(index)}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    index === currentTrackIndex 
                      ? `${accentColors[accentColor]} bg-opacity-20` 
                      : 'hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center text-sm">
                      {index === currentTrackIndex && isPlaying ? '▶' : index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate text-sm">{track.title}</p>
                      <p className="text-gray-400 text-xs truncate">{track.artist}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Demo Usage
export default function App() {
  const demoPlaylist = [
    {
      title: "Summer Vibes",
      artist: "Demo Artist 1",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
      title: "Midnight Dreams",
      artist: "Demo Artist 2",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
      title: "Electric Pulse",
      artist: "Demo Artist 3",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    },
    {
      title: "Acoustic Soul",
      artist: "Demo Artist 4",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 flex items-center justify-center">
      <MusicPlayer 
        playlist={demoPlaylist}
        autoPlay={false}
        showPlaylist={true}
        theme="dark"
        accentColor="blue"
      />
    </div>
  );
}