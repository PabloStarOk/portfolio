import { getCollection } from "astro:content";

// Project assets directories
export const projectsAssetsDir = "/src/assets/projects/";
export const projectsIconsDir = projectsAssetsDir + "icons/";
export const projectsThumbnailsDir = projectsAssetsDir + "thumbnails/";

// Technology icons src and alt map
const techIconsCollection = await getCollection("technologyIcons")
export const techIconsMap = new Map<string, { src: string, alt: string }>();
techIconsCollection.map(({ id, data: { src, alt } }) => {
  techIconsMap.set(id, {
    src: src,
    alt: alt
  });
});

// Technology icon imports
export const techIconImports = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/*/*.svg",
  { eager: true }
);

// Project icons imports
export const projectIconsImports = import.meta.glob<{ default: ImageMetadata }>("/src/assets/projects/icons/*.svg", { eager: true });