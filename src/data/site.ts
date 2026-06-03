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
  hero: "Research methodologist studying measurement, inference, text, and institutions.",
  intro:
    "I tend to start where the data are least cooperative: an open-ended answer that refuses easy coding, a bill section that hides delegation in boilerplate, an institution whose capacity is visible only after it fails, or a policy effect buried in administrative records.",
  summary:
    "The work is methodological, but the test is substantive: does the measure let us learn something we could defend to a skeptical reader?",
  bio: [
    "At NORC, that often means survey methods: open-ended response coding, response-quality assessment, questionnaire design, synthetic respondents, and the practical question of when AI systems are useful enough to trust. In political science, it has meant Congress, delegation, state capacity, deliberation, and public opinion.",
    "I like methods that earn their place. A model is useful only if it improves the measurement problem, clarifies the design, or makes the limits of the evidence harder to ignore.",
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
      title: "Synthetic respondents and survey measurement",
      href: "/papers/evaluating-the-human-likeness-of-llm-generated-open-ended-responses/",
      body:
        "Work with NORC colleagues on when LLM-generated open-ended survey answers look human, where they fail, and how probability-based panels should anchor the comparison."
    },
    {
      title: "America in One Room and scalable deliberation",
      href: "/papers/can-deliberation-have-lasting-effects-reflections-on-america-in-one-room/",
      body:
        "Papers with James Fishkin, Alice Siu, Valentin Bolotnyy, Norman Bradburn, and others on whether structured discussion changes knowledge, voting, and political attention."
    },
    {
      title: "Delegation in congressional bill text",
      href: "/papers/the-language-of-delegation-an-nlp-analysis-of-congressional-bill-text/",
      body:
        "Active-learning classifiers for identifying delegating language across bill sections, built to study how ideology, party, and agency characteristics shape lawmaking."
    },
    {
      title: "State capacity and policy response",
      href: "/papers/state-capacity-and-covid-19-responses-comparing-the-u-s-states/",
      body:
        "A subnational state-capacity measure used to study COVID-19 response, vaccine rollout, and the conditions under which policy tools actually work."
    }
  ],
};
