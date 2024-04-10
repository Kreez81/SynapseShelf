import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const exo2 = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),

  title: {
    template: "%s | SynapseShelf",
    default: "SynapseShelf",
  },
  authors: {
    name: "KaranPawar",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico"
  },

  description:
    "Easily organize and track your favorite movies, books, and shows with our user-friendly platform. This app helps you to simplify your entertainment choices.",
  openGraph: {
    title: "SynapseShelf",
    description:
      "Easily organize and track your favorite movies, books, and shows with our user-friendly platform. This app helps you to simplify your entertainment choices.",
    url: "http://localhost:3000",
    siteName: "SynapseShelf",
    images: "/favicon.ico",
    type: "website"
  },
  keywords: ["project", "SynapseShelf", "entertainment"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={exo2.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
