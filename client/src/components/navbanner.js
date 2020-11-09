function NavBanner() {
  return (
    <div>
      <div className="top-banner">
        <img src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f12985a91b23596370f7a81_logo-72-dc-7-f-0-f%402x.png" alt="Remote Roofing Logo" />
        <div>
          <img src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f1297d1c3fecf36271c10a2_483947%403x.png" alt="Phone icon" height="0.2px" />
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