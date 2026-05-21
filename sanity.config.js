import { defineConfig } from 'sanity';
import { schema } from './src/sanity/schema';

export default defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'wzyfwfrj',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  title: 'HouseStudio Interiors',
  schema: schema,
});
