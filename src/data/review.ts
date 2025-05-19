import type { Review } from '../types';

export const reviews: Review[] = [
  // Café Delight Reviews
  {
    id: 'review-1',
    venueId: 'cafe-delight',
    userName: 'Emily Johnson',
    userAvatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    rating: 5,
    date: 'October 15, 2023',
    comment:
      'Absolutely love this place! The coffee is always perfectly brewed and the pastries are to die for. The atmosphere is so cozy and perfect for working or catching up with friends. Highly recommend the almond croissant!',
  },
  {
    id: 'review-2',
    venueId: 'cafe-delight',
    userName: 'Michael Chen',
    userAvatar: 'https://randomuser.me/api/portraits/men/34.jpg',
    rating: 4,
    date: 'September 28, 2023',
    comment:
      'Great coffee and friendly staff. The place can get a bit crowded during peak hours, but the quality makes up for it. Their house blend is my go-to morning coffee now.',
  },
  {
    id: 'review-3',
    venueId: 'cafe-delight',
    userName: 'Sophia Rodriguez',
    userAvatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    rating: 5,
    date: 'November 5, 2023',
    comment:
      'This café has become my regular remote work spot. The Wi-Fi is reliable, the coffee is excellent, and I love the quiet atmosphere in the mornings. The staff remembers regular customers, which adds a nice personal touch.',
  },

  // Urban Grill Reviews
  {
    id: 'review-4',
    venueId: 'urban-grill',
    userName: 'David Wilson',
    userAvatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    rating: 5,
    date: 'October 20, 2023',
    comment:
      "Had an amazing dinner here last weekend. The ribeye was cooked to perfection and the service was impeccable. It's on the pricier side, but well worth it for a special occasion. Will definitely be back!",
  },
  {
    id: 'review-5',
    venueId: 'urban-grill',
    userName: 'Jennifer Lee',
    userAvatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    rating: 4,
    date: 'November 12, 2023',
    comment:
      'The food and ambiance were excellent. I particularly enjoyed watching the chefs work in the open kitchen. Took off one star because the wait time was a bit long, even with a reservation. The grilled salmon was delicious though!',
  },
  {
    id: 'review-6',
    venueId: 'urban-grill',
    userName: 'Robert Martinez',
    userAvatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    rating: 4,
    date: 'September 5, 2023',
    comment:
      'Urban Grill has a great selection of wines that pair perfectly with their menu. The staff is knowledgeable and helped us choose the perfect bottle for our meal. The food was excellent, though portions could be a bit larger for the price.',
  },

  // Spice Avenue Reviews
  {
    id: 'review-7',
    venueId: 'spice-avenue',
    userName: 'Aisha Patel',
    userAvatar: 'https://randomuser.me/api/portraits/women/37.jpg',
    rating: 5,
    date: 'November 18, 2023',
    comment:
      'As someone who grew up with Indian cuisine, I can confidently say that Spice Avenue serves some of the most authentic Indian food in the city. The flavors are complex and the spice levels can be adjusted to your preference. The butter chicken and garlic naan are must-tries!',
  },
  {
    id: 'review-8',
    venueId: 'spice-avenue',
    userName: 'Thomas Brown',
    userAvatar: 'https://randomuser.me/api/portraits/men/52.jpg',
    rating: 5,
    date: 'October 30, 2023',
    comment:
      "First time trying Indian food and I'm now a convert! The staff was patient in explaining the menu and recommending dishes based on our preferences. Everything was delicious and the portion sizes were generous. Great value for money.",
  },
  {
    id: 'review-9',
    venueId: 'spice-avenue',
    userName: 'Lisa Wong',
    userAvatar: 'https://randomuser.me/api/portraits/women/79.jpg',
    rating: 4,
    date: 'September 15, 2023',
    comment:
      'Spice Avenue has a great selection of vegetarian options. The palak paneer was creamy and flavorful, and the vegetable samosas were crispy and well-spiced. Service was a bit slow on a busy Friday night, but the food made up for it.',
  },

  // Noodle House Reviews
  {
    id: 'review-10',
    venueId: 'noodle-house',
    userName: 'James Kim',
    userAvatar: 'https://randomuser.me/api/portraits/men/11.jpg',
    rating: 4,
    date: 'November 2, 2023',
    comment:
      "Noodle House serves up some of the best ramen I've had outside of Japan. The broth is rich and flavorful, and the noodles have the perfect texture. It's a casual spot with communal seating, so not the place for a quiet dinner, but perfect for a quick, satisfying meal.",
  },
  {
    id: 'review-11',
    venueId: 'noodle-house',
    userName: 'Emma Davis',
    userAvatar: 'https://randomuser.me/api/portraits/women/24.jpg',
    rating: 5,
    date: 'October 10, 2023',
    comment:
      "I'm obsessed with their dan dan noodles! The perfect balance of spicy, savory, and numbing flavors. The portions are generous and prices are very reasonable. This has become my go-to lunch spot when I'm in the area.",
  },
  {
    id: 'review-12',
    venueId: 'noodle-house',
    userName: 'Daniel Nguyen',
    userAvatar: 'https://randomuser.me/api/portraits/men/57.jpg',
    rating: 4,
    date: 'September 22, 2023',
    comment:
      "The pho here is authentic and reminds me of what I grew up eating. The broth is clear but flavorful, and they don't skimp on the herbs and garnishes. Only giving 4 stars because the place can get very crowded and noisy during peak hours.",
  },

  // Sweet Treats Reviews
  {
    id: 'review-13',
    venueId: 'sweet-treats',
    userName: 'Olivia Taylor',
    userAvatar: 'https://randomuser.me/api/portraits/women/89.jpg',
    rating: 5,
    date: 'November 15, 2023',
    comment:
      "Sweet Treats is a dessert lover's paradise! Everything I've tried has been amazing, but their chocolate mousse cake is absolutely divine. The staff is friendly and the café area is a lovely place to sit and enjoy a treat with coffee.",
  },
  {
    id: 'review-14',
    venueId: 'sweet-treats',
    userName: 'William Garcia',
    userAvatar: 'https://randomuser.me/api/portraits/men/29.jpg',
    rating: 5,
    date: 'October 25, 2023',
    comment:
      'Ordered a custom birthday cake and it exceeded all expectations! Not only was it beautiful, but it tasted amazing too. The bakery was accommodating with my specific requests and the cake was a hit at the party.',
  },
  {
    id: 'review-15',
    venueId: 'sweet-treats',
    userName: 'Charlotte Robinson',
    userAvatar: 'https://randomuser.me/api/portraits/women/42.jpg',
    rating: 4,
    date: 'September 30, 2023',
    comment:
      "Their pastries are consistently excellent. The almond croissants are buttery and flaky, and the fruit danishes always have fresh, seasonal fruit. The only reason I'm not giving 5 stars is because they often sell out of popular items early in the day.",
  },

  // Taco Truck Reviews
  {
    id: 'review-16',
    venueId: 'taco-truck',
    userName: 'Miguel Hernandez',
    userAvatar: 'https://randomuser.me/api/portraits/men/72.jpg',
    rating: 5,
    date: 'November 8, 2023',
    comment:
      "These are the most authentic street tacos I've found in the city! The al pastor is perfectly seasoned and the handmade tortillas make all the difference. Don't skip the salsas - both the red and green are fantastic with just the right amount of heat.",
  },
  {
    id: 'review-17',
    venueId: 'taco-truck',
    userName: 'Sarah Johnson',
    userAvatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    rating: 4,
    date: 'October 17, 2023',
    comment:
      'Great tacos at an amazing price! The line can be long during lunch hours, but it moves quickly and the food is worth the wait. The elote is a must-try side dish - messy but delicious!',
  },
  {
    id: 'review-18',
    venueId: 'taco-truck',
    userName: 'Carlos Morales',
    userAvatar: 'https://randomuser.me/api/portraits/men/15.jpg',
    rating: 5,
    date: 'September 12, 2023',
    comment:
      'This taco truck reminds me of the food I grew up eating in Mexico City. Everything tastes fresh and the flavors are spot on. I appreciate that they offer vegetarian options that are just as flavorful as the meat tacos. Definitely the best street food in town!',
  },
];
