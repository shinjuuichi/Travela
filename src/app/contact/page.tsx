'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import Head from 'next/head';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormStatus = {
  submitted: boolean;
  success: boolean;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitted: false,
    success: false,
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill out all fields.',
      });
      return;
    }

    // Mock form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: '',
        });
      }, 5000);
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>Contact Us - LocalEats</title>
        <meta
          name="description"
          content="Get in touch with the LocalEats team. We'd love to hear from you!"
        />
      </Head>

      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We&apos;d love to hear from you! Whether you have a question,
            feedback, or want to collaborate, our team is here to help.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

            {formStatus.submitted && (
              <div
                className={`mb-6 p-4 rounded-lg ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
              >
                {formStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <EnvelopeIcon className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Us</h3>
                  <p className="text-gray-600 mb-1">For general inquiries:</p>
                  <a
                    href="mailto:info@localeats.com"
                    className="text-indigo-600 hover:underline"
                  >
                    info@localeats.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <PhoneIcon className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Call Us</h3>
                  <p className="text-gray-600 mb-1">Mon-Fri from 9am to 5pm:</p>
                  <a
                    href="tel:+11234567890"
                    className="text-indigo-600 hover:underline"
                  >
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <MapPinIcon className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                  <p className="text-gray-600">
                    123 Foodie Street
                    <br />
                    Culinary District
                    <br />
                    Tasteville, TS 12345
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-indigo-100 p-3 rounded-full text-indigo-600 hover:bg-indigo-200 transition duration-300"
                >
                  <FacebookIcon className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="bg-indigo-100 p-3 rounded-full text-indigo-600 hover:bg-indigo-200 transition duration-300"
                >
                  <InstagramIcon className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="bg-indigo-100 p-3 rounded-full text-indigo-600 hover:bg-indigo-200 transition duration-300"
                >
                  <TwitterIcon className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="mt-12 bg-gray-100 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-4">Business Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="font-medium">10:00 AM - 3:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
