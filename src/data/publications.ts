export type Publication = {
  title: string;
  authors?: string;
  venue: string;
  year: number;
  href?: string;
  category: "survey" | "evaluation" | "institutions" | "deliberation";
  featured?: boolean;
};

export const publications: Publication[] = [
  {
    title: "Can Deliberation Have Lasting Effects? Reflections on 'America in One Room.'",
    authors: "with James Fishkin, Alice Siu, Valentin Bolotnyy, and Norman Bradburn",
    venue: "American Political Science Review",
    year: 2024,
    href: "https://doi.org/10.1017/S0003055423001363",
    category: "deliberation",
    featured: true
  },
  {
    title: "Leveraging Predictive Modelling from Multiple Sources of Big Data to Improve Sample Efficiency and Reduce Survey Nonresponse Error.",
    authors: "with David Dutwin, Patrick Coyle, Ipek Bilgen, and Ned English",
    venue: "Journal of Survey Statistics and Methodology",
    year: 2023,
    href: "https://doi.org/10.1093/jssam/smad016",
    category: "survey",
    featured: true
  },
  {
    title: "Scaling Dialogue for Democracy: Can Automated Deliberation Create More Deliberative Voters?",
    authors: "with James Fishkin, Valentin Bolotnyy, Alice Siu, and Norman Bradburn",
    venue: "Perspectives on Politics",
    year: 2025,
    href: "https://doi.org/10.1017/S1537592724001749",
    category: "deliberation",
    featured: true
  },
  {
    title: "The Language of Delegation: An NLP Analysis of Congressional Bill Text",
    authors: "with Austin Bussing and Gregory P. Spell",
    venue: "Legislative Studies Quarterly",
    year: 2025,
    href: "https://doi.org/10.1111/lsq.70012",
    category: "institutions",
    featured: true
  },
  {
    title: "Can We Measure Legislative Complexity with LLMs?",
    authors: "with Austin Bussing and Nicholas O. Howard",
    venue: "Journal of Political Institutions and Political Economy",
    year: 2025,
    href: "https://doi.org/10.1561/113.00000130",
    category: "institutions",
    featured: true
  },
  {
    title: "State Capacity and COVID-19 Responses: Comparing the U.S. States.",
    authors: "with Kiran Auerbach and Hannah M. Ridge",
    venue: "State Politics & Policy Quarterly",
    year: 2024,
    href: "https://doi.org/10.1017/spq.2024.11",
    category: "evaluation"
  },
  {
    title: "How Random Are Paid Medical Malpractice Claims?",
    authors: "with Bernard Black, David Hyman, and David Magid",
    venue: "JAMA Health Forum",
    year: 2023,
    href: "https://doi.org/10.1001/jamahealthforum.2022.5436",
    category: "evaluation"
  },
  {
    title: "Inducing Polarization? The Effect of Congressional Procedure and Partisan Lawmaking on Ideal Point Estimation.",
    authors: "with Austin Bussing",
    venue: "Journal of Political Institutions and Political Economy",
    year: 2022,
    category: "institutions"
  },
  {
    title: "Environmentalism among Poor and Rich Countries: A Natural-Language-Processing Approach to Conversational Dynamics.",
    authors: "with Tana Johnson",
    venue: "Review of International Political Economy",
    year: 2021,
    category: "institutions"
  },
  {
    title: "Getting the Message Across: Evaluating Think Tank Influence in Congress.",
    venue: "Public Choice",
    year: 2018,
    category: "institutions"
  },
  {
    title: "Does the Gift Keep on Giving? House Leadership PAC Donations Before and After Majority Status.",
    authors: "with John Aldrich, Andrew Ballard, and David Rohde",
    venue: "Journal of Politics",
    year: 2017,
    category: "institutions"
  }
];

export const publicationCategories = [
  ["survey", "Survey Research, NLP, and Generative AI"],
  ["evaluation", "Causal Inference and Program Evaluation"],
  ["institutions", "Political Institutions and Legislative Text"],
  ["deliberation", "Public Opinion and Deliberation"]
] as const;
