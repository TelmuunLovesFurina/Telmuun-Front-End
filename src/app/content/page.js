'use client';

import { useRouter } from 'next/navigation';

export default function ContentPage() {
    const router = useRouter();

    return (
        <div className="w-screen min-h-screen bg-white">
            {/* Header */}
            <div className="w-full h-16 bg-white flex justify-between items-center border-b">
                <div className="w-96 h-16 flex justify-between items-center">
                    <button
                        onClick={() => router.back()}
                        className="px-4 py-2 text-black m-4"
                    >
                        Go Back
                    </button>

                    <div className="w-24 h-16 flex justify-center items-center text-black">
                        Blog
                    </div>

                    <div className="w-24 h-16 flex justify-center items-center text-black">
                        Contacts
                    </div>

                    <div className="w-16 h-16 flex justify-center items-center text-black">
                        News
                    </div>
                </div>

                <img
                    className="w-16 h-16 object-cover rounded-full"
                    src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
                    alt="logo"
                />

                <div className="w-48 h-16 flex justify-around items-center">
                    <div className="w-20 h-16 flex justify-center items-center text-black">
                        Sign in
                    </div>

                    <div className="w-20 h-16 flex justify-center items-center text-black">
                        Sign Up
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="w-full h-12 flex justify-center items-center bg-yellow-100">
                <div className="w-24 h-12 flex justify-center items-center text-black">
                    Toy Cars
                </div>

                <div className="w-24 h-12 flex justify-center items-center text-black">
                    Puzzle
                </div>

                <div className="w-24 h-12 flex justify-center items-center text-black">
                    LEGO
                </div>

                <div className="w-24 h-12 flex justify-center items-center text-black">
                    Dolls
                </div>

                <div className="w-24 h-12 flex justify-center items-center text-black">
                    Robots
                </div>

                <div className="w-24 h-12 flex justify-center items-center text-black">
                    Plushies
                </div>
            </div>

            {/* Hero Section */}
            <div className="w-full h-96 bg-blue-50 flex">
                <img
                    className="w-2/5 h-full object-cover"
                    src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1200&auto=format&fit=crop"
                    alt="kids toys"
                />

                <div className="w-3/5 h-full text-4xl flex flex-col justify-center items-center">
                    <div className="text-4xl text-black font-bold text-center">
                        Discover Amazing Toys For Kids!
                    </div>

                    <div className="text-xl p-16 text-black text-center">
                        Explore fun toy cars, colorful LEGO sets, cute plushies,
                        exciting puzzles, and creative toys for every child.
                    </div>
                </div>
            </div>
 
            <div className="w-full flex flex-wrap justify-around items-center bg-white py-10">
                <div className="w-36 h-36 flex justify-center items-center border-[3px] border-black m-4 bg-red-100 rounded-2xl">
                    <img
                        className="w-24 h-24 object-contain"
                        src="https://cdn-icons-png.flaticon.com/512/3082/3082037.png"
                        alt=""
                    />
                </div>

                <div className="w-36 h-36 flex justify-center items-center border-[3px] border-black m-4 bg-yellow-100 rounded-2xl">
                    <img
                        className="w-24 h-24 object-contain"
                        src="https://cdn-icons-png.flaticon.com/512/2436/2436636.png"
                        alt=""
                    />
                </div>

                <div className="w-36 h-36 flex justify-center items-center border-[3px] border-black m-4 bg-green-100 rounded-2xl">
                    <img
                        className="w-24 h-24 object-contain"
                        src="https://cdn-icons-png.flaticon.com/512/3659/3659899.png"
                        alt=""
                    />
                </div>

                <div className="w-36 h-36 flex justify-center items-center border-[3px] border-black m-4 bg-blue-100 rounded-2xl">
                    <img
                        className="w-24 h-24 object-contain"
                        src="https://cdn-icons-png.flaticon.com/512/3097/3097131.png"
                        alt=""
                    />
                </div>

                <div className="w-36 h-36 flex justify-center items-center border-[3px] border-black m-4 bg-pink-100 rounded-2xl">
                    <img
                        className="w-24 h-24 object-contain"
                        src="https://cdn-icons-png.flaticon.com/512/4359/4359963.png"
                        alt=""
                    />
                </div>

                <div className="w-36 h-36 flex justify-center items-center border-[3px] border-black m-4 bg-purple-100 rounded-2xl">
                    <img
                        className="w-24 h-24 object-contain"
                        src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
                        alt=""
                    />
                </div>
            </div>

            <div className="w-full flex flex-wrap justify-around items-center bg-gray-50 py-10">
                <div className="w-36 h-36 flex justify-center items-center border-[3px] border-black m-4 bg-orange-100 rounded-2xl">
                    <img
                        className="w-24 h-24 object-contain"
                        src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
                        alt=""
                    />
                </div>

                <div className="w-36 h-36 flex justify-center items-center border-[3px] border-black m-4 bg-cyan-100 rounded-2xl">
                    <img
                        className="w-24 h-24 object-contain"
                        src="https://cdn-icons-png.flaticon.com/512/686/686589.png"
                        alt=""
                    />
                </div>

                <div className="w-36 h-36 flex justify-center items-center border-[3px] border-black m-4 bg-lime-100 rounded-2xl">
                    <img
                        className="w-24 h-24 object-contain"
                        src="https://cdn-icons-png.flaticon.com/512/2976/2976215.png"
                        alt=""
                    />
                </div>

                <div className="w-36 h-36 flex justify-center items-center border-[3px] border-black m-4 bg-rose-100 rounded-2xl">
                    <img
                        className="w-24 h-24 object-contain"
                        src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
                        alt=""
                    />
                </div>

                <div className="w-36 h-36 flex justify-center items-center border-[3px] border-black m-4 bg-indigo-100 rounded-2xl">
                    <img
                        className="w-24 h-24 object-contain"
                        src="https://cdn-icons-png.flaticon.com/512/616/616554.png"
                        alt=""
                    />
                </div>

                <div className="w-36 h-36 flex justify-center items-center border-[3px] border-black m-4 bg-teal-100 rounded-2xl">
                    <img
                        className="w-24 h-24 object-contain"
                        src="https://cdn-icons-png.flaticon.com/512/3081/3081986.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}