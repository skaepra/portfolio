import { useContent } from "../../i18n/LanguageContext";
import SectionHeading from "./ui/SectionHeading";
import Badge from "./ui/Badge";

export default function Process() {
  const { t } = useContent();

  return (
    <section className="py-12 lg:py-16" aria-labelledby="process-title">
      <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow={t.process.eyebrow}
          title={t.process.title}
          description={t.process.description}
          id="process-title"
        />

        <div role="list" className="mt-8 grid gap-5 lg:grid-cols-3">
          {t.process.items.map((item, index) => (
            <div
              key={item.title}
              role="listitem"
              className="flex items-start gap-2.5 rounded-lg border border-border p-5"
            >
              <Badge>{String(index + 1).padStart(2, "0")}</Badge>
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <h3 className="text-base leading-relaxed font-medium rtl:leading-loose">{item.title}</h3>
                <p className="text-base leading-7 text-pretty text-muted-foreground rtl:leading-8">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}