'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function NavLink({ to, children }: { to: string; children: ReactNode }) {
  const pathname = usePathname();

  const rootCn = clsx('mx-4 text-lg p-4', {
    'text-gray-600': pathname !== to,
    'text-blue-600 font-semibold ': pathname === to
  });

  const dotCn = clsx({
    'mr-2': true,
    'text-green-600': pathname === to
  });

  return (
    <a href={to} className={rootCn}>
      <span className={dotCn}>&#x2022;</span>
      {children}
    </a>
  );
}
