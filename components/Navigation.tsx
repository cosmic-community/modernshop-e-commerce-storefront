import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            ModernShop
          </Link>
          
          <div className="flex items-center gap-8">
            <Link
              href="/products"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Products
            </Link>
            <Link
              href="/collections"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Collections
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}