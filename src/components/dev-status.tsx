import { wait } from '@/utils/wait';

export function DevStatusSkeleton({ delay = 1000 }: IDevStatus) {
  return (
    <span className="flex rounded-full bg-gray-500 animate-pulse uppercase px-2 py-1 text-xs font-bold mr-3">
      <p className="text-white">Pending</p>
    </span>
  );
}

export default async function DevStatus({ delay = 1000 }: IDevStatus) {
  await wait(delay);

  return (
    <span className="flex rounded-full bg-green-500 uppercase px-2 py-1 text-xs font-bold mr-3">
      <p className="text-white">Online</p>
    </span>
  );
}

export interface IDevStatus {
  delay?: number;
}
