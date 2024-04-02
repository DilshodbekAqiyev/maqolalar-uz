import Image from "next/image";
import React from "react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Image
        src={"/logo.jpg"}
        alt="Logo"
        width={50}
        height={50}
        className="object-contain dark:hidden"
      />
      <Image
        src={"/logo-dark.jpg"}
        alt="Logo"
        width={50}
        height={50}
        className="object-cover hidden dark:block"
      />
      <p className="font-semibold text-xl">Maqolalar</p>
    </div>
  );
};
