// src/types/bannerTypes.ts

export type Banner = {
  id: string;
  title: string;
  caption: string;
  link_url: string | null;
  media_id?: string | null;
  is_active: boolean;
  order_index: number;
  created_at?: string;
  updated_at?: string; 

  Media?:{  id: string;
  filename: string | null;
  url: string | null;
}| null;
};

export type BannerListResponse = {
  success: boolean;
  data: Banner[];
};

export type BannerSingleResponse = {
  success: boolean;
  data: Banner;
};
