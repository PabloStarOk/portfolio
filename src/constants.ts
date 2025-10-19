import { getCollection } from "astro:content";

// Project assets directories
export const projectsAssetsDir = "/src/assets/projects/";
export const projectsIconsDir = projectsAssetsDir + "icons/";
export const projectsThumbnailsDir = projectsAssetsDir + "thumbnails/";

const techIconImports = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/technologies/*.svg",
  { eager: true }
);

// Technology icons src and alt map
const techIconsCollection = await getCollection("technologyIcons")
export const techIconsMap = new Map<string, { metadata: ImageMetadata, alt: string }>();
techIconsCollection.map(({ id, data: { src, alt } }) => {
  const iconImport = techIconImports[src];
  if (!iconImport) {
    throw new Error(`Technology icon import not found for src: ${src}`);
  }

  techIconsMap.set(id, {
    metadata: iconImport.default,
    alt: alt
  });
});


// Project icons imports
export const projectIconsImports = import.meta.glob<{ default: ImageMetadata }>("/src/assets/projects/icons/*.svg", { eager: true });