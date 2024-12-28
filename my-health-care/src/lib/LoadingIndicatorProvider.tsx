"use client";
import React from "react";
import { Next13ProgressBar } from "next13-progressbar";

interface LoadingIndicatorProviderProps {
  children?: React.ReactNode;
}

export const LoadingIndicatorProvider = ({
  children,
}: LoadingIndicatorProviderProps) => {
  return (
    <>
      {children}
      <Next13ProgressBar
        height="2px"
        color="#3B82F6"
        options={{ showSpinner: true }}
        showOnShallow
      />
    </>
  );
};
