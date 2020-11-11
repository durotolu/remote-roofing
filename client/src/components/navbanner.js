import phone from "../images/phone_logo.png";
import logo from "../images/logo.png";

function NavBanner() {
  return (
    <div>
      <div className="top-banner">
        <img src={logo} alt="Remote Roofing Logo" />
        <div>
          <img src={phone} alt="Phone icon" height="0.2px" />
          <a href="tel:+1 (800) 401-7716">+1 (800) 401-7716</a>
        </div>
      </div>
      <nav className="nav">
        <div>
          <a href="#"><span>Home</span></a>
          <a href="#">FAQ</a>
          <a href="#">Services</a>
        </div>
      </nav>
    </div>
  )
};

export default NavBanner;