import Image from 'next/image';
import DevStatus, { DevStatusSkeleton } from './dev-status';
import { Suspense } from 'react';
import { randomId } from '@/utils/random-id';

export function DevCard({ delay }: IDevCard) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto relative">
      <Image
        alt="Profile picture"
        className="object-cover w-full"
        height={80}
        width={200}
        unoptimized
        style={{ maxHeight: '80px' }}
        src={`https://picsum.photos/id/${randomId()}/400/100`}
      />
      <div className="p-4">
        <div className="flex ">
          <h2 className="text-2xl font-bold">John Doe</h2>
          <div className="ml-auto">
            <Suspense fallback={<DevStatusSkeleton />}>
              <DevStatus delay={delay} />
            </Suspense>
          </div>
        </div>
        <h3 className="text-gray-500">Front-end Developer</h3>
        <p className="mt-2 text-gray-600">Passionate about creating interactive user interfaces.</p>
      </div>
    </div>
  );
}

export interface IDevCard {
  delay?: number;
}
