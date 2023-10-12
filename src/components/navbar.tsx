import { ReactNode } from 'react';

function NavLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}

export default function Navbar() {
  return (
    <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
      <div className="w-3/12 flex items-center">
        <a className="text-2xl font-semibold" href="/">
          Streaming Demo
        </a>
      </div>
      <div>
        <NavLink to="/ssr">SSR</NavLink>
        <NavLink to="/">Streaming</NavLink>
      </div>
    </nav>
  );
}
