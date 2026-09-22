import { Globe, LayoutDashboard, ShoppingBag } from "lucide-react";
import { useContent } from "../../i18n/LanguageContext";
import SectionHeading from "./ui/SectionHeading";
import Badge from "./ui/Badge";

const icons = [Globe, ShoppingBag, LayoutDashboard];

export default function Services() {
  const { t } = useContent();

  return (
    <section id="services" tabIndex={-1} className="bg-surface py-12 lg:py-16" aria-labelledby="services-title">
      <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          description={t.services.description}
          id="services-title"
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {t.services.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={item.title}
                className="flex flex-col gap-4 rounded-xl bg-card py-6 text-sm text-card-foreground ring-1 ring-foreground/10"
              >
                <div className="flex flex-col gap-4 px-6">
                  <Badge>
                    <Icon className="size-3.5" aria-hidden="true" />
                  </Badge>
                  <h3 className="font-heading text-lg leading-relaxed font-semibold text-balance rtl:leading-loose">
                    {item.title}
                  </h3>
                </div>
                <p className="max-w-prose px-6 text-base leading-7 text-pretty text-muted-foreground rtl:leading-8">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-6 max-w-prose text-sm leading-7 text-muted-foreground rtl:leading-8">{t.services.note}</p>
      </div>
    </section>
  );
}