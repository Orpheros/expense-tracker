import { faker } from "@faker-js/faker";
import Chart from "react-apexcharts";

const dataList = Array.from({ length: 5 }, () =>
  faker.datatype.number({ min: 10, max: 60 })
);

const state = {
  options: {
    legend: {
      position: "bottom" as "bottom" | undefined,
    },
  },
  series: dataList,
  labels: ["A", "B", "C", "D", "E"],
};

const ChartComponentExpense = () => {
  return (
    <div className="card border-0 shadow rounded-4 h-100">
      <div className="p-3 h-100">
        <h4 className="mb-0">Expenses</h4>
        <Chart
          options={state.options}
          series={state.series}
          type="pie"
          height="270"
        />
      </div>
    </div>
  );
};

export default ChartComponentExpense;
