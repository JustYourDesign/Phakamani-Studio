import {
  activities,
  audiences,
  faqs,
  journeyStages,
  primaryNav,
  services,
  territories,
  wellnessPillars,
} from "@/lib/site";

export type SearchDoc = {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
  /** Extra terms that should match but aren't worth showing. */
  keywords?: string;
};

/**
 * The site is fully static, so search runs entirely in the browser over an
 * index built from the same content the pages render. No backend, no network
 * request — the whole corpus is a few kilobytes.
 */
function buildIndex(): SearchDoc[] {
  const docs: SearchDoc[] = [
    {
      id: "page-home",
      title: "Home",
      description:
        "Be More. An African human-performance company helping people, organisations and communities become more capable.",
      href: "/",
      category: "Page",
      keywords: "be more phakamani rise up",
    },
    {
      id: "page-activities",
      title: "Activities",
      description: "Sport, entertainment and schools — the three arenas we build for.",
      href: "/activities",
      category: "Page",
    },
    {
      id: "page-services",
      title: "Programmes",
      description: "Coaching, corporate performance, wellness, youth development and more.",
      href: "/services",
      category: "Page",
      keywords: "services offering",
    },
    {
      id: "page-contact",
      title: "Contact",
      description: "Start a conversation about a coaching, corporate or school programme.",
      href: "/contact",
      category: "Page",
      keywords: "email phone enquire enquiry get in touch",
    },
    {
      id: "section-philosophy",
      title: "Our Philosophy",
      description:
        "Performance in service of life — the Ironman realisation that perceived limits are not always actual limits.",
      href: "/#philosophy",
      category: "About",
      keywords: "about ironman origin story nguni rise up",
    },
    {
      id: "section-media",
      title: "Phakamani Media",
      description:
        "Documentaries, podcasts, short films and conversations about human potential.",
      href: "/#media",
      category: "Media",
      keywords: "youtube podcast documentary film stories content",
    },
    {
      id: "section-impact",
      title: "Our Impact",
      description: "Lives impacted, organisations partnered, schools and communities reached.",
      href: "/#impact",
      category: "About",
      keywords: "numbers stats results",
    },
    {
      id: "section-partners",
      title: "Partners",
      description: "Organisations pursuing more, in partnership with Phakamani.",
      href: "/#partners",
      category: "About",
      keywords: "clients sponsors csi",
    },
  ];

  for (const activity of activities) {
    docs.push({
      id: `activity-${activity.id}`,
      title: activity.title,
      description: activity.lede,
      href: `/activities#${activity.id}`,
      category: "Activities",
      keywords: activity.description,
    });

    for (const item of activity.items) {
      docs.push({
        id: `activity-${activity.id}-${item.title}`,
        title: item.title,
        description: item.description,
        href: `/activities#${activity.id}`,
        category: activity.title,
      });
    }
  }

  for (const territory of territories) {
    docs.push({
      id: `territory-${territory.code}`,
      title: territory.title,
      description: territory.description,
      href: `/#${territory.code.toLowerCase()}`,
      category: "Territories",
      keywords: territory.expanded,
    });
  }

  for (const service of services) {
    docs.push({
      id: `service-${service.title}`,
      title: service.title,
      description: service.description,
      href: "/services#programmes",
      category: "Programmes",
    });
  }

  for (const stage of journeyStages) {
    docs.push({
      id: `stage-${stage.name}`,
      title: stage.name,
      description: stage.description,
      href: "/#journey",
      category: "The Journey",
    });
  }

  for (const pillar of wellnessPillars) {
    docs.push({
      id: `wellness-${pillar.title}`,
      title: pillar.title,
      description: pillar.description,
      href: "/#wellness",
      category: "Wellness",
    });
  }

  for (const audience of audiences) {
    docs.push({
      id: `audience-${audience.title}`,
      title: audience.title,
      description: audience.description,
      href: "/services#audiences",
      category: "Who We Work With",
      keywords: audience.bullets.join(" "),
    });
  }

  for (const faq of faqs) {
    docs.push({
      id: faq.id,
      title: faq.question,
      description: faq.answer,
      href: "/services#faq",
      category: "FAQ",
    });
  }

  // Mega-menu destinations that aren't already covered above.
  const seen = new Set(docs.map((d) => d.title.toLowerCase()));
  for (const item of primaryNav) {
    for (const group of item.groups ?? []) {
      for (const link of group.links) {
        if (seen.has(link.label.toLowerCase())) continue;
        seen.add(link.label.toLowerCase());
        docs.push({
          id: `nav-${item.label}-${link.label}`,
          title: link.label,
          description: `${item.label} · ${group.title}`,
          href: link.href,
          category: item.label,
        });
      }
    }
  }

  return docs;
}

export const searchIndex = buildIndex();

const normalise = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); // strip combining diacritics

/**
 * Every term must match somewhere (AND), but where it matches decides the
 * score — a title hit outranks a body hit, and a word-start hit outranks a
 * match buried mid-word.
 */
function scoreDoc(doc: SearchDoc, terms: string[]) {
  const title = normalise(doc.title);
  const description = normalise(doc.description);
  const category = normalise(doc.category);
  const keywords = normalise(doc.keywords ?? "");

  let total = 0;

  for (const term of terms) {
    let best = 0;

    if (title === term) best = 120;
    else if (title.startsWith(term)) best = 90;
    else if (new RegExp(`\\b${escapeRegExp(term)}`).test(title)) best = 70;
    else if (title.includes(term)) best = 45;
    else if (category.includes(term)) best = 30;
    else if (new RegExp(`\\b${escapeRegExp(term)}`).test(description)) best = 20;
    else if (description.includes(term)) best = 12;
    else if (keywords.includes(term)) best = 8;

    // One unmatched term disqualifies the document entirely.
    if (best === 0) return 0;
    total += best;
  }

  return total;
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function search(query: string, limit = 8): SearchDoc[] {
  const terms = normalise(query).split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  return searchIndex
    .map((doc) => ({ doc, score: scoreDoc(doc, terms) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.doc.title.localeCompare(b.doc.title))
    .slice(0, limit)
    .map((entry) => entry.doc);
}

/** Shown before the user types anything. */
export const suggestedSearches = [
  "Schools",
  "Endurance",
  "Leadership",
  "Resilience",
  "Retreats",
  "Podcast",
] as const;
