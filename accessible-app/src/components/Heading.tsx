import { type FC, type JSX, type ReactNode } from "react";

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
}

const HeadingClassNames = {
  1: "text-3xl font-bold mb-6",
  2: "text-2xl font-semibold mb-6",
  3: "text-xl font-semibold mb-3",
  4: "text-lg font-semibold mb-3",
  5: "text-base font-semibold mb-2",
  6: "text-sm font-semibold mb-1",
};

const Heading: FC<HeadingProps> = ({ level = 1, children, className = "" }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag
      className={`${HeadingClassNames[level]}${className ? ` ${className}` : ""}`}
    >
      {children}
    </Tag>
  );
};

export default Heading;
