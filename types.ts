// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  thumbnail?: string;
}

// Category type for select-dropdown
export type ProductCategory = 'Electronics' | 'Clothing' | 'Accessories' | 'Home & Garden';

// Rating type for select-dropdown (using exact keys from content model)
export type ReviewRating = '1' | '2' | '3' | '4' | '5';

// Product interface
export interface Product extends CosmicObject {
  type: 'products';
  metadata: {
    name: string;
    description: string;
    price: number;
    sku?: string;
    stock_quantity?: number;
    product_images?: Array<{
      url: string;
      imgix_url: string;
    }>;
    category?: {
      key: string;
      value: ProductCategory;
    };
    in_stock?: boolean;
  };
}

// Collection interface
export interface Collection extends CosmicObject {
  type: 'collections';
  metadata: {
    name: string;
    description?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    products?: Product[];
  };
}

// Review interface
export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    product?: Product;
    customer_name: string;
    rating: {
      key: ReviewRating;
      value: string;
    };
    review_text: string;
    review_date?: string;
    verified_purchase?: boolean;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

// Type guards
export function isProduct(obj: CosmicObject): obj is Product {
  return obj.type === 'products';
}

export function isCollection(obj: CosmicObject): obj is Collection {
  return obj.type === 'collections';
}

export function isReview(obj: CosmicObject): obj is Review {
  return obj.type === 'reviews';
}