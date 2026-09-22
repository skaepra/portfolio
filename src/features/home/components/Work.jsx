import { CodeXml } from "lucide-react";
import { useContent } from "../../i18n/LanguageContext";
import { profile } from "../../../data/content";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import ProjectCard from "./ProjectCard";

export default function Work() {
  const { t } = useContent();

  return (
    <section id="work" tabIndex={-1} className="py-12 lg:py-16" aria-labelledby="work-title">
      <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow={t.work.eyebrow}
          title={t.work.title}
          description={t.work.description}
          id="work-title"
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {t.work.projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Button href={profile.github} variant="ghost" target="_blank" rel="noopener noreferrer">
            <CodeXml className="size-4" aria-hidden="true" />
            {t.work.more}
          </Button>
        </div>
      </div>
    </section>
  );
}