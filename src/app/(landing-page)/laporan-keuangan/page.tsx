"use client";

import React, { useState } from "react";
import Link from "next/link";

/**
 * HALAMAN LAPORAN KEUANGAN - MASJID ABU UBAIDAH
 * Fitur: Toggle Detail per Kas, Progress Tracker, & Rekening Bank
 */
export default function LaporanKeuanganPage() {
  const [openDetail, setOpenDetail] = useState<string | null>(null);

  // State Filter Independen untuk masing-masing Kas
  const [filters, setFilters] = useState({
    dkm: { month: "Januari", year: "2026" },
    pembangunan: { month: "Januari", year: "2026" },
    tpa: { month: "Januari", year: "2026" }
  });

  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const years = ["2026", "2025"];

  const handleFilterChange = (kas: string, field: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [kas]: { ...prev[kas as keyof typeof prev], [field]: value }
    }));
  };

  const toggleDetail = (kasName: string) => {
    setOpenDetail(openDetail === kasName ? null : kasName);
  };

  // Data dummy untuk proyek (Nantinya dari API port 4000)
  const proyekBerjalan = [
    { id: 'kanopi', title: 'Pembangunan Kanopi Masjid', target: 30000000, terkumpul: 12000000, color: 'warning', icon: 'ri-umbrella-line' },
    { id: 'karpet', title: 'Pengadaan Karpet Raudhah', target: 50000000, terkumpul: 45000000, color: 'success', icon: 'ri-ink-bottle-line' }
  ];

  const proyekSelesai = [
    { id: 'toilet', title: 'Renovasi Toilet & Tempat Wudhu', total: 25000000, date: 'Desember 2025' },
    { id: 'sound', title: 'Upgrade Sound System Utama', total: 15000000, date: 'Oktober 2025' }
  ];

  return (
    <div className="flex-grow-1 bg-light">
      {/* 1. HERO SECTION */}
      <section className="py-5" style={{ backgroundColor: '#064e3b', paddingTop: '140px !important' }}>
        <div className="container py-4 text-center text-white">
          <h1 className="display-4 fw-bold text-white uppercase ls-lg">Laporan Keuangan</h1>
          <p className="lead text-white-50">Rincian Pemasukan & Pengeluaran Kas Masjid</p>
          <div className="bg-warning mx-auto mt-3" style={{ width: '80px', height: '4px', borderRadius: '2px' }}></div>
        </div>
      </section>

      {/* 2. WIDGET SALDO DENGAN DETAIL TRANSAKSI BULANAN */}
      <section className="py-4" style={{ marginTop: '-60px' }}>
        <div className="container">
          <div className="row g-4">
            
            {[
              { id: 'dkm', title: 'KAS DKM', color: 'success', icon: 'ri-settings-4-line', amount: '12.450.000' },
              { id: 'pembangunan', title: 'KAS PEMBANGUNAN', color: 'primary', icon: 'ri-hammer-line', amount: '45.000.000' },
              { id: 'tpa', title: 'KAS TPA / ANAK', color: 'info', icon: 'ri-book-open-line', amount: '8.200.000' }
            ].map((kas) => (
              <div className="col-lg-4" key={kas.id}>
                <div className={`card border-0 shadow-lg rounded-4 p-4 bg-white border-bottom border-4 border-${kas.color} h-100`}>
                  <div className="d-flex justify-content-between mb-3">
                    <div className={`bg-${kas.color}-subtle p-2 rounded-3 text-${kas.color}`}>
                      <i className={`${kas.icon} fs-3`}></i>
                    </div>
                    <button 
                      onClick={() => toggleDetail(kas.id)}
                      className={`btn btn-sm rounded-pill px-3 fw-bold ${openDetail === kas.id ? `btn-${kas.color} text-white` : `btn-outline-${kas.color}`}`}
                    >
                      {openDetail === kas.id ? 'Tutup Rincian' : 'Lihat Rincian'}
                    </button>
                  </div>
                  <p className="text-muted small fw-bold mb-1">{kas.title}</p>
                  <h3 className="fw-bold text-dark mb-0">Rp {kas.amount}</h3>

                  {/* BOX RINCIAN TRANSAKSI */}
                  {openDetail === kas.id && (
                    <div className="mt-4 pt-3 border-top animate-fade-in">
                      
                      {/* FILTER BULAN & TAHUN */}
                      <div className="d-flex gap-2 mb-3">
                        <select 
                          className="form-select form-select-sm border-0 bg-light rounded-pill px-3"
                          value={filters[kas.id as keyof typeof filters].month}
                          onChange={(e) => handleFilterChange(kas.id, 'month', e.target.value)}
                        >
                          {months.map(m => <option key={m} value={m}>{m}</option>)}
                        </select>
                        <select 
                          className="form-select form-select-sm border-0 bg-light rounded-pill px-3"
                          value={filters[kas.id as keyof typeof filters].year}
                          onChange={(e) => handleFilterChange(kas.id, 'year', e.target.value)}
                        >
                          {years.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                      </div>

                      {/* LIST TRANSAKSI BULANAN */}
                      <div className="rounded-3 border overflow-hidden">
                        <div className="bg-light p-2 small fw-bold text-center border-bottom text-muted">
                          Riwayat {filters[kas.id as keyof typeof filters].month} {filters[kas.id as keyof typeof filters].year}
                        </div>
                        <div className="table-responsive" style={{ maxHeight: '250px' }}>
                          <table className="table table-sm table-hover mb-0" style={{ fontSize: '0.85rem' }}>
                            <tbody>
                              {/* Contoh Data Pemasukan */}
                              <tr>
                                <td className="ps-3 py-2">
                                  <div className="fw-bold">Infaq Jamaah</div>
                                  <small className="text-muted">10 {filters[kas.id as keyof typeof filters].month.substring(0,3)}</small>
                                </td>
                                <td className="text-end pe-3 py-2 text-success fw-bold">+2.5M</td>
                              </tr>
                              {/* Contoh Data Pengeluaran */}
                              <tr>
                                <td className="ps-3 py-2">
                                  <div className="fw-bold">Biaya Kebersihan</div>
                                  <small className="text-muted">15 {filters[kas.id as keyof typeof filters].month.substring(0,3)}</small>
                                </td>
                                <td className="text-end pe-3 py-2 text-danger fw-bold">-500K</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* Ringkasan Akhir di bawah Tabel */}
                        <div className={`p-2 bg-${kas.color} bg-opacity-10 text-${kas.color} small text-center fw-bold`}>
                          <p>Total Saldo Bulan Ini: Rp 2.000.000</p>
                          <p>Total Pemasukan Bulan Ini: Rp 5.000.000</p>
                          <p>Total Pengeluaran Bulan Ini: Rp 3.000.000</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 3. SECTION: PROYEK SEDEKAH JARIYAH */}
      <section className="py-5 bg-white">
        <div className="container">
          
          {/* A. PROYEK SEDANG BERLANGSUNG */}
          <div className="text-center mb-5">
            <h3 className="fw-bold">Proyek Sedang Berlangsung</h3>
            <p className="text-muted">Mari ambil bagian dalam amal jariyah yang masih terbuka</p>
          </div>

          <div className="row g-4 mb-5">
            {proyekBerjalan.map((p) => (
              <div className="col-lg-6" key={p.id}>
                <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-light border-start border-5 border-warning">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <h5 className="fw-bold mb-1"><i className={`${p.icon} me-2 text-${p.color}`}></i>{p.title}</h5>
                      <div className="progress my-3" style={{ height: '10px', borderRadius: '10px' }}>
                        <div 
                          className={`progress-bar progress-bar-striped progress-bar-animated bg-${p.color}`} 
                          style={{ width: `${(p.terkumpul/p.target)*100}%` }}
                        ></div>
                      </div>
                      <div className="d-flex justify-content-between small fw-bold mb-3">
                        <span>Rp {p.terkumpul.toLocaleString()}</span>
                        <span className="text-muted">Target: Rp {p.target.toLocaleString()}</span>
                      </div>
                      {/* LINK KE DETAIL PAGE */}
                      <Link href={`/laporan-keuangan/proyek/${p.id}`} className="btn btn-sm btn-dark rounded-pill px-4">
                        Lihat Detail Proyek <i className="ri-arrow-right-line ms-1"></i>
                      </Link>
                    </div>
                    <div className="col-4 text-center">
                      <h3 className="fw-black text-warning mb-0">{Math.round((p.terkumpul/p.target)*100)}%</h3>
                      <small className="fw-bold text-muted">TERCAPAI</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <hr className="my-5 opacity-25" />

          {/* B. PROYEK SUDAH SELESAI */}
          <div className="text-center mb-4">
            <h4 className="fw-bold">Alhamdulillah, Telah Selesai</h4>
            <p className="text-muted">Daftar proyek yang telah tuntas berkat dukungan Anda</p>
          </div>

          <div className="row g-3">
            {proyekSelesai.map((p) => (
              <div className="col-md-6 col-lg-4" key={p.id}>
                <div className="p-3 rounded-4 border bg-white d-flex align-items-center justify-content-between shadow-sm">
                  <div>
                    <h6 className="fw-bold mb-0 text-dark">{p.title}</h6>
                    <small className="text-muted">{p.date}</small>
                  </div>
                  <div className="text-end">
                    <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2">
                       Selesai <i className="ri-checkbox-circle-line ms-1"></i>
                    </span>
                    {/* Link ke detail arsip jika diperlukan */}
                    <Link href={`/laporan-keuangan/proyek/${p.id}`} className="d-block small text-primary mt-1 text-decoration-none">
                      Arsip <i className="ri-external-link-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* 4. CALL TO ACTION (REKENING) */}
      <section className="py-5">
        <div className="container text-center">
          <div className="p-5 rounded-5 text-white shadow-lg" style={{ backgroundColor: '#064e3b' }}>
            <h2 className="fw-bold mb-3">Salurkan Infaq & Sedekah</h2>
            <p className="opacity-75 mb-5 mx-auto" style={{ maxWidth: '600px' }}>Setiap rupiah yang Anda berikan menjadi investasi akhirat untuk kemakmuran Masjid Abu Ubaidah.</p>
            
            <div className="row g-3 justify-content-center text-dark">
              <div className="col-md-5">
                <div className="bg-white p-4 rounded-4 shadow-sm h-100">
                  <small className="text-muted fw-bold d-block mb-2">BSI (OPERASIONAL & TPA)</small>
                  <h4 className="fw-bold mb-3">7700 1234 56</h4>
                  <button className="btn btn-sm btn-success rounded-pill px-4" onClick={() => navigator.clipboard.writeText('7700123456')}>
                    <i className="ri-file-copy-line me-2"></i>Salin Rekening
                  </button>
                </div>
              </div>
              <div className="col-md-5">
                <div className="bg-white p-4 rounded-4 shadow-sm h-100 border-start border-4 border-warning">
                  <small className="text-muted fw-bold d-block mb-2">BSI (PEMBANGUNAN & KANOPI)</small>
                  <h4 className="fw-bold mb-3">7700 9876 54</h4>
                  <button className="btn btn-sm btn-warning rounded-pill px-4 fw-bold" onClick={() => navigator.clipboard.writeText('7700987654')}>
                    <i className="ri-file-copy-line me-2"></i>Salin Rekening
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .transition-all {
          transition: all 0.3s ease;
        }
        .ls-lg { letter-spacing: 2px; }
      `}</style>
    </div>
  );
}