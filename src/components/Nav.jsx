import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-4">
        <h3 className="text-2xl">API WRAPPER</h3>
      <ul className="flex gap-8 text-lg">
        <Link to='/'>
          <li className="  text-lg">Home</li>
        </Link>
        <Link to='/movies'>
          <li className="  text-lg">View Rockets</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
