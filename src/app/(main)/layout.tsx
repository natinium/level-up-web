import { Sidebar } from "@/components/layout/sidebar";
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
    <div className="flex min-h-screen bg-gray-50/50">
      <aside className="hidden md:block w-72 fixed h-full z-30">
        <Sidebar className="h-full" />
      </aside>
      <main className="flex-1 md:ml-72 min-h-screen">
        <div className="p-8 max-w-7xl mx-auto space-y-8">{children}</div>
      </main>
    </div>
  );
}
