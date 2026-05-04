export type Talk = {
  title: string;
  venue: string;
  year: number;
  type: "Short course" | "Lecture" | "Conference presentation";
  coauthors?: string;
  href?: string;
  featured?: boolean;
};

export type ConferenceSeries = {
  name: string;
  years: string;
};

export type TeachingItem = {
  role: string;
  institution: string;
  course: string;
  years: string;
};

export const talks: Talk[] = [
  {
    title: "A Generative AI Approach for Integrating Synthetic Respondents with Probability-Based Human Panels for Social Science Applications",
    venue: "81st Annual AAPOR Conference",
    year: 2026,
    type: "Conference presentation",
    coauthors: "with Leah Christian, Brandon Sepulvado, Soubhik Barari, Lilian Huang, Nan Wang, and colleagues"
  },
  {
    title: "Integrating Behavioral and Text-Based Indicators to Detect Low-Quality and AI-Generated Survey Responses",
    venue: "81st Annual AAPOR Conference",
    year: 2026,
    type: "Conference presentation",
    coauthors: "with Ting Yan, Lilian Huang, and Brandon Sepulvado"
  },
  {
    title: "Prompt the Model Instead of Prompting the People? Exploring the Accuracy of LLM-Generated Survey Estimates",
    venue: "81st Annual AAPOR Conference",
    year: 2026,
    type: "Conference presentation",
    coauthors: "with Trent D. Buskirk and Alex Benson"
  },
  {
    title: "How to Use NLP and Generative AI in Survey Research",
    venue: "WAPOR Webinar Short Course",
    year: 2025,
    type: "Short course",
    coauthors: "with Soubhik Barari",
    featured: true
  },
  {
    title: "A Method for Decomposing Heterogeneous Treatment Effects: Insights from the Oregon Health Insurance Experiment",
    venue: "AcademyHealth Annual Research Meeting",
    year: 2025,
    type: "Conference presentation",
    coauthors: "with Soubhik Barari, N. A. Raventos, and Angelo Cozzubo",
    href: "https://www.norc.org/events/academyhealth-2025.html"
  },
  {
    title: "From Social Media to Survey Data: Employing AI-Usage Detectors to Identify AI-Generated Responses in the HIRISE+ Survey",
    venue: "80th Annual AAPOR Conference",
    year: 2025,
    type: "Conference presentation",
    coauthors: "with Brandon Sepulvado, Lilian Huang, and Erin Fordyce",
    href: "https://www.norc.org/content/dam/norc-org/pdf2025/Lerner--AAPOR%20presentation.pdf"
  },
  {
    title: "Generative AI in Survey Research Design: Principles and Use Cases",
    venue: "80th Annual AAPOR Conference",
    year: 2025,
    type: "Conference presentation",
    coauthors: "with Soubhik Barari, Ting Yan, and Leah M. Christian",
    href: "https://norc.org/content/dam/norc-org/pdf2025/Barari%20--%20AAPOR%20presentation.pdf"
  },
  {
    title: "Detecting AI-Generated Survey Responses: Tool Development and Bias Mitigation",
    venue: "80th Annual AAPOR Conference",
    year: 2025,
    type: "Conference presentation",
    coauthors: "with Lilian Huang and Brandon Sepulvado",
    href: "https://www.norc.org/content/dam/norc-org/pdf2025/AAPOR%20Detecting%20AI-Generated%20Survey%20Responses%20-%20Lilian%20Huang.pdf"
  },
  {
    title: "LLMs Don't Respond Like Humans: Exploring and Fine-Tuning Models",
    venue: "80th Annual AAPOR Conference",
    year: 2025,
    type: "Conference presentation",
    coauthors: "with Lilian Huang and Brandon Sepulvado",
    href: "https://www.norc.org/content/dam/norc-org/pdf2025/AAPOR%20LLMs%20Don%27t%20Respond%20Like%20Humans%20-%20Lilian%20Huang.pdf"
  },
  {
    title: "Survey Length Prediction Using Machine Learning",
    venue: "80th Annual AAPOR Conference",
    year: 2025,
    type: "Conference presentation",
    coauthors: "with Ipek Bilgen and Mehmet Celepkolu",
    href: "https://aapor.org/wp-content/uploads/2025/05/2025-AAPOR-Program-FINAL.pdf"
  },
  {
    title: "Survey or Survai: Applications of AI within the Survey Research Process",
    venue: "80th Annual AAPOR Conference",
    year: 2025,
    type: "Conference presentation",
    href: "https://www.norc.org/events/2025-aapor-conference.html"
  },
  {
    title: "How to Use NLP and Generative AI in Survey Research",
    venue: "AAPOR Mid-Year Short Course",
    year: 2024,
    type: "Short course",
    coauthors: "with Soubhik Barari",
    featured: true
  },
  {
    title: "Optimizing Open-Ended Questions for Natural Language Processing and Enhancing Survey Research Quality with LLMs",
    venue: "79th Annual AAPOR Conference",
    year: 2024,
    type: "Conference presentation",
    coauthors: "with Ipek Bilgen, Leah Christian, Lilian Huang, and Brandon Sepulvado",
    href: "https://www.norc.org/events/2024-aapor-conference.html"
  },
  {
    title: "Detecting and Mitigating Algorithmic Bias in Modeling Online COVID Vaccine Misinformation",
    venue: "79th Annual AAPOR Conference",
    year: 2024,
    type: "Conference presentation",
    coauthors: "with Caitlin C. Carter, Brandon Sepulvado, and colleagues"
  },
  {
    title: "What Can LLMs Not (yet!) Do for Research",
    venue:
      "SurvAI-Day 2024, University of Maryland Social Data Science Center and the Artificial Intelligence Interdisciplinary Institute",
    year: 2024,
    type: "Conference presentation",
    featured: true
  },
  {
    title: "Measuring the Undercounted: Ideology and Partisanship in Probability-Based Panel Recruitment Nonresponse Follow-up",
    venue: "78th Annual AAPOR Conference",
    year: 2023,
    type: "Conference presentation",
    coauthors: "with Ipek Bilgen and J. Michael Dennis",
    href: "https://www.norc.org/content/dam/norc-org/pdfs/AAPOR%20Program%202023.pdf"
  },
  {
    title: "Methodological Considerations in Assessing COVID-19 Mitigation Strategies during a Public Health Emergency",
    venue: "AcademyHealth Annual Research Meeting",
    year: 2023,
    type: "Conference presentation",
    coauthors: "with Kiegan Rice, Quentin Brummet, and Sai Loganathan",
    href: "https://www.norc.org/events/2023-academyhealth-annual-research-meeting.html"
  },
  {
    title: "Evaluating the Human-Likeness of LLM-Generated Open-Ended Responses",
    venue: "First Workshop on Bridging NLP and Public Opinion Research",
    year: 2025,
    type: "Conference presentation",
    coauthors: "with Brandon Sepulvado, Lilian Huang, and Soubhik Barari",
    href: "https://openreview.net/forum?id=JPHiXxrLYn"
  },
  {
    title: "Reimagining Automated Large-Scale Data Collection",
    venue: "Society for Research on Educational Effectiveness Annual Conference",
    year: 2021,
    type: "Conference presentation",
    coauthors: "with Brandon Sepulvado and Jennifer Hamilton"
  },
  {
    title: "Legislation and Natural Language Processing",
    venue: "Duke University School of Law",
    year: 2019,
    type: "Lecture",
    featured: true
  }
];

