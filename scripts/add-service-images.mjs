import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// Load env
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: '2023-01-01',
  token: process.env.SANITY_API_TOKEN,
});

async function run() {
  const services = await client.fetch(`*[_type == "service"]`);
  console.log(`Found ${services.length} services.`);

  const dummyImages = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800&q=80'
  ];

  for (let i = 0; i < services.length; i++) {
    const service = services[i];
    console.log(`Processing service: ${service.title}`);
    
    // Choose a dummy image based on index
    const imageUrl = dummyImages[i % dummyImages.length];
    
    try {
      console.log(`Uploading image from ${imageUrl}...`);
      const response = await fetch(imageUrl);
      const buffer = await response.arrayBuffer();
      
      const asset = await client.assets.upload('image', Buffer.from(buffer), {
        filename: `service-${i}.jpg`
      });
      
      console.log(`Asset uploaded: ${asset._id}`);
      
      await client.patch(service._id)
        .set({
          image: {
            _type: 'image',
            asset: {
              _type: "reference",
              _ref: asset._id
            }
          }
        })
        .commit();
        
      console.log(`Updated service ${service.title} with image.`);
    } catch (err) {
      console.error(`Error processing service ${service.title}:`, err.message);
    }
  }
  console.log('Done!');
}

run().catch(console.error);
