// Venue Types
export interface MenuItem {
  name: string;
  description: string;
  price: number;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export interface Menu {
  categories: MenuCategory[];
}

export interface Venue {
  id: string;
  name: string;
  type: string;
  address: string;
  area: string;
  rating: number;
  priceRange: string;
  hours: string;
  featured: boolean;
  description: string;
  images: string[];
  features: string[];
  menu: Menu;
}

// Review Types
export interface Review {
  id: string;
  venueId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  date: string;
  comment: string;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface FormStatus {
  submitted: boolean;
  success: boolean;
  message: string;
}

// Filter Types
export interface FilterOptions {
  area: string;
  type: string;
  priceRange: string;
}

// Team Member Types
export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}
