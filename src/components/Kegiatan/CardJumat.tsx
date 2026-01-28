// src/components/kegiatan/CardJumat.tsx

interface JumatProps {
  deskripsi: string;
  jadwal: string; // Misal: "Setiap Jumat, 12:00 WIB"
  tema?: string;  // Opsional, kalau mau nampilin tema khutbah minggu ini
}

export default function CardJumat({ deskripsi, jadwal, tema }: JumatProps) {
  return (
    <div className="col-md-6">
      <div className="p-4 rounded-4 border shadow-sm h-100 bg-white">
        <div className="d-flex justify-content-between align-items-start">
          <h5 className="fw-bold text-success">
            <i className="ri-community-line me-2"></i>Shalat Jumat
          </h5>
          <span className="badge bg-success-subtle text-success border-success-subtle">Rutin</span>
        </div>
        
        <p className="text-muted mt-2">
          {deskripsi}
        </p>
        
        {tema && (
          <div className="mb-3 p-2 bg-light rounded-3 border-start border-success border-4">
            <small className="text-uppercase fw-bold text-muted d-block" style={{ fontSize: '10px' }}>Tema Pekan Ini:</small>
            <span className="text-dark fw-semibold">{tema}</span>
          </div>
        )}

        <div className="d-flex align-items-center mt-auto">
          <span className="badge bg-light text-dark border">
            <i className="ri-time-line me-1"></i> {jadwal}
          </span>
        </div>
      </div>
    </div>
  );
}