export const About = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "What do we do?",
  headline: "About us",
  description:
    "Courserio is a free course provider for students, students and people who want to learn new things. The platform aims to facilitate access to educational resources by indexing videos from various platforms: YouTube, Facebook, Twitch, SoundCloud, Streamable, Viemo, etc. The referral system tracks the user's activity and seeks to predict their preferences",
  buttonLabel: "Our contribution to education",
  buttonTo: "contribution",
  imgStart: false,
  img: require("../../assets/about.svg").default,
  alt: "img1",
  dark: true,
  primary: true,
  darkText: false,
};

export const Story = {
  id: "story",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Why do we want to evolve e-learning?",
  headline: "Story",
  description: `During the pandemic, there was an accelerated growth of users of online educational platforms. While the world was taking a break, people were looking for ways to be more profitable while staying at home. Online learning platforms, saw an increase of 425% among users, the number of courses created increased by 55%, and the government and business spheres began to have more confidence in the concept of online learning. - 80% increase.`,
  buttonLabel: "Join Us",
  buttonTo: "join-us",
  imgStart: false,
  img: require("../../assets/stats.svg").default,
  alt: "img1",
  dark: true,
  primary: true,
  darkText: false,
};

export const JoinUs = {
  id: "join-us",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Not sure where to begin?",
  headline: "Join us",
  description: `Create a free account and after that you have access to all the available courses on the platform. You can watch them, after that ask questions or answer those of other users. You can upload material and contribute to the education of other people, or apply for a moderator role and keep the platform safe and family-friendly.`,
  buttonLabel: "Create a free account",
  buttonRef:"signup",
  imgStart: true,
  img: require("../../assets/join-us.svg").default,
  alt: "img1",
  dark: false,
  primary: false,
  darkText: true,
};
