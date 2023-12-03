import { HomeOutlined } from "@ant-design/icons";

const Sidebar = () => {
  return (
    <>
      {/* <div style={{ height: "80px" }}></div> */}
      <div className="d-flex h-100 pb-0">
        <div className="card-glass-nav m-2 mb-xxl-4 mb-3 ms-3 rounded-5 mt-2 mt-3 d-flex">
          <div className="card-body flex-grow-1">
            <div className="container-fluid p-3 pb-0">
              <img src="src/assets/logo3.png" className="img-fluid" alt="" />
            </div>
            <nav
              id="sidebarMenu"
              className="collapse d-lg-block sidebar collapse bg-white"
            >
              <div className="position-sticky">
                <div className="list-group list-group-flush mt-4">
                  <a
                    href=""
                    className="list-group-item list-group-item-action py-3 rounded-3"
                  >
                    <div className="d-flex justify-content-start align-items-center">
                      <HomeOutlined className="mx-2" />
                      <span>Dashboard</span>
                    </div>
                  </a>
                  {/* <a
                    href="#"
                    className="list-group-item list-group-item-action py-2 ripple active"
                  >
                    <span>Webiste traffic</span>
                  </a> */}
                  <a
                    href="#"
                    className="list-group-item list-group-item-action py-3 rounded-3"
                  >
                    <div className="d-flex justify-content-start align-items-center">
                      <HomeOutlined className="mx-2" />
                      <span>Transactions</span>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action py-3 rounded-3"
                  >
                    <div className="d-flex justify-content-start align-items-center">
                      <HomeOutlined className="mx-2" />
                      <span>Add income</span>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action py-3 rounded-3"
                  >
                    <div className="d-flex justify-content-md-start  align-items-center">
                      <HomeOutlined className="mx-2" />
                      <span>Add expense</span>
                    </div>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
