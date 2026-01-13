// src/services/bannerService.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

import { Banner,BannerListResponse} from "@/types/bannerTypes";

export async function fetchMainBanner(): Promise<Banner[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/banners`, {
    //   method: "GET",
      credentials: "include", // kalau backend pakai cookie auth
    });

    if (!res.ok) {
      console.error("Failed to fetch banners:", res.status, res.statusText);
      return [];
    }

    const json: BannerListResponse = await res.json();

     if (json.success && Array.isArray(json.data)) {
      // misal cuma mau yang aktif & urut
      return json.data
        .filter((b) => b.is_active)
        .sort((a, b) => a.order_index - b.order_index);
    }

    return [];

  } catch (err) {
    console.error("Error fetching banners:", err);
    return [];
  }
}
