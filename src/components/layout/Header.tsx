import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const navLinks = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Surveys',
    path: '/surveys',
  },
  {
    title: 'Create new survey',
    path: '/surveys/create',
  },
];

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-slate-600 h-12 px-2 text-white">
      <Link to="/" className="font-bold">
        Survey App
      </Link>

      <nav>
        <ul className="flex gap-4 text-sm">
          {navLinks.map((link) => (
            <Link to={link.path} key={link.path}>
              {link.title}
            </Link>
          ))}
        </ul>
      </nav>

      <div className="flex">
        <button
          className="border inline-flex items-center rounded px-2 py-1 text-sm hover:bg-white hover:text-slate-600 transition-all"
          title="Menu">
          <FaBars />
        </button>
      </div>
    </header>
  );
};
export default Header;
