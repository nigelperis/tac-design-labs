import { Work } from './model';
import type { WorkDetails, WorkImages } from './model';

const havenData: WorkDetails = {
  title: 'HAVEN',
  subTitle: 'A fusion of Kerala traditions and climate-responsive innovation.',
  location: 'Manvilla, Trivandrum',
  completionYear: '2023',
  area: '1,539 sq. ft.',
  duration: '7 months',
  budget: '₹25 lakhs',
  overview:
    'Haven, a climate-responsive residential project in the heart of Manvila, Trivandrum, exemplifies sustainable architecture fused with modern and traditional Kerala design elements. With a compact site of 4.25 cents, the project strikes a perfect balance between maximizing interior functionality and creating ample exterior spaces.',
  designIntent:
    'The design prioritizes thermal comfort, natural light, and ventilation through passive cooling techniques. A central courtyard, conceived in a circular form, anchors the design, enabling a radial layout that minimizes circulation space while maintaining functionality. The double-height living space, enhanced by a gable roof, adds volume and ventilation.',
  keyFeatures: [
    {
      title: 'Central Circular Courtyard',
      description:
        'Enhances passive cooling and serves as the focal point for radial design.',
    },
    {
      title: 'Double-Height Living Space',
      description:
        'A gable roof accentuates the volume and facilitates airflow.',
    },
    {
      title: 'Rat Trap Bond Masonry',
      description: 'Reduces material use by up to 30%.',
    },
    {
      title: 'Freestanding Staircase',
      description:
        "Precast steps align seamlessly with the courtyard's design.",
    },
    {
      title: 'Bottle Work Details',
      description:
        'Replace traditional stained glass, reducing carbon footprint.',
    },
  ],
  materialPallete: [
    {
      title: 'Foundation',
      description: 'Reused granite stones.',
    },
    {
      title: 'Walls',
      description: 'Reused bricks.',
    },
    {
      title: 'Roofing',
      description: 'Filler slab technology.',
    },
    {
      title: 'Flooring',
      description: 'Oxide finishes and terracotta tiles.',
    },
    {
      title: 'Windows and Doors',
      description: 'Reclaimed materials.',
    },
    {
      title: 'Paint',
      description: 'Lime wash for eco-friendliness.',
    },
  ],
  functionalLayout: [
    {
      title: 'Ground Floor',
      description:
        'Includes a veranda, living area, open kitchen, work area, courtyard, and one bedroom with an attached bathroom.',
    },
    {
      title: 'First Floor',
      description:
        'Comprises two bedrooms with attached bathrooms and a balcony.',
    },
  ],
  sustainabilityMeasures: [
    {
      title: 'Material Reuse',
      description:
        'Over 70% of the materials, including bricks and wood, are reclaimed.',
    },
    {
      title: 'Energy Efficiency',
      description:
        'Natural light and passive cooling reduce energy requirements.',
    },
    {
      title: 'Renewable Resources',
      description:
        'Solar water heating, bio-gas integration, and constructed wetlands for wastewater management.',
    },
    {
      title: 'Waste Reduction',
      description:
        'Kitchen and toilet waste processed through biogas contributes to cooking fuel.',
    },
  ],
  culturalConsiderations:
    'Haven seamlessly blends traditional Kerala architectural elements with modern minimalism. Exposed brickwork and earthy tones create a rustic and timeless aesthetic, while the functional layout reflects the region’s cultural emphasis on courtyard-centric designs.',
  outcome:
    "Haven was completed successfully, meeting the clients' requirements for a sustainable, functional, and aesthetically pleasing family home. The clients expressed satisfaction with the design's effective use of space, eco-conscious materials, and thoughtful execution.",
  testimonial:
    'A heartfelt testimonial from the clients of Haven, Manvilla, sharing their experience of a thoughtfully designed space, blending sustainability and innovation to create their perfect sanctuary.',
  admiration:
    'Haven exemplifies how sustainable design and cultural heritage can merge to create a functional, eco-conscious, and aesthetically enriching family home. This project beautifully balances tradition, innovation, and environmental responsibility.',
};

export const workDetails: Record<Work, WorkDetails> = {
  [Work.HAVEN]: havenData,
  [Work.CANAAN]: havenData,
  [Work.SHIRE]: havenData,
  [Work.SANCHIBAGS]: havenData,
};

export const images: WorkImages = {
  [Work.HAVEN]: Array.from(
    { length: 27 },
    (_, index) => `/haven/${(index + 1).toString()}.jpg`,
  ).concat(
    Array.from(
      { length: 27 },
      (_, index) => `/haven/${(index + 1).toString()}.jpg`,
    ),
  ),
  [Work.CANAAN]: Array.from(
    { length: 38 },
    (_, index) => `/canaan/${(index + 1).toString()}.jpg`,
  ),
  [Work.SHIRE]: Array.from(
    { length: 23 },
    (_, index) => `/shire/${(index + 1).toString()}.jpg`,
  ),
  [Work.SANCHIBAGS]: Array.from(
    { length: 17 },
    (_, index) => `/saanchi/${(index + 1).toString()}.jpg`,
  ),
};

export const rightColImageCount = {
  [Work.HAVEN]: 27,
  [Work.CANAAN]: 38,
  [Work.SHIRE]: 23,
  [Work.SANCHIBAGS]: 17,
};
