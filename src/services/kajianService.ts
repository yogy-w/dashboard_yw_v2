// src/services/kajianService.ts
import { Kajian, KajianListResponse } from "@/types/kajianTypes";

// Mengambil URL dari env.local (http://localhost:4000/api)
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchMainKajian(): Promise<Kajian[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/kajian`, {
      cache: "no-store", // Agar data selalu fresh
    });

    if (!res.ok) {
      console.error("Gagal mengambil data kajian dari port 4000");
      return [];
    }

    const json: KajianListResponse = await res.json();

    if (json.success && Array.isArray(json.data)) {
      // Hanya tampilkan kajian yang aktif
      return json.data.filter((k) => k.is_active);
    }

    return [];
  } catch (err) {
    console.error("Koneksi ke API terputus:", err);
    return [];
  }
}