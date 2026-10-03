import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import WhyChooseUs from '@/components/WhyChooseUs';
import Instagram from '@/components/Instagram';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { client, urlFor } from '@/sanity/client';

// Disable cache so changes from Sanity show instantly
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export const metadata = {
  title: 'House studio interiors, specialized in PVC & UPVC cupboards',
  description: 'House Studio Interiors specializes in premium PVC & UPVC cupboards, modular kitchens, custom wardrobes, and luxury home interior design in Nellore, Andhra Pradesh.',
  alternates: {
    canonical: 'https://housestudiointeriors.in/',
  },
};

export default async function Home() {
  const projectsQuery = `*[_type == "project"] | order(_createdAt desc)`;
  const servicesQuery = `*[_type == "service"] | order(_createdAt asc)`;
  const siteDataQuery = `*[_type == "siteData"][0]`;

  let projectsData = [];
  let servicesData = [];
  let siteData = null;

  try {
    const results = await Promise.all([
      client.fetch(projectsQuery, {}, { cache: 'no-store' }),
      client.fetch(servicesQuery, {}, { cache: 'no-store' }),
      client.fetch(siteDataQuery, {}, { cache: 'no-store' })
    ]);
    projectsData = results[0] || [];
    servicesData = results[1] || [];
    siteData = results[2];
  } catch (error) {
    console.error("Sanity fetch failed:", error.message);
  }

  const projects = projectsData.map(p => ({
    ...p,
    title: p.title?.trim() || 'House',
    category: p.category?.trim() || 'Interior Design',
    image: p.image ? urlFor(p.image).url() : '/assets/images/placeholder.png'
  }));

  const services = servicesData.map(s => ({
    ...s,
    image: s.image ? urlFor(s.image).url() : '/assets/images/placeholder.png'
  }));

  return (
    <>
      <Navbar data={siteData?.navbar} />
      <main>
        <Hero data={siteData?.hero} />
        <About data={siteData?.about} />
        <Services services={services} />
        <Projects projects={projects} />
        <WhyChooseUs data={siteData?.whyUs} />
        <Instagram data={siteData?.instagram} />
        <Contact data={siteData?.contact} />
      </main>
      <Footer data={siteData?.footer} />
    </>
  );
}
