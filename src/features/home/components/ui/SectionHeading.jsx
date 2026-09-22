export default function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <div className="flex max-w-prose flex-col items-start gap-3">
      <p className="text-sm font-medium text-brand">{eyebrow}</p>
      <h2
        id={id}
        className="text-2xl leading-snug font-semibold tracking-tight text-balance md:text-[1.75rem] rtl:leading-relaxed rtl:tracking-normal"
      >
        {title}
      </h2>
      {description ? (
        <p className="max-w-prose text-base leading-7 text-pretty text-muted-foreground rtl:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}