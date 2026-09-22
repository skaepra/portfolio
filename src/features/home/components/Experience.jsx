import { Briefcase } from "lucide-react";
import { useContent } from "../../i18n/LanguageContext";
import SectionHeading from "./ui/SectionHeading";

export default function Experience() {
  const { t } = useContent();

  return (
    <section id="experience" tabIndex={-1} className="bg-surface py-12 lg:py-16" aria-labelledby="experience-title">
      <div className="mx-auto grid w-full max-w-[90rem] gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:gap-16 lg:px-10">
        <SectionHeading
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          description={t.experience.description}
          id="experience-title"
        />

        <div role="list" className="flex w-full flex-col gap-6">
          {t.experience.items.map((item) => (
            <article key={item.role} role="listitem" className="flex items-start gap-4">
              <div className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-md border border-border bg-card">
                <Briefcase className="size-5 text-brand" aria-hidden="true" />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <p className="text-sm text-muted-foreground">{item.period}</p>
                <h3 className="text-base leading-relaxed font-medium rtl:leading-loose">{item.role}</h3>
                <p className="text-sm text-brand">{item.org}</p>
                <p className="text-base leading-7 text-pretty text-muted-foreground rtl:leading-8">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}