import {
  Sparkle,
  Shield,
  Clock1,
  Users2,
  Clock,
  Heart,
  Smartphone,
  BoxIcon,
} from "lucide-react";
import { Zap, ShieldCheck } from "lucide-react";
import { BarChart3, RefreshCw } from "lucide-react";

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
    icon: Sparkle,

    value: "We search",
    label: "AI checks and matches in real time",
    bg: "bg-white",
    iconColor: "text-primary-600",
    order: "2",
  },
  {
    icon: BoxIcon,

    value: "Get it back",
    label: "Pick up or have it shipped",
    bg: "bg-white",
    iconColor: "text-primary-600",
    order: "3",
  },
];

export const times = [
  {
    icon: Shield,
    value: "100%",
    label: "Seucre Verification",
  },
  {
    icon: Clock1,
    value: "48 hrs",
    label: "Average recovery time",
  },
  {
    icon: Users2,
    value: "10k+",
    label: "Items reunited",
  },
];

type FAQItem = {
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    question: "How does this actually work?",
    answer:
      "You tell us what you lost and where you think you lost it. We reach out to venues in that area (hotels, airports, transit, restaurants) and check if they have it. If we find a match, we let you know right away.",
  },
  {
    question: "Is it really free?",
    answer:
      "Yep. Reporting a lost item and getting notified about matches costs you nothing. We make money by selling tools to businesses that help them manage their lost & found more easily.",
  },
  {
    question: "What about my personal information?",
    answer:
      "We keep it private. Your contact info isn't visible to anyone until there's a confirmed match. Even then, you decide whether to share it.",
  },
  {
    question: "What if nothing turns up right away?",
    answer:
      "That happens. Sometimes items take a few days to get turned in. Your report stays active, and we'll keep checking. You'll get a notification the moment something matches.",
  },
  {
    question: "I run a hotel/venue. Can we use this?",
    answer:
      "Absolutely. We built Renuir for businesses too. It replaces spreadsheets and sticky notes with a simple system your staff will actually use. Join the waitlist and we'll reach out to set up a demo.",
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
    label: "We search 24/7",
    bg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    icon: ShieldCheck,
    value: "Private",
    label: "Your info stays safe",
    bg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Heart,
    value: "Free",
    label: "for individuals",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

export const businessFeatures = [
  {
    icon: Zap,
    title: "Log items in seconds",
    description:
      "Staff snap a photo, we handle the rest. No more spreadsheets or handwritten logs.",
  },
  {
    icon: BarChart3,
    title: "See what gets lost",
    description:
      "Know which items pile up, where they come from, and how long they sit unclaimed.",
  },
  {
    icon: RefreshCw,
    title: "Automatic matching",
    description:
      "When someone reports a lost item, we check your inventory instantly. You just confirm the match.",
  },
  {
    icon: ShieldCheck,
    title: "Safe handoffs",
    description:
      "Verify the owner's identity before returning anything. Simple pickup or shipping options built in.",
  },
];

export const consumerFeatures = [
  {
    icon: Smartphone,
    title: "Report once, search everywhere",
    description:
      "Fill out one form. We check airports, hotels, transit, and more. You don't have to.",
  },
  {
    icon: Sparkle,
    title: "Get notified when it's found",
    description:
      "The moment there's a potential match, you'll know. No more checking back every day.",
  },
  {
    icon: Shield,
    title: "Photos help us find it faster",
    description:
      "Got a picture of your bag or laptop? Upload it. It makes matching way more accurate.",
  },
  {
    icon: ShieldCheck,
    title: "Your info stays private",
    description:
      "We don't share your details until there's a confirmed match and you say it's okay.",
  },
];

export const features = businessFeatures;
