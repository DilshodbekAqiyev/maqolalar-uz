import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { Toaster } from "sonner";
import ModalProvider from "@/components/providers/modal-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maqolalar",
  description:
    "Kundalik ish ilovalaringizni bittaga birlashtirgan yangi vosita. Bu siz va sizning jamoangiz uchun yaxlit ish maydoni",
  icons: {
    icon: "/logo-dark.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const canonicalUrl = `https://maqolalar-uz.vercel.app/`;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="keywords" content="Vercel, Next.js, SEO, maqolalar" />
        <title>Maqolalar - Eng yangi ish maydoni</title>
        <meta
          name="description"
          content="Kundalik ish ilovalaringizni bittaga birlashtirgan yangi vosita. Bu siz va sizning jamoangiz uchun yaxlit ish maydoni"
        />
        <meta property="og:title" content="Maqolalar - Eng yangi ish maydoni" />
        <meta
          property="og:description"
          content="Kundalik ish ilovalaringizni bittaga birlashtirgan yangi vosita. Bu siz va sizning jamoangiz uchun yaxlit ish maydoni"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.jpg" />
        <meta property="og:url" content={canonicalUrl} />
        <meta
          property="article:published_time"
          content="2024-04-02T08:00:00+08:00"
        />
        <meta property="article:author" content="Muallif nomi" />
        <link rel="canonical" href={canonicalUrl} />
        <meta
          name="keywords"
          content="Vercel, deploy, Next.js, maqolalar, SEO"
        />
        <meta
          name="description"
          content="Maqolalar sahifasi sizning kunlik ish bilan bog'langan yangi usullar to'plamidir."
        />
        <meta property="og:title" content="Maqolalar - Eng yangi ish maydoni" />
        <meta
          property="og:description"
          content="Maqolalar sahifasi sizning kunlik ish bilan bog'langan yangi usullar to'plamidir."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://example.com/maqolalar-uz.vercel.app/og-image.jpg"
        />
        <meta property="og:url" content="https://maqolalar-uz.vercel.app/" />
        <meta
          property="article:published_time"
          content="2024-04-02T08:00:00+08:00"
        />
        <meta
          property="article:author"
          content="Axborot texnologiyalari fakulteti"
        />
        <meta
          name="google-site-verification"
          content="nl2YV8oMGFK1lgfzYU3IxjThvW4uIOEKo-wSaSLi4mQ"
        />
        <link rel="canonical" href="https://maqolalar-uz.vercel.app/" />
      </head>
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="notion-theme"
            >
              <Toaster position="bottom-center" />
              <ModalProvider />
              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
