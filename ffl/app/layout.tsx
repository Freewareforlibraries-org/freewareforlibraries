import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import styles from "./page.module.css";
import "./globals.css";
import "./hover.css";


export const metadata: Metadata = {
  title: "Freeware for Libraries",
  description: "Freeware for Libraries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className={styles.main}> 

      <Navbar /> 
      
      {children}
      
      <Footer />

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" async/>

      </body>
    </html>
  );
}
