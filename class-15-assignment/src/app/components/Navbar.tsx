import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-sky-950  sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-16">
                        <div className="ml-10 flex items-baseline space-x-12">
                            <Link href="/" className="bg-sky-50 hover:text-sky-950 px-10 py-2 rounded-3xl text-xl font-medium transition-colors">Home</Link>
                            <Link href="/about" className="bg-sky-50 hover:text-sky-950 px-10 py-2 rounded-3xl text-xl font-medium transition-colors">About</Link>
                            <Link href="/services" className="bg-sky-50 hover:text-sky-950 px-10 py-2 rounded-3xl text-xl font-medium transition-colors">Services</Link>
                            <Link href="/contact" className="bg-sky-50 hover:text-sky-950 px-10 py-2 rounded-3xl text-xl font-medium transition-colors">Contact</Link>
                        </div>
                    
                </div>
            </div>
        </nav>
    );
}