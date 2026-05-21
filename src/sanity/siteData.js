export const siteDataType = {
  name: 'siteData',
  title: 'Site Data',
  type: 'document',
  fields: [
    {
      name: 'navbar',
      title: 'Navbar Settings',
      type: 'object',
      fields: [
        { name: 'logoTextPart1', title: 'Logo Text (Main)', type: 'string' },
        { name: 'logoTextPart2', title: 'Logo Text (Highlight)', type: 'string' },
        { name: 'phone', title: 'Phone Number', type: 'string' },
        { name: 'whatsappUrl', title: 'WhatsApp URL', type: 'string' },
      ],
    },
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'headingPart1', title: 'Heading Part 1', type: 'string' },
        { name: 'headingPart2', title: 'Heading Part 2 (Highlight)', type: 'string' },
        { name: 'subheading', title: 'Subheading', type: 'string' },
        { name: 'primaryButtonText', title: 'Primary Button Text', type: 'string' },
        { name: 'secondaryButtonText', title: 'Secondary Button Text', type: 'string' },
        { name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } },
      ],
    },
    {
      name: 'about',
      title: 'About Section',
      type: 'object',
      fields: [
        { name: 'subheading', title: 'Subheading', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'yearsOfExperience', title: 'Years of Experience', type: 'string' },
        { name: 'sideImage', title: 'Side Image', type: 'image', options: { hotspot: true } },
        {
          name: 'features',
          title: 'Features List',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'stats',
          title: 'Stats List',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'target', title: 'Target Number', type: 'number' },
                { name: 'suffix', title: 'Suffix (e.g., +)', type: 'string' },
                { name: 'label', title: 'Label', type: 'string' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'whyUs',
      title: 'Why Choose Us Section',
      type: 'object',
      fields: [
        { name: 'subheading', title: 'Subheading', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        {
          name: 'advantages',
          title: 'Advantages List',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'icon', title: 'FontAwesome Icon Class', type: 'string' },
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'description', title: 'Description', type: 'text' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'instagram',
      title: 'Instagram Section',
      type: 'object',
      fields: [
        { name: 'subheading', title: 'Subheading', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'instagramUrl', title: 'Instagram URL', type: 'string' },
        { name: 'facebookUrl', title: 'Facebook URL', type: 'string' },
        {
          name: 'images',
          title: 'Carousel Images',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
                { name: 'alt', title: 'Alt Text', type: 'string' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'contact',
      title: 'Contact Section',
      type: 'object',
      fields: [
        { name: 'subheading', title: 'Subheading', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'email', title: 'Email Address', type: 'string' },
        { name: 'phoneText', title: 'Phone/WhatsApp Display Text', type: 'string' },
        { name: 'phoneUrl', title: 'WhatsApp/Phone Link', type: 'string' },
        { name: 'address', title: 'Address Text', type: 'string' },
        { name: 'mapUrl', title: 'Google Maps Embed URL', type: 'string' },
      ],
    },
    {
      name: 'footer',
      title: 'Footer Section',
      type: 'object',
      fields: [
        { name: 'description', title: 'Description Text', type: 'text' },
        { name: 'copyrightText', title: 'Copyright Text', type: 'string' },
      ],
    },
  ],
};
