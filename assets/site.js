(() => {
  const storageKey = "quote-hoarder-language";
  const supported = new Set(["zh-Hant", "en"]);
  const preferred = navigator.language.toLowerCase().startsWith("zh") ? "zh-Hant" : "en";
  const initial = supported.has(localStorage.getItem(storageKey))
    ? localStorage.getItem(storageKey)
    : preferred;

  function applyLanguage(language) {
    document.documentElement.lang = language;
    localStorage.setItem(storageKey, language);
    document.querySelectorAll("[data-language-toggle]").forEach((button) => {
      button.textContent = language === "zh-Hant" ? "EN" : "中文";
      button.setAttribute(
        "aria-label",
        language === "zh-Hant" ? "Switch to English" : "切換為繁體中文"
      );
    });
  }

  applyLanguage(initial);
  document.querySelectorAll("[data-language-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(document.documentElement.lang === "zh-Hant" ? "en" : "zh-Hant");
    });
  });
})();

