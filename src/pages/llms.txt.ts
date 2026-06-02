import {
  getPaperMetadataPath,
  getPaperPdfPath,
  getPaperSlug,
  getWorkingPaperStatus,
  paperCorpusBasePath,
  paperItems,
  type PaperItem
} from "../data/publications";
import { site } from "../data/site";

const absoluteUrl = (path: string) => new URL(path, site.url).toString();

const getPaperStatus = (item: PaperItem) => {
  if ("section" in item) return "published";
  return item.paperStatus ?? getWorkingPaperStatus(item.status);
};

const getPaperCategory = (item: PaperItem) => item.category;

const getPaperVisibility = (item: PaperItem) =>
  item.visibility ?? (getPaperPdfPath(item) ? "public-pdf" : "metadata-only");

const getPaperDescriptor = (item: PaperItem) => {
  if ("venue" in item) return item.venue;
  return item.status ?? "Working paper";
};

const getPaperCanonicalSource = (item: PaperItem) => {
  if (item.href) return item.href;
  if ("doi" in item && item.doi) return `https://doi.org/${item.doi}`;
  return "not yet assigned";
};

const renderPaper = (item: PaperItem) => {
  const slug = getPaperSlug(item);
  const paperPagePath = `${paperCorpusBasePath}/${slug}/`;
  const pdfPath = getPaperPdfPath(item);
  const metadataPath = getPaperMetadataPath(item);
  const summaryPath = metadataPath.replace(/metadata\.json$/, "summary.md");

  return [
    `### ${item.title}`,
    `- Slug: ${slug}`,
    `- Landing page: ${absoluteUrl(paperPagePath)}`,
    `- Status: ${getPaperStatus(item)}`,
    `- Category: ${getPaperCategory(item)}`,
    `- Visibility: ${getPaperVisibility(item)}`,
    `- Citation metadata: ${absoluteUrl(metadataPath)}`,
    `- Summary: ${absoluteUrl(summaryPath)}`,
    `- Public PDF: ${pdfPath ? absoluteUrl(pdfPath) : "not yet staged"}`,
    `- Canonical source: ${getPaperCanonicalSource(item)}`,
    `- Descriptor: ${getPaperDescriptor(item)}`
  ].join("\n");
};

export function GET() {
  const body = [
    "# Joshua Y. Lerner paper corpus",
    "",
    `Site: ${site.url}`,
    "Generated from: https://jyl19.github.io/publications/",
    "Canonical staging archive: Dropbox paper corpus folder maintained outside the public site",
    "",
    "This file points language-model readers to machine-readable metadata and public paper summaries.",
    "PDF links appear only after a paper PDF has been staged in approved-public and added to the website.",
    "Works in progress are metadata-only by default.",
    "",
    "## Papers",
    "",
    paperItems.map(renderPaper).join("\n\n")
  ].join("\n");

  return new Response(`${body}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
