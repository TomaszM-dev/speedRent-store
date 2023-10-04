import { Urbanist } from "next/font/google";
import "./globals.css";

// providers context
import ModalProvider from "@/providers/modal-provider";
import { ToastProvider } from "@/providers/toast-provider";
import { SearchContextProvider } from "@/context/search";
import Hydrate from "@/components/hydrate";

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
          <Hydrate>
            <ToastProvider />
            <ModalProvider />
            {children}
          </Hydrate>
        </body>
      </html>
    </SearchContextProvider>
  );
}
