import Background from "../background/background";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Layout = (props: any) => {
  const { children } = props;
  return (
    <div className="container-fluid vh-100">
      {/* <Background /> */}
      <div className="row">
        <div className="col-2 p-0">
          <Sidebar />
        </div>
        <div
          className="col-10 "
          style={{
            background: "#F5F7F8",
          }}
        >
          <div>
            <Navbar />
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
