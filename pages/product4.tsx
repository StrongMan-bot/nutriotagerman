import React from 'react';
import Head from 'next/head';
import ProductDetail from '../src/components/ProductDetail';

export default function Product4Page() {
  return (
    <>
      <Head>
        <title>Nutriota Propolis | Natural Supplements | Nutriota</title>
        <meta name="description" content="Discover Nutriota Propolis - a natural supplement derived from bee propolis, known for its immune-supporting properties. 1000mg per capsule, 180 capsules per bottle." />
        <meta name="keywords" content="propolis, bee propolis, immune support, natural supplement, Nutriota, supplements" />
      </Head>
      <ProductDetail 
        productId={4}
        amazonLink="https://www.amazon.it/dp/B08TB387M9"
        productImage="https://m.media-amazon.com/images/I/617gq7K4abL.__AC_SX300_SY300_QL70_ML2_.jpg"
      />
    </>
  );
}

