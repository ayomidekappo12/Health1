"use client";

import React from "react";
import { SWRConfig } from "swr";
import Navbar from "./navbar";
import { Toaster } from "../ui/toaster";
import { LoadingIndicatorProvider } from "@/lib/LoadingIndicatorProvider";

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig>
      <LoadingIndicatorProvider />
      <Navbar />
      {children}
      <Toaster />
    </SWRConfig>
  );
};

export default App;
