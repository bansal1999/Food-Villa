import { useState } from "react";
import { Link } from "react-router-dom";

// Title component for display logo (named component)
export const Title = () => (
  <a href="/">
    <img
      className="h-28 p-2"
      src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
      alt="Food Villa Logo"
      title="Food Villa"
    />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="flex justify-between bg-pink-200 shadow-lg">
      <Title />
      <h1>{Title}</h1>
      <div className="nav-items">
        <ul className="flex">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>

          <li>
            <i class="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            {/* Use of conditional rendering to login and logout */}
            {isLoggedIn ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedIn(true)}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
