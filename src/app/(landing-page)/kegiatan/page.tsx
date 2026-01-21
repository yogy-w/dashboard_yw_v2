"use client";

import React from "react";

export default function LaporanKegiatanPage() {
  return (
    <div className="flex-grow-1">
      {/* 1. HERO SECTION */}
      <section className="py-5" style={{ backgroundColor: '#064e3b', paddingTop: '140px !important' }}>
        <div className="container py-5 text-center">
          <h1 className="display-4 fw-bold text-white uppercase ls-lg">Kegiatan Masjid</h1>
          <p className="lead text-white-50">Jadwal Ibadah Rutin & Dokumentasi Syiar Dakwah</p>
          <div className="bg-warning mx-auto mt-3" style={{ width: '80px', height: '4px', borderRadius: '2px' }}></div>
        </div>
      </section>

      {/* 2. SECTION: IBADAH UTAMA (Background Putih) */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="d-flex align-items-center mb-4">
             <div className="bg-success p-2 rounded-3 me-3 text-white">
               <i className="ri-mosque-line fs-3"></i>
             </div>
             <h3 className="fw-bold mb-0">Ibadah Utama</h3>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="p-4 rounded-4 border shadow-sm h-100">
                <h5 className="fw-bold text-success"><i className="ri-time-line me-2"></i>Shalat Fardhu</h5>
                <p className="text-muted">Pelaksanaan shalat berjamaah 5 waktu setiap hari diimami oleh Imam Rawatib dengan makhraj dan tajwid yang terjaga.</p>
                <span className="badge bg-light text-dark border">Setiap Hari</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-4 rounded-4 border shadow-sm h-100">
                <h5 className="fw-bold text-success"><i className="ri-community-line me-2"></i>Shalat Jumat</h5>
                <p className="text-muted">Ibadah shalat jumat rutin dengan khutbah bertemakan Tazkiyatun Nufus dan Aqidah yang bermanhaj Salafus Shalih.</p>
                <span className="badge bg-light text-dark border">Setiap Jumat</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION: KAJIAN RUTIN (Background Abu Pucat) */}
      <section className="py-5" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="d-flex align-items-center mb-4">
             <div className="bg-primary p-2 rounded-3 me-3 text-white">
               <i className="ri-book-open-line fs-3"></i>
             </div>
             <h3 className="fw-bold mb-0">Program Kajian</h3>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 h-100 p-3">
                <h6 className="fw-bold text-primary">Kajian Bapak-Bapak</h6>
                <p className="small text-muted mb-3">Pembahasan Kitab Tauhid & Fiqih Ibadah untuk meningkatkan pemahaman agama para ayah.</p>
                <div className="mt-auto"><span className="badge bg-primary-subtle text-primary">Setiap Minggu</span></div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 h-100 p-3">
                <h6 className="fw-bold text-primary">Kajian Ibu-Ibu</h6>
                <p className="small text-muted mb-3">Kajian khusus muslimah membahas Adab, Akhlak, dan Manajemen Rumah Tangga Islami.</p>
                <div className="mt-auto"><span className="badge bg-primary-subtle text-primary">Setiap Sabtu</span></div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 h-100 p-3">
                <h6 className="fw-bold text-primary">TPA Anak-Anak</h6>
                <p className="small text-muted mb-3">Pendidikan Al-Qur'an, hafalan doa, dan kisah Nabi untuk membina generasi Rabbani.</p>
                <div className="mt-auto"><span className="badge bg-primary-subtle text-primary">Setiap Jumat</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: PHBI & SOSIAL (Background Putih) */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="d-flex align-items-center mb-4">
             <div className="bg-warning p-2 rounded-3 me-3 text-dark">
               <i className="ri-heart-pulse-line fs-3"></i>
             </div>
             <h3 className="fw-bold mb-0">PHBI & Sosial</h3>
          </div>
          <div className="p-4 rounded-4 border-start border-4 border-warning bg-light">
             <h5 className="fw-bold">Hari Besar Islam & Santunan</h5>
             <p className="text-muted mb-0">Kegiatan insidental seperti Idul Fitri, Idul Adha, Tebar Qurban, serta santunan rutin bagi yatim dan dhuafa di sekitar Masjid Abu Ubaidah.</p>
          </div>
        </div>
      </section>
    </div>
  );
}