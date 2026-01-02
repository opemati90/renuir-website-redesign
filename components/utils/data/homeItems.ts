import {
  Sparkle,
  Shield,
  Clock1,
  Users2,
  Clock,
  Heart,
  Smartphone,
  BoxIcon,
  Search,
  CheckCircle,
  Zap,
  BarChart3,
  RefreshCw,
  ShieldCheck
} from "lucide-react";

export const Loststat = [
  {
    icon: Smartphone,
    value: "Report it",
    label: "Describe your item in 60 seconds",
    bg: "bg-white",
    iconColor: "text-primary-600",
    order: "1",
  },
  {
    icon: Search,
    value: "Smart search",
    label: "Automated checks across our network",
    bg: "bg-white",
    iconColor: "text-primary-600",
    order: "2",
  },
  {
    icon: BoxIcon,
    value: "Get it back",
    label: "Pick up or have it shipped to you",
    bg: "bg-white",
    iconColor: "text-primary-600",
    order: "3",
  },
];

export const trustedByStats = [
  {
    icon: Smartphone,
    value: "One report",
    label: "Search everywhere",
    bg: "bg-primary-50",
    iconColor: "text-primary-600",
  },
  {
    icon: Clock,
    value: "Always on",
    label: "Active 24/7 search",
    bg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: ShieldCheck,
    value: "Secure",
    label: "Privacy-first platform",
    bg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Heart,
    value: "Free",
    label: "For all individuals",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
];

export const businessFeatures = [
  {
    icon: Zap,
    title: "Instant logging",
    description:
      "Capture items in seconds with automated categorization. Ditch the spreadsheets for good.",
  },
  {
    icon: BarChart3,
    title: "Insightful analytics",
    description:
      "Track item volume, recovery rates, and storage duration with professional reporting tools.",
  },
  {
    icon: RefreshCw,
    title: "Automated matching",
    description:
      "Our system instantly cross-references reports to find matches before you even look.",
  },
  {
    icon: ShieldCheck,
    title: "Secure handoffs",
    description:
      "Verified owner identification and integrated shipping options for a professional service.",
  },
];

export const consumerFeatures = [
  {
    icon: Smartphone,
    title: "Network-wide search",
    description:
      "Report once and we'll check airports, hotels, transit, and more across our growing network.",
  },
  {
    icon: CheckCircle,
    title: "Real-time alerts",
    description:
      "Get notified the moment a potential match is found. No more manual follow-ups needed.",
  },
  {
    icon: Shield,
    title: "Photo verification",
    description:
      "Upload photos to help our matching system verify your item with higher accuracy.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy first",
    description:
      "Your personal details are never shared until a match is confirmed and you give permission.",
  },
];

type FAQItem = {
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    question: "How does Renuir actually work?",
    answer:
      "You report your lost item with a description and location. Our system automatically cross-references our network of partner venues (hotels, airports, transit systems, and more). When a potential match is identified, you'll receive an instant notification to verify and coordinate retrieval.",
  },
  {
    question: "Is it really free for individuals?",
    answer:
      "Yes. Reporting lost items and receiving match notifications is free for everyone. We partner with businesses to provide them with professional management tools, which keeps the service free for the public.",
  },
  {
    question: "How long does it take to find a match?",
    answer:
      "Many matches happen within 24-48 hours. Your report remains active and is continuously checked against new inventory for 90 days. You'll be notified immediately upon a confirmed match.",
  },
  {
    question: "What types of items can I report?",
    answer:
      "Anything from electronics and wallets to luggage and documents. Detailed descriptions and photos significantly improve matching speed and accuracy.",
  },
  {
    question: "How is my data protected?",
    answer:
      "We use enterprise-grade encryption and strictly follow GDPR and CCPA guidelines. Your personal information is never sold and is only shared with verified partners after a confirmed match.",
  },
  {
    question: "How do you verify ownership?",
    answer:
      "Our matching system compares specific details and photos. Venues are also required to verify identity through security questions or documentation before releasing items to ensure they reach the correct owner.",
  },
  {
    question: "What if my item isn't found immediately?",
    answer:
      "If a match isn't found right away, our system continues to search 24/7 as new items are turned in. We also provide guidance on additional steps you can take for valuable property.",
  },
  {
    question: "Can businesses join the network?",
    answer:
      "Yes. Renuir provides a professional lost & found management system for organizations of all sizes. Contact our partnerships team to learn how to streamline your operations.",
  },
];

export const features = businessFeatures;
export const businessFeaturesData = businessFeatures;
export const consumerFeaturesData = consumerFeatures;
