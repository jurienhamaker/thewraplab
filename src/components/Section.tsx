type SectionProps = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
};

export const Section: React.FunctionComponent<SectionProps> = ({
  children,
  className,
  id,
}) => (
  <section className={`w-full ${className}`} id={id}>
    {children}
  </section>
);
