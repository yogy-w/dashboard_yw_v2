// src/types/kajianTypes.ts

export type Kajian = {
  id: string;
  title: string;
  pemateri: string; // Sesuai data API localhost:4000
  phone: string;    // Sesuai data API localhost:4000
  jadwal: string;   // Sesuai data API localhost:4000
  is_active: boolean;
  imageUrl: string; // URL poster pengajian
  media?: {
    url: string;
  };
};

// Bungkus paket dari API
export interface KajianListResponse {
  success: boolean;
  data: Kajian[];
  message?: string;
}