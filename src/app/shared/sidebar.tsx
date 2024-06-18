"use client";

import { Button } from "@mui/material";
import { AlignJustify, CircleDollarSign, Wallet } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

type Props = {};

function Sidebar({}: Props) {
  const [open, setOpen] = useState<boolean>(true);
  const close = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`bg-secondary h-screen p-4 ${
        open ? "w-[250px] shadow-2xl" : "w-0"
      } `}
    >
      <Link href="/">
        <div className="flex items-center gap-4">
          <AlignJustify onClick={close} />
          <p className="text-lightBrown text-2xl">myFinance</p>
        </div>
      </Link>

      <div className="mt-10 flex flex-col gap-y-6">
        <Link href="/income">
          <div className="flex items-center gap-4">
            <CircleDollarSign /> <p>Income</p>
          </div>
        </Link>

        <Link href="/expenses">
          <div className="flex items-center gap-4">
            <Wallet /> <p>Expenses</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
