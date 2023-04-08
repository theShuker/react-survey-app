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
];

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-slate-600 h-12 px-2 text-white">
      <Link to="/" className="font-bold">
        Survey App
      </Link>

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
