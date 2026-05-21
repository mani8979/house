import { getCliClient } from 'sanity/cli';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const client = getCliClient();

const SITE_DATA = {
  _id: 'siteData',
  _type: 'siteData',
  navbar: {
    logoTextPart1: 'HouseStudio',
    logoTextPart2: 'Interiors',
    phone: '+917702313703',
    whatsappUrl: 'https://wa.me/917702313703',
  },
  hero: {
    headingPart1: 'Transforming Spaces Into',
    headingPart2: 'Timeless Experiences',
    subheading: 'Premium Interior Design Studio for Modern Homes, Apartments & Luxury Spaces',
    primaryButtonText: 'View Projects',
    secondaryButtonText: 'Book Consultation',
    // backgroundImage: ... we will upload this
  },
  about: {
    subheading: 'Crafting Excellence',
    heading: 'Premium Execution for Your Dream Space',
    description: 'At HouseStudio Interiors, we believe that every space has a story to tell. Our approach combines luxury aesthetics with functional design to create environments that inspire and elevate your lifestyle.',
    yearsOfExperience: '10+',
    features: ['Modern Interiors', 'Modular Kitchens', 'Living Room Designs', 'Space Planning'],
    stats: [
      { _key: 'stat1', target: 500, suffix: '+', label: 'Projects Completed' },
      { _key: 'stat2', target: 450, suffix: '+', label: 'Happy Clients' },
      { _key: 'stat3', target: 15, suffix: '', label: 'Awards Won' },
    ],
    // sideImage: ... we will upload this
  },
  whyUs: {
    subheading: 'Why Choose Us',
    heading: 'The HouseStudio Advantage',
    advantages: [
      { _key: 'adv1', icon: 'fa-pencil-ruler', title: 'Creative Designs', description: 'Unique concepts tailored to your personality, space dynamics, and lifestyle.' },
      { _key: 'adv2', icon: 'fa-gem', title: 'Premium Materials', description: 'Only the finest materials sourced globally from verified luxury brands.' },
      { _key: 'adv3', icon: 'fa-clock', title: 'On-Time Delivery', description: 'We respect your timeline, executing planning efficiently to deliver on schedule.' },
      { _key: 'adv4', icon: 'fa-user-tie', title: 'Personalized Planning', description: 'Dedicated designer consultations capturing every single detail of your vision.' },
      { _key: 'adv5', icon: 'fa-tags', title: 'Affordable Luxury', description: 'Splendid premium aesthetics offered at competitive prices with zero compromise.' },
    ],
  },
  instagram: {
    subheading: 'Follow Our Journey',
    heading: 'Instagram @housestudio_interiors',
    instagramUrl: 'https://www.instagram.com/housestudio_interiors?igsh=M2Y5enJhbWY4MGs5',
    facebookUrl: 'https://www.facebook.com/share/1B7a8y9EUH/',
    // images: ... we will upload this
  },
  contact: {
    subheading: 'Get In Touch',
    heading: "Let's Create Your Dream Space",
    email: 'housestudiointeriors@gmail.com',
    phoneText: 'Chat With Us',
    phoneUrl: 'https://wa.me/917995827590',
    address: 'Vedayapalem, Nellore, Andhra Pradesh 524004',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.909772023943!2d79.95654167584164!3d14.415453699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf2e055916ad5%3A0xdb73af21e38ada!2sVedayapalem%2C%20Nellore%2C%20Andhra%20Pradesh%20524004!5e0!3m2!1sen!2sin!4v1716298516000!5m2!1sen!2sin',
  },
  footer: {
    description: 'Elevating lifestyles through premium interior design. We create spaces that are as functional as they are beautiful, combining luxury aesthetics with custom details.',
    copyrightText: '© 2024 HouseStudio Interiors. All Rights Reserved.',
  },
};

const IMAGES = {
  hero: '/assets/images/hero.png',
  about: '/assets/images/about.png',
  insta: [
    '/assets/images/hero.png',
    '/assets/images/kitchen.png',
    '/assets/images/bedroom.png',
    '/assets/images/about.png',
  ],
};

async function uploadImage(imagePath) {
  try {
    const fullPath = path.resolve(__dirname, '..', 'public', imagePath.replace(/^\//, ''));
    if (!fs.existsSync(fullPath)) {
      console.warn(`Warning: Image not found at ${fullPath}`);
      return null;
    }
    const asset = await client.assets.upload('image', fs.createReadStream(fullPath), {
      filename: path.basename(fullPath),
    });
    return asset._id;
  } catch (error) {
    console.error(`Failed to upload image ${imagePath}:`, error.message);
    return null;
  }
}

async function migrate() {
  console.log('Uploading images...');
  
  const heroImageId = await uploadImage(IMAGES.hero);
  if (heroImageId) {
    SITE_DATA.hero.backgroundImage = { _type: 'image', asset: { _type: 'reference', _ref: heroImageId } };
  }

  const aboutImageId = await uploadImage(IMAGES.about);
  if (aboutImageId) {
    SITE_DATA.about.sideImage = { _type: 'image', asset: { _type: 'reference', _ref: aboutImageId } };
  }

  SITE_DATA.instagram.images = [];
  for (let i = 0; i < IMAGES.insta.length; i++) {
    const imgId = await uploadImage(IMAGES.insta[i]);
    if (imgId) {
      SITE_DATA.instagram.images.push({
        _key: `instaImg${i}`,
        _type: 'object',
        image: { _type: 'image', asset: { _type: 'reference', _ref: imgId } },
        alt: `Instagram Post ${i + 1}`
      });
    }
  }

  console.log('Pushing Site Data to Sanity...');
  try {
    // createOrReplace so it updates if it exists
    await client.createOrReplace(SITE_DATA);
    console.log('Successfully created Site Data document!');
  } catch (error) {
    console.error('Failed to create Site Data:', error.message);
  }
}

migrate();
