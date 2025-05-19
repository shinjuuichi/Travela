import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Founder & Food Critic',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'Alex has been exploring local eateries for over 10 years and founded LocalEats to share his passion for food with others.',
    },
    {
      name: 'Samantha Lee',
      role: 'Head of Content',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'With a background in food journalism, Samantha ensures all reviews are thorough, honest, and helpful.',
    },
    {
      name: 'Marcus Chen',
      role: 'Lead Developer',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      bio: 'Marcus built the LocalEats platform from the ground up, focusing on creating a seamless user experience.',
    },
  ];

  return (
    <>
      <Head>
        <title>About Travela - Discover Our Mission & Team</title>
        <meta
          name="description"
          content="Learn about Travela, our mission to connect food lovers with authentic local experiences, and meet the passionate team behind the platform."
        />
      </Head>

      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Travela</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Connecting food lovers with authentic local experiences since 2020.
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Travela, we believe that great food experiences should be
              accessible to everyone. Our mission is to help people discover and
              enjoy the best local restaurants, cafes, and street food vendors
              in their area through honest, detailed reviews and
              recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Discover</h3>
              <p className="text-gray-600">
                Help food lovers find hidden gems and local favorites in their
                area.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Evaluate</h3>
              <p className="text-gray-600">
                Provide honest, detailed reviews to help make informed dining
                decisions.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Support</h3>
              <p className="text-gray-600">
                Support local businesses by connecting them with passionate food
                lovers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4">
                <p>
                  Travela began in 2020 when our founder, Alex, found himself
                  constantly being asked by friends and family for restaurant
                  recommendations. As someone who had explored countless local
                  eateries, he realized there was a need for a platform that
                  focused specifically on authentic, local food experiences.
                </p>
                <p>
                  What started as a simple blog quickly grew into a
                  comprehensive platform as more food enthusiasts joined the
                  team. Today, Travela helps thousands of people discover
                  amazing food spots in their area every day.
                </p>
                <p>
                  Our team of food lovers personally visits and reviews each
                  venue to ensure we provide honest, detailed information that
                  helps our users make the best dining choices. We're passionate
                  about supporting local businesses and helping food lovers
                  discover new favorites.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Restaurant interior"
                width={1000}
                height={384}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Authenticity</h3>
              <p className="text-gray-600">
                We believe in honest reviews that highlight both strengths and
                areas for improvement.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-gray-600">
                We're building a community of food lovers who share their
                experiences and recommendations.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Diversity</h3>
              <p className="text-gray-600">
                We celebrate the diverse culinary traditions that make our local
                food scenes special.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Accessibility</h3>
              <p className="text-gray-600">
                We believe great food experiences should be accessible to
                everyone, regardless of budget.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white/90 p-6 rounded-xl shadow-md text-blue-900"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src={member.image || '/placeholder.svg'}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-indigo-600 text-center mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Us */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">
            Join Our Community
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-blue-900">
            Love food as much as we do? Join our community of food enthusiasts
            and help others discover amazing local eateries.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-full font-medium transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
}
