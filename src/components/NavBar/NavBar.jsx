import './NavBar.css'

const NavBar = () => {
  return (
    <div className="navbar">
      <img
        src="https://artylearning.com.sg/wp-content/uploads/2023/06/Arty_Learning_Logo-2023-130.png"
        alt="logo"
      />
      <nav >
        <ul>
            <li>About</li>
            <li>Courses</li>
            <li>Teachers</li>
            <li>Products</li>
            <li>News & updates</li>
            <li>Contact us</li>
        </ul>
      </nav>
      <button>Login</button>
    </div>
  );
};

export default NavBar;
