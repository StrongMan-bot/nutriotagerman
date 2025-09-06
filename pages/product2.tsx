import React from 'react';
import Head from 'next/head';
import ProductDetail from '../src/components/ProductDetail';

export default function Product2Page() {
  return (
    <>
      <Head>
        <title>Nutriota Vitamin B6 | Premium Vitamins | Nutriota</title>
        <meta name="description" content="Discover Nutriota Vitamin B6 - a premium dietary supplement that supports nervous system health, energy metabolism, and protein synthesis. 10mg per capsule, 180 capsules per bottle." />
        <meta name="keywords" content="vitamin b6, pyridoxine, nervous system health, energy metabolism, dietary supplement, Nutriota, vitamins" />
      </Head>
      <ProductDetail 
        productId="2"
      />
    </>
  );
}

