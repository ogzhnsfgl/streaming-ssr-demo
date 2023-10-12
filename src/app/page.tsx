import { cookies } from 'next/headers';
import { CardSkeleton } from '@/components/skeleton';
import Plans from '@/containers/streaming/plans';
import Persons from '@/containers/streaming/persons';
import { Suspense } from 'react';
import Products from '@/containers/streaming/products';

export default function Home() {
  const cookieStore = cookies();
  console.log(cookieStore);

  return (
    <div>
      <Suspense fallback={<CardSkeleton count={6} title="Products Loading" />}>
        <Products />
      </Suspense>
      <Suspense fallback={<CardSkeleton count={6} title="Persons Loading" />}>
        <Persons />
      </Suspense>
      <Suspense fallback={<CardSkeleton count={3} title="Plans Loading" />}>
        <Plans />
      </Suspense>
    </div>
  );
}
