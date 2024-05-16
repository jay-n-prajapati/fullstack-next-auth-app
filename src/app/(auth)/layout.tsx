import Navbar from "@/components/Navbar";
import React from "react";

const authLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className="flex items-center justify-center py-6">
        <Navbar />
      </div>
      {children}
    </div>
  );
};

export default authLayout;
