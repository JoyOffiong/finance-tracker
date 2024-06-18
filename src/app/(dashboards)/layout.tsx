import React from "react";
import Header from "../shared/header";
import Sidebar from "../shared/sidebar";

type Props = {};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start flex-row bg-white">
      <div>
        <Sidebar />
      </div>
      <div>
        <Header />
        <div>{children}</div>
        <div className="bg-blue-800 w-full">Footer</div>
      </div>
    </div>
  );
}
