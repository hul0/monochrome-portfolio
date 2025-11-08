"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Repeat, Shuffle, List, X } from 'lucide-react';

interface Track {
  title: string;
  artist: string;
  url: string;
}

interface MusicPlayerProps {
  playlist?: Track[];
  autoPlay?: boolean;
  showPlaylist?: boolean;
}

export const MusicPlayer = ({ 
  playlist = [],
  autoPlay = false,
  showPlaylist = true,
}: MusicPlayerProps) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [showPlaylistPanel, setShowPlaylistPanel] = useState(showPlaylist);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const currentTrack = playlist[currentTrackIndex];

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
      audioRef.current!.currentTime = 0;
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

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !progressRef.current) return;
    
    const rect = progressRef.current.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * duration;
    
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleEnded = () => {
    if (isRepeat) {
      audioRef.current!.currentTime = 0;
      audioRef.current!.play();
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

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const selectTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  if (!playlist || playlist.length === 0) {
    return (
      <div className="bg-black text-white rounded-lg p-8 text-center max-w-2xl mx-auto border border-white">
        <p className="text-white/70">No tracks available. Please provide a playlist.</p>
      </div>
    );
  }

  return (
    <div className="bg-black text-white rounded-lg shadow-2xl max-w-4xl mx-auto overflow-hidden border border-white">
      <audio
        ref={audioRef}
        src={currentTrack?.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />

      <div className="flex">
        {/* Main Player */}
        <div className={`flex-1 p-6 ${showPlaylistPanel ? 'border-r border-white' : ''}`}>
          {/* Album Art & Info */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-white text-black rounded-lg flex items-center justify-center text-2xl font-bold shadow-lg border border-white">
              {currentTrack?.title?.[0] || '♪'}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold truncate">{currentTrack?.title || 'No Title'}</h3>
              <p className="text-white/70 truncate">{currentTrack?.artist || 'Unknown Artist'}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div 
              ref={progressRef}
              onClick={handleProgressClick}
              className="h-2 bg-white/20 rounded-full cursor-pointer relative overflow-hidden group border border-white/30"
            >
              <div 
                className="h-full bg-white transition-all duration-100"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
              <div 
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity border border-black"
                style={{ left: `${(currentTime / duration) * 100}%`, transform: 'translate(-50%, -50%)' }}
              />
            </div>
            <div className="flex justify-between text-sm text-white/70 mt-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsShuffle(!isShuffle)}
                className={`p-2 rounded-lg transition-colors border ${isShuffle ? 'bg-white text-black border-white' : 'hover:bg-white/10 border-white/30'}`}
                title="Shuffle"
              >
                <Shuffle size={20} />
              </button>
              <button
                onClick={() => setIsRepeat(!isRepeat)}
                className={`p-2 rounded-lg transition-colors border ${isRepeat ? 'bg-white text-black border-white' : 'hover:bg-white/10 border-white/30'}`}
                title="Repeat"
              >
                <Repeat size={20} />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={playPrevious}
                className="p-2 hover:bg-white/10 rounded-full transition-colors border border-white/30"
                title="Previous"
              >
                <SkipBack size={24} />
              </button>
              
              <button
                onClick={togglePlay}
                className="p-4 bg-white text-black rounded-full shadow-lg transform hover:scale-105 transition-transform border-2 border-white"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
              </button>
              
              <button
                onClick={playNext}
                className="p-2 hover:bg-white/10 rounded-full transition-colors border border-white/30"
                title="Next"
              >
                <SkipForward size={24} />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors border border-white/30"
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
                className="w-20 accent-white"
                title="Volume"
              />
              <button
                onClick={() => setShowPlaylistPanel(!showPlaylistPanel)}
                className={`p-2 rounded-lg transition-colors border ${showPlaylistPanel ? 'bg-white text-black border-white' : 'hover:bg-white/10 border-white/30'}`}
                title="Toggle Playlist"
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Playlist Panel */}
        {showPlaylistPanel && (
          <div className="w-80 bg-black/50 overflow-y-auto max-h-96 border-l border-white">
            <div className="p-4 border-b border-white/30 flex items-center justify-between">
              <h4 className="font-bold">Playlist ({playlist.length})</h4>
              <button
                onClick={() => setShowPlaylistPanel(false)}
                className="p-1 hover:bg-white/10 rounded border border-white/30"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-2">
              {playlist.map((track, index) => (
                <div
                  key={index}
                  onClick={() => selectTrack(index)}
                  className={`p-3 rounded-lg cursor-pointer transition-colors border ${
                    index === currentTrackIndex 
                      ? 'bg-white text-black border-white' 
                      : 'hover:bg-white/10 border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded flex items-center justify-center text-sm border ${
                      index === currentTrackIndex 
                        ? 'bg-black text-white border-black' 
                        : 'bg-white/10 border-white/30'
                    }`}>
                      {index === currentTrackIndex && isPlaying ? '▶' : index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate text-sm">{track.title}</p>
                      <p className={`text-xs truncate ${index === currentTrackIndex ? 'text-black/70' : 'text-white/70'}`}>
                        {track.artist}
                      </p>
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
