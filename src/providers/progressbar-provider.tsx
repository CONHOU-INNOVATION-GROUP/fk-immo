"use client";

import NextTopLoader from "nextjs-toploader";

const ProgressBarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NextTopLoader color="#dc2627" height={3} showSpinner={false} />
      {children}
    </>
  );
};

export default ProgressBarProvider;
