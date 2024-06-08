"use client";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { NextUIProvider } from "@nextui-org/react";
import Aos from 'aos';
import 'aos/dist/aos.css'

export function Providers({ children }: any) {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <RecoilRoot>
      <SessionProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </SessionProvider>
    </RecoilRoot>
  );
}
