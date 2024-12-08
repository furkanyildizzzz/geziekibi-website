import "react-perfect-scrollbar/dist/css/styles.css";
import "/public/assets/css/style.css";
import type { Metadata } from "next";
import { Manrope, Merienda } from "next/font/google";
import { Provider } from "react-redux";
import Store from "@/redux/Store";
import NoSsr from "@/util/NoSsr";
import MainProvider from "@/util/MainProvider";

const manrope_init = Manrope({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--manrope",
  display: "swap",
});
const merienda_init = Merienda({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--merienda",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Geziekibi",
  description: "Keyfinizin kahyasıyız",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${manrope_init.variable} ${merienda_init.variable}`}
    >
      <body>
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}
