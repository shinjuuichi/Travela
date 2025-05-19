'use client';

import { useEffect } from 'react';
import { formatTitle } from '@/utils/util';
import ContactForm from '@/components/Contact/ContactForm';

export default function Contact() {
  useEffect(() => {
    document.title = formatTitle('Contact');
  }, []);

  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <ContactForm />
    </div>
  );
}
