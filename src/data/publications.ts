export type PublicationSection = "peerReviewed" | "other";
export type PublicationCategory = "survey" | "evaluation" | "institutions" | "deliberation";

export type Publication = {
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
      "Legislative complexity is treated here as a latent trait measured through pairwise comparisons of bill text. Bradley-Terry models built from human judgments are compared to parallel models built from LLM judgments, showing that carefully guided prompts reproduce the main structure of human coding fairly well, while unguided comparisons perform much worse. The larger implication is that LLMs can help scale complexity measurement, but only when researchers provide strong anchors and clear comparison rules."
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
    title: "How Random Are Paid Medical Malpractice Claims?",
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
    title: "Environmentalism among Poor and Rich Countries: A Natural-Language-Processing Approach to Conversational Dynamics",
    authors: "with Tana Johnson",
    venue: "Review of International Political Economy",
    year: 2021,
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
    venue: "Annals of Metrics",
    year: 2021,
    section: "peerReviewed",
    category: "survey",
    abstract:
      "This article examines how machine learning and disambiguated author identifiers can improve record linkage in large-scale funding program evaluation. The goal is to reduce linkage error in publication and administrative data so that evaluation pipelines can recover research outputs and downstream impact more accurately."
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
      "House party leaders use leadership PAC donations to balance electoral strategy against ideological cohesion. Leaders in both parties reward candidates who help with winning seats and maintaining party unity, but majority leaders place relatively more emphasis on ideological homogeneity while minority leaders focus more heavily on seat gains and competitive races. Majority status therefore changes the strategic logic of intraparty giving rather than eliminating the trade-off."
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
