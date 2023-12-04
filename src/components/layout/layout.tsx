// import Background from "../background/background";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Layout = (props: any) => {
  const { children } = props;
  return (
    <div
      className="container-fluid h-100"
      style={{
        background: "#F5F7F8",
      }}
    >
      {/* <Background /> */}
      <div className="row h-100">
        <div className="container-fluid d-flex p-4">
          <div className="col-lg-2 col-md-2 col-12 pe-md-3 pe-0 d-none d-lg-block">
            {/* <div style={{ height: "80px" }}></div> */}
            <div className="d-flex h-100 pb-0">
              <div className="card-glass-nav rounded-5 d-flex">
                <div className="card-body flex-grow-1 d-flex flex-column">
                  <Sidebar />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-10 col-md-12 col-12 ps-md-3 ps-0 d-flex flex-column">
            <Navbar />
            <div className="card-glass rounded-5 flex-grow-1">
              <div className="card-body d-flex h-100">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
