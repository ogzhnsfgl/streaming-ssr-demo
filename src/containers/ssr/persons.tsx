import { CardList } from '@/components/card-list';
import { DevCard } from '@/components/dev-card';

export default async function Persons() {
  return (
    <CardList title="Persons">
      <DevCard delay={1100} />
      <DevCard delay={4500} />
      <DevCard delay={500} />
      <DevCard delay={2200} />
      <DevCard delay={300} />
      <DevCard delay={3000} />
    </CardList>
  );
}
