"use client";

import { useEffect, useState } from "react";
import { getPrayerTimes } from "@/services/prayerService";

export default function PrayerTimeSection() {
  const [times, setTimes] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTimes = async () => {
      setLoading(true);
      // Kamu bisa ganti "Jakarta" sesuai lokasi Masjid Abu Ubaidah
      const data = await getPrayerTimes("Jakarta", "Indonesia");
      setTimes(data);
      setLoading(false);
    };

    fetchTimes();
  }, []);

  // Daftar sholat yang ingin kita pajang (sesuai nama dari API Aladhan)
  const prayerList = [
    { name: "Fajr", label: "Subuh" },
    { name: "Dhuhr", label: "Dzuhur" },
    { name: "Asr", label: "Ashar" },
    { name: "Maghrib", label: "Maghrib" },
    { name: "Isha", label: "Isya" },
  ];

  return (
    <section className="py-5 bg-light shadow-sm" id="prayer-times">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-success">Jadwal Sholat Hari Ini</h2>
          <p className="text-muted">Waktu sholat untuk wilayah Jakarta dan sekitarnya</p>
        </div>

        <div className="row g-3 justify-content-center">
          {loading ? (
            // Tampilan saat barang sedang dalam perjalanan (Loading)
            <div className="text-center p-5">
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : times ? (
            prayerList.map((p) => (
              <div className="col-6 col-md-2" key={p.name}>
                <div className="card border-0 rounded-4 shadow-sm text-center h-100">
                  <div className="card-body py-4">
                    <div className="avatar-sm mb-3 mx-auto">
                      <div className="avatar-title bg-success-subtle text-success rounded-circle fs-4">
                        <i className="ri-time-line"></i>
                      </div>
                    </div>
                    <h5 className="fs-14 text-uppercase fw-semibold text-muted mb-2">
                      {p.label}
                    </h5>
                    <h3 className="fw-bold mb-0 text-dark">{times[p.name]}</h3>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Jika kurir gagal (Error)
            <div className="alert alert-danger">Gagal memuat jadwal sholat.</div>
          )}
        </div>
      </div>
    </section>
  );
}