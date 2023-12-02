import { faker } from "@faker-js/faker";
import Chart from "react-apexcharts";

const dataList = Array.from({ length: 8 }, () =>
  faker.datatype.number({ min: 10, max: 50 })
);
const state = {
  options: {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  },
  series: [
    {
      name: "series-1",
      data: dataList,
    },
  ],
};

const ChartComponent = () => {
  return (
    <div className="card border-0 shadow p-3 rounded-4">
      <div className="d-flex justify-content-between mt-2 align-items-end">
        <h4 className="mb-0">Top categories</h4>
        <p className="mb-0">View all</p>
      </div>
      <Chart
        options={state.options}
        series={state.series}
        type="line"
        width="100%"
        height="400px"
      />
    </div>
  );
};

export default ChartComponent;
