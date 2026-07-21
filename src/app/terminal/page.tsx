import type { Metadata } from "next";
import { TerminalApp } from "@/components/terminal-app";

export const metadata: Metadata = {
  title: "Terminal",
  description: "An interactive terminal-style portfolio interface.",
};

export default function TerminalPage() {
  return <TerminalApp />;
}
