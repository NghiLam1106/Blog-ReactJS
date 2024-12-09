import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";

function DefaultLayout({ children }) {
  return (
    <div className="default-layout">
      <Header />
      <div className="d-flex">
        <Sidebar />
        <div className="content" style={{ width: "88%" }}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;