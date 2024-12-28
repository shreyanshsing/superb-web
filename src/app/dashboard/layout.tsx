/* eslint-disable react/react-in-jsx-scope */
'use client';

import BottomNavigation from "@/components/navigation";
import ResizeablePageLayout from "@/components/resizeablePageLayout";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ResizeablePageLayout>
      <main>
        {children}
        <BottomNavigation  />
      </main>
    </ResizeablePageLayout>
  );
}
