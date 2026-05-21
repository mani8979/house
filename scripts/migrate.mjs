import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure you have loaded env vars if not running via next or dotenv
// Next.js doesn't auto load for plain node scripts without dotenv, so we will read .env.local manually
import dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-05-21',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const PROJECTS = [
  {
    image: '/assets/images/kitchen.png',
    category: 'Modern Design',
    title: 'Minimalist Kitchen',
    alt: 'Luxury Kitchen Design'
  },
  {
    image: '/assets/images/bedroom.png',
    category: 'Luxury Living',
    title: 'Grand Master Bedroom',
    alt: 'Luxury Bedroom Design'
  },
  {
    image: '/assets/images/hero.png',
    category: 'Residential',
    title: 'Elegant Living Space',
    alt: 'Modern Living Room Design'
  },
  {
    image: '/assets/images/about.png',
    category: 'Workspace',
    title: 'Creative Studio Office',
    alt: 'Modern Studio Office Design'
  }
];

const TESTIMONIALS = [
  {
    quote: "HouseStudio transformed our apartment into a dream home. Their attention to detail and choice of materials is unparalleled. Truly a premium experience!",
    name: "Sarah Johnson",
    role: "Homeowner, NYC",
    avatar: "https://i.pravatar.cc/150?u=1"
  },
  {
    quote: "The best interior designers I've worked with. They delivered my modular kitchen ahead of schedule and the finish is just spectacular. Highly recommended.",
    name: "Michael Chen",
    role: "Business Owner",
    avatar: "https://i.pravatar.cc/150?u=2"
  },
  {
    quote: "Professional, creative, and very easy to communicate with. They understood my vision perfectly and executed it beyond my expectations.",
    name: "Emma Williams",
    role: "Interior Enthusiast",
    avatar: "https://i.pravatar.cc/150?u=3"
  }
];

const SERVICES = [
  {
    icon: 'fa-home',
    title: 'Home Interiors',
    desc: 'Complete end-to-end interior solutions for luxury villas and modern apartments.'
  },
  {
    icon: 'fa-utensils',
    title: 'Modular Kitchens',
    desc: 'Modern, highly ergonomic, and aesthetically pleasing modular kitchen designs.'
  },
  {
    icon: 'fa-bed',
    title: 'Bedroom Designs',
    desc: 'Transforming bedroom layouts into serene, cozy, and luxury private retreats.'
  },
  {
    icon: 'fa-couch',
    title: 'Living Room Styling',
    desc: 'Creating elegant, welcoming, and statement living spaces for your family.'
  },
  {
    icon: 'fa-vector-square',
    title: 'Space Optimization',
    desc: 'Maximizing space utility and flow without compromising on premium luxury.'
  },
  {
    icon: 'fa-cube',
    title: '3D Visualization',
    desc: 'Photorealistic 3D renders to help you visualize your spaces before execution.'
  }
];

async function uploadImage(imagePath) {
  const filePath = path.join(__dirname, '..', 'public', imagePath);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    return null;
  }
  const asset = await client.assets.upload('image', fs.createReadStream(filePath), {
    filename: path.basename(filePath)
  });
  return asset._id;
}

async function migrate() {
  console.log('Migrating Projects...');
  for (const project of PROJECTS) {
    const imageId = await uploadImage(project.image);
    const doc = {
      _type: 'project',
      title: project.title,
      category: project.category,
      alt: project.alt,
    };
    if (imageId) {
      doc.image = {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: imageId
        }
      };
    }
    await client.create(doc);
    console.log(`Created Project: ${project.title}`);
  }

  console.log('Migrating Testimonials...');
  for (const t of TESTIMONIALS) {
    await client.create({
      _type: 'testimonial',
      name: t.name,
      role: t.role,
      quote: t.quote,
      avatar: t.avatar
    });
    console.log(`Created Testimonial: ${t.name}`);
  }

  console.log('Migrating Services...');
  for (const s of SERVICES) {
    await client.create({
      _type: 'service',
      title: s.title,
      icon: s.icon,
      desc: s.desc
    });
    console.log(`Created Service: ${s.title}`);
  }

  console.log('Migration Complete!');
}

migrate().catch(console.error);
