import React from 'react';
import Head from 'next/head';
import ProductDetail from '../src/components/ProductDetail';

export default function Product7Page() {
  return (
    <>
      <Head>
        <title>Nutriota Echinacea | Herbal Supplements | Nutriota</title>
        <meta name="description" content="Discover Nutriota Echinacea - a natural herbal supplement derived from the Echinacea purpurea plant, traditionally used to support immune system health. 500mg per tablet, 240 tablets per bottle." />
        <meta name="keywords" content="echinacea, immune support, herbal supplement, natural health, Nutriota, herbal supplements" />
      </Head>
      <ProductDetail 
        productId="7"
      />
    </>
  );
}

