
import React from 'react';
import { Heart, ShoppingBasket, Truck, FlowerIcon, Phone, MapPin } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-rose-800">
            Blooming Delights
          </h1>
          <p className="text-xl md:text-2xl text-rose-600">
            Fresh flowers delivered to your doorstep
          </p>
          <button className="inline-flex items-center gap-2 bg-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-600 transition-colors">
            Shop Now
            <ShoppingBasket className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Category 1 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="rounded-lg p-3 inline-block bg-rose-100">
              <Heart className="w-6 h-6 text-rose-500" />
            </div>
            <h3 className="text-xl font-semibold mt-4 text-gray-800">Wedding Flowers</h3>
            <p className="mt-2 text-gray-600">
              Make your special day even more beautiful with our wedding collections.
            </p>
          </div>
          {/* Category 2 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="rounded-lg p-3 inline-block bg-rose-100">
              <FlowerIcon className="w-6 h-6 text-rose-500" />
            </div>
            <h3 className="text-xl font-semibold mt-4 text-gray-800">Seasonal Bouquets</h3>
            <p className="mt-2 text-gray-600">
              Fresh seasonal flowers arranged with care and love.
            </p>
          </div>
          {/* Category 3 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="rounded-lg p-3 inline-block bg-rose-100">
              <Truck className="w-6 h-6 text-rose-500" />
            </div>
            <h3 className="text-xl font-semibold mt-4 text-gray-800">Same Day Delivery</h3>
            <p className="mt-2 text-gray-600">
              Quick and reliable delivery to your location.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-rose-800">
            Visit Our Shop
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-rose-500" />
              <span className="text-gray-700">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-rose-500" />
              <span className="text-gray-700">123 Flower Street, Garden City</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
