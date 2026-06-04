import { publicPaperPdfs } from "./paperAssets";

export type PublicationSection = "peerReviewed" | "other";
export type PublicationCategory = "survey" | "evaluation" | "institutions" | "deliberation";
export type PaperLifecycleStatus =
  | "published"
  | "under-review"
  | "working-paper"
  | "work-in-progress";
export type PaperVisibility = "public-pdf" | "metadata-only" | "private";

type PaperCorpusFields = {
  slug?: string;
  paperStatus?: PaperLifecycleStatus;
  visibility?: PaperVisibility;
  pdfPath?: string;
  metadataPath?: string;
  scholarPage?: boolean;
  displayStatus?: string;
  fullAbstract?: string;
  citationAuthors?: string[];
  citationPublicationDate?: string;
  citationJournalTitle?: string;
  citationVolume?: string;
  citationIssue?: string;
  citationFirstPage?: string;
  citationLastPage?: string;
};

export type Publication = PaperCorpusFields & {
  title: string;
  authors?: string;
  venue: string;
  year: number;
  href?: string;
  doi?: string;
  section: PublicationSection;
  category: PublicationCategory;
  featured?: boolean;
  abstract?: string;
};

export type WorkingPaper = PaperCorpusFields & {
  title: string;
  authors?: string;
  status?: string;
  category: PublicationCategory;
  href?: string;
  note?: string;
};

export type PaperItem = Publication | WorkingPaper;

export const paperCorpusBasePath = "/papers";

