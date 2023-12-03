import Background from "../background/background";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Layout = (props: any) => {
  const { children } = props;
  return (
    <div
      className="container-fluid vh-100"
      style={{
        background: "#F5F7F8",
      }}
    >
      {/* <Background /> */}
      <div className="row h-100">
        <div className="col-lg-2 col-md-2 col-12 p-0 h-100 d-lg-block d-none pt-2 ps-3">
          <Sidebar />
        </div>
        <div className="col-lg-10 col-md-12 col-12 h-100 py-2 pt-3 ps-0">
          <div className="">
            <Navbar />
            <div className="card-glass rounded-5 m-4 mt-0 h-100 mb-0">
              <div className="card-body h-100">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
