export const WHATSAPP_NUMBER = '918219184202';
export const EMAIL = 'educraftprojects@gmail.com';

export const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#how-it-works', label: 'How It Works' },
];

export const marqueeItems = [
  'Practical Files',
  'Working Models',
  'Charts & Posters',
  'Exhibitions',
  'Assignments',
  'Presentations',
  'Holiday Homework',
  'Art Files',
];

export const services = [
  {
    icon: '📁',
    title: 'Practical Files',
    description:
      'Neat handwriting, researched content, and syllabus-aligned practical files for Science, Maths, SST & more.',
  },
  {
    icon: '🔬',
    title: 'Working Models',
    description:
      'Functional science models, solar systems, circuits, and exhibition-ready working prototypes.',
  },
  {
    icon: '📊',
    title: 'Charts & Posters',
    description: 'Vibrant, informative charts and posters that make your project stand out in class.',
  },
  {
    icon: '🏛️',
    title: 'Exhibitions',
    description: 'Complete exhibition setups with models, charts, write-ups, and display materials.',
  },
  {
    icon: '📝',
    title: 'Assignments',
    description: 'Well-researched assignments across all subjects with proper formatting and references.',
  },
  {
    icon: '🎨',
    title: 'Art & Craft Files',
    description: 'Creative art files, holiday homework, and craft projects for younger students.',
  },
  {
    icon: '📽️',
    title: 'Presentations',
    description: 'Professional PPT slides and presentation materials for project submissions.',
  },
  {
    icon: '🏫',
    title: 'Bulk School Orders',
    description: 'Special packages for schools, coaching institutes, and teachers needing project support.',
  },
];

export const features = [
  {
    icon: '⏱️',
    title: 'Save Hours',
    description: 'Skip the late-night scramble. Get neat, ready-to-submit work on time.',
  },
  {
    icon: '📖',
    title: 'Academic Accuracy',
    description: 'Researched, syllabus-aligned content for Classes 1–12.',
  },
  {
    icon: '✏️',
    title: 'Creative & Neat',
    description: 'Hand-crafted with quality materials and an eye for detail.',
  },
  {
    icon: '📚',
    title: 'Every Subject',
    description: 'Science, Maths, Social, English, Hindi, EVS — we cover it all.',
  },
];

export const steps = [
  {
    number: '01',
    title: 'Share the brief',
    description: 'Send the topic, class, school deadline & any guidelines over WhatsApp.',
  },
  {
    number: '02',
    title: 'We craft it',
    description: 'Researched content, neat handwriting, vibrant visuals — built end-to-end.',
  },
  {
    number: '03',
    title: 'Pick up & impress',
    description: 'Collect locally in Paonta Sahib or arrange delivery. Submit with pride.',
  },
];

export const audience = [
  { icon: '🎒', title: 'School Students', description: 'Classes 1–12 across all boards' },
  { icon: '👨‍👩‍👧', title: 'Parents', description: 'Stress-free project support for your child' },
  { icon: '👩‍🏫', title: 'Teachers', description: 'Quality reference materials & bulk orders' },
  { icon: '🏫', title: 'Coaching & Schools', description: 'Institutional project packages available' },
];

export const pricingPlans = [
  {
    icon: '📊',
    title: 'Charts & Posters',
    price: '₹100 onwards',
    description: 'Hand-drawn or printed charts tailored to your topic and class level.',
  },
  {
    icon: '📁',
    title: 'Practical Files',
    price: '₹250+',
    description: 'Neat, researched practical files with syllabus-aligned content.',
  },
  {
    icon: '🔬',
    title: 'Science Models',
    price: '₹500+',
    description: 'Working science models built with quality materials for exhibitions.',
  },
  {
    icon: '✨',
    title: 'Custom Projects',
    price: 'On request',
    description: 'Price depends on complexity and material used. Share your brief on WhatsApp.',
    featured: true,
  },
];

export const ctaPoints = [
  'Same-week turnaround on most requests',
  'Affordable pricing for every class',
  '100% original, hand-made work',
];
