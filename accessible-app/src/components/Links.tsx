import type { FC } from "react";
import ExternalIcon from "./ExternalIcon";

export const Links: FC = () => (
  <div className="flex flex-col gap-4">
    <a
      className="text-blue-200 underline transition-colors hover:text-orange-400"
      href="https://www.w3.org/WAI/WCAG21/quickref/"
      target="_blank"
      rel="noopener noreferrer"
    >
      WCAG Quick Reference (opens in a new tab)
    </a>
    <a
      className="flex flex-wrap items-center gap-1 text-blue-200 underline transition-colors hover:text-orange-400"
      href="https://www.w3.org/WAI/WCAG21/quickref/"
      target="_blank"
      rel="noopener noreferrer"
      aria-labelledby="external-link"
    >
      WCAG Quick Reference{" "}
      <ExternalIcon
        width={16}
        height={16}
        aria-hidden="true"
        focusable="false"
      />
      <span id="external-link" className="sr-only">
        WCAG Quick Reference (opens in a new tab)
      </span>
    </a>
    <a
      href="https://www.w3.org/WAI/"
      className="text-blue-200 underline transition-colors hover:text-orange-400"
    >
      WAI Home
    </a>
    <p className="max-w-lg text-lg">
      This link is styled without an underline, so it needs other visual cues to
      indicate it's a link:{" "}
      <a
        href="https://www.w3.org/WAI/"
        className="text-orange-400 transition-colors hover:text-blue-400"
      >
        WAI Home (not underlined)
      </a>
    </p>
    <p className="max-w-lg text-lg">
      When a link has an instructions or additional information, include that in
      the link text itself, for example:{" "}
      <a
        className="text-blue-200 underline hover:text-orange-400"
        href="https://www.w3.org/WAI/test-evaluate/"
      >
        Learn how to test and evaluate web accessibility
      </a>
    </p>
    <a
      className="relative inline-block"
      href="https://www.w3.org/WAI/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Argo_Blockchain_Mirabel_Facility.jpg/1280px-Argo_Blockchain_Mirabel_Facility.jpg"
        alt="How Bitcoin works (opens in a new tab)"
        className="max-w-md rounded-lg shadow-lg"
      />
      <span className="absolute bottom-2 left-2 rounded bg-black/60 px-2 py-1 text-sm text-white">
        <ExternalIcon
          width={20}
          height={20}
          aria-hidden="true"
          focusable="false"
        />
      </span>
    </a>
    <a
      href="https://www.w3.org/WAI/"
      aria-label="WAI Home"
      className="text-4xl underline underline-offset-8 transition-colors hover:no-underline"
    >
      <span aria-hidden="true">🏠</span>
    </a>
  </div>
);

export default Links;
