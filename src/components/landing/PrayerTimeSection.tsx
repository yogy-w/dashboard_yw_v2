"use client";

import { useEffect, useState } from "react";
import { getPrayerTimes } from "@/services/prayerService";

export default function PrayerTimeSection() {
  const [times, setTimes] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTimes = async () => {
      setLoading(true);
      const data = await getPrayerTimes("Jakarta", "Indonesia");
      setTimes(data);
      setLoading(false);
    };
    fetchTimes();
  }, []);

  const prayerList = [
    { name: "Fajr", label: "Subuh", icon: "ri-sun-foggy-line" },
    { name: "Dhuhr", label: "Dzuhur", icon: "ri-sun-fill" },
    { name: "Asr", label: "Ashar", icon: "ri-sun-cloudy-line" },
    { name: "Maghrib", label: "Maghrib", icon: "ri-moon-clear-line" },
    { name: "Isha", label: "Isya", icon: "ri-moon-fill" },
  ];

  return (
    // Gunakan py-3 dan mb-0 untuk memastikan mepet dengan HeroSection di bawahnya
    <section className="py-3 mb-0" id="prayer-times">
      <div className="container">
        <div className="row g-2 justify-content-center">
          {loading ? (
            <div className="text-center p-3">
              <div className="spinner-border text-success spinner-border-sm" role="status"></div>
            </div>
          ) : times ? (
            prayerList.map((p) => (
              <div className="col-6 col-md-2" key={p.name}>
                <div className="card border-0 rounded-4 shadow-sm text-center prayer-card h-100 bg-white">
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center justify-content-center mb-2">
                      <div className="avatar-xs">
                        <div className="avatar-title bg-success-subtle text-success rounded-circle fs-5">
                          <i className={p.icon}></i>
                        </div>
                      </div>
                    </div>
                    <h6 className="text-uppercase fw-bold text-muted mb-1" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>
                      {p.label}
                    </h6>
                    <h4 className="fw-bold mb-0 text-dark">{times[p.name]}</h4>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="alert alert-danger py-2 small">Gagal memuat jadwal.</div>
          )}
        </div>
      </div>

      <style jsx>{`
        .prayer-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .prayer-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
          border: 1px solid #0ab39c !important;
        }
      `}</style>
    </section>
  );
}