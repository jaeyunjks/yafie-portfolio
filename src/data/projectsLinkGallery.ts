export type ProjectLinkGalleryItem = {
  label: string;
  href: string;
  tag?: string;
};

export const personalPortfolioLinkGalleryLinks: ProjectLinkGalleryItem[] = [
  {
    label: "Old Site",
    href: "https://yafie-portfolio.vercel.app",
    tag: "Legacy",
  },
  {
    label: "New Site",
    href: "https://yafie-portfolio-ten.vercel.app",
    tag: "Current",
  },
];
