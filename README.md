# 🛍️ ModernShop - E-Commerce Storefront

![App Preview](https://imgix.cosmicjs.com/37de48f0-b12b-11f0-a077-bd105f10469e-photo-1491637639811-60e2756cc1c7-1761345962024.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive e-commerce storefront built with Next.js 15 and powered by Cosmic CMS. Showcase your products, collections, and customer reviews with a beautiful, professional interface.

## ✨ Features

- 🛍️ **Product Catalog**: Browse all products with detailed information, pricing, and stock status
- 📦 **Product Collections**: Curated collections like "Audio Essentials" and "Everyday Carry"
- ⭐ **Customer Reviews**: Display verified customer reviews with star ratings
- 🎨 **Modern Design**: Clean, responsive interface with smooth animations
- 📱 **Mobile-First**: Fully responsive design that works on all devices
- 🔍 **Category Filtering**: Filter products by category (Electronics, Accessories, etc.)
- 🖼️ **Image Galleries**: Multiple product images with optimized loading
- 💾 **Dynamic Content**: All content managed through Cosmic CMS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68fc010992c9229c30fe4d94&clone_repository=68fc047092c9229c30fe4db7)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Design a content model for an e-commerce store with products, collections, and customer reviews"

### Code Generation Prompt

> "Based on the content model I created for 'Design a content model for an e-commerce store with products, collections, and customer reviews', now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Cosmic
- **Package Manager**: Bun
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun installed
- A Cosmic account with the e-commerce content model set up
- Your Cosmic Bucket credentials

### Installation

1. Clone this repository
2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file in the root directory:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. Run the development server:
```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching Products
```typescript
const { objects: products } = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Collections with Products
```typescript
const { objects: collections } = await cosmic.objects
  .find({ type: 'collections' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Includes nested product data
```

### Fetching Reviews for a Product
```typescript
const { objects: reviews } = await cosmic.objects
  .find({ 
    type: 'reviews',
    'metadata.product': productId 
  })
  .props(['id', 'title', 'metadata'])
  .depth(1)
```

## 🎨 Cosmic CMS Integration

This application uses your Cosmic content model with the following structure:

### Products
- Name, Description, Price
- SKU, Stock Quantity
- Product Images (multiple)
- Category (Electronics, Clothing, Accessories, Home & Garden)
- In Stock status

### Collections
- Name, Description
- Featured Image
- Products (relationship to multiple products)

### Reviews
- Product (relationship)
- Customer Name
- Rating (1-5 stars)
- Review Text
- Review Date
- Verified Purchase status

All content is dynamically fetched from your Cosmic bucket, making it easy to update products, collections, and reviews without touching code.

## 📦 Deployment

### Deploy to Vercel

The easiest way to deploy your Next.js app:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy!

### Environment Variables

Make sure to set these in your deployment platform:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

## 🎯 Key Features Explained

### Product Display
- Grid layout with responsive columns
- Product images optimized with imgix parameters
- Price formatting and stock status indicators
- Category badges for easy identification

### Collections
- Featured collection showcase on homepage
- Multiple products per collection
- Hero-style featured images

### Customer Reviews
- Star rating visualization
- Verified purchase badges
- Formatted review dates
- Customer names and testimonials

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interface elements
- Optimized images for all screen sizes

## 📝 License

MIT License - feel free to use this project for your own e-commerce store!

<!-- README_END -->