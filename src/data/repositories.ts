export type Repository = {
  title: string;
  href: string;
  description: string;
  language: string;
  kind: string;
};

export const repositories: Repository[] = [
  {
    title: "Legislative_Data",
    href: "https://github.com/jyl19/Legislative_Data",
    description: "Tools for manipulating legislative texts.",
    language: "Python",
    kind: "Legislative text tools"
  },
  {
    title: "jyl19.github.io",
    href: "https://github.com/jyl19/jyl19.github.io",
    description: "Source code for this static academic website.",
    language: "Astro / TypeScript",
    kind: "Website source"
  }
];

export const githubProfile = "https://github.com/jyl19";
