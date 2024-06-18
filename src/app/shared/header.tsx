import { Button } from "@mui/material";
import { Menu } from "lucide-react";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="p-4 bg-white w-full fixed top-0 z-20 shadow-md flex items-center">
      <div className="flex gap-4">
        <Menu color="#000" />

        <Button>Back</Button>
      </div>
    </div>
  );
}
