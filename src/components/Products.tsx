import React, { useState, useEffect, useMemo, useCallback, memo } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import OptimizedImage from './OptimizedImage';

import { Star, ExternalLink } from 'lucide-react'; // Import Star and ExternalLink icons

// Memoized ProductCard component for better performance
const ProductCard = memo(({ product, index, t, router, renderStars, bestSellerProducts, allProducts }: {
  product: any;
  index: number;
  t: any;
  router: any;
  renderStars: (rating: number) => React.ReactNode;
  bestSellerProducts: string[];
  allProducts: any[];
}) => {
  const handleProductClick = useCallback(() => {
    // Find the actual product index in the original products array
    const actualIndex = allProducts.findIndex(p => p.name === product.name);
    if (actualIndex !== -1) {
      router.push(`/products/${actualIndex + 1}`);
    }
  }, [router, product.name, allProducts]);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div 
        className="relative h-48 lg:h-64 overflow-hidden cursor-pointer"
        onClick={handleProductClick}
      >
        <OptimizedImage
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4"
          loading="lazy"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-blue-100 text-[#0089CF] px-2 py-1 rounded-full text-xs font-medium">
            {product.category === 'Vitamins' ? t('vitamins') : 
             product.category === 'Supplements' ? t('supplements') : 
             product.category === 'Herbal Supplements' ? t('herbalSupplements') : product.category}
          </span>
        </div>
        
        {/* Best Seller Badge */}
        {bestSellerProducts.includes(product.name) && (
          <div className="absolute top-4 left-4">
            <span className="bg-[#0089CF] text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Star size={12} className="fill-current" />
              {t('bestSeller')}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4 lg:p-6">
        <h3 
          className="text-sm lg:text-base font-semibold text-gray-900 mb-3 line-clamp-2 cursor-pointer hover:text-[#0089CF] transition-colors"
          onClick={handleProductClick}
        >
          {product.name}
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-lg lg:text-xl font-bold text-[#0089CF]">
              {product.price}
            </span>
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0089CF] hover:bg-[#0070A3] text-white px-2 lg:px-3 py-1 lg:py-1.5 rounded-md text-xs font-medium transition-colors duration-200 flex items-center gap-1"
            >
              <ExternalLink size={12} />
              {t('buyOnAmazon')}
            </a>
          </div>
          
          {/* Star Rating */}
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
  );
});

ProductCard.displayName = 'ProductCard';

const Products = () => {
  const { t, i18n } = useTranslation('products');
  const router = useRouter();
  const { search, category } = router.query;
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [isNavigating, setIsNavigating] = useState(false);

  // List of best seller product names
  const bestSellerProducts = [
    "Nutriota Alpha Lipoic Acid 500 mg 180 Capsules",
    "Nutriota Propolis 1000 mg 180 Tablets",
    "Nutriota Vitamin B6 12.5 mg 365 Tablets",
    "Nutriota Echinacea 500 mg 240 Tablets",
    "Nutriota Vitamin B3 (Nicotinamide) 500 mg 180 Capsules"
  ];

  // Product data from JSON with ratings added
  const products = useMemo(() => [
    {
      "category": "Supplements",
      "name": "Nutriota Alpha Lipoic Acid 500 mg 180 Capsules",
      "price": "€30.27",
      "image": "https://m.media-amazon.com/images/I/612BT9dEe5L._AC_SX522_.jpg",
      "link": "https://www.amazon.de/dp/B081D13S3P",
      "rating": 4.5,
      "reviews": "400+ " + t('ratings')
    },
    {
      "category": "Vitamins",
      "name": "Nutriota Vitamin B1 (Thiamine) 250 mg 180 Capsules",
      "price": "€20.17",
      "image": "https://m.media-amazon.com/images/I/61x3qasoXDL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B0CKTYJJ4M",
      "rating": 4.6,
      "reviews": "150+ " + t('ratings')
    },
    {
      "category": "Supplements",
      "name": "Nutriota Propolis 2000 mg 180 Tablets",
      "price": "€18.15",
      "image": "https://m.media-amazon.com/images/I/610Xy2Pk7DL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B08428DH3Z",
      "rating": 4.5,
      "reviews": "300+ " + t('ratings')
    },
    {
      "category": "Vitamins",
      "name": "Nutriota Vitamin B6 12.5 mg 365 Tablets",
      "price": "€14.03",
      "image": "https://m.media-amazon.com/images/I/51d2cbMwKkL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B08B121XGR",
      "rating": 4.6,
      "reviews": "300+ " + t('ratings')
    },
    {
      "category": "Vitamins",
      "name": "Nutriota Vitamin B1 (Thiamine) 100 mg 180 Capsules",
      "price": "€12.11",
      "image": "https://m.media-amazon.com/images/I/61aqUq5-yfL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B0D673DJR7",
      "rating": 4.6,
      "reviews": "100+ " + t('ratings')
    },
    {
      "category": "Vitamins",
      "name": "Nutriota Vitamin B1 (Thiamine) 200 mg 180 Tablets",
      "price": "€14.12",
      "image": "https://m.media-amazon.com/images/I/51xKfXcSPDL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B0D5XYTPXD",
      "rating": 4.6,
      "reviews": "50+ " + t('ratings')
    },
    {
      "category": "Supplements",
      "name": "Nutriota Propolis 2000 mg 90 Capsules",
      "price": "€16.95",
      "image": "https://m.media-amazon.com/images/I/61ZO2+TLSPL._AC_SY300_SX300_.jpg",
      "link": "https://www.amazon.de/dp/B09L3SH83Z",
      "rating": 4.4,
      "reviews": "150+ " + t('ratings')
    },
    {
      "category": "Herbal Supplements",
      "name": "Nutriota Echinacea 500 mg 240 Tablets",
      "price": "€20.17",
      "image": "https://m.media-amazon.com/images/I/6175SKfTVaL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B08B16GMQ3",
      "rating": 4.6,
      "reviews": "250+ " + t('ratings')
    },
    {
      "category": "Vitamins",
      "name": "Nutriota Vitamin B3 (Nicotinamide) 500 mg 180 Capsules",
      "price": "€18.07",
      "image": "https://m.media-amazon.com/images/I/61UTpl0xAOL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B0845TMGBN",
      "rating": 4.5,
      "reviews": "200+ " + t('ratings')
    },
    {
      "category": "Supplements",
      "name": "Nutriota ZMA (Zinc (10 mg) + Magnesium (187.5 mg) + Vitamin B6 (6 mg)) 120 Capsules",
      "price": "€9.98",
      "image": "https://m.media-amazon.com/images/I/61-RHjTQvaL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B0DGMD369V",
      "rating": 4.6,
      "reviews": "50+ " + t('ratings')
    },
    {
      "category": "Vitamins",
      "name": "Nutriota Vitamin B2 (Riboflavin) 250 mg 180 Capsules",
      "price": "€30.27",
      "image": "https://m.media-amazon.com/images/I/61dMCF-WIdL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B0CXJ3CK9K",
      "rating": 4.6,
      "reviews": "50+ " + t('ratings')
    },
    {
      "category": "Supplements",
      "name": "Nutriota Shilajit 1500 mg 180 Capsules",
      "price": "€22.45",
      "image": "https://m.media-amazon.com/images/I/61qXpAC5jlL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B0D1RBLDZS",
      "rating": 4.2,
      "reviews": "50+ " + t('ratings')
    },
    {
      "category": "Supplements",
      "name": "Nutriota Silica 250 mg (120 Capsules)",
      "price": "€25.23",
      "image": "https://m.media-amazon.com/images/I/61LsVX06PkL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B09ZVP7LCM",
      "rating": 4.2,
      "reviews": "40+ " + t('ratings')
    },
    {
      "category": "Vitamins",
      "name": "Nutriota Vitamin B5 (Pantothenic Acid) 500 mg 120 Capsules",
      "price": "€25.23",
      "image": "https://m.media-amazon.com/images/I/61L25cJYjoL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B0D4LZ9WBC",
      "rating": 4.4,
      "reviews": "30+ " + t('ratings')
    }
  ], [t]);

  const categories = useMemo(() => ['All Products', 'Vitamins', 'Supplements', 'Herbal Supplements'], []);

  // Memoize filtered products to prevent unnecessary recalculations
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All Products') {
      return products;
    }
    return products.filter(product => product.category === selectedCategory);
  }, [selectedCategory, products]);

  // Handle category filtering from URL params
  useEffect(() => {
    if (category && categories.includes(category as string)) {
      setSelectedCategory(category as string);
    }
  }, [category, categories]);

  // Scroll to top when category changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedCategory]);

  const handleCategoryClick = useCallback(async (category: string) => {
    // Prevent multiple rapid clicks
    if (isNavigating || selectedCategory === category) return;
    
    setIsNavigating(true);
    setSelectedCategory(category);
    
    try {
      if (category === 'All Products') {
        await router.push('/products', undefined, { shallow: true });
      } else {
        await router.push(`/products?category=${encodeURIComponent(category)}`, undefined, { shallow: true });
      }
    } catch (error) {
      console.error('Navigation error:', error);
    } finally {
      setIsNavigating(false);
    }
  }, [isNavigating, selectedCategory, router]);

  // Memoized function to render stars based on rating
  const renderStars = useCallback((rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">☆</span>);
    }

    // Fill remaining stars with empty stars
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">★</span>);
    }

    return stars;
  }, []);

  return (
    <div className="products-page min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Categories - Mobile: Top, Desktop: Sidebar */}
          <div className="w-full lg:w-64 lg:flex-shrink-0">
            <div className="lg:sticky lg:top-28 bg-white rounded-xl shadow-lg p-4 lg:p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">{t('categories')}</h2>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:space-y-2 lg:gap-0">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    disabled={isNavigating}
                    className={`w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg font-medium transition-all duration-200 text-sm lg:text-base ${
                      selectedCategory === category
                        ? 'bg-[#0089CF] text-white shadow-md'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-[#0089CF]'
                    } ${isNavigating ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    {category === 'All Products' ? t('allProducts') : 
                     category === 'Vitamins' ? t('vitamins') : 
                     category === 'Supplements' ? t('supplements') : 
                     category === 'Herbal Supplements' ? t('herbalSupplements') : category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                {selectedCategory === 'All Products' ? t('allProducts') : 
                 selectedCategory === 'Vitamins' ? t('vitamins') : 
                 selectedCategory === 'Supplements' ? t('supplements') : 
                 selectedCategory === 'Herbal Supplements' ? t('herbalSupplements') : selectedCategory}
              </h1>
              <p className="text-sm lg:text-base text-gray-600">
                {selectedCategory === 'All Products' 
                  ? t('showingAll', { count: filteredProducts.length })
                  : t('showingCategory', { count: filteredProducts.length, category: 
                    selectedCategory === 'Vitamins' ? t('vitamins') : 
                    selectedCategory === 'Supplements' ? t('supplements') : 
                    selectedCategory === 'Herbal Supplements' ? t('herbalSupplements') : selectedCategory })
                }
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={`${product.name}-${index}`}
                  product={product}
                  index={index}
                  t={t}
                  router={router}
                  renderStars={renderStars}
                  bestSellerProducts={bestSellerProducts}
                  allProducts={products}
                />
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-500 font-bold text-xl">N</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('noProducts')}</h3>
                <p className="text-gray-600">{t('noProductsDesc')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;