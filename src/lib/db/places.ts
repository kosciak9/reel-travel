export interface Place {
  address: string | null;
  category: string;
  city?: string;
  date?: string;
  hasInstagram?: boolean;
  hasTikTok?: boolean;
  in_post: boolean;
  in_reel: boolean;
  opening_hours: string;
  outdoor: string;
  photos: Array<string>;
  place_name: string;
  short_description: string;
}
