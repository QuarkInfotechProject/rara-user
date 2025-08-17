import { ComponentType } from "react";

export interface ContactInfo {
  icon: ComponentType<{ className?: string }>;
  text: string;
  href?: string;
  type: "location" | "email" | "phone";
}

export interface MenuItem {
  label: string;
  href: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface SocialLink {
  icon: ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

export interface Associate {
  src: string;
  alt: string;
  href?: string;
}

export interface CompanyInfo {
  regNumber: string;
  licenseNumber: string;
  mapEmbedUrl: string;
}

export interface Rating {
  value: number;
  totalReviews: number;
}

export interface Copyright {
  year: number;
  companyName: string;
  developer: string;
}

export interface FooterData {
  companyInfo: CompanyInfo;
  contactInfo: ContactInfo[];
  menuSections: MenuSection[];
  socialLinks: SocialLink[];
  associates: Associate[];
  rating: Rating;
  copyright: Copyright;
}
