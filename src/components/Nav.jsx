import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-4 max-w-2xl mx-auto">
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
        <Link to='/tic'>
          <li className="hover:underline">tictac</li>
        </Link>
        <Link to='/two'>
          <li className="hover:underline">crudtwo</li>
        </Link>
        <Link to='/three'>
          <li className="hover:underline">crud three</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
