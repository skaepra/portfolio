import { FileText, Mail } from "lucide-react";
import { useContent } from "../../i18n/LanguageContext";
import { profile } from "../../../data/content";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";

export default function Contact() {
  const { t } = useContent();

  return (
    <section id="contact" tabIndex={-1} className="bg-surface py-12 lg:py-16" aria-labelledby="contact-title">
      <div className="mx-auto grid w-full max-w-[90rem] items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          description={t.contact.description}
          id="contact-title"
        />

        <div className="flex min-w-0 flex-col items-start gap-3">
          <div className="flex flex-wrap gap-3">
            <Button href={`mailto:${profile.email}`} size="lg">
              <Mail className="size-4" aria-hidden="true" />
              {t.contact.email}
            </Button>
            <Button href={profile.cv} variant="outline" size="lg" target="_blank" rel="noopener noreferrer">
              <FileText className="size-4" aria-hidden="true" />
              {t.contact.cv}
            </Button>
          </div>

          <a
            dir="ltr"
            href={`mailto:${profile.email}`}
            className="max-w-full overflow-wrap-anywhere text-sm font-medium text-brand underline-offset-4 hover:underline"
          >
            {profile.email}
          </a>

          <p className="max-w-prose text-sm leading-relaxed text-muted-foreground rtl:leading-loose">
            {t.contact.note}
          </p>

          <div className="flex flex-wrap gap-1">
            <Button href={profile.github} variant="ghost" target="_blank" rel="noopener noreferrer">
              GitHub
            </Button>
            <Button href={profile.linkedin} variant="ghost" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}