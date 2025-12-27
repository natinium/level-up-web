export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 p-4">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
      <div className="relative z-10 w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl font-bold text-primary shadow-lg shadow-indigo-900/20">
            E
          </div>
          <h1 className="mt-4 text-3xl font-extrabold text-white tracking-tight">
            EthioScholar
          </h1>
          <p className="mt-2 text-blue-100">
            Level up your entrance exam prep.
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
