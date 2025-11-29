export interface Article {
  id?: string;
  title: string;          // titlul articolului
  description: string;    // descriere scurtă (meta description)
  content: string;        // conținutul complet
  categoryId: string;     // categoria din care face parte
  imagePath: string;      // imagine asociată

  // câmpuri noi pentru SEO
  tags?: string[];        // cuvinte cheie asociate articolului
  slug: string;          // URL-friendly identifier (ex: "trimestrul-1-ghid")
  summary?: string;       // rezumat scurt (pentru meta description fallback)
}
