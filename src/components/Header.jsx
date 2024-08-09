import React from "react";
import Link from "next/link";
import Image from "next/image";
import DarkModeSwitch from "./DarkModeSwitch";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <div className="flex items-center justify-between flex-col md:flex-row gap-8">
      <div>
        <Link href="/">
          <Image
            className="w-28"
            src={"/logo.png"}
            alt="logo"
            width={500}
            height={500}
          />
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <DarkModeSwitch />
        <SearchBox />
      </div>
    </div>
  );
};

export default Header;
