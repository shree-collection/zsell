
import { siteConfig } from "@/config/site";

const siteUrl = siteConfig.website.replace(/\/$/, "");

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteConfig.name,
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        email: siteConfig.email,
        sameAs: siteConfig.socialLinks
          .filter((social) => social.active && social.url.trim() !== "")
          .map((social) => social.url),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: siteConfig.name,
        url: siteUrl,
        description:
          "E-commerce setup guidance, business growth resources, and AI tools for Indian sellers.",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
