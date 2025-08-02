import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Filter, Search, ShoppingCart } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function StorePage() {
  const products = [
    {
      id: 1,
      name: "Handwoven Persian Silk Carpet",
      price: "$2,499",
      originalPrice: "$3,200",
      category: "Carpets & Rugs",
      rating: 5,
      reviews: 24,
      image: "/placeholder.svg?height=300&width=300",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Ornate Jewelry Box with Inlay",
      price: "$189",
      category: "Jewelry & Accessories",
      rating: 5,
      reviews: 18,
      image: "/placeholder.svg?height=300&width=300",
      badge: "New",
    },
    {
      id: 3,
      name: "Traditional Miniature Painting",
      price: "$349",
      category: "Art & Paintings",
      rating: 5,
      reviews: 12,
      image: "/placeholder.svg?height=300&width=300",
      badge: "",
    },
    {
      id: 4,
      name: "Persian Brass Samovar",
      price: "$425",
      category: "Home Decor",
      rating: 4,
      reviews: 8,
      image: "/placeholder.svg?height=300&width=300",
      badge: "",
    },
    {
      id: 5,
      name: "Handcrafted Silver Bracelet",
      price: "$156",
      category: "Jewelry & Accessories",
      rating: 5,
      reviews: 31,
      image: "/placeholder.svg?height=300&width=300",
      badge: "Popular",
    },
    {
      id: 6,
      name: "Vintage Persian Mirror Frame",
      price: "$278",
      category: "Home Decor",
      rating: 4,
      reviews: 15,
      image: "/placeholder.svg?height=300&width=300",
      badge: "",
    },
    {
      id: 7,
      name: "Silk Embroidered Wall Hanging",
      price: "$198",
      category: "Art & Paintings",
      rating: 5,
      reviews: 22,
      image: "/placeholder.svg?height=300&width=300",
      badge: "",
    },
    {
      id: 8,
      name: "Traditional Tea Set",
      price: "$89",
      category: "Home Decor",
      rating: 4,
      reviews: 19,
      image: "/placeholder.svg?height=300&width=300",
      badge: "Affordable",
    },
    {
      id: 9,
      name: "Persian Calligraphy Art",
      price: "$225",
      category: "Art & Paintings",
      rating: 5,
      reviews: 14,
      image: "/placeholder.svg?height=300&width=300",
      badge: "",
    },
  ]

  const categories = ["All", "Carpets & Rugs", "Jewelry & Accessories", "Art & Paintings", "Home Decor"]

  return (
    <div className="min-h-screen bg-[#f5f1e8]">
      {/* Navigation */}
      <nav className="bg-[#f5f1e8] border-b border-[#2d5016]/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo.jpg" alt="SARV Logo" width={60} height={60} className="rounded-lg" />
            <div>
              <h1 className="text-2xl font-serif font-bold text-[#2d5016]">SARV</h1>
              <p className="text-sm text-[#2d5016]/70">Persian Art & Beauty</p>
            </div>
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-[#2d5016] hover:text-[#d2691e] transition-colors">
              Home
            </Link>
            <Link href="/store" className="text-[#d2691e] font-semibold">
              Store
            </Link>
            <Link href="/#about" className="text-[#2d5016] hover:text-[#d2691e] transition-colors">
              About
            </Link>
            <Link href="/#contact" className="text-[#2d5016] hover:text-[#d2691e] transition-colors">
              Contact
            </Link>
            <Button size="sm" className="bg-[#2d5016] hover:bg-[#2d5016]/90">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Cart (0)
            </Button>
          </div>
        </div>
      </nav>

      {/* Store Header */}
      <section className="py-12 px-4 bg-white/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-[#2d5016] mb-4">Our Collection</h2>
          <p className="text-lg text-[#2d5016]/80 max-w-2xl mx-auto">
            Discover authentic Persian art pieces, each carefully selected for its beauty, craftsmanship, and cultural
            significance.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-4 border-b border-[#2d5016]/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-[#2d5016]" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "All" ? "default" : "outline"}
                    size="sm"
                    className={
                      category === "All"
                        ? "bg-[#2d5016] hover:bg-[#2d5016]/90"
                        : "border-[#2d5016]/30 text-[#2d5016] hover:bg-[#2d5016] hover:text-white"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Search className="w-5 h-5 text-[#2d5016]" />
              <Input placeholder="Search products..." className="w-64 border-[#2d5016]/30 focus:border-[#2d5016]" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="border-[#2d5016]/20 bg-white/80 hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.badge && (
                      <Badge
                        className={`absolute top-3 left-3 ${
                          product.badge === "Best Seller"
                            ? "bg-[#d2691e]"
                            : product.badge === "New"
                              ? "bg-green-600"
                              : product.badge === "Popular"
                                ? "bg-purple-600"
                                : "bg-blue-600"
                        }`}
                      >
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="mb-2">
                      <Badge variant="outline" className="text-xs border-[#2d5016]/30 text-[#2d5016]">
                        {product.category}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-[#2d5016] mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-3">
                      <div className="flex items-center mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < product.rating ? "fill-[#d2691e] text-[#d2691e]" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-[#2d5016]/60">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-[#d2691e]">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    <Button className="w-full bg-[#2d5016] hover:bg-[#2d5016]/90 text-white">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-serif font-bold text-[#2d5016] mb-4">Stay Connected</h3>
          <p className="text-[#2d5016]/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates on new arrivals, exclusive offers, and insights into Persian
            art and culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border-[#2d5016]/30 focus:border-[#2d5016]"
            />
            <Button className="bg-[#2d5016] hover:bg-[#2d5016]/90 text-white px-8">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d5016] text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/logo.jpg" alt="SARV Logo" width={40} height={40} className="rounded" />
                <div>
                  <h4 className="text-xl font-serif font-bold">SARV</h4>
                  <p className="text-sm opacity-80">Persian Art & Beauty</p>
                </div>
              </div>
              <p className="text-sm opacity-80">Bringing the timeless beauty of Persian art to your world.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="opacity-80 hover:opacity-100">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/store" className="opacity-80 hover:opacity-100">
                    Store
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="opacity-80 hover:opacity-100">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="opacity-80 hover:opacity-100">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Categories</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/store" className="opacity-80 hover:opacity-100">
                    Carpets & Rugs
                  </Link>
                </li>
                <li>
                  <Link href="/store" className="opacity-80 hover:opacity-100">
                    Jewelry
                  </Link>
                </li>
                <li>
                  <Link href="/store" className="opacity-80 hover:opacity-100">
                    Art & Paintings
                  </Link>
                </li>
                <li>
                  <Link href="/store" className="opacity-80 hover:opacity-100">
                    Home Decor
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact Info</h5>
              <div className="space-y-2 text-sm opacity-80">
                <p>Email: info@sarv-art.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Art District, Cultural Quarter</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 SARV. All rights reserved. Persian Art, Beauty and Authenticity.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
