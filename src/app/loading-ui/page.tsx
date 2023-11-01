import { cookies } from 'next/headers';
import Plans from '@/containers/ssr/plans';
import Persons from '@/containers/ssr/persons';
import Products from '@/containers/ssr/products';
import { wait } from '@/utils/wait';
import { Delays } from '@/constants/delays';

export default async function SSRPage() {
  // cookies fn makes this page dynamic (SSR).
  const cookieStore = cookies();
  // console.log(cookieStore);

  /**
   * To shorten the TTFB time, requests are optimized by parallelizing them.
   */
  const productsPromise = await wait(Delays.PRODUCTS);
  const personsPromise = await wait(Delays.PERSONS);
  const plansPromise = await wait(Delays.PLANS);

  const [productData, personsData, plansData] = await Promise.allSettled([
    productsPromise,
    personsPromise,
    plansPromise
  ]);

  return (
    <div>
      <Products />
      <Persons />
      <Plans />
    </div>
  );
}
