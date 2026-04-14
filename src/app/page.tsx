"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import { Bell, Book, BookOpen, Cloud, Mic, PenTool, Settings } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="small"
        sizing="largeSmallSizeMediumTitles"
        background="noise"
        cardStyle="soft-shadow"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "Learn",
          id: "about",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Questions",
          id: "faq",
        },
      ]}
      brandName="Al-Quran"
    />
  </div>

  <div id="home" data-section="home">
      <HeroLogo
      logoText="Al-Quran"
      description="Your comprehensive digital gateway to the Holy Quran, Tafsir, and essential Islamic knowledge. A peaceful learning experience for every Muslim."
      buttons={[
        {
          text: "Begin Journey",
          href: "#about",
        },
        {
          text: "Explore Features",
          href: "#features",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/bible-black-background-religion-concept_169016-62918.jpg"
      imageAlt="The Holy Quran"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Mission"
      title="A Life-Long Path"
      description="We believe every Muslim should have seamless access to the word of Allah. Our platform connects you with authentic resources to study, read, and understand the Holy Quran deeply."
      subdescription="From beginner Tajweed tutorials to advanced Tafsir interpretation, we provide the tools you need to build a consistent and meaningful relationship with the Quran."
      icon={BookOpen}
      imageSrc="http://img.b2bpic.net/free-photo/ramadan-concept-with-quran-dates_23-2147791795.jpg"
      mediaAnimation="slide-up"
      imageAlt="Studying quran student"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Interactive Recitation",
          description: "Follow along with expert reciters and master the beautiful art of Tajweed.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/collage-landscapes-composition_23-2150241044.jpg",
            imageAlt: "Minimalist abstract background",
          },
          items: [
            {
              icon: Mic,
              text: "Audio guides for every Surah",
            },
            {
              icon: Settings,
              text: "Variable playback speeds",
            },
          ],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/bible-black-background-religion-concept_169016-62918.jpg",
          imageAlt: "minimalist abstract background",
        },
        {
          title: "In-Depth Tafsir",
          description: "Understand the context, meaning, and historical significance of every Ayah.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-vector/decorative-blue-floral-pattern-background_1035-25571.jpg",
            imageAlt: "Minimalist abstract background",
          },
          items: [
            {
              icon: Book,
              text: "Historical context analysis",
            },
            {
              icon: PenTool,
              text: "Clear, accessible explanations",
            },
          ],
          reverse: true,
          imageSrc: "http://img.b2bpic.net/free-photo/ramadan-concept-with-quran-dates_23-2147791795.jpg",
          imageAlt: "minimalist abstract background",
        },
        {
          title: "Daily Reminders",
          description: "Stay connected with daily verses and spiritual prompts that keep you centered.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/close-up-view-chinese-ink-concept_23-2148785889.jpg",
            imageAlt: "Minimalist abstract background",
          },
          items: [
            {
              icon: Bell,
              text: "Customizable prayer/verse times",
            },
            {
              icon: Cloud,
              text: "Verses to carry with you daily",
            },
          ],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/view-3d-islamic-quran-book_23-2151112587.jpg",
          imageAlt: "minimalist abstract background",
        },
      ]}
      title="Core Learning Pillars"
      description="Comprehensive tools designed to guide you through your spiritual development."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Is the content suitable for beginners?",
          content: "Absolutely. Our platform is structured to support everyone from absolute beginners to advanced students of the Quran.",
        },
        {
          id: "2",
          title: "Do I need to sign up for full access?",
          content: "While reading is open to all, signing up allows you to track progress, bookmark verses, and receive personalized learning paths.",
        },
        {
          id: "3",
          title: "Are there Tajweed lessons?",
          content: "Yes, we provide structured Tajweed modules that help you perfect your pronunciation and recitation style.",
        },
        {
          id: "4",
          title: "Can I access this offline?",
          content: "Our mobile app allows you to download your favorite Surahs and Tafsir notes for offline access during travel.",
        },
      ]}
      title="Common Questions"
      description="Guidance on how to use our platform and start your Quranic studies."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Stay Connected"
      title="Begin Your Spiritual Journey"
      description="Join our growing community today and take your first step toward deeper Quranic understanding."
      buttons={[
        {
          text: "Sign Up Free",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Features",
              href: "#features",
            },
            {
              label: "Support",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Terms of Use",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Code of Conduct",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Al-Quran"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
