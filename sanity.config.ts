import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {presentationTool} from '@sanity/presentation'

export default defineConfig({
  name: 'default',
  title: 'sanity ',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID as string,
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    deskTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: process.env.SANITY_STUDIO_PRESENTATION_URL as string,
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
