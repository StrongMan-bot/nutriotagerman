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
        productId="8"
      />
    </>
  );
}

