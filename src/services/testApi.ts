// src/services/testApi.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function testBackendConnection() {

    console.log(">> TEST API BASE URL:", API_BASE_URL);

  try {
    const res = await fetch(`${API_BASE_URL}/banners`, {
      // ganti /health dengan endpoint apa pun yang sudah ada di backend kamu
      // misal: /auth/profile, /auth/me, /banner, dll
      method: "GET",
      credentials: "include", // kalau pakai cookie auth
    });

    console.log("Status:", res.status);

    const data = await res.json().catch(() => null);

    console.log("Response data:", data);

    return { ok: res.ok, status: res.status, data };
  } catch (err) {
    console.error("Error calling backend:", err);
    return { ok: false, status: 0, data: null };
  }
}
