import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rajinikanth Anchella | Test Automation Expert",
  description:
    "Personal portfolio of Rajinikanth Anchella - QA Professional with 12+ years experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
