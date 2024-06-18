"use client";

import Image from "next/image";
import Cards from "../dashboard/components/Cards";
import IncomeCharts from "../dashboard/components/IncomeChart";
import ExpensesChart from "../dashboard/components/ExpensesChart";

export default function Home() {
  return (
    <main className="flex relative bg-white min-h-screen mt-20 gap-y-8 flex-col items-center p-4 bg-primary">
      <Cards />
      <div className="flex justify-between w-full ">
        <div className="flex flex-col md:flex-row text-left items-left w-full left-0 justify-start gap-4">
          <IncomeCharts />
          <ExpensesChart />
        </div>

        <div></div>
      </div>
    </main>
  );
}
