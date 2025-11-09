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
  const [showPlaylistPanel, setShowPlaylistPanel] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previousVolume, setPreviousVolume] = useState(1);
  
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
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setError(null);
          })
          .catch((err) => {
            console.error('Playback failed:', err);
            setError('Failed to play track');
            setIsPlaying(false);
          });
      }
    }
  }, [currentTrackIndex, autoPlay, currentTrack]);

  useEffect(() => {
    setCurrentTime(0);
    setError(null);
    if (isPlaying && audioRef.current) {
      audioRef.current.load();
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.error('Playback failed:', err);
          setError('Failed to play track');
          setIsPlaying(false);
        });
      }
    }
  }, [currentTrack?.url]);

  const togglePlay = () => {
    if (!audioRef.current || !currentTrack) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setError(null);
          })
          .catch((err) => {
            console.error('Playback failed:', err);
            setError('Failed to play track');
            setIsPlaying(false);
          });
      }
    }
  };

  const playNext = () => {
    if (playlist.length === 1) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
      return;
    }

    if (isShuffle) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * playlist.length);
      } while (randomIndex === currentTrackIndex && playlist.length > 1);
      setCurrentTrackIndex(randomIndex);
    } else {
      setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
    }
  };

  const playPrevious = () => {
    if (currentTime > 3 && audioRef.current) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
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

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!audioRef.current || !progressRef.current || !duration) return;
    
    const rect = progressRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const newTime = percent * duration;
    
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleEnded = () => {
    if (isRepeat) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    } else {
      playNext();
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        setVolume(previousVolume || 0.5);
        audioRef.current.muted = false;
        setIsMuted(false);
      } else {
        setPreviousVolume(volume);
        audioRef.current.muted = true;
        setIsMuted(true);
      }
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || !isFinite(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const selectTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  const handleError = () => {
    setError('Failed to load track');
    setIsPlaying(false);
  };

  if (!playlist || playlist.length === 0) {
    return (
      <div className="bg-black text-white rounded-lg p-6 text-center max-w-md mx-auto border border-white">
        <p className="text-white/70 text-sm">No tracks available. Please provide a playlist.</p>
      </div>
    );
  }

  return (
    <div className="bg-black text-white rounded-lg shadow-2xl w-full max-w-md mx-auto overflow-hidden border border-white">
      <audio
        ref={audioRef}
        src={currentTrack?.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        onError={handleError}
      />

      {/* Compact Stacked Layout for All Screens */}
      <div className="flex flex-col">
        {/* Main Player */}
        <div className="p-4">
          {/* Error Message */}
          {error && (
            <div className="mb-3 p-2 bg-red-500/20 border border-red-500 rounded text-xs text-center">
              {error}
            </div>
          )}

          {/* Album Art & Info - Compact */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-white text-black rounded-lg flex items-center justify-center text-xl font-bold shadow-lg border border-white flex-shrink-0">
              {currentTrack?.title?.[0] || '♪'}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold truncate">{currentTrack?.title || 'No Title'}</h3>
              <p className="text-sm text-white/70 truncate">{currentTrack?.artist || 'Unknown Artist'}</p>
            </div>
          </div>

          {/* Progress Bar - Touch-friendly */}
          <div className="mb-4">
            <div 
              ref={progressRef}
              onClick={handleProgressClick}
              onTouchStart={handleProgressClick}
              className="h-3 bg-white/20 rounded-full cursor-pointer relative overflow-hidden group border border-white/30 touch-none"
            >
              <div 
                className="h-full bg-white transition-all duration-100"
                style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
              />
              <div 
                className="absolute top-1/2 w-4 h-4 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity border border-black"
                style={{ 
                  left: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`, 
                  transform: 'translate(-50%, -50%)' 
                }}
              />
            </div>
            <div className="flex justify-between text-xs text-white/70 mt-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls - Compact Layout */}
          <div className="space-y-3">
            {/* Main Playback Controls - Centered */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={playPrevious}
                disabled={playlist.length === 0}
                className="p-2 hover:bg-white/10 rounded-full transition-colors border border-white/30 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                title="Previous"
                aria-label="Previous track"
              >
                <SkipBack size={20} />
              </button>
              
              <button
                onClick={togglePlay}
                disabled={!currentTrack}
                className="p-3 bg-white text-black rounded-full shadow-lg transform hover:scale-105 active:scale-95 transition-transform border-2 border-white disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                title={isPlaying ? 'Pause' : 'Play'}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-0.5" />}
              </button>
              
              <button
                onClick={playNext}
                disabled={playlist.length === 0}
                className="p-2 hover:bg-white/10 rounded-full transition-colors border border-white/30 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                title="Next"
                aria-label="Next track"
              >
                <SkipForward size={20} />
              </button>
            </div>

            {/* Secondary Controls - Compact Grid */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              {/* Left: Mode buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsShuffle(!isShuffle)}
                  className={`p-2 rounded-lg transition-colors border touch-manipulation ${isShuffle ? 'bg-white text-black border-white' : 'hover:bg-white/10 border-white/30'}`}
                  title="Shuffle"
                  aria-label="Toggle shuffle"
                  aria-pressed={isShuffle}
                >
                  <Shuffle size={18} />
                </button>
                <button
                  onClick={() => setIsRepeat(!isRepeat)}
                  className={`p-2 rounded-lg transition-colors border touch-manipulation ${isRepeat ? 'bg-white text-black border-white' : 'hover:bg-white/10 border-white/30'}`}
                  title="Repeat"
                  aria-label="Toggle repeat"
                  aria-pressed={isRepeat}
                >
                  <Repeat size={18} />
                </button>
              </div>

              {/* Right: Volume & Playlist */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors border border-white/30 touch-manipulation"
                  title={isMuted ? 'Unmute' : 'Mute'}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => {
                    const newVolume = parseFloat(e.target.value);
                    setVolume(newVolume);
                    if (isMuted && newVolume > 0) {
                      setIsMuted(false);
                      if (audioRef.current) audioRef.current.muted = false;
                    }
                  }}
                  className="w-16 accent-white"
                  title="Volume"
                  aria-label="Volume control"
                />
                <button
                  onClick={() => setShowPlaylistPanel(!showPlaylistPanel)}
                  className={`p-2 rounded-lg transition-colors border touch-manipulation ${showPlaylistPanel ? 'bg-white text-black border-white' : 'hover:bg-white/10 border-white/30'}`}
                  title="Toggle Playlist"
                  aria-label="Toggle playlist"
                  aria-pressed={showPlaylistPanel}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Playlist Panel - Full Width */}
        {showPlaylistPanel && (
          <div className="w-full bg-black/50 border-t border-white max-h-64 overflow-y-auto">
            <div className="p-3 border-b border-white/30 flex items-center justify-between sticky top-0 bg-black/80 backdrop-blur-sm z-10">
              <h4 className="font-bold text-sm">Playlist ({playlist.length})</h4>
              <button
                onClick={() => setShowPlaylistPanel(false)}
                className="p-1 hover:bg-white/10 rounded border border-white/30 touch-manipulation"
                aria-label="Close playlist"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-2">
              {playlist.map((track, index) => (
                <div
                  key={`${index}-${track.url}`}
                  onClick={() => selectTrack(index)}
                  className={`p-2 mb-1 rounded-lg cursor-pointer transition-colors border touch-manipulation ${
                    index === currentTrackIndex 
                      ? 'bg-white text-black border-white' 
                      : 'hover:bg-white/10 border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-7 h-7 rounded flex items-center justify-center text-xs flex-shrink-0 border ${
                      index === currentTrackIndex 
                        ? 'bg-black text-white border-black' 
                        : 'bg-white/10 border-white/30'
                    }`}>
                      {index === currentTrackIndex && isPlaying ? '▶' : index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate text-xs">{track.title}</p>
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
