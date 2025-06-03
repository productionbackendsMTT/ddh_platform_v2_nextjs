import { SSEProvider } from "@/lib/context/SSE";
import { getCookie } from "@/lib/cookies";

export const metadata = {
  title: "DingDing",
  description: "Gaming platform",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const token = await getCookie();
  return (
    <main className="relative w-full h-full flex items-center justify-center flex-col">
        <SSEProvider authToken={token}>
        {children}
        </SSEProvider >
    </main>
  );
}