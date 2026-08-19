export const siteConfig = {
  name: "Phakamani",
  tagline: "BE MORE.",
  description:
    "Phakamani is an African human-performance company helping individuals, organisations and communities become more capable, elevate performance and live fully.",
  email: "hello@phakamani.co.za",
  phone: "+27 (0) 21 000 0000",
  location: "Cape Town, South Africa",
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
} as const;

/* --------------------------------------------------------------------------
   Navigation
   Red Bull pattern: a slim dark bar of uppercase category triggers, each
   opening a full-width mega-panel of link columns plus featured photo cards,
   with a horizontally scrollable sub-category rail underneath.
   -------------------------------------------------------------------------- */

export type NavLink = { label: string; href: string; note?: string };

export type NavItem = {
  label: string;
  href: string;
  groups?: { title: string; links: readonly NavLink[] }[];
  featured?: { title: string; kicker: string; href: string; image: string }[];
};

export const primaryNav: readonly NavItem[] = [
  {
    label: "Activities",
    href: "/activities",
    groups: [
      {
        title: "Sport",
        links: [
          { label: "Endurance & Racing", href: "/activities#sport" },
          { label: "Team Performance Camps", href: "/activities#sport" },
          { label: "Athlete Coaching", href: "/activities#sport" },
          { label: "Adventure & Expeditions", href: "/activities#sport" },
        ],
      },
      {
        title: "Entertainment",
        links: [
          { label: "Live Events & Stages", href: "/activities#entertainment" },
          { label: "Festivals & Activations", href: "/activities#entertainment" },
          { label: "Speaking & Keynotes", href: "/activities#entertainment" },
          { label: "Retreats & Experiences", href: "/activities#entertainment" },
        ],
      },
      {
        title: "Schools",
        links: [
          { label: "Student Resilience", href: "/activities#schools" },
          { label: "Inter-School Challenges", href: "/activities#schools" },
          { label: "Sports Academies", href: "/activities#schools" },
          { label: "Educator Support", href: "/activities#schools" },
        ],
      },
    ],
    featured: [
      {
        kicker: "Sport",
        title: "Where the limit gets questioned",
        href: "/activities#sport",
        image:
          "https://images.unsplash.com/photo-1601670463842-210f77e864e0?auto=format&fit=crop&w=700&q=80",
      },
      {
        kicker: "Schools",
        title: "Confidence, built early",
        href: "/activities#schools",
        image:
          "https://images.unsplash.com/photo-1758270704286-83476deb3bd1?auto=format&fit=crop&w=700&q=80",
      },
    ],
  },
  {
    label: "Programmes",
    href: "/services",
    groups: [
      {
        title: "For Individuals",
        links: [
          { label: "Performance Coaching", href: "/services" },
          { label: "Wellness Programmes", href: "/services" },
          { label: "Retreats & Experiences", href: "/services" },
        ],
      },
      {
        title: "For Organisations",
        links: [
          { label: "Corporate Human Performance", href: "/services" },
          { label: "Leadership Development", href: "/services" },
          { label: "Culture & Wellbeing", href: "/services" },
        ],
      },
      {
        title: "For Schools",
        links: [
          { label: "Youth & School Development", href: "/services" },
          { label: "Speaking & Workshops", href: "/services" },
          { label: "Educator Sessions", href: "/services" },
        ],
      },
    ],
    featured: [
      {
        kicker: "The Journey",
        title: "Discover. Develop. Perform. Live.",
        href: "/#journey",
        image:
          "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=700&q=80",
      },
    ],
  },
  {
    label: "Media",
    href: "/#media",
    groups: [
      {
        title: "Watch",
        links: [
          { label: "Documentaries", href: "/#media" },
          { label: "Short Films", href: "/#media" },
          { label: "YouTube Series", href: "/#media" },
        ],
      },
      {
        title: "Listen & Read",
        links: [
          { label: "The Podcast", href: "/#media" },
          { label: "Long-form Interviews", href: "/#media" },
          { label: "Articles & Newsletter", href: "/#media" },
        ],
      },
      {
        title: "Territories",
        links: [
          { label: "Move", href: "/#move" },
          { label: "Mind", href: "/#mind" },
          { label: "Work", href: "/#work" },
          { label: "Live", href: "/#live" },
        ],
      },
    ],
    featured: [
      {
        kicker: "Stories",
        title: "Transformation, told properly",
        href: "/#media",
        image:
          "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?auto=format&fit=crop&w=700&q=80",
      },
    ],
  },
  { label: "About", href: "/#philosophy" },
  { label: "Contact", href: "/contact" },
] as const;

/** The Red Bull-style sub-rail sitting under the main bar. */
export const categoryRail = [
  { label: "Move", href: "/#move" },
  { label: "Mind", href: "/#mind" },
  { label: "Work", href: "/#work" },
  { label: "Live", href: "/#live" },
  { label: "Youth", href: "/#youth" },
  { label: "Stories", href: "/#media" },
  { label: "Sport", href: "/activities#sport" },
  { label: "Entertainment", href: "/activities#entertainment" },
  { label: "Schools", href: "/activities#schools" },
] as const;

