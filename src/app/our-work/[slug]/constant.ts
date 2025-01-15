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
  testimonialVideo:
    'https://www.youtube.com/embed/n_6n7HprSFM?si=dAqhrCCIWsacLkl4',
  admiration:
    'Haven exemplifies how sustainable design and cultural heritage can merge to create a functional, eco-conscious, and aesthetically enriching family home. This project beautifully balances tradition, innovation, and environmental responsibility.',
};

const canaanData: WorkDetails = {
  title: 'CANAAN',
  subTitle:
    'A modern residence in Thiruvananthapuram, thoughtfully designed with sustainability in mind.',
  location: 'Powdikonam, Trivandrum',
  completionYear: '2019',
  area: '2,530 sqft',
  duration: '4 months',
  budget: '₹28 lakh ',
  overview:
    'The Canaan Residence is a thoughtfully designed home that harmoniously blends traditional Kerala architecture with sustainable practices. Situated in a valley between two major hills, the residence is shaped by its natural contours, fostering a strong connection between the indoor and outdoor environments.',
  designIntent:
    'The design emphasizes passive cooling and natural ventilation, achieved through a central courtyard that connects every space on the ground floor. This courtyard not only enhances light and air circulation but also integrates a water body to cool the breeze entering the structure, ensuring thermal comfort throughout the year.',
  materialsAndTechniques: [
    {
      title: 'Salvaged Materials',
      description: 'Reused Mangalore tiles, wood, and reinforcement rods.',
    },
    {
      title: 'Rat Trap Bond Wall System',
      description: 'Reduces heat transfer for improved thermal comfort.',
    },
    {
      title: 'Bottle Wall',
      description:
        'Distinctive feature in the tower room, reduces structural load.',
    },
    {
      title: 'Bamboo Slab Roofing',
      description:
        'Locally sourced bamboo enhances natural insulation and minimizes water leakage.',
    },
  ],
  sustainabilityMeasures: [
    {
      title: 'Recycled Materials',
      description: '90% of construction materials are reused, reducing waste.',
    },
    {
      title: 'Rainwater Harvesting',
      description: 'Collects water in a courtyard tank for reuse.',
    },
    {
      title: 'Shading and Vegetation',
      description: 'Minimizes solar radiation and promotes energy efficiency.',
    },
    {
      title: 'Stack Effect Cooling',
      description: 'Natural airflow system ensures consistent cooling.',
    },
    {
      title: 'Renewable Resources',
      description:
        'Use of bamboo and other eco-friendly materials reduces environmental impact.',
    },
  ],
  keyFeatures: [
    {
      title: 'Central Courtyard',
      description:
        'Focal point for passive lighting, ventilation, and thermal comfort.',
    },
    {
      title: 'Bottle Wall',
      description:
        'Innovative design element supporting the tower room structure.',
    },
    {
      title: 'Reused Materials',
      description: 'Includes doors, windows, and reinforcement rods.',
    },
    {
      title: 'Bamboo Slab Roofing',
      description: 'Enhances natural insulation and minimizes water leakage.',
    },
    {
      title: 'Thermal Analysis',
      description:
        'Strategic shading and ventilation maintain comfort in all seasons.',
    },
  ],
  culturalConsiderations: [
    {
      title: 'Kerala Architectural Heritage',
      description:
        'Integrates traditional design with modern sustainable practices.',
    },
    {
      title: 'Harmonious Placement',
      description:
        "The home is designed to blend with the valley's natural contours.",
    },
    {
      title: 'Indoor-Outdoor Connection',
      description: 'Enhances living experience through seamless transitions.',
    },
    {
      title: 'Joint Family Living',
      description: 'Promotes unity within a sustainably built environment.',
    },
  ],
  outcome:
    "The Canaan Residence, the architect's own home, combines traditional Kerala architecture with sustainable practices. It showcases innovative materials and techniques while respecting the site’s natural contours. This home serves as an inspiring model for eco-conscious living, encouraging others to adopt sustainable design.",
  testimonial: '',
  testimonialVideo: '',
  admiration: '',
};

