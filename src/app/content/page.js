'use client';

import { useRouter } from 'next/navigation';

export default function ContentPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-white w-full overflow-x-hidden">
            {/* Header */}
            <div className="w-full bg-white flex flex-col md:flex-row justify-between items-center border-b p-4 md:p-0 gap-4 md:gap-0">
                <div className="flex flex-wrap gap-2 md:gap-4 items-center justify-center md:justify-start">
                    <button
                        onClick={() => router.back()}
                        className="px-4 py-2 text-black text-sm md:text-base hover:bg-gray-100 rounded transition-colors"
                    >
                        Go Back
                    </button>

                    <div className="text-sm md:text-base text-black font-medium">
                        Blog
                    </div>

                    <div className="text-sm md:text-base text-black font-medium">
                        Contacts
                    </div>

                    <div className="text-sm md:text-base text-black font-medium">
                        News
                    </div>
                </div>

                <img
                    className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full"
                    src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
                    alt="logo"
                />

                <div className="flex gap-3 md:gap-4 items-center">
                    <div className="text-xs md:text-base text-black font-medium cursor-pointer hover:text-purple-600 transition-colors">
                        Sign in
                    </div>

                    <div className="text-xs md:text-base text-black font-medium cursor-pointer hover:text-purple-600 transition-colors">
                        Sign Up
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="w-full flex flex-wrap justify-center items-center bg-yellow-100 p-2 md:p-3 gap-2 md:gap-4">
                {['Toy Cars', 'Puzzle', 'LEGO', 'Dolls', 'Robots', 'Plushies'].map((cat) => (
                    <div key={cat} className="text-xs md:text-sm text-black font-medium px-2 md:px-4 py-1 md:py-2 hover:bg-yellow-200 rounded transition-colors cursor-pointer">
                        {cat}
                    </div>
                ))}
            </div>

            {/* Hero Section */}
            <div className="w-full bg-blue-50 flex flex-col md:flex-row min-h-64 md:h-96">
                <img
                    className="w-full md:w-2/5 h-40 md:h-full object-cover"
                    src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1200&auto=format&fit=crop"
                    alt="kids toys"
                />

                <div className="w-full md:w-3/5 flex flex-col justify-center items-center p-6 md:p-8">
                    <div className="text-2xl md:text-4xl text-black font-bold text-center mb-4">
                        Discover Amazing Toys For Kids!
                    </div>

                    <div className="text-sm md:text-xl text-black text-center max-w-md">
                        Explore fun toy cars, colorful LEGO sets, cute plushies,
                        exciting puzzles, and creative toys for every child.
                    </div>
                </div>
            </div>
 
            <div className="w-full flex flex-wrap justify-center items-center bg-white py-6 md:py-10 px-4 gap-3 md:gap-4">
                {[
                    { bg: 'bg-red-100', src: 'https://cdn-icons-png.flaticon.com/512/3082/3082037.png' },
                    { bg: 'bg-yellow-100', src: 'https://cdn-icons-png.flaticon.com/512/2436/2436636.png' },
                    { bg: 'bg-green-100', src: 'https://cdn-icons-png.flaticon.com/512/3659/3659899.png' },
                    { bg: 'bg-blue-100', src: 'https://cdn-icons-png.flaticon.com/512/3097/3097131.png' },
                    { bg: 'bg-pink-100', src: 'https://cdn-icons-png.flaticon.com/512/4359/4359963.png' },
                    { bg: 'bg-purple-100', src: 'https://cdn-icons-png.flaticon.com/512/3081/3081559.png' },
                ].map((item, idx) => (
                    <div key={idx} className={`w-24 h-24 md:w-36 md:h-36 flex justify-center items-center border-2 md:border-[3px] border-black ${item.bg} rounded-2xl hover:scale-105 transition-transform cursor-pointer`}>
                        <img
                            className="w-16 h-16 md:w-24 md:h-24 object-contain"
                            src={item.src}
                            alt=""
                        />
                    </div>
                ))}
            </div>

            <div className="w-full flex flex-wrap justify-center items-center bg-gray-50 py-6 md:py-10 px-4 gap-3 md:gap-4">
                {[
                    { bg: 'bg-orange-100', src: 'https://cdn-icons-png.flaticon.com/512/1048/1048953.png' },
                    { bg: 'bg-cyan-100', src: 'https://cdn-icons-png.flaticon.com/512/686/686589.png' },
                    { bg: 'bg-lime-100', src: 'https://cdn-icons-png.flaticon.com/512/2976/2976215.png' },
                    { bg: 'bg-rose-100', src: 'https://cdn-icons-png.flaticon.com/512/869/869869.png' },
                    { bg: 'bg-indigo-100', src: 'https://cdn-icons-png.flaticon.com/512/616/616554.png' },
                    { bg: 'bg-teal-100', src: 'https://cdn-icons-png.flaticon.com/512/3081/3081986.png' },
                ].map((item, idx) => (
                    <div key={idx} className={`w-24 h-24 md:w-36 md:h-36 flex justify-center items-center border-2 md:border-[3px] border-black ${item.bg} rounded-2xl hover:scale-105 transition-transform cursor-pointer`}>
                        <img
                            className="w-16 h-16 md:w-24 md:h-24 object-contain"
                            src={item.src}
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}