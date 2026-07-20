import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: "page",

      source: "projects/**/*.md",

      schema: z.object({
        title: z.string(),

        description: z.string(),

        date: z.string(),

        status: z.enum(["Online", "Archived", "In progress"]),

        stack: z.array(z.string()),

        github: z.string().optional(),

        href: z.string().optional(),

        cta: z.string(),

        cover: z.string().optional(),

        featured: z.boolean().default(false),
      }),
    }),
  },
});
