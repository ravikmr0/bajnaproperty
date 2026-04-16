type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
};

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-stone-300 md:text-base">{description}</p>
    </div>
  );
}

export default SectionHeading;
