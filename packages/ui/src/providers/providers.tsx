"use client";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: any) {
  return (
    <RecoilRoot>
      <SessionProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </SessionProvider>
    </RecoilRoot>
  );
}