export function getPaperSlug(item: PaperItem) {
  if (item.slug) return item.slug;

  return item.title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getPaperMetadataPath(item: PaperItem) {
  return item.metadataPath ?? `${paperCorpusBasePath}/${getPaperSlug(item)}/metadata.json`;
}

export function getPaperPagePath(item: PaperItem) {
  return item.scholarPage ? `/publications/${getPaperSlug(item)}/` : undefined;
}

export function getPaperPdfPath(item: PaperItem) {
  return item.pdfPath ?? publicPaperPdfs[getPaperSlug(item)];
}

export function getWorkingPaperStatus(status?: string): PaperLifecycleStatus {
  const normalized = status?.toLowerCase() ?? "";

  if (normalized.includes("work in progress")) return "work-in-progress";
  if (
    normalized.includes("under review") ||
    normalized.includes("revise") ||
    normalized.includes("conditional acceptance")
  ) {
    return "under-review";
  }

  return "working-paper";
}

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
      "Legislative complexity is treated here as a latent trait measured through pairwise comparisons of bill text. Bradley-Terry models built from human judgments are compared to parallel models built from LLM judgments, showing that carefully guided prompts reproduce the main structure of human coding fairly well, while unguided comparisons perform much worse. The larger implication is that LLMs can help scale complexity measurement, but only when researchers provide strong anchors and clear comparison rules.",
    scholarPage: true,
    fullAbstract:
      "The complexity of legislative language is of theoretical importance to many substantive questions about legislative politics. However, most existing measures of bill complexity are either generated at the broad issue level and applied to individual bills, or they are reliant on a simple metric like length. In this paper, we apply a pairwise comparison framework to the measurement of complexity in legislative texts. We compare the results of a Bradley-Terry model fit on pairwise comparisons made by human coders with the results of the same model fit on comparisons made by large language models (LLMs). There is a moderately high level of agreement between human coders and the LLMs, and the relationships between observable text features and the underlying trait of complexity are similar in comparisons made by human coders and by the LLMs. Our work demonstrates that, with researcher-selected bridging texts and carefully designed prompts, LLMs can be used to measure complexity in legislative texts.",
    citationAuthors: ["Bussing, Austin", "Howard, Nicholas O.", "Lerner, Joshua Y."],
    citationPublicationDate: "2025",
    citationJournalTitle: "Journal of Political Institutions and Political Economy",
    citationVolume: "6",
    citationFirstPage: "407",
    citationLastPage: "426"
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
      "An active-learning text classifier makes it possible to identify delegating language across a much larger set of congressional bills than prior hand-coded studies could cover. The resulting measure tracks existing delegation benchmarks well and shows that delegation varies with sponsor ideology, party, and institutional position, changes over the legislative process, and reflects differences in the ideology and independence of the agencies receiving authority."
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
      "Built around a large online deliberation experiment with AI-assisted moderation and a follow-up during the 2022 midterms, this paper asks whether deliberation can be scaled without losing its civic effects. Participants became more attentive to campaigns, more politically knowledgeable, and more likely to connect their eventual vote choices to considered policy views. The argument is that organized automated discussion can create more deliberative voters, even outside the face-to-face mini-public format."
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
      "A new subnational measure of state capacity is used to explain why some states handled the pandemic better than others. Higher-capacity states had fewer excess deaths in 2020 and distributed vaccines more effectively in early 2021, even after accounting for partisanship, demographics, geography, and social capital. Anti-COVID policies also worked best where states had enough administrative capacity to actually enforce them."
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
      "Drawing on the America in One Room field experiment, this paper asks whether a weekend of structured deliberation can still shape political behavior about a year later. The results show durable effects on turnout intentions, candidate choice, and several components of political engagement, especially among participants whose initial views were not tightly aligned with partisan cues. The mechanism appears to be less about freezing issue opinions in place than about producing a broader civic awakening that carried into the 2020 election."
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
      "The question in this paper is whether big-data classifiers can improve sample targeting for hard-to-reach and low-incidence survey populations. Using 15 classifiers trained on a large probability-based panel and tested across three survey datasets, the analysis shows that the models generally outperform geographic clustering and often improve on vendor flags, usually by trading some coverage for noticeably higher incidence. Those gains vary across targets, making classifier-based sampling most useful when researchers care about efficiently finding specific subpopulations."
  },
  {
    title: "Association of Past and Future Paid Medical Malpractice Claims",
    authors: "with Bernard Black, David Hyman, and David Magid",
    venue: "JAMA Health Forum",
    year: 2023,
    href: "https://doi.org/10.1001/jamahealthforum.2022.5436",
    doi: "10.1001/jamahealthforum.2022.5436",
    section: "peerReviewed",
    category: "evaluation",
    abstract:
      "Using national data on all licensed U.S. physicians, this study asks whether prior paid malpractice claims predict future paid claims and whether that relationship fades with time or public disclosure. Even a single prior paid claim is associated with a much higher risk of future claims, the risk rises steadily with additional prior claims, and disclosure rules do not explain the relationship. The takeaway is that paid malpractice claims are not well described as random bad luck and that early noncoercive intervention could reduce future harm."
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
      "The paper asks whether congressional procedure changes measured polarization by changing which votes make it into the roll-call record. Matched comparisons between House bills that bypass committee and similar bills that move through regular order show that bypassed bills tend to pass by narrower margins but are less likely to produce clean party-unity votes. Committee bypass therefore appears to dampen, rather than inflate, standard polarization estimates."
  },
  {
    title: "Environmentalism among Poor and Rich Countries: Using Natural Language Processing to Handle Perfunctory Support and Rising Powers",
    authors: "with Tana Johnson",
    venue: "Review of International Political Economy",
    year: 2023,
    href: "https://doi.org/10.1080/09692290.2021.1974523",
    doi: "10.1080/09692290.2021.1974523",
    section: "peerReviewed",
    category: "institutions",
    abstract:
      "Using NLP on thousands of country statements in the WTO Committee on Trade and Environment, this article asks whether environmental protection is primarily a rich-country priority in international politics. Richer countries discuss environmental issues more consistently, while the analysis also clarifies the position of rising middle-income powers."
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
      "Martin-Quinn-style judicial ideal points are revisited here by focusing on the item parameters that most applications ignore. A meaningful set of Supreme Court cases have discrimination parameters inconsistent with the assumptions of a unidimensional IRT model, and trimming or re-estimating around those cases yields more moderate justice scores and even changes the identity of the Court median in several terms. The broader point is that judicial ideal-point estimates are more fragile than users often assume, especially when they are treated as precise cardinal measures."
  },
  {
    title: "Using Machine Learning and Disambiguated Author Identifiers to Improve Record Linkage for Funding Program Evaluation",
    authors: "with Brandon Sepulvado and Jennifer Hamilton",
    venue: "ASIS&T SIG-MET Annuals of Metrics",
    year: 2021,
    href: "https://www.asist.org/sig/sigmet/events/",
    section: "other",
    category: "survey",
    displayStatus: "Conference paper",
    abstract:
      "This conference paper examines how machine learning and disambiguated author identifiers can improve record linkage in large-scale funding program evaluation. The goal is to reduce linkage error in publication and administrative data so that evaluation pipelines can recover research outputs and downstream impact more accurately."
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
      "Observed physician claim histories are compared here to a simulation-based null model in which malpractice claims are random events conditional on specialty and state risk. Prior paid claims strongly predict future paid claims, and even in high-risk specialties and states, physicians with three or more paid claims in five years are very unlikely to be explained by bad luck alone. The framework is meant as a way for hospitals and medical boards to identify outlier physicians for graduated intervention."
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
      "Using data on congressional floor-speech citations and committee testimony, this article studies how think tanks influence Congress even though they are formally barred from lobbying. Ideological positioning shapes different forms of access: more extreme think tanks are cited more often in speeches, while more moderate think tanks are called to testify more often in committees. The broader claim is that think tanks strategically position themselves to supply expertise that legislators find politically useful."
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
      "Party leaders face a significant trade-off financing races when the party is out of power: while they care about gaining control of the House, they do not know how willing a potential representative will be to work with and for the party once elected. Leadership political action committee (LPAC) contributions are a major mechanism of leadership control over the financing of congressional campaigns, with the hope of influencing the future behavior of candidates. We study differences between contributions of the LPACs for leaders of both parties conditional on majority status. We find that both majority and minority party leaders prioritize winning elections and ideological homogeneity in their donations, but that these trends are largely contingent on overall electoral conditions. In their contributions, majority party leaders pay more attention to ideological cohesion than minority party leaders, while minority party leaders are more interested in gaining seats in the House than majority party leaders."
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

export const workingPapers: WorkingPaper[] = [
  {
    title: "Setting the Committee Agenda: Measuring Speaker Influence in Congressional Hearings",
    authors: "with Robert Shaffer",
    status: "Conditional acceptance at Political Science Research and Methods",
    category: "institutions"
  },
  {
    title: "Using Deep and Active Learning Classifiers to Identify Congressional Delegation to Administrative Agencies",
    authors: "with Gregory Spell",
    status: "Working paper",
    category: "institutions",
    note: "Center for the Study of the Administrative State Working Paper series, George Mason Law"
  },
  {
    title: "The Trouble with Coarsened Exact Matching",
    authors: "with Bernard Black and Parth Lalkiya",
    status: "Under review",
    category: "evaluation",
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3694749"
  },
  {
    title: "From Hearings to Legislation: Idea Transmission and the Writing of Laws in Congress",
    status: "Revise and resubmit from Congress and the Presidency",
    category: "institutions"
  },
  {
    title: "Spillover Presidential Ads and Campaign Contributions in a Polarized System",
    authors: "with Bernard Black",
    status: "Under review",
    category: "evaluation"
  },
  {
    title: "Measuring State Capacity in the U.S. States",
    authors: "with Kiran Auerbach and Hannah Ridge",
    status: "Under review",
    category: "evaluation"
  },
  {
    title: "Electoral Competition and State Capacity in the U.S. States",
    authors: "with Kiran Auerbach and Hannah Ridge",
    status: "Under review",
    category: "evaluation"
  },
  {
    title: "Measuring the Undercounted: Ideology and Partisanship in Probability-Based Panel Recruitment Nonresponse Follow-up",
    authors: "with Ipek Bilgen, David Dutwin, and J. Michael Dennis",
    status: "Working paper",
    category: "survey"
  },
  {
    title: "Navigating New Methods for Dealing with Common Threats to Validity in Difference-in-Differences Designs with Health Care Data",
    authors: "with Kiegan Rice, Liyang Xie, and Quentin Brummet",
    status: "Working paper",
    category: "evaluation"
  },
  {
    title: "Different Stages, Different Constituencies, Different Scores? Estimating Ideology Throughout the Campaign Cycle",
    authors: "with Austin Bussing and Nicholas Howard",
    status: "Working paper",
    category: "institutions"
  },
  {
    title: "Do Actions Speak Louder than Words? Party Rewards for Loyal Speech and Voting Behavior in the U.S. House of Representatives",
    authors: "with Andrew Ballard and Shahryar Minhas",
    status: "Working paper",
    category: "institutions"
  },
  {
    title: "Measuring Institutional Influences on Behavior: Approaches to Overcoming Selection Bias in Multi-nation Surveys",
    authors: "with John Aldrich, Victoria Dounoucos, Haohan Chen, and Gregory Schober",
    status: "Working paper",
    category: "survey"
  },
  {
    title: "Parties and Agenda Setting: A Final Passage Approach to Ideal Point Estimation",
    status: "Working paper",
    category: "institutions",
    scholarPage: true,
    fullAbstract:
      "Canonical approaches to the study of ideal points in Congress are all built off of a theoretical Congress that treats casting a vote on any given roll call as an individualized independent action. Ignoring the structure of votes leads to the creation of measures that obstruct how parties structure votes in such a way to ensure the legislative outcomes they desire: positive and negative agenda control. Building off of a growing literature on the problems with existing measures of legislative preferences, I propose a more straightforward approach to ideal point estimation that privileges final passage votes over others and therefore takes seriously the use of agenda control by the majority party to shape outcomes. In doing so, I find the effects of party on individual roll calls conditional on the majority status of the MC, as well as significant discrepancies in how these votes impact our existing measurements of ideal points. I further introduce a series of tests from the psychometrics literature on the viability of latent traits to identify which of these measures are most consistent and generalizable. I find that partisan centric ideal points are more accordant with these tests than existing measures. With these final-passage generated ideal points, I find more evidence of MC success and failures consistent with theories of both positive and negative agenda control.",
    citationAuthors: ["Lerner, Joshua Y."],
    citationPublicationDate: "2023/05/10",
    note: "Prepared for presentation at the 2020 Annual Meeting of the American Political Science Association"
  },
  {
    title: "Dividing the Question: Concurrences on the Supreme Court and Ideal Point Estimation",
    authors: "with Mathew D. McCubbins and Kristen Renberg",
    status: "Working paper",
    category: "institutions"
  },
  {
    title: "A Bayesian Parametric Approach to Measuring Legislative Productivity",
    authors: "with Austin Bussing",
    status: "Work in progress",
    category: "institutions"
  },
  {
    title: "Matching Methods: A Comparison of Various Matching and Reweighting Strategies for Pure Observational Studies",
    authors: "with Bernard Black and Parth Lalkiya",
    status: "Work in progress",
    category: "evaluation"
  },
  {
    title: "Inducing Polarization: Procedural Bias in Ideal Point Estimation",
    authors: "with Austin Bussing",
    status: "Work in progress",
    category: "institutions"
  },
  {
    title: "Assessing Bayesian Instrumental Variables Approaches",
    authors: "with Bernard Black",
    status: "Work in progress",
    category: "evaluation"
  },
  {
    title: "Using Ideas as My Maps: Tracing the Flow of Ideas Through the Legislative Process",
    status: "Work in progress",
    category: "institutions"
  },
  {
    title: "Congressional Responsiveness to Public Opinion",
    authors: "with Andrew Ballard",
    status: "Working paper",
    category: "institutions"
  },
  {
    title: "Evaluating the Human-Likeness of LLM-Generated Open-Ended Responses",
    authors: "with Brandon Sepulvado, Lilian Huang, and Soubhik Barari",
    status: "NLPOR 2025 non-archival workshop paper",
    category: "survey",
    href: "https://openreview.net/forum?id=JPHiXxrLYn"
  }
];

export const publicationCategories = [
  ["survey", "Survey Research, NLP, and Generative AI"],
  ["evaluation", "Causal Inference and Program Evaluation"],
  ["institutions", "Political Institutions and Legislative Text"],
  ["deliberation", "Public Opinion and Deliberation"]
] as const;

export const paperItems: PaperItem[] = [...publications, ...workingPapers];
