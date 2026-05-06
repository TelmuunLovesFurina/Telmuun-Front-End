'use client';

import { useRouter } from 'next/navigation';

export default function ContactPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <header className="bg-slate-900 border-b border-slate-700">
                <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
                    <h1 className="text-3xl font-bold tracking-tight">Contact Me</h1>
                    <button
                        onClick={() => router.back()}
                        className="px-5 py-2 rounded-xl bg-slate-800 border border-slate-700"
                    >
                        ← Go Back
                    </button>
                </div>
            </header>

            <main className="py-16 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl font-bold leading-tight mb-4">Let's Get In Touch</h2>
                            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                                I'm always open to meeting new people, collaborating on projects, or simply having a conversation.
                                Feel free to send a message anytime.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-800 text-slate-200 flex items-center justify-center text-2xl">
                                        📞
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-slate-100">Phone</h3>
                                        <p className="text-slate-400">(+976) 88676941</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-800 text-slate-200 flex items-center justify-center text-2xl">
                                        ✉️
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-slate-100">Email</h3>
                                        <p className="text-slate-400">telmuun@example.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-800 text-slate-200 flex items-center justify-center text-2xl">
                                        📍
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-slate-100">Location</h3>
                                        <p className="text-slate-400">Ulaanbaatar, Khan-Uul District</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-800 text-slate-200 flex items-center justify-center text-2xl">
                                        🎓
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-slate-100">School</h3>
                                        <p className="text-slate-400">NHS — Class 11A</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8">
                        <div className="mb-8">
                            <h3 className="text-3xl font-bold mb-2">Send a Message</h3>
                            <p className="text-slate-400">Fill out the form below and I'll reply soon.</p>
                        </div>

                        <form className="space-y-6">
                            <div>
                                <label className="block mb-2 text-sm text-slate-300">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 outline-none text-white placeholder-slate-500"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-slate-300">Email</label>
                                <input
                                    type="email"
                                    placeholder="your.email@example.com"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 outline-none text-white placeholder-slate-500"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-slate-300">Phone</label>
                                <input
                                    type="tel"
                                    placeholder="Your phone number"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 outline-none text-white placeholder-slate-500"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-slate-300">Message</label>
                                <textarea
                                    rows={5}
                                    placeholder="Tell me what’s on your mind..."
                                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 outline-none text-white placeholder-slate-500 resize-none"
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