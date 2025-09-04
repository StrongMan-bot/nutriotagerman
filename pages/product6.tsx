import React from 'react';
import Head from 'next/head';
import ProductDetail from '../src/components/ProductDetail';

export default function Product6Page() {
  return (
    <>
      <Head>
        <title>Nutriota Vitamin B1 | Premium Vitamins | Nutriota</title>
        <meta name="description" content="Discover Nutriota Vitamin B1 - a high-quality supplement that supports nervous system function and energy metabolism. 25mg per capsule, 180 capsules per bottle." />
        <meta name="keywords" content="vitamin b1, thiamine, nervous system, energy metabolism, dietary supplement, Nutriota, vitamins" />
      </Head>
      <ProductDetail 
        productId={6}
        amazonLink="https://www.amazon.it/dp/B0CNKKJF5M"
        productImage="https://m.media-amazon.com/images/I/61VsBeBnpML.__AC_SX300_SY300_QL70_ML2_.jpg"
      />
    </>
  );
}

