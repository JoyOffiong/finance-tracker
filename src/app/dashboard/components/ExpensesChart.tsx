import { LineChart } from "@mui/x-charts";
import React from "react";

type Props = {};

function ExpensesChart() {
  return (
    <div className="rounded-lg w-full  h-[6%]">
      <p className="font-semibold pb-10 text-secondary">Expenses Summary</p>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            area: true,
            color: "#272934",
          },
          {
            data: [3, 6, 3, 7.5, 10, 4],
            area: true,
            color: "#272934",
          },
        ]}
        width={330}
        height={200}
      />
    </div>
  );
}

export default ExpensesChart;
