import { useState, useEffect, useRef } from "react";

// Traditional Indian instrumental music (royalty-free)
const TRADITIONAL_MUSIC_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3";

export const useWelcomeGreeting = () => {
  const [hasGreeted, setHasGreeted] = useState(false);

  const playGreeting = () => {
    if (hasGreeted || !("speechSynthesis" in window)) return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(
      "Namaste! Welcome to Visista Gold and Diamonds. Where tradition meets timeless elegance."
    );

    // Try to find an Indian English voice, fallback to default
    const voices = window.speechSynthesis.getVoices();
    const indianVoice = voices.find(
      (voice) =>
        voice.lang.includes("en-IN") ||
        voice.name.toLowerCase().includes("indian")
    );

    if (indianVoice) {
      utterance.voice = indianVoice;
    }

    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    window.speechSynthesis.speak(utterance);
    setHasGreeted(true);
  };

  // Load voices when available
  useEffect(() => {
    const loadVoices = () => {
      window.speechSynthesis.getVoices();
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  return { playGreeting, hasGreeted };
};

export const useBackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio(TRADITIONAL_MUSIC_URL);
    audio.loop = true;
    audio.volume = 0.3;
    audio.preload = "auto";

    audio.addEventListener("canplaythrough", () => {
      setIsLoaded(true);
    });

    audio.addEventListener("error", (e) => {
      console.error("Audio loading error:", e);
    });

    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Audio playback error:", error);
    }
  };

  const setVolume = (volume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, Math.min(1, volume));
    }
  };

  return { isPlaying, isLoaded, toggleMusic, setVolume };
};
