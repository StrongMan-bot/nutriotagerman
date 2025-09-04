import React from 'react';
import Head from 'next/head';
import ProductDetail from '../src/components/ProductDetail';

export default function Product8Page() {
  return (
    <>
      <Head>
        <title>Nutriota Selencora (Selenium w/ Zinc and Copper) | Premium Minerals | Nutriota</title>
        <meta name="description" content="Discover Nutriota Selencora - a comprehensive mineral supplement that combines selenium with zinc and copper for optimal antioxidant support and immune system health. 180 capsules per bottle." />
        <meta name="keywords" content="selenium, zinc, copper, minerals, antioxidant support, immune health, dietary supplement, Nutriota, minerals" />
      </Head>
      <ProductDetail 
        productId={8}
        amazonLink="https://www.amazon.it/dp/B0CT64JJ1N"
        productImage="https://m.media-amazon.com/images/I/61Sdenl4g5L.__AC_SX300_SY300_QL70_ML2_.jpg"
      />
    </>
  );
}

