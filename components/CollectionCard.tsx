import { Collection } from '@/types'
import Link from 'next/link'

interface CollectionCardProps {
  collection: Collection
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  const { metadata } = collection
  const productCount = metadata.products?.length || 0
  
  return (
    <Link href={`/collections/${collection.slug}`}>
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group cursor-pointer">
        {/* Collection Image */}
        <div className="aspect-[16/9] overflow-hidden bg-gray-100 relative">
          {metadata.featured_image ? (
            <img
              src={`${metadata.featured_image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
              alt={metadata.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Product Count Badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
            {productCount} {productCount === 1 ? 'Product' : 'Products'}
          </div>
        </div>
        
        {/* Collection Info */}
        <div className="p-6">
          <h3 className="font-semibold text-xl mb-2">
            {metadata.name}
          </h3>
          
          {metadata.description && (
            <p className="text-gray-600 line-clamp-2">
              {metadata.description}
            </p>
          )}
          
          <div className="mt-4 flex items-center text-primary font-medium group-hover:gap-2 transition-all">
            <span>Explore Collection</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </div>
    </Link>
  )
}