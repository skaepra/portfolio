import { ArrowUp } from "lucide-react";
import { useContent } from "../../i18n/LanguageContext";
import { profile } from "../../../data/content";

export default function Footer() {
  const { lang, t } = useContent();

  return (
    <footer className="mx-auto flex w-full max-w-[90rem] flex-col items-start justify-between gap-3 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:px-6 lg:px-10">
      <p>
        © 2026 {profile.name[lang]}. {t.footer.rights}
      </p>
      <a
        href="#top"
        className="inline-flex h-10 items-center gap-1.5 rounded-lg px-3 text-sm font-medium transition-colors hover:bg-muted"
      >
        {t.footer.backToTop}
        <ArrowUp className="size-4" aria-hidden="true" />
      </a>
    </footer>
  );
}