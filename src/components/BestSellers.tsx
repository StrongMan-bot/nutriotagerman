import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import OptimizedImage from './OptimizedImage';
import Link from 'next/link';

const BestSellers = () => {
  const { t } = useTranslation();

  const bestSellerProducts = [
    {
      id: 5,
      name: "Nutriota Alpha Lipoic Acid | 500 mg (180 Capsules)",
      price: "€29.90",
      image: "https://m.media-amazon.com/images/I/61GtNp-NvGL.__AC_SX300_SY300_QL70_ML2_.jpg",
      link: "https://www.amazon.it/dp/B081D2SPVF",
      rating: 4.5,
      reviews: "650+ " + t('products.ratings'),
      category: t('products.supplements')
    },
    {
      id: 1,
      name: "Nutriota Chromium Picolinate | 250 mcg (365 Tablets)",
      price: "€23.79",
      image: "https://m.media-amazon.com/images/I/61OkL2nfd2L._AC_SX679_.jpg",
      link: "https://www.amazon.it/dp/B0C8G7Y1D6",
      rating: 4.5,
      reviews: "300+ " + t('products.ratings'),
      category: t('products.minerals')
    },
    {
      id: 4,
      name: "Nutriota Propolis | 1000 mg (180 Capsules)",
      price: "€17.79",
      image: "https://m.media-amazon.com/images/I/617gq7K4abL.__AC_SX300_SY300_QL70_ML2_.jpg",
      link: "https://www.amazon.it/dp/B08TB387M9",
      rating: 4.3,
      reviews: "200+ " + t('products.ratings'),
      category: t('products.supplements')
    },
    {
      id: 7,
      name: "Nutriota Echinacea | 500 mg (240 Tablets)",
      price: "€19.79",
      image: "https://m.media-amazon.com/images/I/61330aWtIEL.__AC_SX300_SY300_QL70_ML2_.jpg",
      link: "https://www.amazon.it/dp/B09PNK3GRH",
      rating: 4.5,
      reviews: "150+ " + t('products.ratings'),
      category: t('products.herbalSupplements')
    }
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">☆</span>);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">★</span>);
    }

    return stars;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('bestSellers.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('bestSellers.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellerProducts.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group border border-gray-100">
              {/* Image - Clickable */}
              <Link href={`/product${product.id}`} className="block hover:opacity-80 transition-opacity duration-200">
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4"
                    loading="eager"
                    priority={true}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-100 text-[#0089CF] px-2 py-1 rounded-full text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0089CF] text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Star size={12} className="fill-current" />
                      {t('products.bestSeller')}
                    </span>
                  </div>
                </div>
              </Link>
              
              {/* Content area - Not clickable except for product name */}
              <div className="p-6">
                {/* Product name - Clickable */}
                <Link href={`/product${product.id}`} className="block">
                  <h3 className="text-base font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-[#0089CF] transition-colors duration-200 cursor-pointer">
                    {product.name}
                  </h3>
                </Link>
                
                {/* Price, Amazon button, and ratings - Not clickable */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#0089CF]">
                      {product.price}
                    </span>
                    {/* Buy on Amazon Button - Not part of product link */}
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0089CF] hover:bg-[#0070A3] text-white px-3 py-1.5 rounded-md text-xs font-medium transition-colors duration-200 flex items-center justify-center gap-1"
                    >
                      <ExternalLink size={12} />
                      {t('products.buyOnAmazon')}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-xs text-gray-600">
                      {product.reviews}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;