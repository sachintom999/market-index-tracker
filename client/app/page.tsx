// "use client";



// export default function Home() {
//   return (
//     <div>
      
      
      
//     </div>
//   );
// }


// pages/index.js
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>IndexPulse - Innovating Your Financial Journey</title>
        <meta name="description" content="Track stock indices, set custom alerts, and visualize market trends effortlessly with IndexPulse." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-white-500 to-pink-500 text-white">
        <header className="w-full text-center py-6">
          <h1 className="text-5xl font-bold">IndexPulse</h1>
          <p className="mt-3 text-2xl">Empowering Your Financial Decisions</p>
        </header>

        <section className="flex flex-col items-center justify-center w-full px-4 text-center">
          <h2 className="text-4xl font-semibold mt-10">Innovate Your Financial Space</h2>
          <p className="mt-4 text-lg max-w-2xl">
            Track stock index values with ease. <br/>Set custom alerts and stay informed with real-time data and market trends. IndexPulse is your ultimate tool for financial insights.
          </p>
          <Link href={`/register`} className="mt-8 px-6 py-3 bg-white text-indigo-500 font-semibold rounded-md shadow-md hover:bg-gray-100 transition duration-300">
            Get Started
          </Link>
        </section>
      </main>

      <footer className="w-full py-6 text-center text-sm bg-gray-800 text-gray-300">
        © 2024 IndexPulse. All rights reserved.
      </footer>
    </div>
  );
}
