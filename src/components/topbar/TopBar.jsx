import "./topbar.css";


export default function TopBar() {
 
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-github"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">Post</li>
          <li className="topListItem">Write</li>
        </ul>
      </div>
      
      <div className="topRight">
        <img className="topImg" src="../front3.jpg" alt="" />
        <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
