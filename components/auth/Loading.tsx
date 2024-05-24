import React from "react";
import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image src="/logo/logo.svg" alt="logo" width={120} height={120} />
    </div>
  );
};
