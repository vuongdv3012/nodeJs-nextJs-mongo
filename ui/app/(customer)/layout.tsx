import React from "react";
import Navbar from "@/app/components/rootLayout/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center">
      <Navbar />
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
