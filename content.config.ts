import { defineContentConfig, defineCollection, z } from "@nuxt/content";
import { defineSchemaOrgSchema } from "nuxt-schema-org/content";

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: "page",

      source: "projects/**/*.md",

      schema: z.object({
        title: z.string(),

        description: z.string(),

        date: z.string(),

        status: z.enum(["En ligne", "Archivé", "En cours"]),

        stack: z.array(z.string()),

        github: z.string().optional(),

        href: z.string().optional(),

        cta: z.string(),

        cover: z.string().optional(),

        featured: z.boolean().default(false),

        website: z.string().optional(),

        ctaWebsite: z.string().optional(),

        schema: z.object({
          schemaOrg: defineSchemaOrgSchema(),
        }),
      }),
    }),

    root: defineCollection({
      type: "page",
      source: "**",
    }),
  },
});
