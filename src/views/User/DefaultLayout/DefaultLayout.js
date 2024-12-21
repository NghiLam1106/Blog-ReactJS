import Header from "../../Component/Header/Header";
import Sidebar from "../../Component/Sidebar/Sidebar";

function DefaultLayout({ children }) {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row" style={{ marginTop: "60px" }}>
        <Sidebar />
        <div className="content" style={{ width: "88%", marginLeft: "12%", marginTop: "10px" }}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;