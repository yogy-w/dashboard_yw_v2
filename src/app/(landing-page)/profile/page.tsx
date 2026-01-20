"use client";

import React from "react";

export default function ProfilePage() {
  return (
    <div className="flex-grow-1">
      {/* 1. HERO SECTION (Warna Hijau Solid - Tidak Nabrak) */}
      <section className="py-5" style={{ backgroundColor: '#064e3b', paddingTop: '120px !important' }}>
        <div className="container py-4 text-center">
          <span className="badge bg-white bg-opacity-25 text-white px-3 py-2 rounded-pill small fw-bold mb-3">
            TENTANG KAMI
          </span>
          <h1 className="display-4 fw-bold text-white mb-0">Profil Masjid</h1>
          <div className="bg-warning mx-auto mt-3" style={{ width: '60px', height: '4px', borderRadius: '2px' }}></div>
        </div>
      </section>

      {/* 2. SEJARAH & FILOSOFI (Background Putih Bersih) */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row align-items-center g-5">
                <div className="col-md-7">
                  <h2 className="fw-bold text-dark mb-4">Sejarah Singkat</h2>
                  <p className="lh-lg text-muted">
                    Masjid ini mengambil nama dari sahabat Nabi yang mulia, <strong>Abu Ubaidah bin al-Jarrah</strong>. Beliau dijuluki oleh Rasulullah ﷺ sebagai sosok kepercayaan umat. 
                  </p>
                  <p className="lh-lg text-muted">
                    Semangat kejujuran dan amanah inilah yang kami jadikan pondasi dalam setiap pelayanan jamaah dan pengelolaan dana umat di Masjid Abu Ubaidah Jakarta.
                  </p>
                </div>
                <div className="col-md-5">
                  <div className="p-4 rounded-4 shadow-sm border-0" style={{ backgroundColor: '#f0fdf4' }}>
                    <h5 className="fw-bold text-success mb-3"><i className="ri-microchip-line me-2"></i>Modern & Transparan</h5>
                    <p className="small text-muted mb-0">Kami menggunakan sistem manajemen digital (API localhost:4000) untuk memastikan setiap rupiah infaq Anda tercatat secara terbuka.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISI & MISI (Background Abu-abu Pucat) */}
      <section className="py-5" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="fw-bold">Visi & Misi</h3>
          </div>
          <div className="row g-4">
            {/* CARD VISI */}
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm p-4 rounded-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-success text-white p-2 rounded-3 me-3">
                    <i className="ri-eye-line fs-3"></i>
                  </div>
                  <h4 className="fw-bold mb-0">Visi</h4>
                </div>
                <p className="text-muted">Menjadi pusat ibadah yang unggul dalam pelayanan dan dakwah bermanhaj salaf di wilayah Jakarta.</p>
              </div>
            </div>
            {/* CARD MISI */}
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm p-4 rounded-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-success text-white p-2 rounded-3 me-3">
                    <i className="ri-rocket-line fs-3"></i>
                  </div>
                  <h4 className="fw-bold mb-0">Misi</h4>
                </div>
                <ul className="text-muted ps-3">
                  <li>Menyelenggarakan kajian rutin harian dan mingguan.</li>
                  <li>Mengelola ZISWAF secara profesional dan transparan.</li>
                  <li>Menyediakan fasilitas ibadah yang nyaman dan bersih.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 4. STRUKTUR ORGANISASI SECTION */}
<section className="py-5 bg-white">
  <div className="container">
    <div className="text-center mb-5">
      <h3 className="fw-bold">Struktur Kepengurusan</h3>
      <p className="text-muted">Dewan Kemakmuran Masjid (DKM) Abu Ubaidah Bin Al Jarrah</p>
    </div>

    <div className="row g-4 justify-content-center">
      {/* KETUA DKM */}
      <div className="col-md-4 col-lg-3">
        <div className="card border-0 shadow-sm rounded-4 text-center p-4">
          <div className="mx-auto mb-3 bg-light rounded-circle d-flex align-items-center justify-content-center shadow-inner" style={{ width: '100px', height: '100px' }}>
            <i className="ri-user-star-fill text-success" style={{ fontSize: '3rem' }}></i>
          </div>
          <h5 className="fw-bold mb-1">Ust. Fulan, M.A.</h5>
          <span className="badge bg-success-subtle text-success rounded-pill px-3">Ketua DKM</span>
        </div>
      </div>

      {/* BENDAHARA (Penting untuk Transparansi) */}
      <div className="col-md-4 col-lg-3">
        <div className="card border-0 shadow-sm rounded-4 text-center p-4">
          <div className="mx-auto mb-3 bg-light rounded-circle d-flex align-items-center justify-content-center shadow-inner" style={{ width: '100px', height: '100px' }}>
            <i className="ri-wallet-3-fill text-primary" style={{ fontSize: '3rem' }}></i>
          </div>
          <h5 className="fw-bold mb-1">Bpk. Abdullah</h5>
          <span className="badge bg-primary-subtle text-primary rounded-pill px-3">Bendahara</span>
        </div>
      </div>

      {/* SEKRETARIS */}
      <div className="col-md-4 col-lg-3">
        <div className="card border-0 shadow-sm rounded-4 text-center p-4">
          <div className="mx-auto mb-3 bg-light rounded-circle d-flex align-items-center justify-content-center shadow-inner" style={{ width: '100px', height: '100px' }}>
            <i className="ri-file-list-3-fill text-info" style={{ fontSize: '3rem' }}></i>
          </div>
          <h5 className="fw-bold mb-1">Bpk. Abdurrahman</h5>
          <span className="badge bg-info-subtle text-info rounded-pill px-3">Sekretaris</span>
        </div>
      </div>
      
      {/* BIDANG DAKWAH */}
      <div className="col-md-4 col-lg-3">
        <div className="card border-0 shadow-sm rounded-4 text-center p-4">
          <div className="mx-auto mb-3 bg-light rounded-circle d-flex align-items-center justify-content-center shadow-inner" style={{ width: '100px', height: '100px' }}>
            <i className="ri-micro-fill text-danger" style={{ fontSize: '3rem' }}></i>
          </div>
          <h5 className="fw-bold mb-1">Ust. Fulan</h5>
          <span className="badge bg-danger-subtle text-danger rounded-pill px-3">Bidang Dakwah</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* 6. MINI GALLERY SECTION */}
<section className="py-5 bg-white">
  <div className="container">
    <div className="text-center mb-5">
      <h3 className="fw-bold">Fasilitas Masjid</h3>
      <p className="text-muted">Kenyamanan jamaah adalah prioritas pelayanan kami</p>
    </div>
    <div className="row g-3">
      {/* Gunakan placeholder atau foto asli masjid nanti */}
      {[1, 2, 3, 4].map((i) => (
        <div className="col-md-3" key={i}>
          <div className="bg-light rounded-4 d-flex align-items-center justify-content-center" style={{ height: '200px' }}>
            <i className="ri-image-2-fill text-muted opacity-25 display-3"></i>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
}