import "./topbar.scss"

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="container">
      <img src="../images/logo.png" alt="" />
      <ul>
       <li>
        <div className="item">Home</div>
        <div className="item">About</div>
        <div className="item">Clients</div>
        <div className="item">Services</div>
        <div className="item">Clients</div>
        <div className="item">Our Process</div>
        <div className="item">Contact Us</div>
       </li>
      </ul>
      </div>
    </div>
  )
}
