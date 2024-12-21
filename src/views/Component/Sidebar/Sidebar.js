import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar fixed-top" style={{ width: "12%", background: "#f8f9fa", height: "100%", top: "60px" }}>
      <nav>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link active" style={{ color: "black" }} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{ color: "black" }} to="/Category">Category</Link>
        </li>
      </ul>
      </nav>
    </div>
  );
}

export default Sidebar;