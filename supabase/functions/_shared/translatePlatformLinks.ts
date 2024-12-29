export function translatePlatformLinks(
  platforms: Array<{ platform: string; link: string }>,
  lang: string
): string {
  const translations: Record<string, Record<string, string>> = {
    cs: {
      droid: "Pro Android",
      ios: "Pro iOS",
      web: "Pro Web",
      linkText: "Zde",
    },
    en: {
      droid: "For Android",
      ios: "For iOS",
      web: "For Web",
      linkText: "Here",
    },
  };

  const t = translations[lang] || translations["en"]; // Fallback to English if translation is unavailable

  return platforms
    .map(
      (platform) => `
        <p>${t[platform.platform.toLowerCase()] || platform.platform}:
          <a target="_blank" rel="noopener noreferrer" href="${platform.link}">
            ${t.linkText}
          </a>
        </p>
      `
    )
    .join("");
}
