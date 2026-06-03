import type { PublicationCategory } from "./publications";

const themes: { key: PublicationCategory; title: string; body: string }[] = [
  {
    key: "survey",
    title: "Survey Research, NLP, and Generative AI",
    body:
      "I use NLP and generative AI when they help solve survey-measurement problems that are otherwise expensive, slow, or hard to validate."
  },
  {
    key: "evaluation",
    title: "Causal Inference and Program Evaluation",
    body:
      "I work on designs for real policy settings where treatment timing, implementation, and administrative data rarely behave as cleanly as the textbook case."
  },
  {
    key: "institutions",
    title: "Political Institutions and Legislative Text",
    body:
      "I study Congress and other institutions by treating text, procedure, and agenda control as evidence about behavior rather than as background detail."
  },
  {
    key: "deliberation",
    title: "Public Opinion and Deliberation",
    body:
      "I study whether structured discussion changes what people know, how they reason, and how political participation carries forward after the conversation ends."
  }
];

export const site = {
  name: "Joshua Y. Lerner",
  title: "Senior Research Methodologist, NORC at the University of Chicago",
  email: "lerner-joshua@norc.org",
  url: "https://jyl19.github.io",
  socialImage: "/images/social-card.png",
  socialImageAlt: "Joshua Y. Lerner name and research focus preview card",
  hero: "Survey methods, text, institutions, public opinion.",
  intro:
    "I study how imperfect records become evidence: survey responses, legislative text, administrative data, deliberation, and institutional performance.",
  summary:
    "Research at the intersection of survey methodology, political science, and applied evaluation.",
  links: [
    { label: "Publications", href: "/publications" },
    { label: "Code", href: "/code" },
    { label: "Talks & Teaching", href: "/talks" },
    { label: "CV", href: "/cv" },
    { label: "Contact", href: "/contact" },
    { label: "NORC Profile", href: "https://www.norc.org/about/experts/joshua-lerner.html" },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=0pVC2RcAAAAJ&hl=en" },
    { label: "GitHub", href: "https://github.com/jyl19" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/josh-lerner-26272922/" }
  ],
  themes,
};
