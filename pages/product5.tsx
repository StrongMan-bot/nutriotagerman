import React from 'react';
import Head from 'next/head';
import ProductDetail from '../src/components/ProductDetail';

export default function Product5Page() {
  return (
    <>
      <Head>
        <title>Nutriota Alpha Lipoic Acid | Antioxidant Supplements | Nutriota</title>
        <meta name="description" content="Discover Nutriota Alpha Lipoic Acid - a powerful antioxidant supplement that supports cellular energy production and helps protect against oxidative stress. 500mg per capsule, 180 capsules per bottle." />
        <meta name="keywords" content="alpha lipoic acid, antioxidant, cellular energy, oxidative stress, dietary supplement, Nutriota, supplements" />
      </Head>
      <ProductDetail 
        productId="5"
      />
    </>
  );
}