const shireData: WorkDetails = {
  title: 'SHIRE',
  subTitle:
    'A sustainably built house in Udupi, balancing innovation and traditional architecture.',
  location: 'Moodabettu, Udupi',
  completionYear: '2019',
  area: '2100 sqft',
  duration: '9 months',
  budget: '35 lakhs',
  overview:
    'Shire, located in Moodabettu, Udupi, is a 2100 sqft sustainable home blending traditional charm with modern functionality. Completed in 9 months on a 35-lakh budget, it tackles local challenges like waterlogging with innovative elevation techniques, offering a cozy and eco-conscious living space.',
  designIntent:
    'Shire embodies climate-responsive and sustainable design. The 1.2-meter elevated structure prevents flooding, while features like cross ventilation, double-height spaces, and passive cooling ensure comfort. Locally sourced materials, rainwater harvesting, and a biogas plant enhance its eco-friendly ethos.',
  keyFeatures: [
    {
      title: 'Elevated Structure',
      description: 'Raised 1.2 meters to mitigate waterlogging.',
    },
    {
      title: 'Accessibility',
      description: 'Ramp ensures seamless access for elderly residents.',
    },
    {
      title: 'Double-Height Roof',
      description:
        'Over dining and kitchen areas for natural light and ventilation.',
    },
    {
      title: 'Cross Ventilation',
      description: 'All rooms ensure cooler interiors during summer.',
    },
    {
      title: 'Sustainable Materials',
      description:
        'Locally sourced, including reused doors, windows, and rat trap bond bricks.',
    },
    {
      title: 'Rainwater Harvesting',
      description:
        '30,000-liter tank beneath the raised basement for efficient space management.',
    },
    {
      title: 'Biogas Plant',
      description:
        'Processes toilet and biodegradable waste to produce methane gas for cooking.',
    },
    {
      title: 'Recycled Materials',
      description:
        'Used beer bottles replace stained glass, creating a colourful, ambient lighting effect indoors.',
    },
  ],
  materialPallete: [
    {
      title: 'Foundation and Basement',
      description: 'Stone.',
    },
    {
      title: 'Walls',
      description: 'Country burnt bricks using rat trap bond technology.',
    },
    {
      title: 'Roofs',
      description: 'Filler slab and Mangalore tiles on sloping areas.',
    },
    {
      title: 'Floor Finishes',
      description: 'Yellow oxide and terracotta tiles.',
    },
    {
      title: 'Interior Finishes',
      description: 'Mud plaster, eco-friendly mud paints, and lime wash.',
    },
  ],
  functionalLayout: [
    {
      title: 'Open Plan',
      description:
        'The living, dining, and kitchen areas are interconnected in an L-shape, ensuring privacy in the kitchen while maintaining an open feel.',
    },
    {
      title: 'Private Bedrooms',
      description: 'Separated from communal spaces to provide privacy.',
    },
    {
      title: 'Mezzanine Level Workspace',
      description:
        'Houses a work and library space with a balcony overlooking the street, with storage and a car porch below.',
    },
    {
      title: 'Dedicated Dog Space',
      description: 'Designed for pets with separate access on the first floor.',
    },
  ],
  sustainabilityMeasures: [
    {
      title: 'Punk',
      description:
        'Energy-efficient passive cooling systems and the use of reused materials.',
    },
    {
      title: 'Punk',
      description:
        'A biogas plant that processes waste, reducing the environmental impact.',
    },
    {
      title: 'Punk',
      description: 'Use of renewable resources like solar water heating.',
    },
  ],
  culturalConsiderations: [
    {
      title: 'Punk',
      description:
        'Reflects traditional Udupi architecture with rustic aesthetics.',
    },
    {
      title: 'Punk',
      description:
        'Combines natural and local materials to exhibit regional heritage.',
    },
  ],
  outcome:
    'The Shire project was completed successfully, fulfilling the owners’ expectations and those of the local community. It has inspired others in the region to explore sustainable and eco-friendly construction practices.',
  testimonial: '',
  testimonialVideo: '',
  admiration: '',
};

export const workDetails: Record<Work, WorkDetails> = {
  [Work.HAVEN]: havenData,
  [Work.CANAAN]: canaanData,
  [Work.SHIRE]: shireData,
  [Work.SANCHIBAGS]: havenData,
};

export const images: WorkImages = {
  [Work.HAVEN]: Array.from(
    { length: 27 },
    (_, index) => `/haven/${(index + 1).toString()}.jpg`,
  ),
  [Work.CANAAN]: Array.from(
    { length: 38 },
    (_, index) => `/canaan/${(index + 1).toString()}.jpg`,
  ),
  [Work.SHIRE]: Array.from(
    { length: 28 },
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
  [Work.SHIRE]: 28,
  [Work.SANCHIBAGS]: 17,
};
