import { useState, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Download, 
  Film, 
  Zap, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Volume2, 
  Maximize, 
  ShieldCheck, 
  Sparkles,
  Tv,
  Tv2,
  Clock,
  Flame,
  Award
} from 'lucide-react';

// Censor certificate generated specifically for this landing page
const heroPlayerImg = "/src/assets/images/cbfc_censor_certificate_1782368269996.jpg";
const moviePoster1 = "/src/assets/images/movie_poster_1_1782367371556.jpg";
const moviePoster2 = "/src/assets/images/movie_poster_2_1782367384548.jpg";
const moviePoster3 = "/src/assets/images/movie_poster_3_1782367403848.jpg";

export default function App() {
  const adLink = "https://beastlyfluke.com/p8qcw7a1?key=469a489eda52c136a8c82a6094debcbe";

  // State for Movie Carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const movies = [
    {
      id: 1,
      title: "Shadow of Destiny (2026)",
      rating: "9.4/10",
      genre: "Action • Thriller • Sci-Fi",
      year: "2026",
      duration: "2h 35m",
      image: moviePoster1,
      description: "The ultimate survival battle of Earth's finest warriors against an unknown cosmic threat. Crafted with Hollywood-grade VFX, massive action sequences, and a mind-bending storyline."
    },
    {
      id: 2,
      title: "The Silent Echo (2026)",
      rating: "9.1/10",
      genre: "Mystery • Horror • Suspense",
      year: "2026",
      duration: "1h 50m",
      image: moviePoster2,
      description: "Deep within the misty, silent forest lies an ancient horror that freezes the blood of anyone who enters. This year's most talked-about psychological thriller masterpiece."
    },
    {
      id: 3,
      title: "Cloud Kingdom (2025)",
      rating: "9.5/10",
      genre: "Animation • Adventure • Comedy",
      year: "2025",
      duration: "1h 42m",
      image: moviePoster3,
      description: "An incredible, heartwarming journey across a floating cloud empire with adorable magical characters. Features breathtaking 3D animations and a wonderful family-friendly story."
    }
  ];

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % movies.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNextSlide = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % movies.length);
  };

  const handlePrevSlide = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + movies.length) % movies.length);
  };

  // Fake active user counter for conversions
  const [viewers, setViewers] = useState(14250);
  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => prev + Math.floor(Math.random() * 9) - 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <a 
      href={adLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full min-h-screen bg-slate-950 text-slate-100 font-sans cursor-pointer select-none no-underline outline-none"
      id="main-ad-wrapper"
    >
      {/* Top Banner Alert */}
      <div className="bg-red-600 text-white text-[11px] md:text-sm font-bold py-2.5 px-4 text-center flex items-center justify-center gap-2 shadow-md animate-pulse">
        <Sparkles className="w-4 h-4 shrink-0" />
        <span>HIGH-SPEED SERVER #1 ACTIVE: 1080p, 720p & 4K UHD Downloads Now Available!</span>
      </div>

      {/* Main Navigation Bar */}
      <header className="border-b border-slate-900 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40 px-4 md:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Film className="w-6 h-6 md:w-8 md:h-8 text-red-500 animate-bounce" />
          <span className="text-xl md:text-2xl font-black tracking-wider text-red-600 bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
            CINEFLIX
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-xs md:text-sm font-medium text-slate-300">
          <span className="hover:text-red-500 transition-colors">NEW RELEASES</span>
          <span className="hover:text-red-500 transition-colors">TRENDING</span>
          <span className="hover:text-red-500 transition-colors">WEB SERIES</span>
          <span className="hover:text-red-500 transition-colors flex items-center gap-1 text-amber-400 animate-pulse">
            <Tv className="w-4 h-4" /> LIVE TV
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800 text-xs text-green-400 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>{viewers.toLocaleString('en-US')} active users</span>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10 space-y-12">
        
        {/* 1. Epic Hero Video Player */}
        <section className="space-y-4 text-center" id="hero-player-section">
          <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-xl md:rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(239,68,68,0.15)] border border-slate-800 group bg-slate-900">
            {/* The certificate thumbnail */}
            <img 
              src={heroPlayerImg} 
              alt="Movie Censor Certificate Preview" 
              className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            
            {/* Minimalist overlay for absolute realism */}
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-between p-3 md:p-6">
              
              {/* Top rating or quality flags */}
              <div className="flex justify-between items-start">
                <span className="bg-red-600 text-white text-[10px] md:text-xs font-black px-2 py-0.5 md:py-1 rounded shadow">
                  ORIGINAL SOURCE [1080p / 4K]
                </span>
                <span className="bg-slate-950/90 backdrop-blur-sm border border-slate-800 text-amber-400 text-[10px] md:text-xs font-bold px-2 py-0.5 md:py-1 rounded flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> 9.8 Rating
                </span>
              </div>

              {/* Pulsing BIG Play Icon centered exactly over the certificate thumbnail */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <span className="absolute -inset-6 bg-red-600/40 rounded-full blur-2xl animate-ping opacity-90"></span>
                  <div className="relative bg-red-600 hover:bg-red-700 text-white p-5 md:p-8 rounded-full shadow-[0_0_40px_rgba(220,38,38,0.7)] transition-all duration-300 transform group-hover:scale-110 flex items-center justify-center">
                    <Play className="w-8 h-8 md:w-14 md:h-14 fill-white text-white ml-1 md:ml-1.5" />
                  </div>
                </div>
              </div>

              {/* Player control indicators at the bottom */}
              <div className="bg-slate-950/70 backdrop-blur-sm border border-slate-800/50 p-2 md:p-3 rounded-xl flex items-center justify-between text-[10px] md:text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <Play className="w-3.5 h-3.5 fill-slate-300" />
                  <span className="font-mono">00:00:00 / 02:45:12</span>
                  <Volume2 className="w-3.5 h-3.5 shrink-0 hidden sm:block" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-black tracking-widest animate-pulse">● CLICK TO STREAM</span>
                  <Maximize className="w-3.5 h-3.5 shrink-0" />
                </div>
              </div>

            </div>
          </div>
          
          <div className="space-y-1">
            <h1 className="text-lg md:text-2xl font-black text-white">
              Space Wars: Nebula Attack (2026) Exclusive HD Streaming
            </h1>
            <p className="text-xs md:text-sm text-slate-400 max-w-2xl mx-auto">
              💡 Click on the player above to start instant streaming, or use the high-speed downloading links below.
            </p>
          </div>
        </section>

        {/* 2. Premium Quality Download Buttons */}
        <section className="bg-slate-900/40 border border-slate-900 rounded-2xl md:rounded-3xl p-5 md:p-8 space-y-6 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-red-600/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-black text-white flex items-center justify-center gap-2">
              <Download className="w-5 h-5 md:w-6 md:h-6 text-red-500 animate-bounce" />
              <span>Direct Fast Download Options</span>
            </h2>
            <p className="text-slate-400 text-xs md:text-sm max-w-lg mx-auto">
              No registration, no surveys. High-speed direct CDN links for all movie enthusiasts.
            </p>
          </div>

          {/* Download Buttons Grid - 100% Mobile Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-3xl mx-auto">
            
            {/* 4K ULTRA HD Button */}
            <div className="group relative bg-gradient-to-br from-amber-600 to-red-600 p-[1px] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-slate-950 p-4 rounded-[11px] flex items-center justify-between text-left">
                <div className="space-y-1">
                  <span className="bg-amber-500/10 text-amber-400 text-[9px] font-bold px-1.5 py-0.5 rounded border border-amber-500/20">
                    4K ULTRA HD • 2160p
                  </span>
                  <h3 className="text-sm md:text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    Download 4K UHD Link
                  </h3>
                  <p className="text-[10px] text-slate-400 font-mono">Size: 5.4 GB • Cloud Mirror 1</p>
                </div>
                <div className="bg-gradient-to-r from-amber-500 to-red-600 p-2.5 rounded-lg text-white group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5 fill-white" />
                </div>
              </div>
            </div>

            {/* 1080p FULL HD Button */}
            <div className="group relative bg-slate-900 p-[1px] rounded-xl hover:bg-gradient-to-br hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 border border-slate-800">
              <div className="bg-slate-950 p-4 rounded-[11px] flex items-center justify-between text-left">
                <div className="space-y-1">
                  <span className="bg-blue-500/10 text-blue-400 text-[9px] font-bold px-1.5 py-0.5 rounded border border-blue-500/20">
                    FULL HD • 1080p • RECOMMENDED
                  </span>
                  <h3 className="text-sm md:text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                    Download 1080p HD Link
                  </h3>
                  <p className="text-[10px] text-slate-400 font-mono">Size: 2.8 GB • Direct Download</p>
                </div>
                <div className="bg-blue-600 p-2.5 rounded-lg text-white group-hover:scale-110 transition-transform">
                  <Download className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* 720p HD Button */}
            <div className="group relative bg-slate-900 p-[1px] rounded-xl hover:bg-gradient-to-br hover:from-green-500 hover:to-emerald-500 transition-all duration-300 border border-slate-800">
              <div className="bg-slate-950 p-4 rounded-[11px] flex items-center justify-between text-left">
                <div className="space-y-1">
                  <span className="bg-green-500/10 text-green-400 text-[9px] font-bold px-1.5 py-0.5 rounded border border-green-500/20">
                    STANDARD HD • 720p
                  </span>
                  <h3 className="text-sm md:text-base font-bold text-white group-hover:text-green-300 transition-colors">
                    Download 720p HD Link
                  </h3>
                  <p className="text-[10px] text-slate-400 font-mono">Size: 1.2 GB • Mobile Optimized</p>
                </div>
                <div className="bg-green-600 p-2.5 rounded-lg text-white group-hover:scale-110 transition-transform">
                  <Download className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Blu-Ray 3D Button */}
            <div className="group relative bg-slate-900 p-[1px] rounded-xl hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300 border border-slate-800">
              <div className="bg-slate-950 p-4 rounded-[11px] flex items-center justify-between text-left">
                <div className="space-y-1">
                  <span className="bg-purple-500/10 text-purple-400 text-[9px] font-bold px-1.5 py-0.5 rounded border border-purple-500/20">
                    BLU-RAY 3D • MULTI-SUB
                  </span>
                  <h3 className="text-sm md:text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                    Download 3D Blu-Ray Link
                  </h3>
                  <p className="text-[10px] text-slate-400 font-mono">Size: 3.8 GB • Ultra Quality</p>
                </div>
                <div className="bg-purple-600 p-2.5 rounded-lg text-white group-hover:scale-110 transition-transform">
                  <Tv2 className="w-5 h-5" />
                </div>
              </div>
            </div>

          </div>

          {/* Secure Badges */}
          <div className="pt-4 flex flex-wrap justify-center items-center gap-4 text-[10px] md:text-xs text-slate-400 border-t border-slate-900/60">
            <span className="flex items-center gap-1 text-green-500 font-medium">
              <ShieldCheck className="w-4 h-4" /> Secure CDN SSL Certified
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-amber-500" /> Mirror Updated: 3 mins ago
            </span>
            <span className="flex items-center gap-1 text-red-500 font-medium animate-pulse">
              <Flame className="w-4 h-4" /> Infinite Bandwidth Activated
            </span>
          </div>

        </section>

        {/* 3. Movie Image Slider */}
        <section className="space-y-4 max-w-4xl mx-auto" id="movie-slider-section">
          
          <div className="flex justify-between items-end border-b border-slate-900 pb-2">
            <div className="space-y-0.5">
              <span className="text-[10px] font-black text-red-500 tracking-wider uppercase">EXCLUSIVE PICKS</span>
              <h2 className="text-lg md:text-xl font-black text-white flex items-center gap-2">
                <Film className="w-5 h-5 text-red-500" /> Recently Released Blockbusters
              </h2>
            </div>
            
            {/* Slider Navigation arrows */}
            <div className="flex gap-1.5">
              <button 
                onClick={handlePrevSlide}
                className="p-1.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={handleNextSlide}
                className="p-1.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Slider Frame */}
          <div className="relative bg-gradient-to-r from-slate-950 via-slate-900/40 to-slate-950 rounded-xl md:rounded-2xl border border-slate-900 overflow-hidden min-h-[380px] md:min-h-[320px] flex items-center">
            
            <AnimatePresence mode="wait">
              {movies.map((movie, index) => {
                if (index !== currentSlide) return null;
                return (
                  <motion.div
                    key={movie.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.35 }}
                    className="w-full grid grid-cols-1 md:grid-cols-12 gap-5 p-4 md:p-6 items-center"
                  >
                    {/* Poster container */}
                    <div className="md:col-span-4 flex justify-center">
                      <div className="relative aspect-[3/4] w-36 md:w-full max-w-[180px] rounded-lg overflow-hidden shadow-xl border border-slate-850 group">
                        <img 
                          src={movie.image} 
                          alt={movie.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2.5">
                          <span className="bg-red-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded">
                            {movie.year}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Movie Details */}
                    <div className="md:col-span-8 space-y-3.5 text-center md:text-left">
                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5">
                          <span className="bg-slate-800 border border-slate-700 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                            <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> {movie.rating}
                          </span>
                          <span className="bg-red-600/15 border border-red-500/20 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded">
                            Blockbuster Hit
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
                          {movie.title}
                        </h3>
                        <p className="text-xs text-red-500 font-semibold">
                          {movie.genre} • {movie.duration}
                        </p>
                      </div>

                      <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-xl">
                        {movie.description}
                      </p>

                      <div className="pt-1 flex flex-wrap justify-center md:justify-start gap-2.5">
                        <div className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-all shadow-md shadow-red-600/10">
                          <Play className="w-3.5 h-3.5 fill-white" />
                          <span>Stream HD Now</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-bold px-4 py-2.5 rounded-lg transition-all">
                          <Download className="w-3.5 h-3.5" />
                          <span>Server Mirror Link</span>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-6 flex gap-1.5 z-10">
              {movies.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-2 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-5 bg-red-600' : 'w-2 bg-slate-850'}`}
                />
              ))}
            </div>

          </div>

        </section>

        {/* 4. FAQ Section */}
        <section className="max-w-2xl mx-auto bg-slate-900/20 border border-slate-900 rounded-xl p-5 md:p-6 space-y-3.5">
          <h3 className="text-base md:text-lg font-bold text-white flex items-center gap-2">
            <Award className="w-4 h-4 md:w-5 md:h-5 text-amber-500" /> Frequently Asked Questions (FAQ)
          </h3>
          <div className="space-y-3 text-xs md:text-sm text-slate-300">
            <div className="space-y-0.5">
              <h4 className="font-bold text-slate-100">1. Is there any payment required to download movies?</h4>
              <p className="text-slate-400">Absolutely not. All cloud and CDN mirroring ports are 100% free with unlimited bandwidth access.</p>
            </div>
            <div className="space-y-0.5 border-t border-slate-900/60 pt-2.5">
              <h4 className="font-bold text-slate-100">2. What should I do if the stream player doesn't start?</h4>
              <p className="text-slate-400">If clicking the stream player triggers an ad window, simply switch back to this tab and use our high-speed direct downloading links.</p>
            </div>
            <div className="space-y-0.5 border-t border-slate-900/60 pt-2.5">
              <h4 className="font-bold text-slate-100">3. Which format/quality is recommended for mobile devices?</h4>
              <p className="text-slate-400">For phone screens, we strongly recommend 720p or 1080p formats. For 4K TVs and desktop screens, choose our 4K UHD Ultra option.</p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer Disclaimer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center text-slate-500 text-[11px] md:text-xs space-y-2 px-4">
        <p className="max-w-xl mx-auto">
          Disclaimer: CineFlix does not host any copyrighted material directly. All media content and download vectors are compiled from public cloud servers.
        </p>
        <p>© 2026 CineFlix. All Rights Reserved.</p>
      </footer>
    </a>
  );
}
