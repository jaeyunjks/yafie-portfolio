export type SDSLinkGalleryItem = {
  label: string;
  href: string;
  tag?: string;
};

export const sdsLinkGalleryLinks: SDSLinkGalleryItem[] = [
  {
    label: "EOI Form",
    href: "https://sds-frontend-v4j2.onrender.com/sds-eoi-form",
    tag: "Client side",
  },
  {
    label: "Admin Page",
    href: "https://sds-frontend-v4j2.onrender.com/",
    tag: "Admin",
  },
  {
    label: "Student Page",
    href: "https://sds-frontend-v4j2.onrender.com/projects",
    tag: "Student",
  },
  {
    label: "GitHub Repo",
    href: "https://github.com/subject-modernization/sds-project-management-site",
    tag: "Private",
  },
];
