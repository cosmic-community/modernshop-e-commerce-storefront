import { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { metadata } = product
  const primaryImage = metadata.product_images?.[0]
  const inStock = metadata.in_stock && (metadata.stock_quantity ?? 0) > 0
  
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
      {/* Product Image */}
      <div className="aspect-square overflow-hidden bg-gray-100 relative">
        {primaryImage ? (
          <img
            src={`${primaryImage.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={metadata.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
        
        {/* Stock Badge */}
        {!inStock && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Out of Stock
          </div>
        )}
        
        {/* Category Badge */}
        {metadata.category && (
          <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
            {metadata.category.value}
          </div>
        )}
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">
          {metadata.name}
        </h3>
        
        {/* Price and Stock */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            ${metadata.price.toFixed(2)}
          </span>
          {metadata.stock_quantity !== undefined && inStock && (
            <span className="text-sm text-gray-500">
              {metadata.stock_quantity} in stock
            </span>
          )}
        </div>
        
        {/* SKU */}
        {metadata.sku && (
          <p className="text-xs text-gray-400 mt-2">
            SKU: {metadata.sku}
          </p>
        )}
      </div>
    </div>
  )
}