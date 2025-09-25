import React from "react";

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
  <section className={`mb-12${className ? ` ${className}` : ""}`} {...rest}>
    <h2 className="mb-6 text-2xl font-semibold">{title}</h2>
    <div className="flex flex-col gap-4">{children}</div>
  </section>
);

export default Section;
