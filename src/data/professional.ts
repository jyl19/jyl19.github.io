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
    title: "How to Use NLP and Generative AI in Survey Research",
    venue: "WAPOR Webinar Short Course",
    year: 2025,
    type: "Short course",
    coauthors: "with Soubhik Barari",
    featured: true
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
    title: "What Can LLMs Not (yet!) Do for Research",
    venue:
      "SurvAI-Day 2024, University of Maryland Social Data Science Center and the Artificial Intelligence Interdisciplinary Institute",
    year: 2024,
    type: "Conference presentation",
    featured: true
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
  { name: "American Association for Public Opinion Research Annual Meeting", years: "2023-2024" },
  { name: "AcademyHealth Annual Research Meeting", years: "2023" },
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
