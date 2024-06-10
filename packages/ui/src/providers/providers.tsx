"use client";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({children}: {children: React.ReactNode}): JSX.Element {
  return (
    <RecoilRoot>
      <SessionProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </SessionProvider>
    </RecoilRoot>
  );
}
