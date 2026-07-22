import { arcanePageSchema } from "./projects/arcane/page.schema";
import { arcaneSchema } from "./projects/arcane/schema";
import { converterPageSchema } from "./projects/converter/page.schema";
import { desktopConverterSchema } from "./projects/converter/schema";
import { nohamdrivePageSchema } from "./projects/nohamdrive/page.schema";
import { nohamdriveSchema } from "./projects/nohamdrive/schema";

export const projectSchemas = {
  nohamdrive: {
    page: nohamdrivePageSchema,
    software: nohamdriveSchema,
  },

  converter: {
    page: converterPageSchema,
    software: desktopConverterSchema,
  },

  arcane: {
    page: arcanePageSchema,
    software: arcaneSchema,
  },
};
