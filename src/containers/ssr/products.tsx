import { CardList } from '@/components/card-list';
import { ProductCard } from '@/components/product-card';

export default async function Products() {
  return (
    <CardList title="Products">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </CardList>
  );
}
