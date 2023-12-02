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

const ChartComponentIncome = () => {
  return (
    <div className="card border-0 shadow rounded-4 h-100">
      <Chart
        options={state.options}
        series={state.series}
        type="pie"
        height="270px"
      />
    </div>
  );
};

export default ChartComponentIncome;
