import { cookies } from 'next/headers';
import Plans from '@/containers/ssr/plans';
import Persons from '@/containers/ssr/persons';
import Products from '@/containers/ssr/products';
import { wait } from '@/utils/wait';
import { Delays } from '@/constants/delays';

export default async function SSRPage() {
  const cookieStore = cookies();
  console.log(cookieStore);

  const productsPromise = await wait(Delays.PRODUCTS);
  const personsPromise = await wait(Delays.PERSONS);
  const plansPromise = await wait(Delays.PLANS);

  await Promise.allSettled([productsPromise, personsPromise, plansPromise]);

  return (
    <div>
      <Products />
      <Persons />
      <Plans />
    </div>
  );
}
