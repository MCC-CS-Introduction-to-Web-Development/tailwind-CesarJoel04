'use client'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section>
        <div className="text-center">
          <h1 className="text-5xl font-bold mt-5 text-sky-400">
            Welcome to Our Routing Project With Tailwind
            <br></br>
            <br></br>
          </h1>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/services" className="text-2xl bg-sky-700 px-6 py-4 rounded-4xl border-2 border-white border-solid text-sky-50 mr-2 mb-2">
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-sky-50">
          What This Project Demonstrates
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Internal Routing */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Internal Routing</h3>
            <p className="text-gray-600 mb-6">
              Navigate seamlessly between pages using Next.js <code className="bg-gray-100 px-2 py-1 rounded">&lt;Link&gt;</code> component.
              Experience fast client-side navigation without full page reloads.
            </p>
            <div className="space-y-2">
              <Link href="/about" className="block text-blue-600 hover:text-blue-800 font-medium">
                → Visit About Page
              </Link>
              <Link href="/services" className="block text-blue-600 hover:text-blue-800 font-medium">
                → Visit Services Page
              </Link>
            </div>
          </div>

          {/* Card 2: External Links */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">External Routing</h3>
            <p className="text-gray-600 mb-6">
              Integrate navigation to external websites and resources. Learn how to handle external
              URLs within your Next.js application.
            </p>
            <div className="space-y-2">
              <Link className="block text-blue-600 hover:text-blue-800 font-medium" href="https://nextjs.org" target="_blank">
                → View  Next.js Documentation
              </Link>
              <Link className="block text-blue-600 hover:text-blue-800 font-medium" href="https://github.com" target="_blank">
                → View  GitHub
              </Link>
            </div>
          </div>

          {/* Card 3: Dynamic Routes */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Dynamic Routes</h3>
            <p className="text-gray-600 mb-6">
              Explore parameterized routes that render dynamic content based on URL parameters.
              Built with <code className="bg-gray-100 px-2 py-1 rounded">generateStaticParams</code> in the App Router.
            </p>
            <div className="space-y-2">
              <Link href="/product/1" className="block text-blue-600 hover:text-blue-800 font-medium">
                → Product Number 1
              </Link>
              <Link href="/product/2" className="block text-blue-600 hover:text-blue-800 font-medium">
                → Product Number 2
              </Link>
              <Link href="/product/3" className="block text-blue-600 hover:text-blue-800 font-medium">
                → Product Number 3
              </Link>
             
             
            </div>
          </div>

        </div>
      </section>
    </>
  );
}