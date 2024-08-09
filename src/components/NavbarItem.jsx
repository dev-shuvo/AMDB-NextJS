"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const NavbarItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div
      className={
        "bg-slate-300 hover:bg-red-600 hover:text-slate-200 dark:bg-slate-700 hover:dark:bg-red-600 cursor-pointer w-full text-center lg:w-2/12 xl:w-1/12"
      }
    >
      <Link
        className={`p-2 block ${
          genre === param ? "bg-red-600 text-slate-200" : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavbarItem;
