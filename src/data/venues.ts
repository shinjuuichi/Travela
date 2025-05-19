import type { Venue } from '../types';

export const venues: Venue[] = [
  {
    id: 'cafe-delight',
    name: 'Café Delight',
    type: 'cafe',
    address: '123 Main Street, Downtown',
    area: 'Downtown',
    rating: 4.7,
    priceRange: '$$',
    hours: '7:00 AM - 8:00 PM',
    featured: true,
    description:
      "Café Delight is a cozy, artisanal coffee shop offering specialty coffee, freshly baked pastries, and a warm atmosphere. Our beans are ethically sourced and roasted in-house to ensure the perfect cup every time. Whether you're looking for a quiet spot to work or a place to catch up with friends, our comfortable seating and free Wi-Fi make Café Delight the perfect destination.",
    images: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    ],
    features: [
      'Free Wi-Fi',
      'Outdoor Seating',
      'Specialty Coffee',
      'Vegan Options',
      'Gluten-Free Options',
      'Pet Friendly',
    ],
    menu: {
      categories: [
        {
          name: 'Coffee & Espresso',
          items: [
            {
              name: 'House Blend',
              description: 'Our signature medium roast coffee',
              price: 3.5,
            },
            {
              name: 'Cappuccino',
              description: 'Espresso with steamed milk and foam',
              price: 4.5,
            },
            {
              name: 'Latte',
              description: 'Espresso with steamed milk',
              price: 4.75,
            },
            {
              name: 'Mocha',
              description: 'Espresso with chocolate and steamed milk',
              price: 5.25,
            },
          ],
        },
        {
          name: 'Pastries',
          items: [
            {
              name: 'Croissant',
              description: 'Buttery, flaky pastry',
              price: 3.25,
            },
            {
              name: 'Blueberry Muffin',
              description: 'Made fresh daily with organic blueberries',
              price: 3.75,
            },
            {
              name: 'Cinnamon Roll',
              description:
                'Warm, gooey cinnamon roll with cream cheese frosting',
              price: 4.5,
            },
          ],
        },
      ],
    },
  },
  {
    id: 'urban-grill',
    name: 'Urban Grill',
    type: 'restaurant',
    address: '456 Oak Avenue, Westside',
    area: 'Westside',
    rating: 4.5,
    priceRange: '$$$',
    hours: '11:00 AM - 10:00 PM',
    featured: true,
    description:
      'Urban Grill is a contemporary restaurant specializing in flame-grilled meats and fresh, seasonal ingredients. Our chefs combine traditional techniques with modern flavors to create a unique dining experience. The restaurant features an open kitchen, allowing guests to watch as their meals are prepared with care and precision. With a focus on locally sourced ingredients and sustainable practices, Urban Grill offers a menu that changes with the seasons to ensure the freshest, most flavorful dishes possible.',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    ],
    features: [
      'Full Bar',
      'Outdoor Seating',
      'Private Dining',
      'Vegetarian Options',
      'Gluten-Free Options',
      'Reservations Recommended',
    ],
    menu: {
      categories: [
        {
          name: 'Starters',
          items: [
            {
              name: 'Grilled Octopus',
              description: 'With lemon, olive oil, and herbs',
              price: 16.0,
            },
            {
              name: 'Burrata',
              description: 'With heirloom tomatoes and basil',
              price: 14.0,
            },
            {
              name: 'Beef Carpaccio',
              description: 'With arugula, capers, and parmesan',
              price: 15.0,
            },
          ],
        },
        {
          name: 'Main Courses',
          items: [
            {
              name: 'Ribeye Steak',
              description: '12oz grass-fed beef with herb butter',
              price: 34.0,
            },
            {
              name: 'Grilled Salmon',
              description: 'With seasonal vegetables and lemon sauce',
              price: 28.0,
            },
            {
              name: 'Roasted Chicken',
              description:
                'Half chicken with garlic, herbs, and roasted potatoes',
              price: 26.0,
            },
          ],
        },
      ],
    },
  },
  {
    id: 'spice-avenue',
    name: 'Spice Avenue',
    type: 'restaurant',
    address: '789 Maple Road, Eastside',
    area: 'Eastside',
    rating: 4.8,
    priceRange: '$$',
    hours: '12:00 PM - 10:00 PM',
    featured: false,
    description:
      "Spice Avenue offers an authentic journey through the diverse cuisines of India. Our chefs, who hail from different regions of India, bring their traditional recipes and techniques to create a menu that showcases the country's rich culinary heritage. From the tandoor oven come freshly baked breads and succulent meats, while our curries are simmered to perfection with hand-ground spices. The restaurant's warm, inviting atmosphere is enhanced by colorful décor and the aromatic scents of exotic spices.",
    images: [
      'https://images.unsplash.com/photo-1517244683847-7456b63c5969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1535850836387-0f9dfce30846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1542367592-8849eb970fab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    ],
    features: [
      'Vegetarian Options',
      'Vegan Options',
      'Gluten-Free Options',
      'Spice Level Customization',
      'Catering Available',
      'Takeout Available',
    ],
    menu: {
      categories: [
        {
          name: 'Appetizers',
          items: [
            {
              name: 'Samosas',
              description: 'Crispy pastry filled with spiced potatoes and peas',
              price: 6.0,
            },
            {
              name: 'Pakoras',
              description:
                'Assorted vegetables dipped in chickpea batter and fried',
              price: 7.0,
            },
            {
              name: 'Chicken Tikka',
              description: 'Marinated chicken pieces cooked in tandoor',
              price: 9.0,
            },
          ],
        },
        {
          name: 'Curries',
          items: [
            {
              name: 'Butter Chicken',
              description: 'Tandoori chicken in a rich, creamy tomato sauce',
              price: 16.0,
            },
            {
              name: 'Palak Paneer',
              description: 'Cottage cheese cubes in a spinach gravy',
              price: 14.0,
            },
            {
              name: 'Lamb Rogan Josh',
              description: 'Tender lamb in an aromatic Kashmiri spice sauce',
              price: 18.0,
            },
          ],
        },
      ],
    },
  },
  {
    id: 'noodle-house',
    name: 'Noodle House',
    type: 'restaurant',
    address: '321 Pine Street, Northside',
    area: 'Northside',
    rating: 4.3,
    priceRange: '$',
    hours: '11:00 AM - 9:00 PM',
    featured: false,
    description:
      "Noodle House is a casual eatery specializing in authentic Asian noodle dishes from various regions. Our chefs prepare everything from scratch, including hand-pulled noodles and house-made broths that simmer for hours to develop deep, complex flavors. The menu features classics like ramen, pho, and dan dan noodles, along with creative seasonal specials. The restaurant's minimalist design, with communal tables and an open kitchen, creates a lively, convivial atmosphere perfect for a quick lunch or casual dinner.",
    images: [
      'https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1575921200566-fc85131e2db9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    ],
    features: [
      'Vegetarian Options',
      'Vegan Options',
      'Gluten-Free Options',
      'Communal Seating',
      'Quick Service',
      'Takeout Available',
    ],
    menu: {
      categories: [
        {
          name: 'Noodle Soups',
          items: [
            {
              name: 'Tonkotsu Ramen',
              description:
                'Pork bone broth, chashu, soft-boiled egg, green onions',
              price: 12.0,
            },
            {
              name: 'Beef Pho',
              description:
                'Rice noodles in beef broth with sliced beef, herbs, and bean sprouts',
              price: 11.0,
            },
            {
              name: 'Wonton Noodle Soup',
              description:
                'Egg noodles with pork and shrimp wontons in chicken broth',
              price: 10.0,
            },
          ],
        },
        {
          name: 'Dry Noodles',
          items: [
            {
              name: 'Dan Dan Noodles',
              description:
                'Spicy Sichuan noodles with ground pork and chili oil',
              price: 11.0,
            },
            {
              name: 'Pad Thai',
              description:
                'Stir-fried rice noodles with tofu, eggs, bean sprouts, and peanuts',
              price: 10.0,
            },
            {
              name: 'Cold Sesame Noodles',
              description:
                'Chilled wheat noodles with sesame sauce and julienned vegetables',
              price: 9.0,
            },
          ],
        },
      ],
    },
  },
  {
    id: 'sweet-treats',
    name: 'Sweet Treats',
    type: 'bakery',
    address: '567 Cherry Lane, Southside',
    area: 'Southside',
    rating: 4.9,
    priceRange: '$$',
    hours: '8:00 AM - 6:00 PM',
    featured: true,
    description:
      "Sweet Treats is a charming bakery offering a delightful array of handcrafted desserts, pastries, and cakes. Our pastry chefs use only the finest ingredients to create both classic favorites and innovative new treats. From flaky croissants and buttery cookies to elaborate custom cakes for special occasions, everything is made fresh daily in our open kitchen. The bakery's whimsical décor, with its pastel colors and vintage touches, creates a warm, inviting atmosphere that complements the sweet aromas wafting through the air.",
    images: [
      'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1464195244916-405fa0a82545?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    ],
    features: [
      'Custom Cakes',
      'Gluten-Free Options',
      'Vegan Options',
      'Coffee and Tea',
      'Catering Available',
      'Indoor Seating',
    ],
    menu: {
      categories: [
        {
          name: 'Pastries',
          items: [
            {
              name: 'Almond Croissant',
              description: 'Buttery croissant filled with almond cream',
              price: 4.5,
            },
            {
              name: 'Pain au Chocolat',
              description: 'Chocolate-filled croissant',
              price: 4.0,
            },
            {
              name: 'Fruit Danish',
              description: 'Flaky pastry with seasonal fruit and custard',
              price: 4.25,
            },
          ],
        },
        {
          name: 'Cakes & Desserts',
          items: [
            {
              name: 'Chocolate Mousse Cake',
              description: 'Rich chocolate cake with layers of mousse',
              price: 6.5,
            },
            {
              name: 'Lemon Tart',
              description: 'Buttery crust filled with tangy lemon curd',
              price: 5.75,
            },
            {
              name: 'Tiramisu',
              description:
                'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone',
              price: 6.0,
            },
          ],
        },
      ],
    },
  },
  {
    id: 'taco-truck',
    name: 'Taco Truck',
    type: 'street food',
    address: 'Corner of 4th & Market, Downtown',
    area: 'Downtown',
    rating: 4.6,
    priceRange: '$',
    hours: '11:00 AM - 8:00 PM',
    featured: false,
    description:
      'Taco Truck serves up authentic Mexican street food from a vibrant, colorful food truck. Our recipes have been passed down through generations, and we use traditional cooking methods to ensure authentic flavors. The menu features a variety of tacos, from classic carne asada and al pastor to innovative vegetarian options, all served on handmade corn tortillas. Complemented by fresh salsas and sides like elote (Mexican street corn), our food brings the true taste of Mexico to the streets of the city.',
    images: [
      'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1613514785940-daed07799d9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1611250282006-4484dd3fba6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    ],
    features: [
      'Authentic Mexican',
      'Handmade Tortillas',
      'Vegetarian Options',
      'Gluten-Free Options',
      'Fresh Salsas',
      'Outdoor Seating',
    ],
    menu: {
      categories: [
        {
          name: 'Tacos',
          items: [
            {
              name: 'Carne Asada',
              description: 'Grilled steak with onions and cilantro',
              price: 3.5,
            },
            {
              name: 'Al Pastor',
              description:
                'Marinated pork with pineapple, onions, and cilantro',
              price: 3.5,
            },
            {
              name: 'Pollo',
              description: 'Grilled chicken with onions and cilantro',
              price: 3.25,
            },
            {
              name: 'Vegetariano',
              description: 'Grilled vegetables with guacamole',
              price: 3.0,
            },
          ],
        },
        {
          name: 'Sides',
          items: [
            {
              name: 'Elote',
              description:
                'Mexican street corn with mayo, cotija cheese, and chili powder',
              price: 4.0,
            },
            {
              name: 'Guacamole & Chips',
              description: 'Fresh guacamole with homemade tortilla chips',
              price: 5.0,
            },
            {
              name: 'Rice & Beans',
              description: 'Mexican rice and refried beans',
              price: 3.5,
            },
          ],
        },
      ],
    },
  },
];
