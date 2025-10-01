import React from "react";
import Heading from "@/components/Heading";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  title,
  className = "",
  ...rest
}) => (
  <section className={`mb-6${className ? ` ${className}` : ""}`} {...rest}>
    <Heading level={2}>{title}</Heading>
    <div className="flex flex-col gap-4">{children}</div>
  </section>
);

export default Section;
