import { CardList } from '@/components/card-list';
import { DevCard } from '@/components/dev-card';

export default async function Persons() {
  return (
    <CardList title="Persons">
      <DevCard delay={200} />
      <DevCard delay={300} />
      <DevCard delay={500} />
      <DevCard delay={600} />
      <DevCard delay={200} />
      <DevCard delay={100} />
    </CardList>
  );
}
