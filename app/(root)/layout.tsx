import React from "react";
import Navbar from "@/components/Navbar";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Navbar />
      <main className="font-poppins">{children}</main>
    </>
  );
};

export default layout;
