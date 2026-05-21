import { defineConfig } from 'sanity';
import { schema } from './src/sanity/schema';
import { structureTool } from 'sanity/structure';

export default defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'wzyfwfrj',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  title: 'HouseStudio Interiors',
  schema: schema,
  plugins: [structureTool()],
});
