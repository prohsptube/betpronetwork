import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schema'

export default defineConfig({
  name: 'default',
  title: 'BetPro Network CMS',

  projectId: 'ol4jd4aa', // You'll get this after creating a Sanity project
  dataset: 'production',

  basePath: '/studio',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
