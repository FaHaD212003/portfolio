import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fahad Sohail | Full-Stack Developer & Data Engineer",
  description:
    "Computer Science Graduate specializing in Data Analysis, Machine Learning, and Full-Stack Development. I build scalable data pipelines and full-stack applications using Python, Next.js, and FastAPI.",
  keywords: [
    "Fahad Sohail",
    "Full-Stack Developer",
    "Data Engineer",
    "Machine Learning",
    "Python",
    "Next.js",
    "FastAPI",
    "Portfolio",
  ],
  authors: [{ name: "Fahad Sohail" }],
  openGraph: {
    title: "Fahad Sohail | Full-Stack Developer & Data Engineer",
    description:
      "Transforming complex data into actionable insights through rigorous analysis and clean code.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fahad Sohail | Full-Stack Developer & Data Engineer",
    description:
      "Transforming complex data into actionable insights through rigorous analysis and clean code.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      style={{ colorScheme: "dark" }}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
