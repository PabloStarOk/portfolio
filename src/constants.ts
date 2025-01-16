import { getCollection } from "astro:content";

// Project assets directories
export const projectsAssetsDir = "/src/assets/projects/";
export const projectsIconsDir = projectsAssetsDir + "icons/";
export const projectsThumbnailsDir = projectsAssetsDir + "thumbnails/";

// Tech stack icons
const stackIconsCollection = await getCollection("techStackIcons")
export const techStackIconsMap = new Map<string, {src: string, alt: string}>();
stackIconsCollection.map(({ id, data: { src, alt } }) => {
  techStackIconsMap.set(id, {
    src: src,
    alt: alt
  });
});

// Tech stack icons imports
export const stackIconImports = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/*/*.svg",
  { eager: true }
);

// Project icons imports
export const projectIconsImports = import.meta.glob<{default: ImageMetadata}>("/src/assets/projects/icons/*.svg", {eager: true});