import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-4">
        <h3 className="text-2xl">API WRAPPER</h3>
      <ul className="flex gap-8 text-md">
        <Link to='/'>
          <li className="hover:underline">Home</li>
        </Link>
        <Link to='/movies'>
          <li className="hover:underline">View Star Wars Movies</li>
        </Link>
        <Link to='/example'>
          <li className="hover:underline">Example</li>
        </Link>
        <Link to='/crud'>
          <li className="hover:underline">todo crud prac</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
