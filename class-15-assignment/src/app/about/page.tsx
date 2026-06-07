 'use client'
import Link from 'next/link';

export default function About() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-sky-50">About</h2>
        <p className="text-2xl text-center mb-12 text-sky-50">A concise overview of this routing project.</p>
      </div>

      <div className="grid md:grid-cols-1 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">About This Project</h2>
          <p className="text-gray-600 mb-6">
            This project demonstrates Next.js App Router patterns including internal navigation,
            dynamic routes, and external links — simplified for learning.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/" className="text-1xl bg-black px-6 py-4 rounded-lg text-white mr-2 mb-2">
              Back Home
            </Link>
            <Link href="/services" className="text-blue-600 hover:text-blue-800 font-medium self-center">
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}