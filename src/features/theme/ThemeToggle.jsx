import { Moon, Sun } from "lucide-react";
import useDarkMode from "./useDarkMode";
import { useContent } from "../i18n/LanguageContext";

export default function ThemeToggle() {
  const { isDark, toggleMode } = useDarkMode();
  const { t } = useContent();

  return (
    <button
      type="button"
      onClick={toggleMode}
      aria-label={isDark ? t.theme.toLight : t.theme.toDark}
      title={t.theme.toggle}
      className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted"
    >
      {isDark ? <Sun className="size-4" aria-hidden="true" /> : <Moon className="size-4" aria-hidden="true" />}
    </button>
  );
}