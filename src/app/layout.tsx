import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./layout.module.scss";

import "./globals.css";
import clsx from "clsx";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Genii",
	description:
		"Create visualisation designs using a path-based, gene-defined model with React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, styles.body)}>
        <Header />
        {children}</body>
    </html>
  );
}
