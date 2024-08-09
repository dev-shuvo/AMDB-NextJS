import React, { Suspense } from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="flex gap-5 justify-center md:justify-end ">
      <Suspense>
        <NavbarItem title="Trending" param="Trending" />
        <NavbarItem title="Top Rated" param="TopRated" />
      </Suspense>
    </div>
  );
};

export default Navbar;
