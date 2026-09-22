import { useState } from "react";
import { Languages, Menu, X } from "lucide-react";
import { useContent } from "../../i18n/LanguageContext";
import { profile } from "../../../data/content";
import ThemeToggle from "../../theme/ThemeToggle";
import Button from "./ui/Button";

const navLinks = [
  { key: "work", href: "#work" },
  { key: "services", href: "#services" },
  { key: "experience", href: "#experience" },
  { key: "about", href: "#about" },
];

export default function Header() {
  const { lang, t, toggleLang } = useContent();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex min-h-16 w-full max-w-[90rem] items-center justify-between gap-3 px-4 py-3 sm:min-h-20 sm:px-6 lg:px-10">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-3 rounded-lg"
          aria-label={profile.name[lang]}
        >
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary text-lg font-semibold text-primary-foreground">
            {profile.initial[lang]}
          </span>
          <span className="truncate text-base leading-6 font-medium rtl:leading-7">
            {profile.name[lang]}
          </span>
        </a>

        <nav aria-label={t.nav.primary} className="hidden flex-1 items-center justify-center lg:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center rounded-lg px-4 text-sm font-medium transition-colors hover:bg-muted"
                >
                  {t.nav[link.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t.nav.switchLanguageLabel}
            className="hidden h-10 items-center gap-1.5 rounded-lg border border-border bg-background px-3 text-sm font-medium transition-colors hover:bg-muted sm:inline-flex"
          >
            <Languages className="size-4" aria-hidden="true" />
            {t.nav.switchLanguage}
          </button>

          <ThemeToggle />

          <Button href="#contact" className="hidden lg:inline-flex">
            {t.nav.contact}
          </Button>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            className="inline-flex size-11 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:bg-muted lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background px-4 py-4 sm:px-6 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  onClick={close}
                  className="flex min-h-11 items-center rounded-lg px-4 text-sm font-medium transition-colors hover:bg-muted"
                >
                  {t.nav[link.key]}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={close}
                className="flex min-h-11 items-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
              >
                {t.nav.contact}
              </a>
            </li>
          </ul>
          <button
            type="button"
            onClick={() => {
              toggleLang();
              close();
            }}
            className="mt-3 flex h-10 w-full items-center justify-center gap-1.5 rounded-lg border border-border text-sm font-medium transition-colors hover:bg-muted sm:hidden"
          >
            <Languages className="size-4" aria-hidden="true" />
            {t.nav.switchLanguage}
          </button>
        </div>
      ) : null}
    </header>
  );
}