export const conferenceSeries: ConferenceSeries[] = [
  { name: "American Association for Public Opinion Research Annual Meeting", years: "2023-2026" },
  { name: "AcademyHealth Annual Research Meeting", years: "2023, 2025" },
  { name: "Midwest Political Science Association Annual Meeting", years: "2014-2017, 2019, 2021-2022, 2024" },
  { name: "Southern Political Science Association Annual Meeting", years: "2019, 2022, 2024" },
  { name: "American Political Science Association Annual Meeting", years: "2014-2024" },
  { name: "Society for Political Methodology Annual Summer Meeting", years: "2016-2019" },
  { name: "Empirical Implications of Theoretical Models Summer Meeting", years: "2016" },
  { name: "Conference on Empirical Legal Scholarship", years: "2016" },
  { name: "Conference on Empirical Legal Scholarship: Special Session on Replication", years: "2018-2019" },
  { name: "Northwestern-Duke Causal Inference Workshop", years: "2016-2019, 2022-2024" },
  { name: "Congress and History", years: "2021" }
];

export const teaching: TeachingItem[] = [
  {
    role: "Instructor",
    institution: "Duke University Department of Political Science",
    course: "POL 690 Machine Learning",
    years: "Spring 2020"
  },
  {
    role: "Instructor",
    institution: "Duke University Department of Political Science",
    course: "POL 690S-5-02 Measurement",
    years: "Spring 2020"
  },
  {
    role: "Instructor",
    institution: "Duke University Department of Political Science",
    course: "POL 337 Law and Politics",
    years: "Fall 2020"
  },
  {
    role: "Instructor",
    institution: "Northwestern-Duke Causal Inference Workshop",
    course: "Introduction to R and Using R for Causal Inference",
    years: "2016-2019"
  },
  {
    role: "Instructor",
    institution: "Northwestern-Duke Causal Inference Workshop",
    course: "Causal Inference and Machine Learning",
    years: "2018-2019"
  },
  {
    role: "Teaching Assistant",
    institution: "Duke University Department of Political Science",
    course: "POL 899 Research Design and Causal Inference",
    years: "2016-2017"
  },
  {
    role: "Teaching Assistant",
    institution: "Duke University Department of Political Science",
    course: "POL 201 Public Opinion",
    years: "2015"
  },
  {
    role: "Teaching Assistant",
    institution: "Duke University Department of Political Science",
    course: "POL 709S Seminar in Behavior and Identities",
    years: "2015"
  },
  {
    role: "Teaching Assistant",
    institution: "Duke University Department of Political Science",
    course: "POL 130 Introduction to Political Inquiry",
    years: "2014"
  }
];
