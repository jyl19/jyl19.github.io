export type PublicationSection = "peerReviewed" | "other";

export type Publication = {
  title: string;
  authors?: string;
  venue: string;
  year: number;
  href?: string;
  doi?: string;
  section: PublicationSection;
  category: "survey" | "evaluation" | "institutions" | "deliberation";
  featured?: boolean;
  abstract?: string;
};

export const publications: Publication[] = [
  {
    title: "Can We Measure Legislative Complexity with LLMs?",
    authors: "with Austin Bussing and Nicholas O. Howard",
    venue: "Journal of Political Institutions and Political Economy",
    year: 2025,
    href: "https://doi.org/10.1561/113.00000130",
    doi: "10.1561/113.00000130",
    section: "peerReviewed",
    category: "institutions",
    featured: true,
    abstract:
      "This paper develops a pairwise-comparison approach to legislative complexity and tests whether large language models can reproduce judgments that would otherwise require human coding. It shows that, with careful prompts and bridging texts, LLM-based comparisons track human assessments closely enough to support scalable measurement of bill complexity."
  },
  {
    title: "The Language of Delegation: An NLP Analysis of Congressional Bill Text",
    authors: "with Austin Bussing and Gregory P. Spell",
    venue: "Legislative Studies Quarterly",
    year: 2025,
    href: "https://doi.org/10.1111/lsq.70012",
    doi: "10.1111/lsq.70012",
    section: "peerReviewed",
    category: "institutions",
    featured: true,
    abstract:
      "This article uses natural language processing to study how Congress delegates authority in statutory text. It focuses on the language of legislative delegation itself, showing how text-based features can be used to identify and compare when bills hand discretion to other actors."
  },
  {
    title: "Scaling Dialogue for Democracy: Can Automated Deliberation Create More Deliberative Voters?",
    authors: "with James Fishkin, Valentin Bolotnyy, Alice Siu, and Norman Bradburn",
    venue: "Perspectives on Politics",
    year: 2025,
    href: "https://doi.org/10.1017/S1537592724001749",
    doi: "10.1017/S1537592724001749",
    section: "peerReviewed",
    category: "deliberation",
    featured: true,
    abstract:
      "This study evaluates whether an automated deliberation platform can reproduce some of the democratic benefits associated with in-person deliberation. It examines whether structured online discussion can move participants toward more deliberative attitudes and behaviors at larger scale."
  },
  {
    title: "State Capacity and COVID-19 Responses: Comparing the U.S. States",
    authors: "with Kiran Auerbach and Hannah M. Ridge",
    venue: "State Politics & Policy Quarterly",
    year: 2024,
    href: "https://doi.org/10.1017/spq.2024.11",
    doi: "10.1017/spq.2024.11",
    section: "peerReviewed",
    category: "evaluation",
    abstract:
      "This article studies variation in pandemic performance across the American states through the lens of state capacity. Using a new subnational measure, it argues that states with stronger capacity were better able to limit excess deaths and distribute vaccines, even after accounting for partisanship and other contextual factors."
  },
  {
    title: "Can Deliberation Have Lasting Effects? Reflections on 'America in One Room.'",
    authors: "with James Fishkin, Alice Siu, Valentin Bolotnyy, and Norman Bradburn",
    venue: "American Political Science Review",
    year: 2024,
    href: "https://doi.org/10.1017/S0003055423001363",
    doi: "10.1017/S0003055423001363",
    section: "peerReviewed",
    category: "deliberation",
    featured: true,
    abstract:
      "This article examines whether the effects of deliberation persist well beyond the event itself. It argues that the 'America in One Room' experience generated a durable civic awakening that shaped subsequent political engagement, knowledge acquisition, and vote-related intentions."
  },
  {
    title: "Leveraging Predictive Modelling from Multiple Sources of Big Data to Improve Sample Efficiency and Reduce Survey Nonresponse Error",
    authors: "with David Dutwin, Patrick Coyle, Ipek Bilgen, and Ned English",
    venue: "Journal of Survey Statistics and Methodology",
    year: 2023,
    href: "https://doi.org/10.1093/jssam/smad016",
    doi: "10.1093/jssam/smad016",
    section: "peerReviewed",
    category: "survey",
    featured: true,
    abstract:
      "This paper evaluates whether big-data classifiers can improve survey sampling for hard-to-reach or low-incidence populations. Across multiple survey applications, it finds that predictive models built from public and private auxiliary data modestly outperform traditional geographic clustering and compare favorably to vendor flags."
  },
  {
    title: "How Random Are Paid Medical Malpractice Claims?",
    authors: "with Bernard Black, David Hyman, and David Magid",
    venue: "JAMA Health Forum",
    year: 2023,
    href: "https://doi.org/10.1001/jamahealthforum.2022.5436",
    doi: "10.1001/jamahealthforum.2022.5436",
    section: "peerReviewed",
    category: "evaluation",
    abstract:
      "This study evaluates whether a physician's past paid malpractice claims predict future claims across the full U.S. physician population. It finds that even one prior paid claim is associated with meaningfully higher future risk, suggesting that malpractice events are not well described as random bad luck alone."
  },
  {
    title: "Inducing Polarization? The Effect of Congressional Procedure and Partisan Lawmaking on Ideal Point Estimation",
    authors: "with Austin Bussing",
    venue: "Journal of Political Institutions and Political Economy",
    year: 2022,
    href: "https://doi.org/10.1561/113.00000068",
    doi: "10.1561/113.00000068",
    section: "peerReviewed",
    category: "institutions",
    abstract:
      "This paper asks whether changes in congressional procedure affect measured polarization by changing the roll-call record itself. Comparing matched bills that bypass committee with similar bills moving through regular order, it finds that committee bypass dampens rather than amplifies polarization estimates."
  },
  {
    title: "Environmentalism among Poor and Rich Countries: A Natural-Language-Processing Approach to Conversational Dynamics",
    authors: "with Tana Johnson",
    venue: "Review of International Political Economy",
    year: 2021,
    href: "https://doi.org/10.1080/09692290.2021.1974523",
    doi: "10.1080/09692290.2021.1974523",
    section: "peerReviewed",
    category: "institutions",
    abstract:
      "This article studies whether environmental protection is primarily a rich-country priority in international politics. Using NLP on thousands of country statements in the WTO Committee on Trade and Environment, it finds that richer countries discuss environmental issues more consistently, while also clarifying the position of rising middle-income powers."
  },
  {
    title: "The Efficacy of Measuring Judicial Ideal Points: The Mis-Analogy of IRTs",
    authors: "with Mathew D. McCubbins and Kristen Renberg",
    venue: "International Review of Law and Economics",
    year: 2021,
    href: "https://doi.org/10.1016/j.irle.2021.106020",
    doi: "10.1016/j.irle.2021.106020",
    section: "peerReviewed",
    category: "institutions",
    abstract:
      "This paper revisits the use of item-response models for measuring judicial ideology. It argues that common ideal-point applications ignore crucial item-parameter information, proposes a post-estimation correction, and shows that revised scores can change substantive conclusions about judicial behavior."
  },
  {
    title: "Using Machine Learning and Disambiguated Author Identifiers to Improve Record Linkage for Funding Program Evaluation",
    authors: "with Brandon Sepulvado and Jennifer Hamilton",
    venue: "Annals of Metrics",
    year: 2021,
    section: "peerReviewed",
    category: "survey",
    abstract:
      "This article examines how machine learning and disambiguated author identifiers can improve record linkage in large-scale funding program evaluation. It focuses on reducing linkage error in publication and administrative data so that evaluation pipelines can better recover research outputs and downstream impact."
  },
  {
    title: "Physicians with Multiple Paid Medical Malpractice Claims: Are They Outliers or Just Unlucky?",
    authors: "with Bernard Black and David Hyman",
    venue: "International Review of Law and Economics",
    year: 2019,
    href: "https://doi.org/10.1016/j.irle.2019.03.006",
    doi: "10.1016/j.irle.2019.03.006",
    section: "peerReviewed",
    category: "evaluation",
    abstract:
      "This paper studies whether repeated paid malpractice claims are plausibly attributable to chance. Comparing observed claim histories to a simulation-based null model, it shows that physicians with multiple recent paid claims are very unlikely to be merely unlucky, especially after accounting for specialty and state risk."
  },
  {
    title: "Getting the Message Across: Evaluating Think Tank Influence in Congress",
    venue: "Public Choice",
    year: 2018,
    href: "https://doi.org/10.1007/s11127-018-0541-5",
    doi: "10.1007/s11127-018-0541-5",
    section: "peerReviewed",
    category: "institutions",
    abstract:
      "This article studies how think tanks influence Congress despite being formally barred from lobbying. Using data on floor-speech citations and committee testimony, it argues that strategic ideological positioning shapes which think tanks legislators cite publicly and which they invite to testify."
  },
  {
    title: "Does the Gift Keep on Giving? House Leadership PAC Donations Before and After Majority Status",
    authors: "with John Aldrich, Andrew Ballard, and David Rohde",
    venue: "Journal of Politics",
    year: 2017,
    href: "https://doi.org/10.1086/692736",
    doi: "10.1086/692736",
    section: "peerReviewed",
    category: "institutions",
    abstract:
      "This paper examines how party leaders use leadership PAC donations when they are in the majority versus the minority. It finds that both sides balance electoral goals and ideological cohesion, but majority leaders place relatively more weight on cohesion while minority leaders emphasize seat gains."
  },
  {
    title: "The Political Science of James Q. Wilson",
    authors: "with Jeremy Rozansky",
    venue: "The New Atlantis",
    year: 2012,
    section: "other",
    category: "institutions",
    abstract:
      "An essay on James Q. Wilson's intellectual legacy and his place in political science."
  },
  {
    title: "Spin Class: A Review of Left Turn by Timothy Groseclose",
    venue: "Commentary",
    year: 2011,
    section: "other",
    category: "institutions",
    abstract:
      "A review essay on Timothy Groseclose's Left Turn and debates over media bias."
  }
];

export const publicationCategories = [
  ["survey", "Survey Research, NLP, and Generative AI"],
  ["evaluation", "Causal Inference and Program Evaluation"],
  ["institutions", "Political Institutions and Legislative Text"],
  ["deliberation", "Public Opinion and Deliberation"]
] as const;
