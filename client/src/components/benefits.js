import wifi from "../images/wifi.png";
import file from "../images/file.png";
import tools from "../images/tools.png";

function Benefits() {
  return (
    <div className="benefits">
      <div className="service">
        <img src={wifi} alt="Remote Roofing satalite"></img>
        <p className="inspection">Free Inspection</p>
      </div>
      <div className="service">
        <img src={file} alt="Remote Roofing claim"></img>
        <p className="claim">File a Claim</p>
      </div>
      <div className="service">
        <img src={tools} alt="Replace or Repair Roof"></img>
        <p className="replace">Replace or Repair Roof</p>
      </div>
    </div>
  )
};

export default Benefits;