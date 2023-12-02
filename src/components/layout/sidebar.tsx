const Sidebar = () => {
  return (
    <>
      <div style={{ height: "80px" }}></div>
      <div className="card-glass m-4 rounded-5 mt-0">
        <div className="card-body" style={{ minHeight: "calc(100vh - 158px)" }}>
          <aside className="d-flex flex-column ">
            <a>Dashboard</a>
            <a>Transactions</a>
            <a>Add Transaction</a>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
