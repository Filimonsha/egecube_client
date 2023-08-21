"use client";

import {SessionProvider} from "next-auth/react";
import React from "react";

export const NextSessionProvider = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};