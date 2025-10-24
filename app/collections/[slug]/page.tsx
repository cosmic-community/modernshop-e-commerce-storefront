// app/collections/[slug]/page.tsx
import { getCollection } from '@/lib/cosmic'
import { Collection } from '@/types'
import ProductCard from '@/components/ProductCard'
import { notFound } from 'next/navigation'

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const collection = await getCollection(slug) as Collection | null
  
  if (!collection) {
    notFound()
  }
  
  const products = collection.metadata.products || []
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Collection Header */}
      <div className="mb-12">
        {collection.metadata.featured_image && (
          <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
            <img
              src={`${collection.metadata.featured_image.imgix_url}?w=1400&h=400&fit=crop&auto=format,compress`}
              alt={collection.metadata.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8">
                <h1 className="text-4xl font-bold text-white mb-2">
                  {collection.metadata.name}
                </h1>
              </div>
            </div>
          </div>
        )}
        
        {!collection.metadata.featured_image && (
          <h1 className="text-4xl font-bold mb-4">{collection.metadata.name}</h1>
        )}
        
        {collection.metadata.description && (
          <p className="text-gray-600 text-lg max-w-3xl">
            {collection.metadata.description}
          </p>
        )}
      </div>
      
      {/* Products in Collection */}
      <div>
        <h2 className="text-2xl font-bold mb-6">
          Products ({products.length})
        </h2>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-500 text-lg">
              No products in this collection yet.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}