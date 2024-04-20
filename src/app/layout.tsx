import { dmSans, inter } from "@/assets/fonts";
import { AnimatePresence } from "@/utils/libs/motion";
import type { Metadata } from "next";
import "@/assets/sass/main.scss";

// Crie seu favicon aqui: https://realfavicongenerator.net/
// Depois cole os arquivos baixados dentro da pasta /public
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Library",
    robots: {
      index: false,
      follow: false,
    },
    //
    alternates: {
      languages: {
        pt: "",
      },
    },
    themeColor: "#ffffff",
    icons: [
      { rel: "icon", sizes: "16x16", url: "/favicon-16x16.png" },
      { rel: "icon", sizes: "32x32", url: "/favicon-32x32.png" },
      {
        rel: "apple-touch-icon",
        sizes: "100x100",
        url: "/apple-touch-icon.png",
      },
      { rel: "manifest", url: "/site.webmanifest" },
      { rel: "mask-icon", url: "/safari-pinned-tab.svg" },
    ],
    manifest: "/site.webmanifest",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} ${dmSans.variable}`}>
        <AnimatePresence initial={false}>
          {children}
        </AnimatePresence>
      </body>
    </html>
  );
}