/* --------------------------------------------------------------------------
   Content
   -------------------------------------------------------------------------- */

export const journeyStages = [
  {
    step: "01",
    name: "Discover",
    description:
      "Recognise possibility. Curiosity, awareness, purpose and self-belief begin here — what might I be capable of?",
  },
  {
    step: "02",
    name: "Develop",
    description:
      "Build capability across health, fitness, mental resilience, emotional wellbeing, skills, habits and leadership.",
  },
  {
    step: "03",
    name: "Perform",
    description:
      "Turn potential into action. Individuals perform. Teams perform. Organisations and communities perform.",
  },
  {
    step: "04",
    name: "Live",
    description:
      "Performance in service of life — adventure, contribution, connection, meaning and joy. It should expand life, not consume it.",
  },
] as const;

export const activities = [
  {
    id: "sport",
    kicker: "01 — Sport",
    title: "Sport",
    lede: "Where the limit gets questioned first.",
    description:
      "Endurance, team sport and adventure are where Phakamani's philosophy was forged. Completing an Ironman proved that perceived limits are not always actual limits — and that discovery is what every sporting programme we run is built to recreate.",
    items: [
      {
        title: "Endurance & Racing",
        description:
          "Training blocks, race preparation and the mental scaffolding that gets people to a start line they never thought they'd stand on.",
      },
      {
        title: "Team Performance Camps",
        description:
          "Multi-day camps for clubs and squads — conditioning, cohesion and the recovery habits that make a season sustainable.",
      },
      {
        title: "Athlete Coaching",
        description:
          "One-to-one work on mindset, load management and the return-from-setback skills that separate long careers from short ones.",
      },
      {
        title: "Adventure & Expeditions",
        description:
          "Guided challenges — summits, ocean crossings, multi-day trails — designed as a controlled encounter with your own ceiling.",
      },
    ],
  },
  {
    id: "entertainment",
    kicker: "02 — Entertainment",
    title: "Entertainment",
    lede: "Performance, staged for a crowd.",
    description:
      "Human performance is worth watching. We build live experiences, festival activations and stage moments that carry the Be More. idea to audiences — energetic, well-produced and unmistakably African.",
    items: [
      {
        title: "Live Events & Stages",
        description:
          "Conference stages, awards and brand events where the keynote is an experience rather than a slide deck.",
      },
      {
        title: "Festivals & Activations",
        description:
          "Physical challenge zones, recovery lounges and participation formats that turn a crowd into participants.",
      },
      {
        title: "Speaking & Keynotes",
        description:
          "Talks on resilience, endurance and human potential — built on real stories, not motivational filler.",
      },
      {
        title: "Retreats & Experiences",
        description:
          "Immersive multi-day experiences combining movement, recovery, learning and genuine downtime.",
      },
    ],
  },
  {
    id: "schools",
    kicker: "03 — Schools",
    title: "Schools",
    lede: "The earlier the discovery, the further it travels.",
    description:
      "A learner who finds out at fifteen that there is more in them carries that for decades. We work with schools and academic institutions on confidence, resilience and leadership — before life's pressures set the ceiling.",
    items: [
      {
        title: "Student Resilience",
        description:
          "Programmes that build focus, emotional tools and the ability to process setbacks — during exams and long after them.",
      },
      {
        title: "Inter-School Challenges",
        description:
          "Team events across sport and problem-solving that give every learner a version of the start line, not just the first team.",
      },
      {
        title: "Sports Academies",
        description:
          "Structured development for school athletes covering conditioning, nutrition, recovery and the mental side of competing.",
      },
      {
        title: "Educator Support",
        description:
          "Workshops for teachers and coaches — because staff wellbeing is the quiet foundation of a school's performance.",
      },
    ],
  },
] as const;

export type ActivityId = (typeof activities)[number]["id"];

