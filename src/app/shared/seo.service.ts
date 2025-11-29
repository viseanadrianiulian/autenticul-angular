import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoData {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(private title: Title, private meta: Meta) {}

  set(data: SeoData) {
    if (data.title) this.title.setTitle(data.title);
    if (data.description) this.meta.updateTag({ name: 'description', content: data.description });
    if (data.keywords?.length) this.meta.updateTag({ name: 'keywords', content: data.keywords.join(', ') });

    // canonical
    const existing = document.querySelector("link[rel='canonical']");
    if (existing && data.canonical) {
      existing.setAttribute('href', data.canonical);
    } else if (!existing && data.canonical) {
      const link: HTMLLinkElement = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', data.canonical);
      document.head.appendChild(link);
    }
  }
}
