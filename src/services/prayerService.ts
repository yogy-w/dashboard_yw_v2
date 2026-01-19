// src/services/prayerService.ts

export const getPrayerTimes = async (city: string, country: string) => {
  try {
    // Kita ambil jadwal berdasarkan kota dan negara
    // method 11 biasanya digunakan untuk Kemenag RI (SIHAT/Kemenag)
    const response = await fetch(
      `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=11`
    );

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