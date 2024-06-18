"use client";

import { PieChart } from "@mui/x-charts";

function IncomeCharts() {
  return (
    <div className="">
      <p className="font-semibold text-secondary ">Income Summary</p>
      <PieChart
        series={[
          {
            innerRadius: 40,
            outerRadius: 80,
            data: [
              { id: 0, value: 10, label: "Salary" },
              { id: 1, value: 15, label: "Business" },
              { id: 2, value: 20, label: "Side Gigs" },
              { id: 2, value: 20, label: "Real Estate" },
            ],
          },
        ]}
        slotProps={{
          legend: {
            direction: "column",
            position: { vertical: "middle", horizontal: "left" },
            markGap: 10,
            itemMarkHeight: 10,
            labelStyle: {
              fontSize: "10px",
              fontWeight: "bold",
            },
          },
        }}
        width={400}
        height={250}
        margin={{ left: 180 }}
      />
    </div>
  );
}

export default IncomeCharts;