export const territories = [
  {
    code: "MOVE",
    title: "Move",
    description: "Physical performance, movement, sport, health and adventure.",
    expanded:
      "From endurance training to everyday movement, we help people rebuild their relationship with their bodies. Programmes draw on real athletic experience — not generic fitness advice — to build strength, stamina and the discipline that carries into every other part of life.",
  },
  {
    code: "MIND",
    title: "Mind",
    description: "Psychology, resilience, mindset and emotional wellbeing.",
    expanded:
      "Coaching rooted in psychology helps people question the limits they've placed on themselves. We build focus, resilience and the emotional tools to process setbacks — because a capable mind is the foundation every other kind of performance is built on.",
  },
  {
    code: "WORK",
    title: "Work",
    description: "Leadership, workplace performance, culture and teams.",
    expanded:
      "Teams perform when their people are led well and supported properly. We work with leaders and organisations to build cultures where performance doesn't come at the cost of wellbeing — through workshops, coaching and long-term partnership.",
  },
  {
    code: "LIVE",
    title: "Live",
    description: "Purpose, relationships, lifestyle, travel and meaningful experience.",
    expanded:
      "Performance should expand life, not consume it. This territory is about what all the capability-building is for — deeper relationships, real adventure, and a life with more meaning and joy in it, not just more achievement.",
  },
  {
    code: "YOUTH",
    title: "Youth",
    description: "Education, opportunity, confidence and future potential.",
    expanded:
      "The earlier someone discovers there's more in them, the further they can go. We work with students and educators to build confidence, resilience and leadership before life's pressures set in — laying a foundation for the rest of their journey.",
  },
  {
    code: "STORIES",
    title: "Stories",
    description: "Transformation, human achievement and remarkable journeys.",
    expanded:
      "Every programme produces a story worth telling. Through Phakamani Media — documentaries, interviews and digital content — we share real transformation journeys that show what's possible when someone chooses to rise up.",
  },
] as const;

export type TerritoryCode = (typeof territories)[number]["code"];

/** The "Be More. More ___" campaign system from the brand brief. */
export const beMoreWords = [
  "capable",
  "resilient",
  "courageous",
  "intentional",
  "connected",
  "confident",
  "curious",
  "alive",
  "human",
  "purposeful",
] as const;

export const wellnessPillars = [
  {
    title: "Mental Wellness",
    description:
      "Psychology-informed coaching that builds focus, resilience and a mindset capable of questioning its own limits.",
  },
  {
    title: "Emotional Wellness",
    description:
      "Space to process, connect and grow — because performance is human before it is productive.",
  },
  {
    title: "Physical Wellness",
    description:
      "Movement, recovery and habit-building drawn from real endurance-sport experience, not generic fitness advice.",
  },
] as const;

export const audiences = [
  {
    title: "Individuals",
    description:
      "One-on-one performance coaching for people ready to discover what more looks like — in health, career or life.",
    bullets: ["Personal performance coaching", "Mental & emotional resilience", "Habit & recovery design"],
  },
  {
    title: "Corporates & Teams",
    description:
      "Human-performance programmes for organisations that want their people to lead, collaborate and perform better.",
    bullets: ["Leadership development", "Team performance workshops", "Culture & wellbeing programmes"],
  },
  {
    title: "Schools & Academic Institutions",
    description:
      "Youth-focused development that builds confidence, resilience and future potential from an early stage.",
    bullets: ["Student resilience programmes", "Confidence & leadership workshops", "Educator support sessions"],
  },
] as const;

export const services = [
  {
    title: "Performance Coaching",
    description:
      "1:1 coaching that turns perceived limits into real capability — built on the belief that there is more in you.",
  },
  {
    title: "Corporate Human Performance",
    description:
      "Team and leadership programmes that help organisations perform without burning their people out.",
  },
  {
    title: "Wellness Programmes",
    description:
      "Mental, emotional and physical wellness work tailored to the people and pace of your organisation.",
  },
  {
    title: "Youth & School Development",
    description:
      "Programmes for students and educators focused on confidence, resilience and future potential.",
  },
  {
    title: "Speaking & Workshops",
    description:
      "Talks and workshops on human performance, resilience and the Be More. philosophy for teams and events.",
  },
  {
    title: "Retreats & Experiences",
    description:
      "Immersive experiences that create the same discovery Phakamani was built on — that more is possible.",
  },
] as const;

export const faqs = [
  {
    id: "faq-1",
    question: "Who is Phakamani for?",
    answer:
      "Individuals, professionals, corporate teams, schools and communities — anyone who believes there is more possible in how they perform and live.",
  },
  {
    id: "faq-2",
    question: "What does a typical programme look like?",
    answer:
      "Every programme moves through the same journey: Discover, Develop, Perform, Live. The format — coaching, workshops, retreats or team sessions — is shaped around your goals.",
  },
  {
    id: "faq-3",
    question: "Do you only work with athletes?",
    answer:
      "No. Phakamani's philosophy started with endurance sport, but human performance shows up everywhere — in classrooms, boardrooms, and everyday life.",
  },
  {
    id: "faq-4",
    question: "Can Phakamani work with our organisation long-term?",
    answer:
      "Yes. Many of our corporate and school partnerships run as ongoing programmes rather than once-off sessions, so growth compounds over time.",
  },
  {
    id: "faq-5",
    question: "How do we get started?",
    answer:
      "Reach out through the contact page with a little about your goals, and we'll set up a conversation to shape the right programme for you.",
  },
] as const;

// Placeholder tiles until real partner names/logos are supplied.
export const partnerPlaceholders = [
  "Partner 01",
  "Partner 02",
  "Partner 03",
  "Partner 04",
  "Partner 05",
  "Partner 06",
  "Partner 07",
  "Partner 08",
] as const;
