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
    <section className="py-0 mb-0 prayer-section-bg" id="prayer-times">
      <div className="container">
        {/* Badge Header */}
        <div className="text-center mb-3">
          <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill small fw-bold">
            <i className="ri-time-line me-1"></i> JADWAL SHALAT HARI INI
          </span>
        </div>

        <div className="row g-2 justify-content-center">
          {loading ? (
            <div className="text-center p-3">
              <div className="spinner-border text-success spinner-border-sm" role="status"></div>
            </div>
          ) : times ? (
            prayerList.map((p) => (
              <div className="col-6 col-md-2" key={p.name}>
                <div className="card border-0 rounded-4 shadow-sm text-center prayer-card h-100">
                  <div className="card-body p-3 d-flex flex-column align-items-center justify-content-center">
                    
                    {/* Icon Container */}
                    <div className="avatar-sm mb-2">
                      <div className="avatar-title  bg-opacity-100 text-white rounded-circle fs-4">
                        <i className={p.icon}></i>
                      </div>
                    </div>

                    {/* Label (Subuh, Dzuhur, dsb) */}
                    <h6 className="text-uppercase fw-bold prayer-label mb-1">
                      {p.label}
                    </h6>

                    {/* Jam Shalat */}
                    <h4 className="fw-bold mb-0 prayer-time">{times[p.name]}</h4>
                    
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
        .prayer-section-bg {
          background-color: #f8fafc;
          border-bottom: 1px solid #edf2f7;
        }

        .prayer-card {
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          cursor: pointer;
          border: none !important;
          background: #2E7D3D !important; /* Hijau Utama */
        }

        /* PERBAIKAN WARNA TULISAN JADI PUTIH */
        .prayer-label {
          color: rgba(255, 255, 255, 0.8) !important;
          font-size: 0.7rem;
          letter-spacing: 1px;
        }

        .prayer-time {
          color: #ffffff !important;
          font-size: 1.25rem;
        }

        .avatar-title {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* HOVER EFFECT */
        .prayer-card:hover {
          transform: translateY(-5px);
          background: #1B4332 !important; /* Hijau lebih gelap saat hover */
          box-shadow: 0 10px 20px rgba(46, 125, 61, 0.2) !important;
        }

        .prayer-card:hover .avatar-title {
          background: #ffffffff !important;
          color: #1B4332 !important;
        }
      `}</style>
    </section>
  );
} 