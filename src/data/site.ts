import type { PublicationCategory } from "./publications";

const themes: { key: PublicationCategory; title: string; body: string }[] = [
  {
    key: "survey",
    title: "Survey Research, NLP, and Generative AI",
    body:
      "I study how NLP and generative AI can improve measurement in surveys, including open-ended response coding, response-quality assessment, fraud detection, questionnaire design, and related validity problems."
  },
  {
    key: "evaluation",
    title: "Causal Inference and Program Evaluation",
    body:
      "I use design-based and econometric methods to evaluate policies and programs in real-world settings, with attention to treatment timing, imperfect implementation, and the inferential limits of administrative and observational data."
  },
  {
    key: "institutions",
    title: "Political Institutions and Legislative Text",
    body:
      "My work on political institutions focuses especially on Congress, legislative text, delegation, procedure, ideology, and how institutional behavior can be measured from text and other difficult-to-observe signals."
  },
  {
    key: "deliberation",
    title: "Public Opinion and Deliberation",
    body:
      "I study deliberation, political discussion, and public opinion, including whether structured discussion can change what citizens know, how they reason, and how they participate."
  }
];

export const site = {
  name: "Joshua Y. Lerner",
  title: "Senior Research Methodologist, NORC at the University of Chicago",
  email: "lerner-joshua@norc.org",
  url: "https://jyl19.github.io",
  socialImage: "/images/social-card.png",
  socialImageAlt: "Joshua Y. Lerner name and research focus preview card",
  hero: "Research methodologist working on measurement, inference, text, and institutions.",
  intro:
    "I work across survey methodology, political science, NLP and generative AI, and causal inference. The common problem is measurement: how to study complex social and political phenomena with data that are textual, administrative, incomplete, or behaviorally messy.",
  summary:
    "My work links computational tools with research design. I build and evaluate measures for survey responses, legislative text, public opinion, and policy programs, with attention to construct validity and credible inference.",
  bio: [
    "Methodological projects use NLP and generative AI to code open-ended survey responses, assess response quality, classify legislative text, and summarize complex records. Applied projects use design-based and econometric approaches to evaluate policies and programs when implementation, timing, and data quality are imperfect.",
    "The throughline is disciplined empirical work: clear constructs, appropriate models, and claims that stay connected to institutional context and the limits of the data.",
    "My peer-reviewed work appears in journals including American Political Science Review, Journal of Politics, Perspectives on Politics, Legislative Studies Quarterly, Public Choice, Review of International Political Economy, JAMA Health Forum, and Journal of Survey Statistics and Methodology. I received my PhD in Political Science from Duke University and previously held positions at Duke and Northwestern University Pritzker School of Law."
  ],
  links: [
    { label: "Publications", href: "/publications" },
    { label: "Research", href: "/research" },
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
  signatureProjects: [
    {
      title: "AI and measurement in survey research",
      body:
        "Using NLP and generative AI to improve open-ended coding, response-quality assessment, questionnaire evaluation, and related validity checks."
    },
    {
      title: "Deliberation, public opinion, and political behavior",
      body:
        "Studying whether structured discussion, including AI-assisted deliberation, changes what citizens know, how they reason, and how they participate."
    },
    {
      title: "Legislative text and political institutions",
      body:
        "Using text analysis and measurement models to study delegation, complexity, procedure, and institutional behavior in Congress."
    },
    {
      title: "Applied causal inference for policy evaluation",
      body:
        "Designing evaluations of policies and programs where treatment timing, implementation, and administrative data are imperfect."
    }
  ],
};
