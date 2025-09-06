import React from 'react';
import Head from 'next/head';
import ProductDetail from '../src/components/ProductDetail';

export default function Product3Page() {
  return (
    <>
      <Head>
        <title>Nutriota Vitamin B3 (Nicotinamide) | Premium Vitamins | Nutriota</title>
        <meta name="description" content="Discover Nutriota Vitamin B3 (Nicotinamide) - a high-quality supplement that supports cellular energy production and skin health. 54mg per capsule, 180 capsules per bottle." />
        <meta name="keywords" content="vitamin b3, nicotinamide, cellular energy, skin health, dietary supplement, Nutriota, vitamins" />
      </Head>
      <ProductDetail 
        productId="3"
      />
    </>
  );
}

