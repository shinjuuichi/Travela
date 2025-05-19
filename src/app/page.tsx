'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { StarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import { venues } from '@/data/venues';

export default function Home() {
  const [filteredVenues, setFilteredVenues] = useState(venues);
  const [filters, setFilters] = useState({
    area: '',
    type: '',
    priceRange: '',
  });

  const popularVenues = venues.filter((venue) => venue.rating >= 4.5);
  const featuredVenues = venues.filter((venue) => venue.featured);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);

    // Apply filters
    let results = venues;
    if (newFilters.area) {
      results = results.filter((venue) =>
        venue.area.toLowerCase().includes(newFilters.area.toLowerCase()),
      );
    }
    if (newFilters.type) {
      results = results.filter(
        (venue) => venue.type.toLowerCase() === newFilters.type.toLowerCase(),
      );
    }
    if (newFilters.priceRange) {
      results = results.filter(
        (venue) => venue.priceRange === newFilters.priceRange,
      );
    }

    setFilteredVenues(results);
  };

  const resetFilters = () => {
    setFilters({
      area: '',
      type: '',
      priceRange: '',
    });
    setFilteredVenues(venues);
  };

  return (
    <>
      <Head>
        <title>Travela - Honest Reviews of Local Restaurants & Cafes</title>
        <meta
          name="description"
          content="Discover the best local restaurants, cafes, and street food with Travela. Read honest reviews, explore venues, and find your next favorite spot."
        />
      </Head>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-blue-900">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Discover Your Next Favorite Spot
            </h1>
            <p className="text-xl mb-8">
              Honest reviews of local restaurants, cafes, and street food to
              help you find the perfect place for any occasion.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#venues"
                className="bg-white text-blue-900 hover:bg-blue-100 px-6 py-3 rounded-full font-medium transition duration-300"
              >
                Explore Places
              </Link>
              <Link
                href="/about"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-full font-medium transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Recommended Places
          </h2>
          <div className="max-w-4xl mx-auto">
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              {featuredVenues.map((venue) => (
                <div key={venue.id} className="relative">
                  <Image
                    src={venue.images[0] || '/placeholder.svg'}
                    alt={venue.name}
                    width={1000}
                    height={400}
                    className="w-full h-[400px] object-cover"
                  />
                  <div>
                    <div className="text-white p-6 text-left w-full">
                      <h3 className="text-2xl font-bold mb-2">{venue.name}</h3>
                      <div className="flex items-center mb-2">
                        <MapPinIcon className="h-5 w-5 mr-1" />
                        <span>{venue.address}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
                          <span>{venue.rating} / 5</span>
                        </div>
                        <Link
                          href={`/venues/${venue.id}`}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div
        id="venues"
        className="py-12 bg-gradient-to-r from-blue-500 to-purple-600"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Find Your Perfect Spot
          </h2>

          <div className="max-w-4xl mx-auto mb-10 p-6 bg-white/80 rounded-xl shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label
                  htmlFor="area"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Area
                </label>
                <input
                  type="text"
                  id="area"
                  name="area"
                  value={filters.area}
                  onChange={handleFilterChange}
                  placeholder="Enter district or city"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={filters.type}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">All Types</option>
                  <option value="cafe">Cafe</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="street food">Street Food</option>
                  <option value="bakery">Bakery</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="priceRange"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Price Range
                </label>
                <select
                  id="priceRange"
                  name="priceRange"
                  value={filters.priceRange}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">All Prices</option>
                  <option value="$">$ (Budget)</option>
                  <option value="$$">$$ (Moderate)</option>
                  <option value="$$$">$$$ (Expensive)</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={resetFilters}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition duration-300"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Popular Places Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Popular Places
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularVenues.slice(0, 3).map((venue) => (
                <Link href={`/venues/${venue.id}`} key={venue.id}>
                  <div className="bg-white/90 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                    <div className="relative h-48">
                      <Image
                        src={venue.images[0] || '/placeholder.svg'}
                        alt={venue.name}
                        width={300}
                        height={192}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 px-2 py-1 rounded-lg font-bold text-sm flex items-center">
                        <StarIcon className="h-4 w-4 mr-1" />
                        {venue.rating}
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-xl mb-1">{venue.name}</h4>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPinIcon className="h-4 w-4 mr-1" />
                        <span className="text-sm">{venue.address}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 text-sm">
                          {venue.type}
                        </span>
                        <span className="text-gray-700 font-medium">
                          {venue.priceRange}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* All Venues Section */}
          <h3 className="text-2xl font-bold mb-6 text-white">All Places</h3>
          {filteredVenues.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVenues.map((venue) => (
                <Link href={`/venues/${venue.id}`} key={venue.id}>
                  <div className="bg-white/90 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                    <div className="relative h-48">
                      <Image
                        src={venue.images[0] || '/placeholder.svg'}
                        alt={venue.name}
                        width={300}
                        height={192}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-white text-gray-900 px-2 py-1 rounded-lg font-bold text-sm flex items-center">
                        <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                        {venue.rating}
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-xl mb-1">{venue.name}</h4>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPinIcon className="h-4 w-4 mr-1" />
                        <span className="text-sm">{venue.address}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 text-sm">
                          {venue.type}
                        </span>
                        <span className="text-gray-700 font-medium">
                          {venue.priceRange}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-xl text-white">
                No venues match your search criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
