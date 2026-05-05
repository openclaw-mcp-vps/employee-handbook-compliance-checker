import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Employee Handbook Compliance Checker",
  description: "Check employee handbooks for legal compliance. Scan for missing required clauses, outdated policies, and state-specific requirements."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e8dd5999-34af-403c-8eb2-228338e61677"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
