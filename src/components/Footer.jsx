import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-5">
      <div>
        <Link href="/">
          <Image
            className="w-28 grayscale dark:grayscale-0"
            src={"/logo.png"}
            alt="logo"
            width={500}
            height={500}
          />
        </Link>
      </div>
      <div className="text-slate-500">&copy; AMDB, All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
