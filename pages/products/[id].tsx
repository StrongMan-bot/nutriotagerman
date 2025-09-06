import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ProductDetail from '../../src/components/ProductDetail';

export default function DynamicProductPage() {
  const router = useRouter();
  const { id } = router.query;

  // Show loading while router is not ready
  if (!router.isReady) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Product {id} - Premium Vitamins & Supplements | Nutriota</title>
        <meta name="description" content="Discover our premium vitamins and supplements designed for your health and wellness needs." />
        <meta name="keywords" content="vitamins, supplements, health, wellness, nutrition" />
      </Head>
      <ProductDetail productId={id as string} />
    </>
  );
}
