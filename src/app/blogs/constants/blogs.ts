import blogPost1 from '~/assets/images/blog-images/blog-post-1.jpg';
import blogPost2 from '~/assets/images/blog-images/blog-post-2.jpg';
import blogPost3 from '~/assets/images/blog-images/blog-post-3.jpg';
import blogPost4 from '~/assets/images/blog-images/blog-post-4.jpg';

import { type BlogCardDetail } from '../components/blog-card';

export const blogs: BlogCardDetail[] = [
  {
    title: 'Sustainable building materials in India',
    description: `When it comes to sustainable architecture, the materials you choose play a crucial role in determining the environmental impact of your building project. Sustainable building materials in India and around the world are increasingly being recognized for their ability to reduce this impact. However, not all materials are created equal, and understanding the environmental footprint of different building materials is essential for making eco-conscious decisions.`,
    postedBy: 'admin',
    publishedDate: new Date(),
    imageUrl: blogPost1,
    blogURL: '/blogs/01',
  },
  {
    title: 'The Benefits of Bamboo in Sustainable Architecture',
    description: `Bamboo, often called “green steel,” is gaining popularity in sustainable architecture. This versatile plant is not only eco-friendly but also incredibly strong, making it a compelling alternative to building materials like steel and concrete. However, not all materials are ...`,
    postedBy: 'admin',
    publishedDate: new Date(),
    imageUrl: blogPost2,
    blogURL: '/blogs/02',
  },
  {
    title: 'How to reduce carbon footprint in building design...',
    description: `Incorporating carbon reduction strategies from the initial planning stages of a building project is essential for creating sustainable structures. Addressing carbon footprints early can reduce long-term operational costs and contribute positively to the environment.`,
    postedBy: 'admin',
    publishedDate: new Date(),
    imageUrl: blogPost3,
    blogURL: '/blogs/03',
  },
  {
    title: 'How to design energy-efficient homes',
    description: `Insulating your home effectively doesn't have to break the bank. By choosing cost-effective and sustainable insulation materials, you can ensure that your home stays cool in the summer and warm in the winter, all while reducing energy consumption. Here are some budget-friendly ...`,
    postedBy: 'admin',
    publishedDate: new Date(),
    imageUrl: blogPost4,
    blogURL: '/blogs/04',
  },
];
