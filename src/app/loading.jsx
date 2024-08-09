import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center">
      <Image src="/loading.svg" alt="loading" width={50} height={50} />
    </div>
  );
};

export default loading;
