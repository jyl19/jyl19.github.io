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
  socialImageAlt: "Joshua Y. Lerner website preview card",
  hero: "Research methodologist working on measurement, inference, text, and institutions.",
  intro:
    "I work across survey methodology, political science, NLP and generative AI, and causal inference. Much of that work is about measuring complex social and political phenomena more credibly and using computational tools in disciplined ways for real research problems.",
  summary:
    "My research brings together survey methodology, computational social science, political institutions, public opinion, and applied program evaluation. Across those areas, the common concern is better empirical work: clearer constructs, stronger designs, and more credible learning from difficult data.",
  bio: [
    "I work on problems where measurement, inference, text, and institutions meet. Some of that work is methodological: using NLP and generative AI to classify, summarize, and learn from complex data, especially in surveys and political text. Some of it is applied: using strong research designs to evaluate policies, programs, and interventions in messy, high-stakes settings.",
    "Across those areas, the common thread is simple: how to make better empirical claims about complicated phenomena without losing sight of construct validity, institutional context, or the limits of our tools.",
    "My peer-reviewed work appears in journals including American Political Science Review, Journal of Politics, Perspectives on Politics, Legislative Studies Quarterly, Public Choice, Review of International Political Economy, JAMA Health Forum, and Journal of Survey Statistics and Methodology.",
    "Before joining NORC, I held positions at Duke University and Northwestern University Pritzker School of Law. I received my PhD in Political Science from Duke University."
  ],
  links: [
    { label: "Publications", href: "/publications" },
    { label: "Research", href: "/research" },
    { label: "Code", href: "/code" },
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
        "Using NLP and generative AI to improve coding, response-quality assessment, open-ended analysis, and other hard measurement tasks in surveys."
    },
    {
      title: "Deliberation, public opinion, and political behavior",
      body:
        "Studying whether structured discussion, including AI-assisted deliberation, can change what citizens know, how they think, and how they participate."
    },
    {
      title: "Legislative text and political institutions",
      body:
        "Using text analysis and measurement models to study delegation, complexity, and institutional behavior in Congress and related settings."
    },
    {
      title: "Applied causal inference for policy evaluation",
      body:
        "Designing and executing evaluations of policies and programs in real-world environments where treatment timing, implementation, and data quality are imperfect."
    }
  ],
  talks: [
    {
      title: "How to Use NLP and Generative AI in Survey Research",
      venue: "AAPOR Mid-Year Short Course",
      year: 2024
    },
    {
      title: "How to Use NLP and Generative AI in Survey Research",
      venue: "WAPOR Webinar Short Course",
      year: 2025
    },
    {
      title: "What Can LLMs Not (yet!) Do for Research",
      venue: "SurvAI-Day 2024",
      year: 2024
    },
    {
      title: "Legislation and Natural Language Processing",
      venue: "Duke University School of Law",
      year: 2019
    }
  ]
};
