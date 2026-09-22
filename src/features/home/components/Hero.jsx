import { ArrowDown, CircleCheck, Languages, Mail, Smartphone } from "lucide-react";
import { useContent } from "../../i18n/LanguageContext";
import { profile } from "../../../data/content";
import Button from "./ui/Button";

const trustIcons = [Languages, Smartphone, CircleCheck];

export default function Hero() {
  const { lang, t } = useContent();

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="hero-bg pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid w-full max-w-[90rem] items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,.65fr)] lg:gap-16 lg:px-10 lg:py-16">
        <div className="flex min-w-0 flex-col items-start gap-5">
          <p className="hero-rise text-sm font-medium text-brand">{t.hero.eyebrow}</p>
          <p className="hero-rise hero-rise-1 text-base font-medium">{t.hero.hello}</p>
          <h1
            id="hero-title"
            className="hero-rise hero-rise-1 max-w-[24ch] text-3xl leading-snug font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.5rem] rtl:leading-relaxed rtl:tracking-normal"
          >
            {t.hero.title}
          </h1>
          <p className="hero-rise hero-rise-2 max-w-prose text-base leading-7 text-pretty text-muted-foreground rtl:leading-8">
            {t.hero.description}
          </p>
          <div className="hero-rise hero-rise-3 flex flex-wrap gap-3">
            <Button href="#work" size="lg">
              {t.hero.viewWork}
              <ArrowDown className="size-4" aria-hidden="true" />
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              {t.hero.contact}
              <Mail className="size-4" aria-hidden="true" />
            </Button>
          </div>
          <p className="hero-rise hero-rise-4 flex items-start gap-2 text-sm leading-relaxed text-muted-foreground rtl:leading-loose">
            <CircleCheck className="mt-1 size-4 shrink-0 text-brand" aria-hidden="true" />
            {t.hero.available}
          </p>
        </div>

        <figure className="hero-rise hero-rise-4 grid w-full max-w-sm grid-cols-[6rem_minmax(0,1fr)] items-center gap-3 lg:flex lg:max-w-xs lg:flex-col lg:items-stretch lg:justify-self-end">
          <div className="relative isolate overflow-hidden rounded-xl rounded-ss-3xl bg-secondary p-2 lg:rounded-ss-[4rem] lg:p-5">
            <svg viewBox="0 0 200 200" role="img" aria-label={t.hero.portraitAlt} className="relative h-auto w-full">
              <defs>
                <pattern id="portrait-dots" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.4" fill="var(--color-secondary-foreground)" opacity="0.25" />
                </pattern>
              </defs>
              <rect width="200" height="200" fill="url(#portrait-dots)" />
              <circle cx="100" cy="100" r="66" fill="none" stroke="var(--color-amber)" strokeWidth="2" opacity="0.7" />
              <text
                x="100"
                y="104"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="76"
                fontWeight="600"
                fill="var(--color-brand)"
                fontFamily="inherit"
              >
                {profile.initial[lang]}
              </text>
            </svg>
          </div>
          <figcaption className="flex min-w-0 flex-col gap-1">
            <span className="text-base leading-relaxed font-semibold rtl:leading-loose">
              {profile.name[lang]}
            </span>
            <span className="text-base leading-7 text-pretty text-muted-foreground rtl:leading-8">
              {t.hero.caption}
            </span>
          </figcaption>
        </figure>
      </div>

      <div className="relative mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-10">
        <hr className="border-border" />
        <ul className="grid gap-4 py-5 text-sm text-muted-foreground sm:grid-cols-3" aria-label={t.trust.label}>
          {t.trust.items.map((item, index) => {
            const Icon = trustIcons[index];
            return (
              <li key={item} className="flex items-center gap-2">
                <Icon className="size-4 shrink-0 text-brand" aria-hidden="true" />
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}