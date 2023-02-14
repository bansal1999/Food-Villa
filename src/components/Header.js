// Title component for display logo
export const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
      alt="Food Fire Logo"
    />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i class="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
