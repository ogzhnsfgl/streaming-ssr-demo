import NavLink from './nav-link';

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
        <NavLink to="/loading-ui">SSR + Loading UI</NavLink>
        <NavLink to="/">Streaming</NavLink>
      </div>
    </nav>
  );
}
