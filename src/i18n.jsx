/* =========================================
   i18n — bilingual text system
   ========================================= */

import React, { createContext, useContext, useState, useEffect } from 'react';

const LangContext = createContext({ lang: "en", setLang: () => {} });

function LangProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try { return localStorage.getItem("zeta_lang") || "en"; } catch { return "en"; }
  });
  const setLang = (l) => {
    setLangState(l);
    try { localStorage.setItem("zeta_lang", l); } catch {}
    document.documentElement.setAttribute("lang", l === "zh" ? "zh" : "en");
  };
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh" : "en");
  }, [lang]);
  return React.createElement(LangContext.Provider, { value: { lang, setLang } }, children);
}

function useLang() { return useContext(LangContext); }

/* <T en="..." zh="..." /> — picks string by current language. */
function T({ en, zh }) {
  const { lang } = useLang();
  return lang === "zh" && zh != null ? zh : en;
}

/* t(en, zh) — function form */
function t(en, zh) {
  // hook can't be called outside component; use plain accessor for non-React contexts
  const lang = (typeof document !== "undefined" && document.documentElement.getAttribute("lang")) === "zh" ? "zh" : "en";
  return lang === "zh" && zh != null ? zh : en;
}

/* Language toggle pill — replaces the clock */
function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="lang-toggle" role="group" aria-label="language">
      <button
        className={"lang-opt" + (lang === "en" ? " is-active" : "")}
        onClick={() => setLang("en")}>EN</button>
      <span className="lang-sep">/</span>
      <button
        className={"lang-opt" + (lang === "zh" ? " is-active" : "")}
        onClick={() => setLang("zh")}>中</button>
    </div>
  );
}

export { LangProvider, LangContext, useLang, T, t, LangToggle };
