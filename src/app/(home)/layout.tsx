
export const metadata = {
  title: "DingDing",
  description: "Gaming platform",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main className="relative w-full h-full flex items-center justify-center flex-col">
      {children}
    </main>
  );
}