const Navbar = () => {
  return (
    <nav className="d-flex align-items-center justify-content-center d-lg-none d-block">
      <div className="card-glass-nav rounded-4 mb-1 w-100">
        <div className="card-body p-3">
          <div
            className="d-flex justify-content-between"
            style={{ height: "30px" }}
          >
            <div>Expense tracker</div>
            <div className="d-flex justify-content-between">
              <p className="ms-3">Name</p>
              <p className="ms-3 me-3">|</p>
              <img
                src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                alt="asd"
                className="rounded-circle"
                // style={{ width: "100%", height: "auto", borderRadius: "50px" }}
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
