'use client';

import { useRouter } from 'next/navigation';

export default function ContactPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
            <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-slate-700">
                <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
                    <h1 className="text-3xl font-bold tracking-tight">
                        Contact Me
                    </h1>

                    <button
                        onClick={() => router.back()}
                        className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 transition-all duration-200 shadow-lg hover:scale-105"
                    >
                        ← Go Back
                    </button>
                </div>
            </header>

            <main className="py-16 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-5xl font-extrabold leading-tight mb-5">
                                Let&apos;s Get In Touch
                            </h2>

                            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                                I&apos;m always open to meeting new people,
                                collaborating on projects, or simply having
                                a conversation. Feel free to send a message anytime.
                            </p>
                        </div>

                        <div className="grid gap-5">

                            <div className="group bg-slate-900/60 backdrop-blur-xl border border-slate-700 hover:border-sky-500 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center text-2xl">
                                        📞
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold">
                                            Phone
                                        </h3>
                                        <p className="text-slate-400">
                                            (+976) 88676941
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="group bg-slate-900/60 backdrop-blur-xl border border-slate-700 hover:border-purple-500 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-2xl">
                                        ✉️
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold">
                                            Email
                                        </h3>
                                        <p className="text-slate-400">
                                            telmuun@example.com
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="group bg-slate-900/60 backdrop-blur-xl border border-slate-700 hover:border-emerald-500 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl">
                                        📍
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold">
                                            Location
                                        </h3>
                                        <p className="text-slate-400">
                                            Ulaanbaatar, Khan-Uul District
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="group bg-slate-900/60 backdrop-blur-xl border border-slate-700 hover:border-orange-500 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center text-2xl">
                                        🎓
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold">
                                            School
                                        </h3>
                                        <p className="text-slate-400">
                                            NHS — Class 11A
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900/70 backdrop-blur-2xl border border-slate-700 rounded-3xl p-8 shadow-2xl">
                        <div className="mb-8">
                            <h3 className="text-3xl font-bold mb-2">
                                Send a Message
                            </h3>

                            <p className="text-slate-400">
                                Fill out the form below and I&apos;ll reply soon.
                            </p>
                        </div>

                        <form className="space-y-6">

                            <div>
                                <label className="block mb-2 text-sm text-slate-300">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30 outline-none transition-all text-white placeholder-slate-500"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-slate-300">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="your.email@example.com"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 outline-none transition-all text-white placeholder-slate-500"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-slate-300">
                                    Phone
                                </label>

                                <input
                                    type="tel"
                                    placeholder="Your phone number"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 outline-none transition-all text-white placeholder-slate-500"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-slate-300">
                                    Message
                                </label>

                                <textarea
                                    rows={5}
                                    placeholder="Tell me what’s on your mind..."
                                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 outline-none transition-all text-white placeholder-slate-500 resize-none"
                                />
                            </div>

                        </form>
                    </div>
                </div>
            </main>

            <footer className="border-t border-slate-700 mt-10">
                <div className="max-w-6xl mx-auto px-6 py-6 text-center text-slate-500">
                    © 2026 Telmuun — Designed with Next.js & Tailwind CSS
                </div>
            </footer>
        </div>
    );
}