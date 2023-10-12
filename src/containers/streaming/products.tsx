import { CardList } from '@/components/card-list';
import { wait } from '@/utils/wait';
import { ProductCard } from '@/components/product-card';
import { Delays } from '@/constants/delays';

export default async function Products() {
  await wait(Delays.PRODUCTS);

  return (
    <CardList title="Products">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </CardList>
  );
}
