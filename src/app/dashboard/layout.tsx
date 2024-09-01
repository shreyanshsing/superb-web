import BottomNavigation from "@/components/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      {children}
      <BottomNavigation currentActive={0} />
    </main>
  );
}
