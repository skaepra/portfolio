import { Contact, Globe, Layers, Languages } from "lucide-react";
import { useContent } from "../../i18n/LanguageContext";
import { profile, skills } from "../../../data/content";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import Badge from "./ui/Badge";

const capabilityIcons = [Globe, Layers, Languages];

export default function About() {
  const { t } = useContent();

  return (
    <section id="about" tabIndex={-1} className="py-12 lg:py-16" aria-labelledby="about-title">
      <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} description={t.about.description} id="about-title" />
            <Button
              href={profile.linkedin}
              variant="outline"
              className="mt-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Contact className="size-4" aria-hidden="true" />
              {t.about.linkedin}
            </Button>
          </div>

          <div className="flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-6 text-sm text-card-foreground ring-1 ring-foreground/10">
            {t.about.capabilities.map((item, index) => {
              const Icon = capabilityIcons[index];
              return (
                <div key={item.title} className="flex items-start gap-4 px-6">
                  <div className="grid size-10 shrink-0 place-items-center rounded-md border border-border bg-background">
                    <Icon className="size-4 text-brand" aria-hidden="true" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <h3 className="text-base leading-relaxed font-medium rtl:leading-loose">{item.title}</h3>
                    <p className="text-base leading-7 text-pretty text-muted-foreground rtl:leading-8">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <hr className="my-10 border-border" />

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-base font-semibold">{t.about.skillsTitle}</h3>
            <p className="max-w-prose text-base leading-7 text-pretty text-muted-foreground rtl:leading-8">
              {t.about.skillsDescription}
            </p>
          </div>
          <ul className="flex max-w-xl flex-wrap gap-2" aria-label={t.about.skillsTitle}>
            {skills.map((skill) => (
              <li key={skill}>
                <Badge>{skill}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}