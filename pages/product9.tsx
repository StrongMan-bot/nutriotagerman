import React from 'react';
import Head from 'next/head';
import ProductDetail from '../src/components/ProductDetail';

export default function Product9Page() {
  return (
    <>
      <Head>
        <title>Nutriota Royal Jelly | Natural Supplements | Nutriota</title>
        <meta name="description" content="Discover Nutriota Royal Jelly - a premium natural supplement derived from the exclusive food of queen bees, known for its rich nutritional profile and potential health benefits. 250mg per capsule, 120 capsules per bottle." />
        <meta name="keywords" content="royal jelly, bee products, natural supplement, nutritional support, Nutriota, supplements" />
      </Head>
      <ProductDetail 
        productId="9"
      />
    </>
  );
}

