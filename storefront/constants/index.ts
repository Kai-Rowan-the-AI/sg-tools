import { Mail, Phone, MapPin } from "lucide-react";

export const CONTACT_CARDS = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@sgtools.rs",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+381 11 123 4567",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Belgrade, Serbia",
  },
];

export const TESTIMONIALS = [
  {
    name: "Marko Petrovic",
    role: "CTO",
    company: "TechNova",
    companyUrl: "https://technova.rs",
    image: "/testimonials/avatar-1.png",
    content:
      "SGTools has transformed how we manage our workflow. The automation features alone saved us countless hours every week.",
    time: "10:30 AM",
    date: "Jan 15, 2025",
  },
  {
    name: "Ana Jovanovic",
    role: "Product Manager",
    company: "DataFlow",
    companyUrl: "https://dataflow.rs",
    image: "/testimonials/avatar-2.png",
    content:
      "The integration capabilities are incredible. We connected all our tools in minutes and the results speak for themselves.",
    time: "2:45 PM",
    date: "Feb 3, 2025",
  },
  {
    name: "Stefan Nikolic",
    role: "Engineering Lead",
    company: "CloudBase",
    companyUrl: "https://cloudbase.rs",
    image: "/testimonials/avatar-3.png",
    content:
      "Best investment we've made this year. Our team productivity increased by 40% after implementing SGTools.",
    time: "9:15 AM",
    date: "Mar 20, 2025",
  },
  {
    name: "Jelena Djordjevic",
    role: "CEO",
    company: "Innovate",
    companyUrl: "https://innovate.rs",
    image: "/testimonials/avatar-4.png",
    content:
      "Customer support is outstanding and the platform keeps getting better with every update. Highly recommended.",
    time: "4:00 PM",
    date: "Apr 8, 2025",
  },
  {
    name: "Nikola Stojanovic",
    role: "DevOps Engineer",
    company: "ScaleUp",
    companyUrl: "https://scaleup.rs",
    image: "/testimonials/avatar-5.png",
    content:
      "The monitoring and analytics dashboard gives us real-time insights we never had before. Game changer for our ops team.",
    time: "11:20 AM",
    date: "May 12, 2025",
  },
];

export const FAQS = [
  {
    question: "What is SGTools?",
    answer:
      "SGTools is a workflow and productivity platform designed to help teams streamline their operations. It combines project management, automation, and analytics into a single tool so your team can focus on what matters most.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a 14-day free trial with full access to all features. No credit card required — just sign up and start exploring.",
  },
  {
    question: "What integrations does SGTools support?",
    answer:
      "SGTools integrates with popular tools like Slack, Jira, GitHub, Google Workspace, and many more. Our open API also lets you build custom integrations tailored to your workflow.",
  },
  {
    question: "How does SGTools handle data security?",
    answer:
      "We take security seriously. All data is encrypted in transit and at rest, and we are SOC 2 Type II compliant. We also support SSO and role-based access controls to keep your organization's data safe.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "All plans include email support with a 24-hour response time. Pro and Enterprise plans get priority support with dedicated account managers and live chat during business hours.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy — create an account, invite your team, and follow our onboarding guide. Most teams are up and running within minutes. If you need help, our support team is always happy to assist.",
  },
];
