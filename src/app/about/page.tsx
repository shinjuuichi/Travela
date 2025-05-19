'use client';

import { formatTitle } from '@/utils/util';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = formatTitle('About');
  }, []);
  return (
    <>
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-300">
          Welcome to {process.env.NEXT_PUBLIC_WEB_NAME}! We are committed to
          providing the best experience.
        </p>
        <p className="mt-4 text-gray-400">
          Our mission is to create a simple, yet powerful platform that enhances
          user engagement and productivity.
        </p>
      </div>
    </>
  );
}
