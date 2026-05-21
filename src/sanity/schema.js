export const projectType = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};

export const testimonialType = {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
    },
    {
      name: 'avatar',
      title: 'Avatar URL',
      type: 'url',
    },
  ],
};

export const serviceType = {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Icon Class',
      type: 'string',
      description: 'FontAwesome icon class, e.g., fa-home',
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'text',
    },
  ],
};

import { siteDataType } from './siteData';

export const schema = {
  types: [projectType, testimonialType, serviceType, siteDataType],
};
