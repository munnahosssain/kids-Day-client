import { Link } from "react-router-dom";
import logo from "../../../../public/images/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  console.log(user);
  const handleLogOut = () => {
    logout()
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const navMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allToys">All Toys</Link>
      </li>
      {user && (
        <li>
          <Link to="/myToys">My Toys</Link>
        </li>
      )}
      {user && (
        <li>
          <Link to="/addToys">Add A Toy</Link>
        </li>
      )}
      <li>
        <Link to="/blog">Blogs</Link>
      </li>
      {user && (
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full" title={user.displayName}>
            <img src={user.photoURL} />
          </div>
        </label>
      )}
      <li>
        {user ? (
          <button onClick={handleLogOut}>LogOut</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );

  return (
    <div className="lg:mx-48">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navMenu}
            </ul>
          </div>
          <Link to="/">
            <img className="w-48 rounded-xl" src={logo} alt="web logo" />
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navMenu}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
