import { UNSPLASH } from './constants'

export const SERVICES = [
  {
    id: 'web-development',
    title: 'Website Development',
    shortDesc: 'Stunning, responsive websites that convert visitors into clients.',
    description:
      'We craft modern, high-performance websites tailored to your brand — from corporate sites and landing pages to full-scale web platforms with seamless user experiences.',
    image: UNSPLASH.coding,
    features: ['Responsive Design', 'SEO Optimized', 'CMS Integration', 'Performance Tuned'],
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Applications',
    shortDesc: 'Native and cross-platform apps built for iOS and Android.',
    description:
      'From concept to App Store launch, we build intuitive mobile applications that engage users and drive business growth across all major platforms.',
    image: UNSPLASH.mobile,
    features: ['iOS & Android', 'Cross-Platform', 'Push Notifications', 'Offline Support'],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    shortDesc: 'Data-driven strategies that amplify your online presence.',
    description:
      'Our digital marketing experts help you reach the right audience through SEO, social media, content marketing, and paid campaigns that deliver measurable ROI.',
    image: UNSPLASH.marketing,
    features: ['SEO & SEM', 'Social Media', 'Content Strategy', 'Analytics & Reporting'],
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    shortDesc: 'Bespoke software solutions engineered for your business needs.',
    description:
      'We design and develop scalable custom software — ERP systems, SaaS platforms, APIs, and enterprise tools — built to solve your unique challenges.',
    image: UNSPLASH.analytics,
    features: ['SaaS Platforms', 'API Development', 'Enterprise Systems', 'Agile Delivery'],
  },
  {
    id: 'deployment-devops',
    title: 'Deployment & DevOps',
    shortDesc: 'Reliable cloud infrastructure and CI/CD pipelines.',
    description:
      'We handle deployment, cloud architecture, and DevOps automation so your applications run smoothly, scale effortlessly, and stay secure 24/7.',
    image: UNSPLASH.cloud,
    features: ['Cloud Deployment', 'CI/CD Pipelines', 'Docker & Kubernetes', 'Monitoring'],
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance & Support',
    shortDesc: 'Ongoing care to keep your software running at peak performance.',
    description:
      'Our dedicated support team provides proactive monitoring, bug fixes, security updates, and feature enhancements to ensure long-term success.',
    image: UNSPLASH.workspace,
    features: ['24/7 Monitoring', 'Security Updates', 'Bug Fixes', 'Feature Updates'],
  },
]

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We learn about your business, goals, and requirements through detailed consultation.',
  },
  {
    step: '02',
    title: 'Strategy & Design',
    description: 'We craft a tailored roadmap and design prototypes aligned with your vision.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Our engineers build your solution using modern technologies and best practices.',
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'We deploy, test, and provide ongoing maintenance to ensure lasting success.',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'FirstGenAI delivered our e-commerce platform ahead of schedule. Their attention to detail and communication throughout the project was exceptional.',
    author: 'Rajesh Kumar',
    role: 'Founder, TechRetail',
  },
  {
    quote:
      'The mobile app they built for us has received outstanding user feedback. Professional team, transparent process, and great results.',
    author: 'Priya Sharma',
    role: 'Product Manager, HealthPlus',
  },
  {
    quote:
      'From website redesign to digital marketing, FirstGenAI helped us triple our online leads within six months. Highly recommended.',
    author: 'Arun Patel',
    role: 'CEO, GrowthEdge',
  },
]

export const STATS = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '99%', label: 'Client Satisfaction' },
]
