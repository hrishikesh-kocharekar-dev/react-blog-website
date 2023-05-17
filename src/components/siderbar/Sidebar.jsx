import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidearbarItem">
        <span className="sidebarTitle">About Me</span>
        <img className="ImgSize" src="./font3.jpg" alt="" />
        <p>
          while the lovely valley teems with vapour around me, and the meridian
          sun strikes the 
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Event</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Startups</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">join community</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon  fa-brands fa-github"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon  fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
}
