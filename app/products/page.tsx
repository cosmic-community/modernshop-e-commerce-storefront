import { getProducts } from '@/lib/cosmic'
import { Product } from '@/types'
import ProductCard from '@/components/ProductCard'

export default async function ProductsPage() {
  const products = await getProducts() as Product[]
  
  // Group products by category
  const categories = ['Electronics', 'Accessories', 'Clothing', 'Home & Garden']
  const productsByCategory: Record<string, Product[]> = {}
  
  categories.forEach(category => {
    productsByCategory[category] = products.filter(
      p => p.metadata.category?.value === category
    )
  })
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">All Products</h1>
        <p className="text-gray-600 text-lg">
          Browse our complete collection of premium products
        </p>
      </div>
      
      {categories.map(category => {
        const categoryProducts = productsByCategory[category]
        
        if (!categoryProducts || categoryProducts.length === 0) {
          return null
        }
        
        return (
          <section key={category} className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span>{category}</span>
              <span className="text-sm font-normal text-gray-500">
                ({categoryProducts.length})
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )
      })}
      
      {products.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg">
          <p className="text-gray-500 text-lg">No products available yet.</p>
        </div>
      )}
    </div>
  )
}