"use client";

import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

// Define props type
interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AppLayout;
