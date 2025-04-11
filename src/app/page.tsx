'use client';

import { ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-white text-black">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-8 p-10 md:p-20 relative">
        {/* LEFT: Clean Title */}
        <div className="space-y-4 z-10">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            YUME<br />YASKUMI
          </h1>
          <a
            href="mailto:hello@yume.com"
            className="inline-flex items-center text-gray-700 hover:text-black"
          >
            hello@yume.com <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </div>

        {/* RIGHT: Description */}
        <div className="flex items-center z-10">
          <p className="text-lg leading-relaxed">
            Hello, I'm a freelancer specializing in minimal design with 10 years of expertise — based in Tokyo, working remote. Let's create!
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-black text-white text-center px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Let’s Build Something Beautiful Together</h2>
        <p className="text-md md:text-lg max-w-3xl mx-auto mb-10">
          Curious about what we can create together? Let's bring something extraordinary to life!
        </p>
        <a
          href="mailto:hello@yuya.com"
          className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200"
        >
          Get in Touch
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-6 py-10 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-semibold">Available For Work</p>
          <p>+81 (0)90 1234 5678</p>
          <p>hello@yuya.com</p>
        </div>

        <div>
          <p className="font-semibold">Designed & Developed</p>
          <p className="text-gray-400">by Peter Hodak</p>
        </div>

        <div className="md:text-right">
          <p className="font-semibold">All rights reserved,</p>
          <p>YUYA ©2024</p>
        </div>

        <div className="col-span-full flex gap-6 justify-center md:justify-start mt-6">
          <a href="#" className="hover:underline">LinkedIn</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Behance</a>
        </div>
      </footer>
    </main>
  );
}
