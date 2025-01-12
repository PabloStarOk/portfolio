import { defineCollection, z } from "astro:content";

const ButtonsEnum = z.enum(["LiveDemo", "GitHub"])
const TechStackEnum = z.enum(["Dotnet", "Csharp"])
const SupportedOs = z.enum(["Linux", "Windows 10", "Windows 11"])

const projects = defineCollection({
    schema: z.object({
        hero: z.object({
            title: z.string().max(30),
            description: z.string().max(360),
            thumbnail: z.string(),
            buttons: z.array(ButtonsEnum)
        }),
        techStack: z.array(z.object({
            name: TechStackEnum,
            purpose: z.string().max(100).optional()
        })),
        features: z.array(z.object({
            title: z.string().max(40),
            description: z.string().max(100)
        })),
        supportedOs: z.array(SupportedOs),
    })
})

export const collections = { projects }

