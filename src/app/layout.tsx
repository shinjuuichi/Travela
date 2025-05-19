// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { NotificationProvider } from '@/controller/notificationController';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Header from '@/components/Header/Header';

export const metadata: Metadata = {
  creator: 'Shinjuuichi',
  description: 'skidididididksididsidi',
};

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">
              {process.env.NEXT_PUBLIC_WEB_NAME || 'Site Name'}
            </h2>
            <p className="text-sm text-blue-100">
              Bringing amazing experiences since 2023
            </p>
          </div>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <Link
              href="/privacy"
              className="text-blue-100 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-blue-100 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="text-blue-100 hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-blue-400/30">
          <p className="text-sm text-blue-100">
            © {new Date().getFullYear()}{' '}
            {process.env.NEXT_PUBLIC_WEB_NAME || 'Site Name'}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased flex flex-col min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-blue-900 vsc-initialized">
        <NotificationProvider>
          <ToastContainer position="top-right" autoClose={3000} />
          <Header />
          <main className="flex-grow pt-24 pb-8 px-4">{children}</main>
          <Footer />
        </NotificationProvider>
      </body>
    </html>
  );
}
