import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const Button = z.object({
    type: z.enum(["LiveDemo", "GitHub"]),
    url: z.string().url()
})
const TechStackEnum = z.enum([".NET", "C#"])
const SupportedOs = z.enum(["Linux", "Windows 10", "Windows 11"])
const ImageAsset = z.object({
    fileName: z.string(),
    alt: z.string()
})

// Collections
const techStackIcons = defineCollection({
    loader: file("src/content/techStackIcons.json"),
    schema: z.object({
        src: z.string(),
        alt: z.string()
    })
})

const projects = defineCollection({
    loader: glob({ pattern: "**/*.{mdx, md}", base: "src/content/projects" }),
    schema: z.object({
        name: z.string().max(30),
        shortDescription: z.string().max(50),
        featuredProject: z.boolean().default(false).optional(), // If true, will be displayed at index.
        assets: z.object({
            thumbnail: ImageAsset,
            icon: ImageAsset
        }),
        hero: z.object({
            description: z.string().max(360),
            buttons: z.array(Button).max(3)
        }),
        techStack: z.array(z.object({
            name: TechStackEnum,
            version: z.string().optional(),
            purpose: z.string().max(100).optional()
        })),
        features: z.array(z.object({
            title: z.string().max(40),
            description: z.string().max(100)
        })),
        supportedOs: z.array(SupportedOs),
    })
})

export const collections = { projects, techStackIcons }

