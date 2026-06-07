 'use client'
import Link from 'next/link';

export default function Services() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-sky-50">Services</h1>
        <p className="text-2xl text-center mb-12 text-sky-50">What we offer to help you learn routing with Next.js.</p>
      </div>

      <div className="grid md:grid-cols-1 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Services</h2>
          <p className="text-gray-600 mb-6">
            Interactive tutorials and examples covering internal navigation, dynamic routes,
            and external integrations using the Next.js App Router.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/" className="text-1xl bg-black px-6 py-4 rounded-lg text-white mr-2 mb-2">
              Back Home
            </Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium self-center">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}