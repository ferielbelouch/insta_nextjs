import React from "react";
import { ReactNode } from "react";

export default function RootLayout({ children }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }