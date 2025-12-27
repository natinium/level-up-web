import { Sidebar } from "@/components/layout/sidebar";
import { RightSidebar } from "@/components/layout/right-sidebar";
import { Header } from "@/components/layout/header";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <div className="flex min-h-screen bg-[#F3F4F6] dark:bg-black">
      {/* Left Sidebar - Fixed */}
      <aside className="hidden md:block w-64 fixed left-0 top-0 h-full z-30">
        <Sidebar className="h-full" />
      </aside>

      {/* Main Content - Scrollable */}
      <main className="flex-1 md:ml-64 xl:mr-80 min-h-screen flex flex-col">
        <Header />
        <div className="p-8 max-w-7xl mx-auto w-full space-y-8 animate-in fade-in duration-500">
          {children}
        </div>
      </main>

      {/* Right Sidebar - Fixed */}
      <RightSidebar />
    </div>
  );
}
