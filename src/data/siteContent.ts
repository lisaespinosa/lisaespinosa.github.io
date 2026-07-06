export interface SiteContent {
  metadata: {
    defaultTitle: string;
    defaultDescription: string;
  };
  navbar: {
    brandName: string;
    links: Array<{ label: string; href: string }>;
    ctaText: string;
  };
  hero: {
    title: {
      prefix: string;
      highlighted: string;
      suffix: string;
    };
    subtitle: string;
    ctaText: string;
    ctaLink: string;
  };
  philosophy: {
    title: string;
    description: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    stat: {
      value: string;
      label: string;
    };
  };
  studioInfo: {
    audience: {
      title: string;
      categories: Array<{
        title: string;
        description: string;
      }>;
    };
    environment: {
      title: string;
      description: string;
      location: string;
    };
  };
  credentials: {
    badge: string;
    title: string;
    description: string;
    highlights: Array<{
      icon: string;
      text: string;
    }>;
  };
  pricing: {
    title: string;
    subtitle: string;
    tiers: Array<{
      duration: string;
      price: string;
      unit: string;
    }>;
  };
  contact: {
    title: string;
    description: string;
    details: {
      location: string;
      web3FormsAccessKey?: string;
    };
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      ageLabel: string;
      agePlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitButtonText: string;
    };
  };
  footer: {
    brandName: string;
    copyrightSuffix: string;
  };
}

export const siteContent: SiteContent = {
  metadata: {
    defaultTitle: "Santa Rosa Cello Website | Professional Cello Lessons",
    defaultDescription: "Professional cello lessons in Santa Rosa & Online. Personalised instruction for all ages and levels."
  },
  navbar: {
    brandName: "The Cello Studio",
    links: [
      { label: "Philosophy", href: "#philosophy" },
      { label: "Credentials", href: "#background" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "#contact" }
    ],
    ctaText: "Book Trial"
  },
  hero: {
    title: {
      prefix: "Cello Lessons in ",
      highlighted: "Santa Rosa",
      suffix: " & Online"
    },
    subtitle: "Santa Rosa cello lessons tailored to you—learn with confidence, play with joy, and grow your technique every step of the way.",
    ctaText: "Schedule a Lesson",
    ctaLink: "#contact"
  },
  philosophy: {
    title: "A Personalized Approach to Learning",
    description: "My studio provides a supportive environment where students are encouraged to discover their unique musical voice and develop the technical foundation needed to bring that voice to life.",
    items: [
      {
        icon: "vibration",
        title: "Building foundations",
        description: "Core principles that ensure a lifetime of musical growth."
      },
      {
        icon: "health_and_safety",
        title: "Healthy technique",
        description: "Ergonomic posture and movement to prevent tension and injury."
      },
      {
        icon: "school",
        title: "Audition prep",
        description: "Strategic preparation for regional orchestras and college entrance."
      },
      {
        icon: "auto_awesome",
        title: "Engaging lessons",
        description: "Curriculum that balances classical rigour with musical enjoyment."
      }
    ],
    stat: {
      value: "10+",
      label: "Years of Pedagogy"
    }
  },
  studioInfo: {
    audience: {
      title: "Who I Work With",
      categories: [
        {
          title: "Children & Teens",
          description: "Inspiring the next generation through creative, structured learning paths."
        },
        {
          title: "Adult Learners",
          description: "Tailored lessons for hobbyists returning to the instrument or starting late."
        },
        {
          title: "Beginners to Advanced",
          description: "From first scales to complex concertos and orchestral excerpts."
        },
        {
          title: "Audition Preparation",
          description: "Focused intensive study for competitive regional and national positions."
        }
      ]
    },
    environment: {
      title: "Studio Environment",
      description: "Lessons take place in my Santa Rosa home studio. Online lessons via high-definition Zoom audio are also available.",
      location: "Santa Rosa, CA"
    }
  },
  credentials: {
    badge: "Professional Journey",
    title: "Background & Experience",
    description: "With over a decade of dedicated teaching and performance experience, I bring a wealth of knowledge to every lesson, ensuring each student receives high-caliber instruction.",
    highlights: [
      { icon: "workspace_premium", text: "Master's in Music Performance" },
      { icon: "verified", text: "Certificate of Cello Pedagogy" },
      { icon: "calendar_month", text: "10+ Years Professional Experience" },
      { icon: "public", text: "Global Teaching Background" }
    ]
  },
  pricing: {
    title: "Lesson Details",
    subtitle: "Students of all ages and experience levels are welcome. Each lesson is thoughtfully tailored to the individual, balancing technical development with meaningful musical growth.",
    tiers: [
      {
        duration: "30 Minutes",
        price: "$45",
        unit: "/session"
      },
      {
        duration: "45 Minutes",
        price: "$65",
        unit: "/session"
      },
      {
        duration: "60 Minutes",
        price: "$80",
        unit: "/session"
      }
    ]
  },
  contact: {
    title: "Get Started",
    description: "Whether you’re new to cello or looking to continue your studies, I am excited to help you achieve your musical goals. Fill out the form below, and I will reach out within 48 hours to schedule your consultation.",
    details: {
      location: "Santa Rosa, California (Home Studio)",
      web3FormsAccessKey: "d9ed4406-07b9-4346-bf66-904efc63d6ab"
    },
    form: {
      nameLabel: "Name",
      namePlaceholder: "Full Name",
      emailLabel: "Email",
      emailPlaceholder: "email@address.com",
      ageLabel: "Student Age / Level (Optional)",
      agePlaceholder: "e.g., 14, Intermediate",
      messageLabel: "Message",
      messagePlaceholder: "How can I help you?",
      submitButtonText: "Send Message"
    }
  },
  footer: {
    brandName: "The Cello Studio",
    copyrightSuffix: "Lisa Espinosa. All rights reserved."
  }
};
