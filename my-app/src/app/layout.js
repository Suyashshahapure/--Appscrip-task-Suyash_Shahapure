import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "A ecommerce platform",
  description: "A platfrom from where you can buy any thing ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Header/> */}
      <body className={inter.className}>{children}</body>
      {/* <ProductPage/>
      <Footer/> */}
    </html>
  );
}
