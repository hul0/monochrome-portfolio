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
      <div className="glass-card text-white rounded-lg p-6 text-center max-w-md mx-auto border border-primary/20 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
        <p className="text-muted-foreground text-sm">No tracks available. Please provide a playlist.</p>
      </div>
    );
  }

  return (
    <div className="glass-card text-white rounded-4xl shadow-[0_0_30px_rgba(168,85,247,0.3)] w-full max-w-md mx-auto overflow-hidden border border-primary/20">
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
            <div className="mb-3 p-2 bg-red-500/20 border border-red-500/50 rounded text-xs text-center text-red-200">
              {error}
            </div>
          )}

          {/* Album Art & Info - Compact */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-primary/20 text-primary rounded-2xl flex items-center justify-center text-xl font-bold shadow-[0_0_15px_rgba(168,85,247,0.3)] border border-primary/30 flex-shrink-0 backdrop-blur-md">
              {currentTrack?.title?.[0] || '♪'}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold truncate text-white text-glow">{currentTrack?.title || 'No Title'}</h3>
              <p className="text-sm text-primary/80 truncate font-mono">{currentTrack?.artist || 'Unknown Artist'}</p>
            </div>
          </div>

          {/* Progress Bar - Touch-friendly */}
          <div className="mb-4">
            <div 
              ref={progressRef}
              onClick={handleProgressClick}
              onTouchStart={handleProgressClick}
              className="h-2 bg-black/40 rounded-full cursor-pointer relative overflow-hidden group border border-white/5 touch-none"
            >
              <div 
                className="h-full bg-primary shadow-[0_0_10px_#a855f7] transition-all duration-100"
                style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
              />
              <div 
                className="absolute top-1/2 w-4 h-4 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity border-2 border-primary shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                style={{ 
                  left: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`, 
                  transform: 'translate(-50%, -50%)' 
                }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-muted-foreground mt-1 font-mono">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls - Compact Layout */}
          <div className="space-y-4">
            {/* Main Playback Controls - Centered */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={playPrevious}
                disabled={playlist.length === 0}
                className="p-2 hover:bg-primary/20 rounded-full transition-all border border-transparent hover:border-primary/30 disabled:opacity-30 disabled:cursor-not-allowed touch-manipulation text-white/80 hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                title="Previous"
                aria-label="Previous track"
              >
                <SkipBack size={22} />
              </button>
              
              <button
                onClick={togglePlay}
                disabled={!currentTrack}
                className="p-4 bg-primary text-white rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)] transform hover:scale-105 active:scale-95 transition-all border border-primary-dark disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]"
                title={isPlaying ? 'Pause' : 'Play'}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
              </button>
              
              <button
                onClick={playNext}
                disabled={playlist.length === 0}
                className="p-2 hover:bg-primary/20 rounded-full transition-all border border-transparent hover:border-primary/30 disabled:opacity-30 disabled:cursor-not-allowed touch-manipulation text-white/80 hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                title="Next"
                aria-label="Next track"
              >
                <SkipForward size={22} />
              </button>
            </div>

            {/* Secondary Controls - Compact Grid */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/5 pt-3">
              {/* Left: Mode buttons */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsShuffle(!isShuffle)}
                  className={`p-2 rounded-lg transition-all border touch-manipulation ${isShuffle ? 'bg-primary/20 text-primary border-primary/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]' : 'hover:bg-white/5 border-transparent text-white/60 hover:text-white'}`}
                  title="Shuffle"
                  aria-label="Toggle shuffle"
                  aria-pressed={isShuffle}
                >
                  <Shuffle size={16} />
                </button>
                <button
                  onClick={() => setIsRepeat(!isRepeat)}
                  className={`p-2 rounded-lg transition-all border touch-manipulation ${isRepeat ? 'bg-primary/20 text-primary border-primary/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]' : 'hover:bg-white/5 border-transparent text-white/60 hover:text-white'}`}
                  title="Repeat"
                  aria-label="Toggle repeat"
                  aria-pressed={isRepeat}
                >
                  <Repeat size={16} />
                </button>
              </div>

              {/* Right: Volume & Playlist */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 group">
                  <button
                    onClick={toggleMute}
                    className="p-1.5 hover:bg-white/5 rounded-lg transition-colors text-white/70 hover:text-white touch-manipulation"
                    title={isMuted ? 'Unmute' : 'Mute'}
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                  <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden relative">
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
                      className="absolute w-full h-full opacity-0 cursor-pointer z-10"
                      title="Volume"
                      aria-label="Volume control"
                    />
                    <div 
                      className="h-full bg-white group-hover:bg-primary transition-colors rounded-full"
                      style={{ width: `${(isMuted ? 0 : volume) * 100}%` }}
                    />
                  </div>
                </div>
                
                <button
                  onClick={() => setShowPlaylistPanel(!showPlaylistPanel)}
                  className={`p-2 rounded-lg transition-all border touch-manipulation ${showPlaylistPanel ? 'bg-primary/20 text-primary border-primary/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]' : 'hover:bg-white/5 border-transparent text-white/60 hover:text-white'}`}
                  title="Toggle Playlist"
                  aria-label="Toggle playlist"
                  aria-pressed={showPlaylistPanel}
                >
                  <List size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Playlist Panel - Full Width */}
        {showPlaylistPanel && (
          <div className="w-full bg-black/40 border-t border-white/10 max-h-64 overflow-y-auto custom-scrollbar backdrop-blur-md">
            <div className="p-3 border-b border-white/5 flex items-center justify-between sticky top-0 bg-[#181818]/90 backdrop-blur-md z-10">
              <h4 className="font-bold text-xs font-mono text-primary tracking-widest uppercase">Playlist ({playlist.length})</h4>
              <button
                onClick={() => setShowPlaylistPanel(false)}
                className="p-1 hover:bg-white/10 rounded-full border border-transparent hover:border-white/10 touch-manipulation text-white/60 hover:text-white transition-colors"
                aria-label="Close playlist"
              >
                <X size={14} />
              </button>
            </div>
            <div className="p-2 space-y-1">
              {playlist.map((track, index) => (
                <div
                  key={`${index}-${track.url}`}
                  onClick={() => selectTrack(index)}
                  className={`p-2 rounded-lg cursor-pointer transition-all border touch-manipulation flex items-center gap-3 group ${
                    index === currentTrackIndex 
                      ? 'bg-primary/15 border-primary/30 shadow-[0_0_10px_rgba(168,85,247,0.1)]' 
                      : 'hover:bg-white/5 border-transparent hover:border-white/5'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] flex-shrink-0 border transition-colors ${
                    index === currentTrackIndex 
                      ? 'bg-primary text-white border-primary shadow-[0_0_10px_rgba(168,85,247,0.4)]' 
                      : 'bg-white/5 border-white/10 text-white/40 group-hover:text-white/80'
                  }`}>
                    {index === currentTrackIndex && isPlaying ? <span className="animate-pulse">▶</span> : index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-medium truncate text-xs ${index === currentTrackIndex ? 'text-primary' : 'text-white group-hover:text-white'}`}>{track.title}</p>
                    <p className={`text-[10px] truncate ${index === currentTrackIndex ? 'text-primary/70' : 'text-white/40 group-hover:text-white/60'}`}>
                      {track.artist}
                    </p>
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