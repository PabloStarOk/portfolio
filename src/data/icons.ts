import { getCollection } from "astro:content";

const techIconImports = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/technologies/*.svg",
  { eager: true }
);

const techIconsCollection = await getCollection("technologyIcons");

// Technology icons
export const techIconsMap = new Map<
  string,
  { metadata: ImageMetadata; alt: string }
>();
techIconsCollection.map(({ id, data: { src, alt } }) => {
  const iconImport = techIconImports[src];
  if (!iconImport) {
    throw new Error(`Technology icon import not found for src: ${src}`);
  }

  techIconsMap.set(id, {
    metadata: iconImport.default,
    alt: alt,
  });
});

// Project icons
export const projectIconsImports = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/projects/icons/*.svg",
  { eager: true }
);
