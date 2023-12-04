import Layout from "../components/layout/layout";

const AddExpensePage = () => {
  return (
    <Layout>
      <div className="container-fluid d-flex flex-column h-100 p-3">
        <div className="">
          <h2>Expenses</h2>
        </div>
        <div>
          <div>Amount</div>
          <div>Type</div>
          <div>Date</div>
          <div></div>
        </div>
      </div>
    </Layout>
  );
};

export default AddExpensePage;
