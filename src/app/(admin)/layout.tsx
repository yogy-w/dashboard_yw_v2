import type { ReactNode } from "react";
// Cek di src/layouts/ apa nama layout utamanya, ini contoh:
import VerticalLayout from "@/layouts/VerticalLayout"; 

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <VerticalLayout>
      {children}
    </VerticalLayout>
  );
}
