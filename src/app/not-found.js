import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400">
      <div className="text-center">
        <h1 className="text-9xl lg:text-10xl xl:text-11xl font-black text-white drop-shadow-2xl leading-none mb-4">
          404
        </h1>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-8 py-6 mb-8">
          <h2 className="text-5xl font-bold text-white mb-3">Page Not Found</h2>
          <p className="text-lg text-blue-100">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <button className="px-12 py-4 text-lg font-bold bg-white text-blue-900 rounded-full cursor-pointer shadow-2xl hover:shadow-blue-400/50 hover:scale-110 transition-all duration-300">
          Go Back Home
        </button>
      </div>
    </div>
  );
}
