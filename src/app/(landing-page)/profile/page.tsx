"use client";

import React, { useEffect, useState } from "react";

export default function ProfilePage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ambil data dari Backend
    // URL: http://localhost:4000/api/profile
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/profile`)
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal ambil data profil:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Memuat...</span>
      </div>
    </div>
  );

  if (!data) return <div className="text-center py-5">Data profil tidak ditemukan.</div>;

  return (
    <div className="flex-grow-1">
      {/* 1. HERO SECTION */}
      <section className="py-5" style={{ backgroundColor: '#064e3b', paddingTop: '140px !important' }}>
        <div className="container py-5 text-center">
          <h1 className="display-4 fw-bold text-white uppercase ls-lg">
            {data.nama_masjid || "Profil Masjid"}
          </h1>
          <p className="lead text-white-50">Tentang Kami</p>
          <div className="bg-warning mx-auto mt-3" style={{ width: '80px', height: '4px', borderRadius: '2px' }}></div>
        </div>
      </section>

      {/* 2. SEJARAH */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-7">
              <h2 className="fw-bold text-dark mb-4">Sejarah Singkat</h2>
              <p className="lh-lg text-muted">{data.sejarah}</p>
            </div>
            <div className="col-md-5">
              <img 
                src={data.foto_sejarah || "https://via.placeholder.com/500x300"} 
                alt="Foto Sejarah" 
                className="img-fluid rounded-4 shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISI & MISI (Data Dinamis) */}
      <section className="py-5" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <h4 className="fw-bold"><i className="ri-eye-line me-2 text-success"></i>Visi</h4>
              <p className="text-muted">{data.visi}</p>
            </div>
            <div className="col-md-6">
              <h4 className="fw-bold"><i className="ri-rocket-line me-2 text-success"></i>Misi</h4>
              <ul className="text-muted">
                {data.misi?.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STRUKTUR (Data Dinamis dari JSONB) */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h3 className="fw-bold mb-5">Struktur Kepengurusan</h3>
          <div className="row g-4 justify-content-center">
            {data.struktur_organisasi?.map((p: any, i: number) => (
              <div className="col-md-3" key={i}>
                <div className="card border-0 shadow-sm rounded-4 p-4">
                  <div className="mx-auto mb-3 bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                    <i className={`${p.ikon} text-${p.warna} fs-1`}></i>
                  </div>
                  <h5 className="fw-bold mb-1">{p.nama}</h5>
                  <span className={`badge bg-${p.warna}-subtle text-${p.warna} rounded-pill`}>{p.jabatan}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 5. FASILITAS (Data Dinamis dari JSONB) */}
      <section className="py-5" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="fw-bold">Fasilitas Masjid</h3>
            <p className="text-muted">Sarana pendukung ibadah dan kenyamanan jamaah</p>
            <div className="bg-success mx-auto mt-2" style={{ width: '50px', height: '3px' }}></div>
          </div>

          <div className="row g-4">
            {data.fasilitas?.map((f: any, i: number) => (
              <div className="col-md-3 col-6" key={i}>
                <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden card-hover">
                  {/* Foto Fasilitas */}
                  <div style={{ height: '180px', overflow: 'hidden' }}>
                    <img 
                      src={f.foto || "https://via.placeholder.com/300x200?text=Fasilitas"} 
                      alt={f.nama}
                      className="w-100 h-100 object-fit-cover transition-transform"
                      style={{ transition: 'transform 0.3s ease' }}
                    />
                  </div>
                  {/* Nama Fasilitas */}
                  <div className="card-body text-center p-3">
                    <h6 className="fw-bold mb-0 text-dark">{f.nama}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>
    </div>
  );
}