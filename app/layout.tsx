import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";
import NavBar from "./components/NavBar";
import AuthProvider from "./auth/Provider";
import GoogleAnalytcisScript from "./GoogleAnalyticsScript";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
});

// will update this after figuring out how to get the poppins webfont .woff file
// const poppins = localFont({
//   src: "../..",
//   variable: "--font-poppins",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="winter">
      {/* <GoogleAnalytcisScript /> */}
      <body className={roboto.className}>
        <AuthProvider>
          <NavBar />
          <main className="p-5">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
