import { getProducts, getCollections } from '@/lib/cosmic'
import { Product, Collection } from '@/types'
import ProductCard from '@/components/ProductCard'
import CollectionCard from '@/components/CollectionCard'
import Link from 'next/link'

export default async function Home() {
  const products = await getProducts() as Product[]
  const collections = await getCollections() as Collection[]
  
  // Get featured collection (first one)
  const featuredCollection = collections[0]
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section with Featured Collection */}
      {featuredCollection && (
        <section className="mb-16">
          <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-r from-primary to-primary-dark">
            {featuredCollection.metadata.featured_image && (
              <img
                src={`${featuredCollection.metadata.featured_image.imgix_url}?w=1400&h=600&fit=crop&auto=format,compress`}
                alt={featuredCollection.metadata.name}
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40"
              />
            )}
            <div className="relative h-full flex items-center justify-center text-center px-8">
              <div>
                <h1 className="text-5xl font-bold text-white mb-4">
                  {featuredCollection.metadata.name}
                </h1>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  {featuredCollection.metadata.description}
                </p>
                <Link
                  href={`/collections/${featuredCollection.slug}`}
                  className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Shop Collection
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* All Collections */}
      {collections.length > 0 && (
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Shop by Collection</h2>
            <Link 
              href="/collections"
              className="text-primary hover:text-primary-dark font-medium"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection as Collection} />
            ))}
          </div>
        </section>
      )}
      
      {/* All Products */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">All Products</h2>
          <Link 
            href="/products"
            className="text-primary hover:text-primary-dark font-medium"
          >
            View All →
          </Link>
        </div>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product as Product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-500 text-lg">No products available yet.</p>
          </div>
        )}
      </section>
    </div>
  )
}