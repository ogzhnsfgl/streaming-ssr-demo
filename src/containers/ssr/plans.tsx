import { PlanCard } from '@/components/plan-card';
import { CardList } from '@/components/card-list';
import { wait } from '@/utils/wait';
import { Delays } from '@/constants/delays';

export default async function Plans() {
  return (
    <CardList title="Plans">
      <PlanCard text="Test" />
      <PlanCard text="Test" />
      <PlanCard text="Test" />
    </CardList>
  );
}
