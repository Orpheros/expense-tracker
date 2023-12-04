import Layout from "../components/layout/layout";

const AddIncomePage = () => {
  return (
    <Layout>
      <div className="container-fluid d-flex flex-column h-100 p-3">
        <div className="">
          <h2>Incomes</h2>
        </div>
        <div>
          <div className="my-3">
            <h4>Amount</h4>
            <input className="form-control form-control-lg" type="text" />
          </div>
          <div className="my-3">
            <h4>Type</h4>
            <input className="form-control form-control-lg" type="text" />
          </div>
          <div className="my-3">
            <h4>Date</h4>
            <input className="form-control form-control-lg" type="text" />
          </div>
          <div className="my-3">
            <h4>Description</h4>
            <input className="form-control form-control-lg" type="text" />
          </div>
          <div className="my-3">
            <h4>Type</h4>
            <input className="form-control form-control-lg" type="text" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddIncomePage;
