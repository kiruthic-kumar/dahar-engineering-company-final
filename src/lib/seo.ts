export function setSEO(title: string, description: string) {
  if (typeof document === "undefined") return;
  try {
    document.title = title;

    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute('content', description);
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = description;
      document.head.appendChild(m);
    }

    const origin = window.location.origin;
    const currentUrl = `${origin}${window.location.pathname}${window.location.search}`;

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', currentUrl);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = currentUrl;
      document.head.appendChild(link);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', currentUrl);

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', `${origin}/opengraph.jpg`);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:image');
      meta.setAttribute('content', `${origin}/opengraph.jpg`);
      document.head.appendChild(meta);
    }

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', title);
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', description);
    const twUrl = document.querySelector('meta[name="twitter:url"]');
    if (twUrl) twUrl.setAttribute('content', currentUrl);
    const twImage = document.querySelector('meta[name="twitter:image"]');
    if (twImage) {
      twImage.setAttribute('content', `${origin}/opengraph.jpg`);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'twitter:image';
      meta.setAttribute('content', `${origin}/opengraph.jpg`);
      document.head.appendChild(meta);
    }
  } catch (e) {
    // silence failures in non-browser environments
    // eslint-disable-next-line no-console
    console.warn('setSEO failed', e);
  }
}

export function setBreadcrumbSchema(items: { label: string; href?: string }[]) {
  if (typeof document === "undefined") return;
  try {
    const scriptId = "breadcrumb-schema";
    const listItems = items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${window.location.origin}${item.href}` : window.location.href,
    }));

    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: listItems,
    };

    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = scriptId;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('setBreadcrumbSchema failed', e);
  }
}
