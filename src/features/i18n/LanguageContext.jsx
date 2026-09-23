import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { content, Html } from "../../data/content";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem("lang");
      return saved === "ar" || saved === "en" ? saved : "ar";
    } catch {
      return "ar";
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";

  const currentContent = Html[lang];
  if (currentContent?.meta?.title) {
    document.title = currentContent.meta.title;
  }

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && currentContent?.meta?.description) {
    metaDescription.setAttribute("content", currentContent.meta.description);
  }
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* storage unavailable */
    }
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  }, []);

  const value = { lang, t: content[lang], toggleLang };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useContent() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useContent must be used within a LanguageProvider");
  return ctx;
}