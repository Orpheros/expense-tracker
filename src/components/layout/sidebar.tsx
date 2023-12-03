import { HomeOutlined } from "@ant-design/icons";

const Sidebar = () => {
  return (
    <>
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
              href="/"
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
              href="/transactions"
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
    </>
  );
};

export default Sidebar;
