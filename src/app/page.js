import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Instagram from '@/components/Instagram';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { client, urlFor } from '@/sanity/client';

// Keep revalidation if data changes infrequently or just use standard fetch behavior
export const revalidate = 60; // revalidate every 60 seconds

export default async function Home() {
  const projectsQuery = `*[_type == "project"]`;
  const servicesQuery = `*[_type == "service"]`;
  const testimonialsQuery = `*[_type == "testimonial"]`;

  let projectsData = [];
  let servicesData = [];
  let testimonialsData = [];

  try {
    const results = await Promise.all([
      client.fetch(projectsQuery),
      client.fetch(servicesQuery),
      client.fetch(testimonialsQuery)
    ]);
    projectsData = results[0];
    servicesData = results[1];
    testimonialsData = results[2];
  } catch (error) {
    console.error("Sanity fetch failed:", error.message);
  }

  const projects = projectsData.map(p => ({
    ...p,
    image: p.image ? urlFor(p.image).url() : '/assets/images/placeholder.png'
  }));

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services services={servicesData} />
        <Projects projects={projects} />
        <WhyChooseUs />
        <Testimonials testimonials={testimonialsData} />
        <Instagram />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
