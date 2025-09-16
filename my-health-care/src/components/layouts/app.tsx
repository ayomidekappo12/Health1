"use client";

import React from "react";
import { SWRConfig } from "swr";
import Header from "./header";
import { Toaster } from "../ui/toaster";
import { LoadingIndicatorProvider } from "@/lib/LoadingIndicatorProvider";

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig>
      <LoadingIndicatorProvider />
      <Header />
      {children}
      <Toaster />
    </SWRConfig>
  );
};

export default App;
