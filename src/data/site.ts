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
  hero: "Research methodologist studying surveys, text, institutions, and public opinion.",
  intro:
    "I study survey responses, legislative text, administrative records, deliberative discussion, and institutional performance, with a focus on what each source can and cannot support.",
  summary:
    "My work sits between survey methodology, political science, and applied evaluation.",
  bio: [
    "At NORC, I work on response quality, questionnaire design, nonresponse, open-ended coding, and practical evaluations of AI tools for survey research.",
    "My political science work studies Congress, delegation, state capacity, deliberation, public opinion, and the use of text as evidence about institutions.",
    "The common thread is measurement: how to turn imperfect records into claims that can survive careful scrutiny.",
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
