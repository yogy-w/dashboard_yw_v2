// src/services/prayerService.ts

export const getPrayerTimes = async (city: string, country: string) => {
  const tune = "0,3,0,4,3,3,2,0"; // Label baru kamu

  // Tambahkan timestamp agar URL selalu dianggap baru oleh browser/server
  const timestamp = new Date().getTime(); 
  const url = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=11&tune=${tune}&_=${timestamp}`;
  try {
    // Kita ambil jadwal berdasarkan kota dan negara
    // method 11 biasanya digunakan untuk Kemenag RI (SIHAT/Kemenag)
    const response = await fetch(url, { 
    cache: 'no-store',
    next: { revalidate: 0 } // Tambahan khusus untuk Next.js
  });

    if (!response.ok) {
      throw new Error("Gagal mengambil jadwal sholat dari pusat");
    }

    const result = await response.json();
    return result.data.timings; 
  } catch (error) {
    console.error("Kesalahan Kurir API:", error);
    return null;
  }
};