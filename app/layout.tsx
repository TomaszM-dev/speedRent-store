import { Urbanist } from "next/font/google";
import "./globals.css";

import ModalProvider from "@/providers/modal-provider";
import { ToastProvider } from "@/providers/toast-provider";
import { SearchContextProvider } from "@/context/search";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Store",
  description: "Store - The place for all your purchases.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SearchContextProvider>
      <html lang="en">
        <body className={font.className}>
          <ToastProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </SearchContextProvider>
  );
}
