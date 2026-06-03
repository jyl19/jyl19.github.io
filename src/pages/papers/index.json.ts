import {
  getPaperMetadataPath,
  getPaperPdfPath,
  getPaperSlug,
  getWorkingPaperStatus,
  paperItems,
  type PaperItem
} from "../../data/publications";
import { site } from "../../data/site";

const absoluteUrl = (path?: string) => (path ? new URL(path, site.url).toString() : null);

const getPaperStatus = (item: PaperItem) => {
  if (item.displayStatus) return item.displayStatus.toLowerCase();
  if ("section" in item) return item.paperStatus ?? "published";
  return item.paperStatus ?? getWorkingPaperStatus(item.status);
};

const getCanonicalUrl = (item: PaperItem) => {
  if (item.href) return item.href;
  if ("doi" in item && item.doi) return `https://doi.org/${item.doi}`;
  return null;
};

const renderPaper = (item: PaperItem) => {
  const slug = getPaperSlug(item);
  const metadataPath = getPaperMetadataPath(item);
  const summaryPath = metadataPath.replace(/metadata\.json$/, "summary.md");
  const pdfPath = getPaperPdfPath(item);

  return {
    slug,
    title: item.title,
    authors: item.authors ?? null,
    venue: "venue" in item ? item.venue : null,
    year: "year" in item ? item.year : null,
    category: item.category,
    section: "section" in item ? item.section : "workingPapers",
    status: getPaperStatus(item),
    display_status: item.displayStatus ?? null,
    visibility: item.visibility ?? (pdfPath ? "public-pdf" : "metadata-only"),
    doi: "doi" in item ? item.doi ?? null : null,
    canonical_url: getCanonicalUrl(item),
    summary: "abstract" in item ? item.abstract ?? null : item.note ?? null,
    metadata_url: absoluteUrl(metadataPath),
    summary_url: absoluteUrl(summaryPath),
    pdf_url: absoluteUrl(pdfPath)
  };
};

export function GET() {
  return new Response(
    JSON.stringify(
      {
        generated_from: "src/data/publications.ts",
        canonical_archive:
          "Dropbox staging archive; local path intentionally omitted from public metadata",
        papers: paperItems.map(renderPaper)
      },
      null,
      2
    ) + "\n",
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    }
  );
}
