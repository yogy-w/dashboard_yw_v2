"use client";

import React, { useEffect, useState } from "react";
import { Kajian } from "@/types/kajianTypes";
import { fetchMainKajian } from "@/services/kajianService";

/**
 * KOMPONEN JADWAL KAJIAN - MASJID ABU UBAIDAH
 * Tampilan: Horizontal (4 Kolom Sejajar di Laptop)
 */
export default function KajianSection() {
  const [kajianList, setKajianList] = useState<Kajian[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Kurir (Service) mengambil data dari port 4000/api
    fetchMainKajian().then((data) => {
      setKajianList(data);
      setLoading(false);
    });
  }, []);

  // Jika data kosong setelah loading, seksi ini tidak akan muncul (rapi)
  if (!loading && kajianList.length === 0) return null;

  return (
    <section className="py-5 bg-light" id="kajian">
      <div className="container">
        
        {/* HEADER SEKSI */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase">Agenda Kajian Rutin</h2>
          <div className="bg-success mx-auto" style={{ width: '60px', height: '4px', borderRadius: '10px' }}></div>
          <p className="text-muted mt-3">Mari menuntut ilmu di Masjid Abu Ubaidah Bin Al Jarrah</p>
        </div>

        {/* GRID SISTEM: col-lg-3 artinya membagi 12 unit menjadi 4 kolom (12/3 = 4) */}
        <div className="row g-4 justify-content-center">
          {loading ? (
            <div className="text-center p-5">
              <div className="spinner-border text-success" role="status"></div>
            </div>
          ) : (
            kajianList.map((item) => (
              <div className="col-xl-3 col-lg-3 col-md-6 col-12" key={item.id}>
                
                {/* KARTU KAJIAN */}
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover-effect">
                  
                  {/* FOTO POSTER KAJIAN */}
                  <div style={{ height: '180px', position: 'relative', overflow: 'hidden' }}>
                    <img 
                      src={item.imageUrl || "/images/default-kajian.jpg"} 
                      alt={item.title} 
                      className="w-100 h-100" 
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="position-absolute top-0 end-0 m-2">
                      <span className="badge bg-success shadow">Aktif</span>
                    </div>
                  </div>

                  {/* DETAIL INFORMASI */}
                  <div className="card-body p-4">
                    {/* Judul Kajian (Maksimal 2 baris agar kartu tetap sejajar tinggi) */}
                    <h6 className="fw-bold text-dark mb-3" style={{ 
                      display: '-webkit-box', 
                      WebkitLineClamp: 2, 
                      WebkitBoxOrient: 'vertical', 
                      overflow: 'hidden',
                      height: '2.5rem' 
                    }}>
                      {item.title}
                    </h6>

                    <div className="vstack gap-2 text-muted small">
                      <div className="d-flex align-items-center">
                        <i className="ri-user-voice-line me-2 text-success"></i>
                        <span>{item.pemateri}</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="ri-calendar-todo-line me-2 text-success"></i>
                        <span>{item.jadwal}</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="ri-whatsapp-line me-2 text-success"></i>
                        <span>{item.phone}</span>
                      </div>
                    </div>

                    {/* TOMBOL AKSI */}
                    <div className="mt-4 pt-2 border-top">
                      <a 
                        href={`https://wa.me/${item.phone.replace(/\D/g, '')}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline-success btn-sm w-100 rounded-pill"
                      >
                        Info Lebih Lanjut
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* STYLE KHUSUS UNTUK EFEK HOVER */}
      <style jsx>{`
        .card-hover-effect {
          transition: all 0.3s ease-in-out;
        }
        .card-hover-effect:hover {
          transform: translateY(-8px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,0.12) !important;
          border: 1px solid #0ab39c !important;
        }
      `}</style>
    </section>
  );
}