import { CardList } from '@/components/card-list';
import { DevCard } from '@/components/dev-card';
import { Delays } from '@/constants/delays';
import { wait } from '@/utils/wait';

export default async function Persons() {
  await wait(Delays.PERSONS);

  return (
    <CardList title="Persons">
      <DevCard delay={2000} />
      <DevCard delay={4000} />
      <DevCard delay={3500} />
      <DevCard delay={2500} />
      <DevCard delay={100} />
      <DevCard delay={5000} />
    </CardList>
  );
}
