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
export const revalidate = 0;

export default async function Home() {
  const projectsQuery = `*[_type == "project"]`;
  const servicesQuery = `*[_type == "service"]`;
  const siteDataQuery = `*[_type == "siteData"][0]`;

  let projectsData = [];
  let servicesData = [];
  let siteData = null;

  try {
    const results = await Promise.all([
      client.fetch(projectsQuery),
      client.fetch(servicesQuery),
      client.fetch(siteDataQuery)
    ]);
    projectsData = results[0];
    servicesData = results[1];
    siteData = results[2];
  } catch (error) {
    console.error("Sanity fetch failed:", error.message);
  }

  const projects = projectsData.map(p => ({
    ...p,
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
