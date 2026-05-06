'use client';
import { useRouter } from 'next/navigation';

export default function ContentPage() {
    const router = useRouter();

    return ( 
        <div className="min-h-screen bg-slate-900 text-white flex flex-col md:flex-row p-4 md:p-6 gap-4 md:gap-6">


  <div className="w-full md:w-40 bg-slate-800 rounded-2xl p-4 md:p-6 flex md:flex-col flex-row gap-4 md:gap-8 overflow-x-auto md:overflow-x-visible">
    <div className="text-2xl font-bold flex-shrink-0">☁</div>

    <div className="flex md:flex-col gap-4 md:gap-6 text-slate-300 flex-wrap md:flex-nowrap">
      <div className="flex items-center gap-3 text-sm md:text-base">
        <span>🌤</span>
        <span>Weather</span>
      </div>
      <div className="flex items-center gap-3 text-sm md:text-base">
        <span>📊</span>
        <span>Cities</span>
      </div>
      <div className="flex items-center gap-3 text-sm md:text-base">
        <span>🗺️</span>
        <span>Map</span>
      </div>
      <div className="flex items-center gap-3 text-sm md:text-base">
        <span>⚙️</span>
        <span>Settings</span>
      </div>
    </div>
  </div>

  <div className="flex-1 flex flex-col gap-4 md:gap-6">

    <div className="flex-1 flex flex-col gap-4 md:gap-6">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold">Madrid</h1>
          <p className="text-slate-400 text-sm md:text-base">Chance of rain: 0%</p>
          <h2 className="text-4xl md:text-6xl font-bold mt-2 md:mt-4">31°</h2>
        </div>
        <div className="text-6xl md:text-8xl">☀</div>
      </div>

      <div className="flex justify-center">
        <button onClick={() => router.back()} className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded transition-colors text-sm md:text-base">Go Back</button>
      </div>

      <div className="bg-slate-800 rounded-2xl p-4 md:p-6">
        <h3 className="text-slate-400 mb-4 text-sm md:text-base">Today's Forecast</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 text-center">
          <div>
            <p className="text-slate-400 text-xs md:text-sm">6:00 AM</p>
            <p className="text-xl md:text-2xl">☁</p>
            <p className="text-sm md:text-base">25°</p>
          </div>
          <div>
            <p className="text-slate-400 text-xs md:text-sm">9:00 AM</p>
            <p className="text-xl md:text-2xl">🌤️</p>
            <p className="text-sm md:text-base">28°</p>
          </div>
          <div>
            <p className="text-slate-400 text-xs md:text-sm">12:00 PM</p>
            <p className="text-xl md:text-2xl">☀️</p>
            <p className="text-sm md:text-base">33°</p>
          </div>
          <div>
            <p className="text-slate-400 text-xs md:text-sm">3:00 PM</p>
            <p className="text-xl md:text-2xl">☀️</p>
            <p className="text-sm md:text-base">34°</p>
          </div>
          <div>
            <p className="text-slate-400 text-xs md:text-sm">6:00 PM</p>
            <p className="text-xl md:text-2xl">☀️</p>
            <p className="text-sm md:text-base">32°</p>
          </div>
          <div>
            <p className="text-slate-400 text-xs md:text-sm">9:00 PM</p>
            <p className="text-xl md:text-2xl">🌤️</p>
            <p className="text-sm md:text-base">30°</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 rounded-2xl p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
          <h3 className="text-slate-400 text-sm md:text-base">Air Conditions</h3>
          <button className="bg-sky-500 hover:bg-sky-600 px-3 md:px-4 py-1 rounded-full text-xs md:text-sm transition-colors">
            See more
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌡️</span>
            <div>
              <p className="text-slate-400 text-sm">Real Feel</p>
              <p className="text-lg md:text-2xl font-semibold">30°</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-2xl">💨</span>
            <div>
              <p class="text-slate-400">Wind</p>
              <p class="text-2xl font-semibold">0.2 km/h</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-2xl">💧</span>
            <div>
              <p class="text-slate-400">Chance of rain</p>
              <p class="text-2xl font-semibold">0%</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-2xl">☀️</span>
            <div>
              <p class="text-slate-400">UV Index</p>
              <p class="text-2xl font-semibold">3</p>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="w-80 bg-slate-800 rounded-2xl p-6">
  <h3 class="text-slate-400 mb-6">7-Day Forecast</h3>

  <div class="flex flex-col gap-5">
    <div class="flex justify-between items-center">
      <span>Today</span>
      <span>☀ Sunny</span>
      <span>36/22</span>
    </div>
    <div class="flex justify-between items-center">
      <span>Tue</span>
      <span>☀ Sunny</span>
      <span>37/21</span>
    </div>
    <div class="flex justify-between items-center">
      <span>Wed</span>
      <span>☀ Sunny</span>
      <span>37/21</span>
    </div>
    <div class="flex justify-between items-center">
      <span>Thu</span>
      <span>☁ Cloudy</span>
      <span>37/21</span>
    </div>
    <div class="flex justify-between items-center">
      <span>Fri</span>
      <span>☁ Cloudy</span>
      <span>37/21</span>
    </div>
    <div class="flex justify-between items-center">
      <span>Sat</span>
      <span>☁ Cloudy</span>
      <span>37/21</span>
    </div>
    <div class="flex justify-between items-center">
      <span>Sun</span>
      <span>⛈ Storm</span>
      <span>37/21</span>
    </div>
  </div>
</div>

  </div>
</div>
    )
}