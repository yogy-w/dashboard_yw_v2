"use client";

import React from "react";

export default function ContactPage() {
  return (
    <div className="flex-grow-1 bg-light">
      {/* 1. HERO SECTION */}
      <section className="py-5" style={{ backgroundColor: '#064e3b', paddingTop: '140px !important' }}>
        <div className="container py-4 text-center text-white">
          <h1 className="fw-bold display-5">Hubungi Kami</h1>
          <p className="opacity-75 lead">Layanan Informasi & Silaturahmi Masjid Abu Ubaidah</p>
          <div className="bg-warning mx-auto mt-3" style={{ width: '80px', height: '4px', borderRadius: '2px' }}></div>
        </div>
      </section>

      {/* 2. CONTACT INFO CARDS */}
      <section className="py-5" style={{ marginTop: '-50px' }}>
        <div className="container">
          <div className="row g-4 justify-content-center">
            {/* WHATSAPP */}
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4 p-4 text-center h-100">
                <div className="bg-success-subtle text-success mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px' }}>
                  <i className="ri-whatsapp-line fs-1"></i>
                </div>
                <h5 className="fw-bold">Layanan WhatsApp</h5>
                <p className="text-muted small">Respon cepat untuk pertanyaan seputar ibadah & kegiatan.</p>
                <a href="https://wa.me/628123456789" target="_blank" className="btn btn-success rounded-pill px-4 fw-bold">
                  Chat Sekarang
                </a>
              </div>
            </div>

            {/* EMAIL */}
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4 p-4 text-center h-100">
                <div className="bg-primary-subtle text-primary mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px' }}>
                  <i className="ri-mail-line fs-1"></i>
                </div>
                <h5 className="fw-bold">Email Resmi</h5>
                <p className="text-muted small">Untuk proposal kerjasama atau administrasi formal.</p>
                <a href="mailto:info@abuubaidah.com" className="fw-bold text-primary text-decoration-none">info@abuubaidah.com</a>
              </div>
            </div>

            {/* ALAMAT */}
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4 p-4 text-center h-100">
                <div className="bg-danger-subtle text-danger mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px' }}>
                  <i className="ri-map-pin-line fs-1"></i>
                </div>
                <h5 className="fw-bold">Lokasi Masjid</h5>
                <p className="text-muted small mb-0">Jl. Contoh No. 123, Kota Anda, Indonesia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FORM & MAPS SECTION */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5">
            {/* Form Kirim Pesan */}
            <div className="col-lg-6">
              <h3 className="fw-bold mb-4">Kirim Pesan</h3>
              <form>
                <div className="mb-3">
                  <label className="form-label small fw-bold">Nama Lengkap</label>
                  <input type="text" className="form-control rounded-3 py-2 border-light bg-light" placeholder="Masukkan nama Anda" />
                </div>
                <div className="mb-3">
                  <label className="form-label small fw-bold">Nomor WhatsApp</label>
                  <input type="text" className="form-control rounded-3 py-2 border-light bg-light" placeholder="0812..." />
                </div>
                <div className="mb-3">
                  <label className="form-label small fw-bold">Pesan Anda</label>
                  <textarea className="form-control rounded-3 py-2 border-light bg-light" rows={4} placeholder="Tuliskan pertanyaan atau saran..."></textarea>
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-3 py-2 fw-bold shadow-sm">
                  Kirim Pesan <i className="ri-send-plane-fill ms-2"></i>
                </button>
              </form>
            </div>

            {/* Google Maps Placeholder */}
            <div className="col-lg-6">
              <h3 className="fw-bold mb-4">Peta Lokasi</h3>
              <div className="rounded-4 overflow-hidden shadow-sm border" style={{ height: '350px' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.81956135000001!3d-6.194741399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTEnNDEuMSJTIDEwNsKwNDknMTAuNCJF!5e0!3m2!1sen!2sid!4v1600000000000!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MEDIA SOSIAL FOOTER */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h5 className="fw-bold mb-4">Ikuti Media Sosial Kami</h5>
          <div className="d-flex justify-content-center gap-4">
            <a href="#" className="text-danger fs-2"><i className="ri-instagram-fill"></i></a>
            <a href="#" className="text-primary fs-2"><i className="ri-facebook-circle-fill"></i></a>
            <a href="#" className="text-danger fs-2"><i className="ri-youtube-fill"></i></a>
          </div>
        </div>
      </section>
    </div>
  );
}