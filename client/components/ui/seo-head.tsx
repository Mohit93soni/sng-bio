import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

export function SEOHead({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  canonicalUrl,
  structuredData,
}: SEOProps) {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Set meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", keywords);
    }

    // Set viewport
    let metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      metaViewport = document.createElement("meta");
      metaViewport.setAttribute("name", "viewport");
      metaViewport.setAttribute(
        "content",
        "width=device-width, initial-scale=1",
      );
      document.head.appendChild(metaViewport);
    }

    // Set charset
    let metaCharset = document.querySelector("meta[charset]");
    if (!metaCharset) {
      metaCharset = document.createElement("meta");
      metaCharset.setAttribute("charset", "UTF-8");
      document.head.appendChild(metaCharset);
    }

    // Set Open Graph tags
    const setOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setOGTag("og:title", ogTitle || title);
    setOGTag("og:description", ogDescription || description);
    setOGTag("og:type", "website");
    setOGTag("og:site_name", "SND Regenics");

    if (ogImage) {
      setOGTag("og:image", ogImage);
    }

    if (canonicalUrl) {
      setOGTag("og:url", canonicalUrl);
    }

    // Set Twitter Card tags
    const setTwitterTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setTwitterTag("twitter:card", "summary_large_image");
    setTwitterTag("twitter:title", ogTitle || title);
    setTwitterTag("twitter:description", ogDescription || description);

    if (ogImage) {
      setTwitterTag("twitter:image", ogImage);
    }

    // Set canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", canonicalUrl);
    }

    // Set structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    canonicalUrl,
    structuredData,
  ]);

  return null;
}
