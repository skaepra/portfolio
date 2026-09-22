import { ExternalLink } from "lucide-react";
import { useContent } from "../../i18n/LanguageContext";
import { profile } from "../../../data/content";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import ProjectPreview from "./ProjectPreview";

export default function ProjectCard({ project, index }) {
  const { t } = useContent();
  const hasLive = Boolean(project.live);

  return (
    <article aria-labelledby={`project-${index}`} className="min-w-0">
      <div className="group/card flex h-full flex-col overflow-hidden rounded-xl bg-card text-sm text-card-foreground ring-1 ring-foreground/10">
        <div className="relative aspect-video overflow-hidden bg-muted">
          <ProjectPreview variant={project.preview} alt={t.work.preview.replace("{name}", project.name)} />
        </div>

        <div className="flex flex-col gap-3 px-6 pt-5">
          <Badge>{project.category}</Badge>
          <h3
            id={`project-${index}`}
            className="font-heading text-lg leading-relaxed font-semibold text-balance rtl:leading-loose"
          >
            {project.name}
          </h3>
          <p className="text-base leading-7 text-pretty text-muted-foreground rtl:leading-8">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 px-6 pt-4">
          <span className="sr-only">{t.work.builtWith}</span>
          {project.tech.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>

        <div
          className={`mt-auto flex flex-wrap items-center gap-2 border-t border-border bg-muted/50 px-6 py-4 ${
            hasLive ? "justify-between" : "justify-end"
          }`}
        >
          {hasLive ? (
            <Button href={project.live} variant="outline" size="sm" target="_blank" rel="noopener noreferrer">
              {t.work.live}
              <ExternalLink className="size-4" aria-hidden="true" />
              <span className="sr-only"> — {project.name}</span>
            </Button>
          ) : null}
          <Button
            href={profile.github}
            variant="ghost"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.work.source}
            <span className="sr-only"> — {project.name}</span>
          </Button>
        </div>
      </div>
    </article>
  );
}