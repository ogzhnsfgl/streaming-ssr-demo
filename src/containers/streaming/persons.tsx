import { CardList } from '@/components/card-list';
import { DevCard } from '@/components/dev-card';
import { Delays } from '@/constants/delays';
import { wait } from '@/utils/wait';

export default async function Persons() {
  await wait(Delays.PERSONS);

  return (
    <CardList title="Persons">
      <DevCard delay={13000} />
      <DevCard delay={1000} />
      <DevCard delay={5000} />
      <DevCard delay={4000} />
      <DevCard delay={6000} />
      <DevCard delay={7000} />
    </CardList>
  );
}
