import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fef2e2] flex flex-col">
      {/* Main Content - Logo and Coming Soon */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        {/* Big Logo Stamp */}
        <div className="max-w-2xl mb-16 flex justify-center w-[200%] h-[200%]">
          <Image
            src="/logo.jpg"
            alt="SARV - Persian Art, Beauty and Authenticity"
            width={600}
            height={600}
            className="w-auto h-auto max-w-full max-h-[500px]"
            priority
          />
        </div>

        {/* Coming Soon Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#2d5016] mb-6 animate-fade-in">
            Coming Soon...
          </h1>
          <p className="text-xl md:text-2xl text-[#2d5016]/80 mb-8 animate-fade-in-delay-1">
            We're crafting something beautiful for you
          </p>
          <p className="text-lg text-[#2d5016]/60 max-w-2xl mx-auto animate-fade-in-delay-2">
            Our collection of authentic Persian art and handcrafted treasures will be available soon. Stay tuned for the
            launch of our online gallery.
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <section className="bg-[#fef2e2] py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2d5016] text-center mb-8">About Us</h2>
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-[#2d5016]/80 mb-6 leading-relaxed">
              SARV is dedicated to preserving and sharing the timeless beauty of Persian art and culture. Our name,
              meaning "cypress tree" in Persian, symbolizes elegance, resilience, and eternal beauty— qualities that
              define every piece in our carefully curated collection.
            </p>
            <p className="text-[#2d5016]/80 mb-6 leading-relaxed">
              We work directly with master artisans and craftspeople who have inherited their skills through generations
              of Persian artistic tradition. Each piece tells a story of ancient techniques, intricate patterns, and the
              rich cultural heritage of Persia.
            </p>
            <p className="text-[#2d5016]/80 leading-relaxed">
              From handwoven carpets and silk textiles to miniature paintings and ornate jewelry, our collection
              celebrates the authenticity and artistry that has made Persian craftsmanship renowned throughout the world
              for centuries.
            </p>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-serif text-[#2d5016] mb-4 font-semibold">Get in Touch</h3>
            <div className="space-y-2 text-[#2d5016]/70">
              <p className="font-medium leading-7 text-xl">sarvcraft2025@gmail.com</p>
              <p>{""}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d5016] text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Image src="/logo.jpg" alt="SARV Logo" width={40} height={40} className="rounded shadow-lg" />
            <div>
              <h4 className="text-lg font-serif font-bold">SARV</h4>
              <p className="text-sm opacity-80">Persian Art, Beauty and Authenticity</p>
            </div>
          </div>
          <p className="text-sm opacity-80">&copy; 2024 SARV. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
