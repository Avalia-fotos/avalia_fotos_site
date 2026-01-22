"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Componente que renderiza Header e Footer condicionalmente
 * Não renderiza Header/Footer para páginas de compartilhamento (/p/[photoId])
 */
export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isSharePage = pathname?.startsWith("/p/");

  if (isSharePage) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
