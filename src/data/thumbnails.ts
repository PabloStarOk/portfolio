export const thumbnailImports = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/projects/thumbnails/*.webp",
  { eager: true }
);
