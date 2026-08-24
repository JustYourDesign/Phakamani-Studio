// Client-supplied photography lives in /public/photos as WebP, downscaled to
// 2000px wide (the originals were ~44MB combined). Remaining Unsplash entries
// are still placeholders awaiting real Phakamani photography — the brand brief
// asks for "humans in progress": real moments, warm light, no heavy grading.
export const stockImages = {
  heroSummit: {
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1800&q=80",
    alt: "Silhouette of a person standing on a mountain peak at sunrise",
  },
  coachingConversation: {
    src: "/photos/facilitator.webp",
    alt: "A Phakamani facilitator smiling during a session in a classroom",
  },
  teamUnity: {
    src: "/photos/team.webp",
    alt: "The Phakamani team together outside a school, arms around each other and laughing",
  },
  ctaTrail: {
    src: "/photos/summit-overlook.webp",
    alt: "A hiker resting on a rocky outcrop above a lake and mountain range",
  },
} as const;

export const journeyImages = {
  Discover: {
    src: "https://images.unsplash.com/photo-1542042179-de5cdc0cf242?auto=format&fit=crop&w=900&q=80",
    alt: "Silhouette of a person standing during sunset",
  },
  Develop: {
    src: "/photos/gym-overhead-press.webp",
    alt: "A man pressing a dumbbell overhead during a gym session",
  },
  Perform: {
    src: "/photos/medal-moment.webp",
    alt: "A learner holding a gold medal on a red ribbon",
  },
  Live: {
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80",
    alt: "Friends with arms around each other watching a sunset",
  },
} as const;

export const mediaImages = {
  documentary: {
    src: "/photos/studio-camera.webp",
    alt: "A film-maker beside a camera on a tripod in a lit studio",
  },
  podcast: {
    src: "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?auto=format&fit=crop&w=900&q=80",
    alt: "Two people facing each other during a recorded interview",
  },
  shortFilm: {
    src: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&w=900&q=80",
    alt: "A surfer riding an ocean wave",
  },
} as const;

export const territoryImages = {
  MOVE: {
    src: "/photos/trail-race-recovery.webp",
    alt: "A runner catching her breath during a cross-country race",
  },
  MIND: {
    src: "/photos/facilitator.webp",
    alt: "A Phakamani facilitator smiling during a session in a classroom",
  },
  WORK: {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80",
    alt: "A person gesturing while leading a meeting",
  },
  LIVE: {
    src: "/photos/summit-overlook.webp",
    alt: "A hiker resting on a rocky outcrop above a lake and mountain range",
  },
  YOUTH: {
    src: "/photos/school-assembly.webp",
    alt: "Learners standing in assembly lines between classroom blocks, hills rising behind",
  },
  STORIES: {
    src: "/photos/studio-camera.webp",
    alt: "A film-maker beside a camera on a tripod in a lit studio",
  },
} as const;

export const activityImages = {
  sport: {
    src: "/photos/trail-race-recovery.webp",
    alt: "A runner catching her breath during a cross-country race",
  },
  entertainment: {
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80",
    alt: "A crowd with arms raised in front of a lit stage",
  },
  schools: {
    src: "/photos/school-lineup.webp",
    alt: "Learners in green blazers gathered outside classroom blocks at a Phakamani school session",
  },
} as const;

export const activityHeroImages = {
  sport: {
    src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1600&q=80",
    alt: "An athlete mid-stride during a football match",
  },
  entertainment: {
    src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1600&q=80",
    alt: "A speaker on a lit stage in front of a large audience",
  },
  schools: {
    src: "/photos/school-assembly.webp",
    alt: "Learners standing in assembly lines between classroom blocks, hills rising behind",
  },
} as const;

export const teamImage = {
    src: "/photos/team.webp",
    alt: "The Phakamani team together outside a school, arms around each other and laughing",
  } as const;
