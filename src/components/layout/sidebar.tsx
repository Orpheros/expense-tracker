import { HomeOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const sidebarLinks = [
  {
    to: "/dashboard",
    text: "Dashboard",
  },
  {
    to: "/transactions",
    text: "Transactions",
  },
  {
    to: "/add-income",
    text: "Add Income",
  },
  {
    to: "/add-expense",
    text: "Add Expense",
  },
];

const Sidebar = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  return (
    <>
      <div className="container-fluid p-3 pb-0">
        <img src="src/assets/logo3.png" className="img-fluid" alt="" />
      </div>
      <nav
        id="sidebarMenu"
        className="collapse d-lg-block sidebar collapse bg-white mb-auto"
      >
        <div className="position-sticky">
          <div className="list-group list-group-flush mt-4">
            {sidebarLinks.map((link, index) => (
              <Link
                to={link.to}
                key={index}
                style={{ textDecoration: "none", color: "black" }}
              >
                <a className="list-group-item list-group-item-action py-3 rounded-3">
                  <div className="d-flex justify-content-start align-items-center">
                    <HomeOutlined className="mx-2" />
                    <span>{link.text}</span>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <hr className="mx-3" />
      <div className="p-3 pt-0 ">
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-black text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="true"
            onClick={() => setIsDropdown(!isDropdown)}
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>Username</strong>
          </a>
          <ul
            className={`dropdown-menu text-small shadow ${
              isDropdown ? "show" : ""
            }`}
            aria-labelledby="dropdownUser1"
            style={{
              position: "absolute",
              inset: "auto auto 0px 0px",
              margin: 0,
              transform: "translate3d(0px, -45px, 0px)",
            }}
            data-popper-placement="top-start"
          >
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
