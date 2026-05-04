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
    description:
      "Python utilities for collecting, cleaning, and manipulating legislative text for research on Congress and political institutions.",
    language: "Python",
    kind: "Legislative text tools"
  },
  {
    title: "jyl19.github.io",
    href: "https://github.com/jyl19/jyl19.github.io",
    description: "Source code for this lightweight static Astro academic website.",
    language: "Astro / TypeScript",
    kind: "Website source"
  }
];

export const githubProfile = "https://github.com/jyl19";
