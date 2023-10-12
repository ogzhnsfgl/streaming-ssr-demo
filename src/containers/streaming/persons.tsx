import { CardList } from '@/components/card-list';
import { DevCard } from '@/components/dev-card';
import { Delays } from '@/constants/delays';
import { wait } from '@/utils/wait';

export default async function Persons() {
  await wait(Delays.PERSONS);

  return (
    <CardList title="Persons">
      <DevCard delay={200} />
      <DevCard delay={20000} />
      <DevCard delay={2100} />
      <DevCard delay={400} />
      <DevCard delay={1100} />
      <DevCard delay={2500} />
    </CardList>
  );
}
