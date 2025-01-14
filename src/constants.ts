import { getCollection } from "astro:content";

// Project assets directories
export const projectsAssetsDir = "/src/assets/projects/";
export const projectsIconsDir = projectsAssetsDir + "icons/";
export const projectsThumbnailsDir = projectsAssetsDir + "thumbnails/";

// Tech stack icons
const stackIconsCollection = await getCollection("techStackIcons")
export const techStackIconsMap = new Map();
stackIconsCollection.map(({ id, data: { src, alt } }) => {
  techStackIconsMap.set(id, {
    src: src,
    alt: alt
  });
});