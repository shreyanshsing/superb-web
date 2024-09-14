'use client';

import BottomNavigation from "@/components/navigation";
import AppStateProvider from "@/store/store";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AppStateProvider>
      <main>
        {children}
        <BottomNavigation currentActive={0} />
      </main>
    </AppStateProvider>
  );
}
