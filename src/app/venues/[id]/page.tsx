'use client';

import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  StarIcon,
  MapPinIcon,
  ClockIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/solid';
import { reviews } from '@/data/review';
import { Review } from '@/types';
import Image from 'next/image';
import { venues } from '@/data/venues';

type TabType = 'overview' | 'menu' | 'reviews';

export default function VenueDetail() {
  const params = useParams();
  const id = params?.id as string;
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [activeImage, setActiveImage] = useState<number>(0);

  if (!id) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-gray-600">Invalid venue ID.</p>
      </div>
    );
  }

  const venue = venues.find((v) => v.id === id);
  const venueReviews = reviews.filter((review) => review.venueId === id);

  if (!venue) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-gray-600">Venue not found.</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{venue.name} - Details, Menu & Reviews | Travela</title>
        <meta
          name="description"
          content={`Read reviews, see the menu, and discover details about ${venue.name} on Travela. Find the best local food experiences in your area.`}
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-gray-700 hover:text-indigo-600">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-gray-500">{venue.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Venue Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{venue.name}</h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-600">
            <div className="flex items-center">
              <MapPinIcon className="h-5 w-5 mr-1" />
              <span>{venue.address}</span>
            </div>
            <div className="flex items-center">
              <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
              <span>
                {venue.rating} ({venueReviews.length} reviews)
              </span>
            </div>
            <div className="flex items-center">
              <CurrencyDollarIcon className="h-5 w-5 mr-1" />
              <span>{venue.priceRange}</span>
            </div>
            <div className="flex items-center">
              <ClockIcon className="h-5 w-5 mr-1" />
              <span>{venue.hours}</span>
            </div>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
              {venue.type}
            </span>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 rounded-xl overflow-hidden">
            <Image
              src={venue.images?.[activeImage] || '/placeholder.svg'}
              alt={`${venue.name} - Image ${activeImage + 1}`}
              className="w-full h-[400px] object-cover"
              width={400}
              height={128}
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {venue.images?.slice(0, 4).map((image, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden cursor-pointer ${
                  activeImage === index ? 'ring-2 ring-indigo-500' : ''
                }`}
                onClick={() => setActiveImage(index)}
              >
                <Image
                  src={image || '/placeholder.svg'}
                  alt={`${venue.name} - Thumbnail ${index + 1}`}
                  className="w-full h-32 object-cover"
                  width={400}
                  height={128}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8 border-b">
          <div className="flex overflow-x-auto">
            <button
              className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'menu'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('menu')}
            >
              Menu
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'reviews'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews ({venueReviews.length})
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-12">
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">About {venue.name}</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {venue.description}
              </p>
            </div>
          )}

          {activeTab === 'menu' && venue.menu?.categories?.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Menu</h2>
              {venue.menu.categories.map((category, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-bold mb-4 pb-2 border-b">
                    {category.name}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between">
                        <div>
                          <h4 className="font-bold text-lg">{item.name}</h4>
                          <p className="text-gray-600 text-sm">
                            {item.description}
                          </p>
                        </div>
                        <div className="font-bold text-lg">
                          ${item.price.toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
              {venueReviews.length > 0 ? (
                <div className="space-y-6">
                  {venueReviews.map((review: Review) => (
                    <div key={review.id} className="border-b pb-6">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center">
                          <Image
                            src={
                              review.userAvatar ||
                              'https://via.placeholder.com/40'
                            }
                            alt={review.userName}
                            className="w-10 h-10 rounded-full mr-3"
                            width={100}
                            height={100}
                          />
                          <div>
                            <h4 className="font-bold">{review.userName}</h4>
                            <p className="text-gray-500 text-sm">
                              {review.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className={`h-5 w-5 ${
                                i < review.rating
                                  ? 'text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 bg-gray-50 rounded-xl">
                  <p className="text-gray-600">
                    No reviews yet. Be the first to review!
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
