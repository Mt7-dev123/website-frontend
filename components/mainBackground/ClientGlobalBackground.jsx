"use client";

import dynamic from "next/dynamic";

/**
 * Client-only wrapper for GlobalBackground.
 * This file NEVER runs on the server.
 */
const GlobalBackground = dynamic(
  () => import("./GlobalBackground"),
  { ssr: false }
);

export default function ClientGlobalBackground() {
  return <GlobalBackground />;
}
