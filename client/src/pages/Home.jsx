export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-black via-black-600 to-blue-900 text-white overflow-hidden">
      {/* Navbar */}
      <nav className="bg-black/20 backdrop-blur-md fixed w-full z-50 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            🎵 Rhythmic
          </h1>
          <div className="flex space-x-4">
            <a 
              href="/login" 
              className="px-6 py-2 text-sm font-medium border border-white/30 rounded-full hover:border-white/50 hover:bg-white/10 transition-all duration-300"
            >
              Login
            </a>
            <a 
              href="/register" 
              className="px-6 py-2 text-sm font-medium bg-linear-to-r from-pink-500 to-purple-500 rounded-full hover:from-pink-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
              Your Music,
              <span className="bg-linear-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                {' '}Your Rhythm
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-lg">
              Stream unlimited songs and podcasts. Discover new music and stories that move you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/register"
                className="group flex-1 px-8 py-4 bg-linear-to-r from-green-500 to-emerald-600 text-lg font-semibold rounded-2xl hover:from-green-600 hover:to-emerald-700 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 text-center"
              >
                Start Listening Free
              </a>
              <a 
                href="/songs"
                className="group flex-1 px-8 py-4 border-2 border-white/30 text-lg font-semibold rounded-2xl hover:border-white/60 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-center"
              >
                Browse Music
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative z-10 bg-black/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-linear-to-br from-pink-500/30 to-purple-500/30 rounded-2xl p-6 flex flex-col items-center space-y-2 animate-pulse">
                  <div className="w-12 h-12 bg-linear-to-r from-pink-400 to-purple-400 rounded-xl shadow-lg" />
                  <p className="text-sm font-medium">Top Songs</p>
                </div>
                <div className="bg-linear-to-br from-blue-500/30 to-indigo-500/30 rounded-2xl p-6 flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-linear-to-r from-blue-400 to-indigo-400 rounded-xl shadow-lg" />
                  <p className="text-sm font-medium">Podcasts</p>
                </div>
              </div>
              <div className="w-full h-32 md:h-48 bg-linear-to-r from-gray-800 to-gray-900 rounded-2xl shadow-xl flex items-center justify-center">
                <div className="w-20 h-20 bg-linear-to-r from-white to-gray-200 rounded-full shadow-2xl animate-spin-slow" />
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-linear-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-linear-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-xl animate-pulse delay-1000" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-12 lg:px-24 pb-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-3xl bg-black/10 backdrop-blur-md hover:bg-black/20 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-linear-to-r from-green-400 to-emerald-400 rounded-2xl mx-auto mb-6 shadow-xl flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Unlimited Access</h3>
            <p className="text-gray-300">Stream millions of songs and podcasts without limits.</p>
          </div>
          <div className="text-center p-8 rounded-3xl bg-black/10 backdrop-blur-md hover:bg-black/20 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-linear-to-r from-purple-400 to-pink-400 rounded-2xl mx-auto mb-6 shadow-xl flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.5h3m1.834-7.166a3.499 3.499 0 110-4.667m-2.584 2.584L10 15.5" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Offline Mode</h3>
            <p className="text-gray-300">Download your favorites for offline listening anywhere.</p>
          </div>
          <div className="text-center p-8 rounded-3xl bg-black/10 backdrop-blur-md hover:bg-black/20 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-linear-to-r from-blue-400 to-indigo-400 rounded-2xl mx-auto mb-6 shadow-xl flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">High Quality</h3>
            <p className="text-gray-300">Enjoy crystal-clear audio in up to 320kbps quality.</p>
          </div>
        </div>
      </section>
    </div>
  );
}