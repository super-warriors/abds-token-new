"use client";
import Hero from "@/app/components/hero/Hero";
import Statistics from "@/app/components/statistics/Statistics";
import Accounts from "@/app/components/accounts/Accounts";
import Rewards from "@/app/components/accounts/Rewards";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from './utils/config';

const queryClient = new QueryClient();
export default function Home() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client = {queryClient}>
          <>
            <Hero />
            <Statistics />
            <div className="grid w-full lg:grid-cols-2 gap-5 mt-[60px]">
              {/* left side */}
              <Accounts />
              <Rewards />
            </div>
          </>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
