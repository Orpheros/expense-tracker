import Layout from "../components/layout/layout";
import ChartComponent from "../components/Chart/chart";
import ChartComponentIncome from "../components/Chart/chart-income";
import ChartComponentExpense from "../components/Chart/chart-expense";

function App() {
  return (
    <Layout>
      <div
        className="card-glass rounded-5 m-4 mt-0"
        style={{ height: "calc(100vh - 118px)" }}
      >
        <div className="card-body h-100">
          <div className="row h-100">
            <div className="col-lg-8 col-md-12 col-12 h-100 pe-2">
              <div className="container-fluid h-100 d-flex flex-column">
                <div className="row">
                  <div className="col-lg-4 col-md-12 col-12 p-3">
                    <div className="card p-3 border-0 shadow rounded-4 pt-4 pb-4">
                      <p className="mb-0">Current balance</p>
                      <h4 className="mb-0">$5000</h4>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 col-12 p-3">
                    <div className="card p-3 border-0 shadow rounded-4 pt-4 pb-4">
                      {" "}
                      <p className="mb-0">Total income</p>
                      <h4 className="mb-0">$5000</h4>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 col-12 p-3">
                    <div className="card p-3 border-0 shadow rounded-4 pt-4 pb-4">
                      {" "}
                      <p className="mb-0">Total expense</p>
                      <h4 className="mb-0">$5000</h4>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <ChartComponent />
                </div>
                <div className="row flex-grow-1">
                  <div className="col-lg-6 col-md-12 col-12 pb-3">
                    <ChartComponentIncome />
                  </div>
                  <div className="col-lg-6 col-md-12 col-12 pb-3">
                    <ChartComponentExpense />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12 ps-2 h-100">
              <div className="container-fluid h-100 d-flex flex-column">
                <div className="row p-0 pt-3">
                  <div className="card shadow border-0 rounded-4 p-3 pt-0">
                    <div className="d-flex justify-content-between mb-2 mt-2 bottom-0 align-items-end">
                      <h4 className="mb-0">Recent transaction</h4>
                      <p className="mb-0">View all</p>
                    </div>
                    <div style={{ overflowY: "scroll", height: "400px" }}>
                      {(() => {
                        let elements = [];
                        for (let i = 0; i < 12; i++) {
                          elements.push(
                            <div
                              key={i}
                              className="card mb-3 shadow-sm border-0 m-3 ms-0 me-0"
                            >
                              <p>Iteration {i + 1}</p>
                            </div>
                          );
                        }
                        return elements;
                      })()}
                    </div>
                  </div>
                </div>
                <div className="row p-0 d-flex flex-grow-1 pb-3">
                  <div className="card mt-3 shadow border-0 rounded-4">
                    <div className="container-fluid p-0 h-100">
                      <div className="d-flex justify-content-between mb-2 mt-2 align-items-end">
                        <h4 className="mb-0">Top categories</h4>
                        <p className="mb-0">View all</p>
                      </div>
                      <div style={{ overflowY: "auto", height: "280px" }}>
                        {(() => {
                          let elements = [];
                          for (let i = 0; i < 12; i++) {
                            elements.push(
                              <div
                                key={i}
                                className="card mb-3 shadow-sm border-0 m-3 ms-0 me-0"
                              >
                                <p>Iteration {i + 1}</p>
                              </div>
                            );
                          }
                          return elements;
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
