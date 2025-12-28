import { Sidebar } from "@/components/layout/sidebar";
import { RightSidebar } from "@/components/layout/right-sidebar";
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

      {/* Main Content */}
      <main className="flex-1 md:ml-64 xl:mr-80 min-h-screen flex flex-col">
        {children}
      </main>

      {/* Right Sidebar - Fixed */}
      <RightSidebar />
    </div>
  );
}
