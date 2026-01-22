import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

/**
 * Layout específico para páginas de compartilhamento
 * Remove Header e Footer para uma experiência mais limpa e focada
 * Aplica fonte Poppins do Google Fonts
 */
export default function PhotoShareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${poppins.className} font-sans`}>
      {children}
    </div>
  );
}
