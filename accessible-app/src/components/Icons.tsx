import type { FC } from "react";
import BitcoinIcon from "@/components/BitcoinIcon";

const IconsDemo: FC = () => (
  <div className="grid grid-cols-2 gap-4">
    <section
      aria-labelledby="bitcoin-paragraph"
      className="mb-4 flex flex-wrap items-center justify-center gap-6 rounded-2xl bg-blue-950 p-12 text-center text-xl"
    >
      <span id="bitcoin-paragraph">
        Here is the Bitcoin icon inside a paragraph:
      </span>
      <span
        className="inline-block rounded-full border-white bg-white align-middle text-[#F7931A]"
        role="img"
        aria-label="Bitcoin logo"
      >
        <BitcoinIcon size={50} aria-hidden="false" focusable="false" />
      </span>
    </section>
    <section
      aria-labelledby="bitcoin-link"
      className="mb-4 flex flex-wrap items-center justify-center gap-6 rounded-2xl bg-blue-950 p-12 text-center text-xl"
    >
      <span id="bitcoin-link">Here is the Bitcoin icon inside a link:</span>
      <a
        className="inline-block rounded-full border-white bg-white align-middle text-[#F7931A] transition-colors hover:text-orange-500"
        href="https://bitcoin.org"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Bitcoin.org (opens in a new tab)"
        title="Visit Bitcoin.org (opens in a new tab)"
      >
        <BitcoinIcon size={50} aria-hidden="false" focusable="false" />
      </a>
    </section>
  </div>
);

export default IconsDemo;
